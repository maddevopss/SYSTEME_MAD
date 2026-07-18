#!/usr/bin/env python3
"""Audit progressif de cohérence documentaire pour SYSTEME_MAD."""

from __future__ import annotations

import os
import re
import subprocess
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


def changed_markdown_files(all_files: list[Path]) -> set[Path]:
    base = os.environ.get("BASE_SHA", "").strip()
    head = os.environ.get("HEAD_SHA", "").strip()
    if not base or not head or set(base) == {"0"}:
        return set(all_files)

    result = subprocess.run(
        ["git", "diff", "--name-only", "-z", f"{base}...{head}", "--", "*.md"],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return {
        (ROOT / raw).resolve()
        for raw in result.stdout.split("\0")
        if raw and (ROOT / raw).exists()
    }


def resolve_reference(source: Path, raw: str) -> Path:
    target = raw.strip().split("#", 1)[0]
    if target.startswith("SYSTEME_MAD/"):
        return (ROOT / target[len("SYSTEME_MAD/"):]).resolve()
    if "/" in target and not target.startswith(("./", "../")):
        return (ROOT / target).resolve()
    return (source.parent / target).resolve()


def is_index(path: Path) -> bool:
    return path.name in INDEX_NAMES or "index" in path.stem.lower()


def main() -> int:
    errors: list[str] = []
    warnings: list[str] = []
    titles: dict[str, list[Path]] = defaultdict(list)
    all_files = markdown_files()
    changed = changed_markdown_files(all_files)

    for path in all_files:
        content = path.read_text(encoding="utf-8", errors="replace")
        match = DOC_FIELD.search(content)
        if match:
            titles[match.group(1).strip().casefold()].append(path)

    for path in sorted(changed):
        if path.suffix.lower() != ".md" or not path.exists():
            continue
        content = path.read_text(encoding="utf-8", errors="replace")

        if is_index(path):
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

        match = DOC_FIELD.search(content)
        if match:
            title = match.group(1).strip().casefold()
            duplicates = titles.get(title, [])
            if len(duplicates) > 1:
                joined = ", ".join(str(item.relative_to(ROOT)) for item in duplicates)
                errors.append(f"titre documentaire dupliqué « {title} »: {joined}")

    indexed = set()
    for index in [path for path in all_files if is_index(path)]:
        for raw in PATH_REF.findall(index.read_text(encoding="utf-8", errors="replace")):
            indexed.add(resolve_reference(index, raw))

    for path in sorted(changed):
        if not path.exists() or path.suffix.lower() != ".md" or is_index(path):
            continue
        relative = path.relative_to(ROOT)
        if "archives" in {part.lower() for part in relative.parts} or "generated" in path.name:
            continue
        if path.resolve() not in indexed:
            warnings.append(f"document potentiellement orphelin: {relative}")

    if warnings:
        print("Avertissements de gouvernance:")
        for warning in warnings:
            print(f"- {warning}")

    if errors:
        print("Audit de gouvernance échoué:")
        for error in errors:
            print(f"- {error}")
        return 1

    print(
        f"Audit de gouvernance réussi: {len(changed)} document(s) modifié(s), "
        f"{len(warnings)} avertissement(s)."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
