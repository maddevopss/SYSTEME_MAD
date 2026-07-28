#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

REGISTRY = Path("00-SYSTEME-MAD/governance/madsuite-sync-registry.json")
REQUIRED_REPOSITORIES = {"backend", "frontend", "e2e", "desktopAgent", "governance"}
ALLOWED_STATUSES = {"planned", "in_progress", "blocked", "closed"}
SHA_PATTERN = re.compile(r"^[0-9a-f]{40}$")
REPOSITORY_PATTERN = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")


def fail(message: str) -> None:
    print(f"- {message}")


def validate() -> list[str]:
    errors: list[str] = []
    if not REGISTRY.exists():
        return [f"Registre absent : {REGISTRY}"]

    try:
        payload = json.loads(REGISTRY.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        return [f"JSON invalide dans {REGISTRY}: {exc}"]

    if payload.get("schemaVersion") != 1:
        errors.append("schemaVersion doit être égal à 1.")

    deliveries = payload.get("deliveries")
    if not isinstance(deliveries, list) or not deliveries:
        errors.append("deliveries doit contenir au moins une livraison.")
        return errors

    seen_ids: set[str] = set()
    for index, delivery in enumerate(deliveries, start=1):
        prefix = f"Livraison #{index}"
        delivery_id = delivery.get("id")
        if not isinstance(delivery_id, str) or not delivery_id.strip():
            errors.append(f"{prefix}: id obligatoire.")
        elif delivery_id in seen_ids:
            errors.append(f"{prefix}: id dupliqué ({delivery_id}).")
        else:
            seen_ids.add(delivery_id)

        status = delivery.get("status")
        if status not in ALLOWED_STATUSES:
            errors.append(f"{prefix}: status invalide ({status}).")

        repositories = delivery.get("repositories")
        if not isinstance(repositories, dict):
            errors.append(f"{prefix}: repositories doit être un objet.")
            continue

        missing = REQUIRED_REPOSITORIES - repositories.keys()
        if missing:
            errors.append(f"{prefix}: dépôts manquants: {', '.join(sorted(missing))}.")

        for key in REQUIRED_REPOSITORIES & repositories.keys():
            entry = repositories[key]
            if not isinstance(entry, dict):
                errors.append(f"{prefix}/{key}: entrée invalide.")
                continue

            repository = entry.get("repository")
            if not isinstance(repository, str) or not REPOSITORY_PATTERN.fullmatch(repository):
                errors.append(f"{prefix}/{key}: repository invalide.")

            required = entry.get("required")
            if not isinstance(required, bool):
                errors.append(f"{prefix}/{key}: required doit être booléen.")
                continue

            if required:
                pr = entry.get("pullRequest")
                commit = entry.get("commit")
                if not isinstance(pr, int) or pr <= 0:
                    errors.append(f"{prefix}/{key}: pullRequest positif obligatoire.")
                if not isinstance(commit, str) or not SHA_PATTERN.fullmatch(commit):
                    errors.append(f"{prefix}/{key}: commit SHA-1 complet obligatoire.")
            elif not str(entry.get("reason", "")).strip():
                errors.append(f"{prefix}/{key}: reason obligatoire lorsque required=false.")

        validation = delivery.get("validation")
        if not isinstance(validation, dict):
            errors.append(f"{prefix}: validation doit être un objet.")
            continue

        for field in ("environment", "rollback"):
            if not str(validation.get(field, "")).strip():
                errors.append(f"{prefix}: validation.{field} obligatoire.")

        evidence = validation.get("evidence")
        if not isinstance(evidence, list) or not evidence or not all(isinstance(item, str) and item.strip() for item in evidence):
            errors.append(f"{prefix}: validation.evidence doit contenir des preuves textuelles.")

        if status == "closed":
            for key, entry in repositories.items():
                if isinstance(entry, dict) and entry.get("required") is True:
                    if not entry.get("pullRequest") or not entry.get("commit"):
                        errors.append(f"{prefix}/{key}: une livraison fermée exige PR et commit.")

    return errors


def main() -> int:
    errors = validate()
    if errors:
        print("MADSuite synchronization guard failed:")
        for error in errors:
            fail(error)
        return 1

    print(f"MADSuite synchronization guard passed: {REGISTRY}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
