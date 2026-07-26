#!/usr/bin/env python3
"""Exécute les audits de gouvernance CI disponibles et produit un rapport.

La suite découvre les audits contractuels connus. Les audits absents sont signalés
comme non disponibles afin que cette orchestration puisse être fusionnée avant ou
après les capacités qui les introduisent.
"""

from __future__ import annotations

import argparse
import json
import subprocess
import sys
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_REPORT_DIR = ROOT / "artifacts" / "ci-governance"
AUDITS = (
    "08-BOOTSTRAPS/audit-required-checks-contract.py",
    "08-BOOTSTRAPS/audit-workflow-policy.py",
    "08-BOOTSTRAPS/audit-automation-pr-contract.py",
)


@dataclass(frozen=True)
class AuditResult:
    path: str
    status: str
    returncode: int | None
    duration_seconds: float
    stdout: str
    stderr: str


def run_audit(relative_path: str, timeout_seconds: int) -> AuditResult:
    script = ROOT / relative_path
    if not script.is_file():
        return AuditResult(relative_path, "not_available", None, 0.0, "", "")

    started = time.monotonic()
    try:
        completed = subprocess.run(
            [sys.executable, str(script)],
            cwd=ROOT,
            text=True,
            capture_output=True,
            timeout=timeout_seconds,
            check=False,
        )
        status = "passed" if completed.returncode == 0 else "failed"
        return AuditResult(
            relative_path,
            status,
            completed.returncode,
            round(time.monotonic() - started, 3),
            completed.stdout.strip(),
            completed.stderr.strip(),
        )
    except subprocess.TimeoutExpired as exc:
        return AuditResult(
            relative_path,
            "timed_out",
            None,
            round(time.monotonic() - started, 3),
            (exc.stdout or "").strip() if isinstance(exc.stdout, str) else "",
            (exc.stderr or "").strip() if isinstance(exc.stderr, str) else "",
        )


def markdown_report(results: Iterable[AuditResult]) -> str:
    rows = list(results)
    passed = sum(item.status == "passed" for item in rows)
    failed = sum(item.status in {"failed", "timed_out"} for item in rows)
    unavailable = sum(item.status == "not_available" for item in rows)

    lines = [
        "# Rapport de la suite de gouvernance CI",
        "",
        f"- réussis : **{passed}**",
        f"- échoués ou expirés : **{failed}**",
        f"- non disponibles : **{unavailable}**",
        "",
        "| Audit | État | Code | Durée (s) |",
        "| --- | --- | ---: | ---: |",
    ]
    for item in rows:
        code = "—" if item.returncode is None else str(item.returncode)
        lines.append(f"| `{item.path}` | {item.status} | {code} | {item.duration_seconds:.3f} |")

    for item in rows:
        if not item.stdout and not item.stderr:
            continue
        lines.extend(["", f"## `{item.path}`", ""])
        if item.stdout:
            lines.extend(["### Sortie", "", "```text", item.stdout, "```"])
        if item.stderr:
            lines.extend(["", "### Erreur", "", "```text", item.stderr, "```"])

    return "\n".join(lines) + "\n"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--timeout", type=int, default=120, help="Délai maximal par audit en secondes")
    parser.add_argument("--report-dir", type=Path, default=DEFAULT_REPORT_DIR)
    parser.add_argument(
        "--require-all",
        action="store_true",
        help="Échouer aussi lorsqu’un audit contractuel n’est pas encore présent",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if args.timeout <= 0:
        raise SystemExit("--timeout doit être supérieur à zéro")

    results = [run_audit(path, args.timeout) for path in AUDITS]
    report_dir = args.report_dir if args.report_dir.is_absolute() else ROOT / args.report_dir
    report_dir.mkdir(parents=True, exist_ok=True)

    json_path = report_dir / "ci-governance-report.json"
    markdown_path = report_dir / "ci-governance-report.md"
    json_path.write_text(
        json.dumps([asdict(item) for item in results], ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    markdown_path.write_text(markdown_report(results), encoding="utf-8")

    for item in results:
        print(f"[{item.status}] {item.path} ({item.duration_seconds:.3f}s)")

    has_failure = any(item.status in {"failed", "timed_out"} for item in results)
    has_missing = any(item.status == "not_available" for item in results)
    return 1 if has_failure or (args.require_all and has_missing) else 0


if __name__ == "__main__":
    raise SystemExit(main())
