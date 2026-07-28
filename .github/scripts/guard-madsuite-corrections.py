#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
from pathlib import Path

REGISTRY = Path("00-SYSTEME-MAD/governance/madsuite-sync-registry.json")


def validate(registry: dict) -> list[str]:
    errors: list[str] = []
    deliveries = registry.get("deliveries", [])
    by_id = {item.get("id"): item for item in deliveries if isinstance(item, dict) and item.get("id")}

    for delivery in deliveries:
        if not isinstance(delivery, dict):
            continue
        delivery_id = delivery.get("id", "<sans-id>")
        corrects = delivery.get("corrects")
        if corrects is None:
            continue
        if not isinstance(corrects, str) or not corrects.strip():
            errors.append(f"{delivery_id}: corrects doit être un identifiant non vide.")
            continue
        corrects = corrects.strip()
        if corrects == delivery_id:
            errors.append(f"{delivery_id}: une livraison ne peut pas se corriger elle-même.")
            continue
        target = by_id.get(corrects)
        if target is None:
            errors.append(f"{delivery_id}: livraison corrigée introuvable: {corrects}")
            continue
        if target.get("status") != "closed":
            errors.append(f"{delivery_id}: la livraison corrigée doit être fermée: {corrects}")

    for start in by_id:
        seen: set[str] = set()
        current = start
        while current in by_id and by_id[current].get("corrects"):
            if current in seen:
                errors.append(f"Cycle de corrections détecté depuis {start}.")
                break
            seen.add(current)
            current = by_id[current]["corrects"]
    return sorted(set(errors))


def main() -> int:
    registry = json.loads(REGISTRY.read_text(encoding="utf-8"))
    errors = validate(registry)
    if errors:
        print("MADSuite correction guard failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print("MADSuite correction guard passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
