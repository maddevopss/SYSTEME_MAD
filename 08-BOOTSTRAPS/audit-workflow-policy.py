#!/usr/bin/env python3
"""Audit statique de la politique GitHub Actions de SYSTEME_MAD."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKFLOWS = ROOT / ".github" / "workflows"
POLICY_PATH = ROOT / "00-SYSTEME-MAD" / "governance" / "workflow-policy.json"


def job_blocks(text: str) -> list[str]:
    lines = text.splitlines()
    start = next((i for i, line in enumerate(lines) if line == "jobs:"), None)
    if start is None:
        return []

    blocks: list[list[str]] = []
    current: list[str] = []
    for line in lines[start + 1 :]:
        if re.match(r"^  [A-Za-z0-9_-]+:\s*$", line):
            if current:
                blocks.append(current)
            current = [line]
        elif current:
            current.append(line)
    if current:
        blocks.append(current)
    return ["\n".join(block) for block in blocks]


def main() -> int:
    policy = json.loads(POLICY_PATH.read_text(encoding="utf-8"))
    errors: list[str] = []
    warnings: list[str] = []
    workflow_paths = sorted(WORKFLOWS.glob("*.yml")) + sorted(WORKFLOWS.glob("*.yaml"))

    if not workflow_paths:
        errors.append("Aucun workflow GitHub Actions trouvé.")

    allow_write = set(policy["write_permission_allowlist"])
    max_timeout = int(policy["maximum_timeout_minutes"])

    for path in workflow_paths:
        rel = path.relative_to(ROOT).as_posix()
        text = path.read_text(encoding="utf-8")

        for key in policy["required_global_keys"]:
            if key not in text:
                errors.append(f"{rel}: clé globale absente: {key}")

        if "cancel-in-progress: true" not in text:
            errors.append(f"{rel}: cancel-in-progress doit être true")

        blocks = job_blocks(text)
        if not blocks:
            errors.append(f"{rel}: aucun job détecté")
        for block in blocks:
            job_name = block.splitlines()[0].strip().rstrip(":")
            for key in policy["required_job_keys"]:
                if key not in block:
                    errors.append(f"{rel}: job {job_name}: clé absente: {key}")
            timeout_match = re.search(r"timeout-minutes:\s*(\d+)", block)
            if timeout_match and int(timeout_match.group(1)) > max_timeout:
                errors.append(
                    f"{rel}: job {job_name}: délai {timeout_match.group(1)} > {max_timeout} minutes"
                )

        has_write = bool(re.search(r"^\s{2,}[A-Za-z-]+:\s*write\s*$", text, re.MULTILINE))
        if has_write and rel not in allow_write:
            errors.append(f"{rel}: permission write non autorisée par la politique")
        if rel in allow_write and not has_write:
            warnings.append(f"{rel}: workflow autorisé à écrire mais aucune permission write détectée")

        for forbidden in policy["forbidden_permissions"]:
            if forbidden in text:
                errors.append(f"{rel}: permission interdite: {forbidden}")

        if "pull_request:" in text and "branches: [main]" not in text:
            warnings.append(f"{rel}: pull_request ne cible pas explicitement main")

    print(f"Workflows audités: {len(workflow_paths)}")
    for warning in warnings:
        print(f"WARNING: {warning}")
    if errors:
        print("Workflow policy audit failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Workflow policy audit passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
