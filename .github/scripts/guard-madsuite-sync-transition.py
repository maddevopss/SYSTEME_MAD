#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path


def load_registry(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except FileNotFoundError as exc:
        raise ValueError(f"Registre absent : {path}") from exc
    except json.JSONDecodeError as exc:
        raise ValueError(f"JSON invalide dans {path}: {exc}") from exc


def index_deliveries(payload: dict) -> dict[str, dict]:
    deliveries = payload.get("deliveries", [])
    if not isinstance(deliveries, list):
        raise ValueError("deliveries doit être une liste.")
    indexed: dict[str, dict] = {}
    for delivery in deliveries:
        if not isinstance(delivery, dict):
            continue
        delivery_id = delivery.get("id")
        if isinstance(delivery_id, str) and delivery_id:
            indexed[delivery_id] = delivery
    return indexed


def validate_transition(base: dict, head: dict) -> list[str]:
    errors: list[str] = []
    base_by_id = index_deliveries(base)
    head_by_id = index_deliveries(head)

    for delivery_id, previous in base_by_id.items():
        current = head_by_id.get(delivery_id)
        if current is None:
            errors.append(f"Livraison existante supprimée : {delivery_id}.")
            continue

        if previous.get("status") == "closed":
            if current != previous:
                errors.append(
                    f"Livraison fermée modifiée : {delivery_id}. "
                    "Une livraison fermée est immuable; créer une nouvelle livraison corrective."
                )
            continue

        if current.get("status") == "closed":
            required = current.get("repositories", {})
            for key, entry in required.items():
                if not isinstance(entry, dict) or entry.get("required") is not True:
                    continue
                if not entry.get("pullRequest") or not entry.get("commit"):
                    errors.append(
                        f"{delivery_id}/{key}: fermeture impossible sans PR et commit."
                    )

    return errors


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Valide les transitions du registre de synchronisation MADSuite."
    )
    parser.add_argument("base", type=Path, help="Registre de la branche de base.")
    parser.add_argument("head", type=Path, help="Registre proposé.")
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        errors = validate_transition(load_registry(args.base), load_registry(args.head))
    except ValueError as exc:
        print(f"Validation impossible : {exc}", file=sys.stderr)
        return 1

    if errors:
        print("MADSuite synchronization transition guard failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("MADSuite synchronization transition guard passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
