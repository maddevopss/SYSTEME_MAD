#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

REGISTRY = Path("00-SYSTEME-MAD/governance/madsuite-sync-registry.json")
REQUIRED_KEYS = ("backend", "frontend", "e2e", "desktopAgent", "governance")


def load_json(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ValueError(f"Fichier absent : {path}") from exc
    except json.JSONDecodeError as exc:
        raise ValueError(f"JSON invalide dans {path}: {exc}") from exc


def normalize_repository(key: str, entry: dict) -> dict:
    repository = str(entry.get("repository", "")).strip()
    required = entry.get("required")
    if not repository:
        raise ValueError(f"{key}: repository obligatoire.")
    if not isinstance(required, bool):
        raise ValueError(f"{key}: required doit être booléen.")

    normalized = {"required": required, "repository": repository}
    if required:
        pull_request = entry.get("pullRequest")
        commit = str(entry.get("commit", "")).strip().lower()
        if not isinstance(pull_request, int) or pull_request <= 0:
            raise ValueError(f"{key}: pullRequest positif obligatoire.")
        if len(commit) != 40 or any(char not in "0123456789abcdef" for char in commit):
            raise ValueError(f"{key}: commit SHA complet obligatoire.")
        normalized.update({"pullRequest": pull_request, "commit": commit})
    else:
        reason = str(entry.get("reason", "")).strip()
        if not reason:
            raise ValueError(f"{key}: reason obligatoire lorsque required=false.")
        normalized["reason"] = reason
    return normalized


def build_delivery(source: dict) -> dict:
    delivery_id = str(source.get("id", "")).strip()
    title = str(source.get("title", "")).strip()
    status = str(source.get("status", "planned")).strip()
    corrects = source.get("corrects")
    if not delivery_id or not title:
        raise ValueError("id et title sont obligatoires.")
    if status not in {"planned", "in_progress", "blocked", "closed"}:
        raise ValueError(f"status invalide : {status}")
    if corrects is not None:
        corrects = str(corrects).strip()
        if not corrects:
            raise ValueError("corrects doit être un identifiant non vide.")
        if corrects == delivery_id:
            raise ValueError("une livraison ne peut pas se corriger elle-même.")

    repositories = source.get("repositories")
    if not isinstance(repositories, dict):
        raise ValueError("repositories doit être un objet.")
    missing = [key for key in REQUIRED_KEYS if key not in repositories]
    if missing:
        raise ValueError(f"Dépôts manquants : {', '.join(missing)}")

    validation = source.get("validation")
    if not isinstance(validation, dict):
        raise ValueError("validation doit être un objet.")
    environment = str(validation.get("environment", "")).strip()
    rollback = str(validation.get("rollback", "")).strip()
    evidence = validation.get("evidence")
    if not environment or not rollback:
        raise ValueError("validation.environment et validation.rollback sont obligatoires.")
    if not isinstance(evidence, list) or not evidence or not all(str(item).strip() for item in evidence):
        raise ValueError("validation.evidence doit contenir au moins une preuve.")

    delivery = {
        "id": delivery_id,
        "title": title,
        "status": status,
        "repositories": {key: normalize_repository(key, repositories[key]) for key in REQUIRED_KEYS},
        "validation": {
            "environment": environment,
            "rollback": rollback,
            "evidence": [str(item).strip() for item in evidence],
        },
    }
    if corrects is not None:
        delivery["corrects"] = corrects
    return delivery


def append_delivery(registry: dict, delivery: dict) -> dict:
    deliveries = registry.setdefault("deliveries", [])
    if any(item.get("id") == delivery["id"] for item in deliveries if isinstance(item, dict)):
        raise ValueError(f"Livraison déjà présente : {delivery['id']}")
    deliveries.append(delivery)
    return registry


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Génère une entrée du registre MADSuite.")
    parser.add_argument("source", type=Path, help="Fichier JSON décrivant la livraison.")
    parser.add_argument("--append", action="store_true", help="Ajoute l’entrée au registre officiel.")
    parser.add_argument("--registry", type=Path, default=REGISTRY, help="Chemin du registre cible.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        delivery = build_delivery(load_json(args.source))
        if args.append:
            registry = append_delivery(load_json(args.registry), delivery)
            args.registry.write_text(json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            print(f"Livraison ajoutée au registre : {delivery['id']}")
        else:
            print(json.dumps(delivery, ensure_ascii=False, indent=2))
        return 0
    except ValueError as exc:
        print(f"Génération impossible : {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
