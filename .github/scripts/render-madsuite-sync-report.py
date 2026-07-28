#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path

DEFAULT_REGISTRY = Path("00-SYSTEME-MAD/governance/madsuite-sync-registry.json")


def render(registry: dict) -> str:
    deliveries = registry.get("deliveries", [])
    counts = Counter(item.get("status", "unknown") for item in deliveries if isinstance(item, dict))
    lines = [
        "# État des synchronisations MADSuite",
        "",
        f"Livraisons inscrites : **{len(deliveries)}**",
        "",
        "| Statut | Nombre |",
        "|---|---:|",
    ]
    for status in ("planned", "in_progress", "blocked", "closed"):
        lines.append(f"| `{status}` | {counts.get(status, 0)} |")

    lines.extend(["", "## Livraisons", ""])
    for item in deliveries:
        delivery_id = item.get("id", "sans-identifiant")
        title = item.get("title", "Sans titre")
        status = item.get("status", "unknown")
        corrects = item.get("corrects")
        suffix = f" — corrige `{corrects}`" if corrects else ""
        lines.append(f"### `{delivery_id}` — {title}")
        lines.append("")
        lines.append(f"Statut : **{status}**{suffix}")
        lines.append("")
        lines.append("| Dépôt | Requis | Preuve |")
        lines.append("|---|---|---|")
        for key, repo in item.get("repositories", {}).items():
            if repo.get("required"):
                proof = f"PR #{repo.get('pullRequest')} · `{repo.get('commit', '')[:12]}`"
                required = "oui"
            else:
                proof = repo.get("reason", "Non documenté")
                required = "non"
            lines.append(f"| {key} | {required} | {proof} |")
        lines.append("")
    return "\n".join(lines).rstrip() + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description="Produit un rapport Markdown du registre MADSuite.")
    parser.add_argument("--registry", type=Path, default=DEFAULT_REGISTRY)
    parser.add_argument("--output", type=Path)
    args = parser.parse_args()
    registry = json.loads(args.registry.read_text(encoding="utf-8"))
    report = render(registry)
    if args.output:
        args.output.write_text(report, encoding="utf-8")
    else:
        print(report, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
