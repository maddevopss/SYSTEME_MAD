#!/usr/bin/env python3
"""Validate local Markdown links in SYSTEME_MAD.

The audit is intentionally conservative:
- external URLs, mailto links and pure anchors are ignored;
- links inside fenced code blocks are ignored;
- relative file links are resolved from the source document;
- URL fragments are removed before filesystem validation;
- archived and generated files are still checked unless explicitly excluded.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
LINK_PATTERN = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")
FENCE_PATTERN = re.compile(r"^\s*(`{3,}|~{3,})")
EXCLUDED_PARTS = {".git", "node_modules", ".venv", "venv"}


def iter_markdown_files() -> list[Path]:
    return sorted(
        path
        for path in ROOT.rglob("*.md")
        if not any(part in EXCLUDED_PARTS for part in path.parts)
    )


def normalize_target(raw_target: str) -> str | None:
    target = raw_target.strip()
    if not target:
        return None

    if target.startswith("<") and target.endswith(">"):
        target = target[1:-1].strip()

    lowered = target.lower()
    if lowered.startswith(("http://", "https://", "mailto:", "tel:", "data:")):
        return None
    if target.startswith("#"):
        return None

    # Markdown permits an optional title after the URL.
    if " " in target and not target.startswith("./") and not target.startswith("../"):
        target = target.split(" ", 1)[0]

    target = unquote(target.split("#", 1)[0].split("?", 1)[0]).strip()
    return target or None


def validate_link(source: Path, target: str) -> str | None:
    if target.startswith("/"):
        resolved = ROOT / target.lstrip("/")
    else:
        resolved = source.parent / target

    resolved = resolved.resolve()
    try:
        resolved.relative_to(ROOT.resolve())
    except ValueError:
        return "target escapes repository root"

    if not resolved.exists():
        return "target does not exist"

    return None


def main() -> int:
    errors: list[str] = []
    checked_links = 0

    for source in iter_markdown_files():
        content = source.read_text(encoding="utf-8")
        active_fence: str | None = None

        for line_number, line in enumerate(content.splitlines(), start=1):
            fence_match = FENCE_PATTERN.match(line)
            if fence_match:
                fence = fence_match.group(1)
                marker = fence[0]
                if active_fence is None:
                    active_fence = marker
                elif active_fence == marker:
                    active_fence = None
                continue

            if active_fence is not None:
                continue

            for match in LINK_PATTERN.finditer(line):
                raw_target = match.group(1)
                target = normalize_target(raw_target)
                if target is None:
                    continue

                checked_links += 1
                error = validate_link(source, target)
                if error:
                    relative_source = source.relative_to(ROOT)
                    errors.append(
                        f"{relative_source}:{line_number}: {error}: {raw_target}"
                    )

    if errors:
        print("Markdown link audit failed:")
        for error in errors:
            print(f"- {error}")
        print(f"\nChecked {checked_links} local Markdown links; {len(errors)} error(s).")
        return 1

    print(f"Markdown link audit passed. Checked {checked_links} local Markdown links.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
