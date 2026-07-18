#!/usr/bin/env python3
"""Valide les ancres locales utilisées par les liens Markdown."""

from __future__ import annotations

import re
import sys
import unicodedata
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
HEADING = re.compile(r"^#{1,6}\s+(.+?)\s*$")
FENCE = re.compile(r"^\s*(`{3,}|~{3,})")
EXCLUDED = {".git", "node_modules", ".venv", "venv"}


def slugify(value: str) -> str:
    value = re.sub(r"<[^>]+>", "", value.strip().lower())
    value = unicodedata.normalize("NFKD", value)
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    value = re.sub(r"[^\w\- ]", "", value, flags=re.UNICODE)
    return re.sub(r"[\s]+", "-", value).strip("-")


def anchors(path: Path) -> set[str]:
    found: set[str] = set()
    counts: dict[str, int] = {}
    active: str | None = None
    for line in path.read_text(encoding="utf-8").splitlines():
        fence = FENCE.match(line)
        if fence:
            marker = fence.group(1)[0]
            active = marker if active is None else None if active == marker else active
            continue
        if active:
            continue
        match = HEADING.match(line)
        if not match:
            continue
        base = slugify(match.group(1))
        index = counts.get(base, 0)
        counts[base] = index + 1
        found.add(base if index == 0 else f"{base}-{index}")
    return found


def markdown_files() -> list[Path]:
    return sorted(path for path in ROOT.rglob("*.md") if not any(part in EXCLUDED for part in path.parts))


def main() -> int:
    cache: dict[Path, set[str]] = {}
    errors: list[str] = []
    checked = 0
    for source in markdown_files():
        active: str | None = None
        for line_number, line in enumerate(source.read_text(encoding="utf-8").splitlines(), 1):
            fence = FENCE.match(line)
            if fence:
                marker = fence.group(1)[0]
                active = marker if active is None else None if active == marker else active
                continue
            if active:
                continue
            for match in LINK.finditer(line):
                raw = match.group(1).strip().strip("<>")
                if raw.lower().startswith(("http://", "https://", "mailto:", "tel:", "data:")) or "#" not in raw:
                    continue
                target_text, fragment = raw.split("#", 1)
                fragment = slugify(unquote(fragment.split(" ", 1)[0]))
                if not fragment:
                    continue
                target = source if not target_text else (ROOT / target_text.lstrip("/") if target_text.startswith("/") else source.parent / target_text.split("?", 1)[0])
                target = target.resolve()
                if target.suffix.lower() != ".md" or not target.exists():
                    continue
                checked += 1
                available = cache.setdefault(target, anchors(target))
                if fragment not in available:
                    errors.append(f"{source.relative_to(ROOT)}:{line_number}: ancre introuvable #{fragment} dans {target.relative_to(ROOT)}")
    if errors:
        print("Audit des ancres Markdown échoué:")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"Audit des ancres Markdown réussi: {checked} ancre(s) vérifiée(s).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
