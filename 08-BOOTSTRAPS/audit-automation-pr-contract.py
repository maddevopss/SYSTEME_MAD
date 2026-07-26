#!/usr/bin/env python3
"""Vérifie les contrats des workflows qui créent des pull requests automatisées."""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CONTRACT = ROOT / "00-SYSTEME-MAD" / "governance" / "automation-pr-contract.json"


def main() -> int:
    contract = json.loads(CONTRACT.read_text(encoding="utf-8"))
    errors: list[str] = []

    branches: set[str] = set()
    outputs: set[str] = set()
    titles: set[str] = set()

    for automation in contract["automations"]:
        rel = automation["workflow"]
        path = ROOT / rel
        if not path.exists():
            errors.append(f"Workflow absent: {rel}")
            continue

        text = path.read_text(encoding="utf-8")
        branch = automation["branch"]
        output = automation["output"]
        title = automation["title"]

        if branch in branches:
            errors.append(f"Branche automatisée dupliquée: {branch}")
        if output in outputs:
            errors.append(f"Sortie générée dupliquée: {output}")
        if title in titles:
            errors.append(f"Titre automatisé dupliqué: {title}")
        branches.add(branch)
        outputs.add(output)
        titles.add(title)

        required_fragments = [
            branch,
            output,
            title,
            "gh pr list",
            "--state open",
            "gh pr create",
            "gh pr edit",
            "--body-file",
            "mktemp",
            "trap 'rm -f",
            "git push --force-with-lease",
            "cancel-in-progress: true",
            "timeout-minutes:",
            "contents: write",
            "pull-requests: write",
        ]
        for fragment in required_fragments:
            if fragment not in text:
                errors.append(f"{rel}: fragment contractuel absent: {fragment}")

        for section in contract["required_sections"]:
            if section not in text:
                errors.append(f"{rel}: section de PR absente: {section}")

        if text.count("gh pr create") != 1:
            errors.append(f"{rel}: exactement une commande gh pr create est attendue")
        if text.count("gh pr edit") != 1:
            errors.append(f"{rel}: exactement une commande gh pr edit est attendue")
        if "--head \"$branch\"" not in text:
            errors.append(f"{rel}: la création de PR doit cibler la branche contractuelle")
        if "--base main" not in text:
            errors.append(f"{rel}: la PR automatisée doit viser main")

    if errors:
        print("Automation PR contract audit failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Automation PR contract audit passed for {len(contract['automations'])} workflow(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
