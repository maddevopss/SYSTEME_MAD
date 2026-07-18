#!/usr/bin/env python3
"""Génère un tableau de bord de qualité documentaire pour SYSTEME_MAD."""

from __future__ import annotations

import re
from collections import Counter
from datetime import date, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "00-SYSTEME-MAD/governance/generated-documentation-dashboard.md"
EXCLUDED = {".git", "node_modules", ".venv", "venv"}
FIELDS = ["Projet", "Document", "Version", "Dernière révision", "Statut", "Auteur"]
FIELD_RE = {field: re.compile(rf"^{re.escape(field)}:\s*(.*?)\s*$", re.MULTILINE) for field in FIELDS}


def files() -> list[Path]:
    return sorted(path for path in ROOT.rglob("*.md") if not any(part in EXCLUDED for part in path.parts) and path != OUTPUT)


def metadata(content: str) -> dict[str, str]:
    if not content.startswith("---\n"):
        return {}
    parts = content.split("---", 2)
    if len(parts) < 3:
        return {}
    block = parts[1]
    return {field: match.group(1).strip() for field, pattern in FIELD_RE.items() if (match := pattern.search(block))}


def main() -> None:
    docs = files()
    records = []
    today = date.today()
    for path in docs:
        meta = metadata(path.read_text(encoding="utf-8"))
        age = None
        raw_date = meta.get("Dernière révision")
        if raw_date:
            try:
                age = (today - datetime.strptime(raw_date, "%Y-%m-%d").date()).days
            except ValueError:
                age = None
        records.append((path, meta, age))

    complete = sum(all(field in meta and meta[field] for field in FIELDS) for _, meta, _ in records)
    missing_owner = [path for path, meta, _ in records if not meta.get("Auteur")]
    stale = [path for path, _, age in records if age is not None and age > 365]
    undated = [path for path, meta, _ in records if "Dernière révision" not in meta]
    statuses = Counter(meta.get("Statut", "Sans statut") for _, meta, _ in records)
    coverage = round((complete / len(records)) * 100, 1) if records else 100.0

    status_rows = "\n".join(f"| {status} | {count} |" for status, count in sorted(statuses.items()))
    stale_rows = "\n".join(f"- `{path.relative_to(ROOT)}`" for path in stale[:50]) or "- Aucun document daté de plus de 365 jours."
    owner_rows = "\n".join(f"- `{path.relative_to(ROOT)}`" for path in missing_owner[:50]) or "- Aucun document sans auteur."

    content = f"""---
Projet: MAD DevOps
Document: Tableau de bord documentaire généré automatiquement
Version: 1.0
Dernière révision: {today.isoformat()}
Statut: Officiel
Auteur: GitHub Actions — SYSTEME_MAD
---

# Tableau de bord documentaire

> Généré automatiquement. Ne pas modifier manuellement.

## Vue d’ensemble

| Indicateur | Valeur |
| --- | ---: |
| Documents Markdown analysés | {len(records)} |
| Métadonnées complètes | {complete} |
| Couverture des métadonnées | {coverage}% |
| Documents sans auteur | {len(missing_owner)} |
| Documents sans date de révision | {len(undated)} |
| Documents datés de plus de 365 jours | {len(stale)} |

## Répartition des statuts

| Statut | Nombre |
| --- | ---: |
{status_rows}

## Documents sans auteur

{owner_rows}

## Documents à réviser

{stale_rows}

## Limites

- La date de révision est interprétée uniquement lorsqu’elle respecte le format `AAAA-MM-JJ`.
- L’ancienneté ne signifie pas automatiquement qu’un document est obsolète.
- Le tableau de bord mesure la présence des métadonnées, pas leur exactitude sémantique.
"""
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(content, encoding="utf-8")
    print(f"Tableau de bord documentaire généré: {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
