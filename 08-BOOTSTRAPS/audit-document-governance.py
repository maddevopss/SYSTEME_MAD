#!/usr/bin/env python3
"""Audit déterministe de cohérence documentaire pour SYSTEME_MAD."""

from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXCLUDED = {".git", "node_modules", ".venv", "venv"}
DOC_FIELD = re.compile(r"^Document:\s*(.+?)\s*$", re.MULTILINE)
PATH_REF = re.compile(r"`((?:SYSTEME_MAD/)?[^`\n]+\.md)`")
INDEX_NAMES = {"README.md", "MANIFEST.md", "index.md"}


def markdown_files() -> list[Path]:
    return sorted(
        path for path in ROOT.rglob("*.md")
        if not any(part in EXCLUDED for part in path.parts)
    )


def resolve_reference(source: Path, raw: str) -> Path:
    target = raw.strip().split("#", 1)[0]
    if target.startswith("SYSTEME_MAD/"):
        target = target[len("SYSTEME_MAD/"):]
        return (ROOT / target).resolve()
    if "/" in target and not target.startswith(("./", "../")):
        return (ROOT / target).resolve()
    return (source.parent / target).resolve()


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    titles: dict[str, list[Path]] = defaultdict(list)
    all_files = markdown_files()

    for path in all_files:
        content = path.read_text(encoding="utf-8")
        match = DOC_FIELD.search(content)
        if match:
            titles[match.group(1).strip().casefold()].append(path)

        if path.name not in INDEX_NAMES and "index" not in path.stem.lower():
            continue
        for line_number, line in enumerate(content.splitlines(), 1):
            for raw in PATH_REF.findall(line):
                target = resolve_reference(path, raw)
                try:
                    target.relative_to(ROOT.resolve())
                except ValueError:
                    errors.append(f"{path.relative_to(ROOT)}:{line_number}: référence hors dépôt: {raw}")
                    continue
                if not target.exists():
                    errors.append(f"{path.relative_to(ROOT)}:{line_number}: document indexé introuvable: {raw}")

    for title, paths in titles.items():
        if len(paths) > 1:
            joined = ", ".join(str(path.relative_to(ROOT)) for path in paths)
            errors.append(f"titre documentaire dupliqué « {title} »: {joined}")

    indexed_names = set()
    for index in [p for p in all_files if p.name in INDEX_NAMES or "index" in p.stem.lower()]:
        for raw in PATH_REF.findall(index.read_text(encoding="utf-8")):
            indexed_names.add(resolve_reference(index, raw))
    for path in all_files:
        relative = path.relative_to(ROOT)
        if path.name in INDEX_NAMES or "archives" in {part.lower() for part in relative.parts} or "generated" in path.name:
            continue
        if path.resolve() not in indexed_names:
            warnings.append(f"document potentiellement orphelin: {relative}")

    if warnings:
        print("Avertissements de gouvernance:")
        for warning in warnings[:100]:
            print(f"- {warning}")
        if len(warnings) > 100:
            print(f"- … {len(warnings) - 100} avertissement(s) supplémentaire(s)")

    if errors:
        print("Audit de gouvernance échoué:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(f"Audit de gouvernance réussi: {len(all_files)} document(s), {len(warnings)} avertissement(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
