#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

REGISTRY = Path("00-SYSTEME-MAD/governance/madsuite-sync-registry.json")
REQUIRED_REPOSITORIES = {"backend", "frontend", "e2e", "desktopAgent", "governance"}
ALLOWED_STATUSES = {"planned", "in_progress", "blocked", "closed"}
SHA_PATTERN = re.compile(r"^[0-9a-f]{40}$")
REPOSITORY_PATTERN = re.compile(r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$")
API_ROOT = "https://api.github.com"


def fail(message: str) -> None:
    print(f"- {message}")


def load_registry() -> tuple[dict, list[str]]:
    if not REGISTRY.exists():
        return {}, [f"Registre absent : {REGISTRY}"]
    try:
        return json.loads(REGISTRY.read_text(encoding="utf-8")), []
    except json.JSONDecodeError as exc:
        return {}, [f"JSON invalide dans {REGISTRY}: {exc}"]


def validate_structure(payload: dict) -> list[str]:
    errors: list[str] = []
    if payload.get("schemaVersion") != 1:
        errors.append("schemaVersion doit être égal à 1.")

    deliveries = payload.get("deliveries")
    if not isinstance(deliveries, list) or not deliveries:
        return errors + ["deliveries doit contenir au moins une livraison."]

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
        if not isinstance(evidence, list) or not evidence or not all(
            isinstance(item, str) and item.strip() for item in evidence
        ):
            errors.append(f"{prefix}: validation.evidence doit contenir des preuves textuelles.")

        if status == "closed":
            for key, entry in repositories.items():
                if isinstance(entry, dict) and entry.get("required") is True:
                    if not entry.get("pullRequest") or not entry.get("commit"):
                        errors.append(f"{prefix}/{key}: une livraison fermée exige PR et commit.")
    return errors


def github_json(path: str, token: str) -> dict:
    request = Request(
        f"{API_ROOT}{path}",
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {token}",
            "User-Agent": "SYSTEME_MAD-sync-guard",
            "X-GitHub-Api-Version": "2022-11-28",
        },
    )
    with urlopen(request, timeout=15) as response:
        return json.load(response)


def validate_local_commit(commit: str, prefix: str) -> list[str]:
    errors: list[str] = []
    exists = subprocess.run(
        ["git", "cat-file", "-e", f"{commit}^{{commit}}"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    if exists.returncode != 0:
        return [f"{prefix}: commit local {commit} introuvable."]

    ancestor = subprocess.run(
        ["git", "merge-base", "--is-ancestor", commit, "HEAD"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        check=False,
    )
    if ancestor.returncode != 0:
        errors.append(f"{prefix}: commit {commit} non intégré à HEAD.")
    return errors


def validate_remote(payload: dict, token: str) -> list[str]:
    errors: list[str] = []
    current_repository = os.environ.get("GITHUB_REPOSITORY", "").strip().lower()

    for delivery in payload.get("deliveries", []):
        if delivery.get("status") != "closed":
            continue
        delivery_id = delivery.get("id", "sans-id")
        for key, entry in delivery.get("repositories", {}).items():
            if not isinstance(entry, dict) or entry.get("required") is not True:
                continue
            repository = entry["repository"]
            pr_number = entry["pullRequest"]
            commit = entry["commit"]
            prefix = f"{delivery_id}/{key}"

            if current_repository and repository.lower() == current_repository:
                errors.extend(validate_local_commit(commit, prefix))
                continue

            try:
                pr = github_json(f"/repos/{repository}/pulls/{pr_number}", token)
                if pr.get("merged_at") is None:
                    errors.append(f"{prefix}: PR #{pr_number} non fusionnée.")
                remote_merge_commit = pr.get("merge_commit_sha")
                if remote_merge_commit != commit:
                    errors.append(
                        f"{prefix}: commit déclaré {commit} différent du commit de fusion "
                        f"GitHub {remote_merge_commit}."
                    )
                remote_commit = github_json(f"/repos/{repository}/commits/{commit}", token)
                if remote_commit.get("sha") != commit:
                    errors.append(f"{prefix}: commit {commit} non confirmé par GitHub.")
            except HTTPError as exc:
                errors.append(f"{prefix}: GitHub HTTP {exc.code} pendant la vérification distante.")
            except (URLError, TimeoutError, json.JSONDecodeError) as exc:
                errors.append(f"{prefix}: vérification GitHub impossible ({exc}).")
    return errors


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Valide le registre de synchronisation MADSuite.")
    parser.add_argument(
        "--remote",
        action="store_true",
        help="Confirme les PR et commits avec l’API GitHub.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    payload, errors = load_registry()
    if not errors:
        errors.extend(validate_structure(payload))

    if args.remote and not errors:
        token = os.environ.get("GITHUB_TOKEN", "").strip()
        if not token:
            errors.append("GITHUB_TOKEN obligatoire avec --remote.")
        else:
            errors.extend(validate_remote(payload, token))

    if errors:
        print("MADSuite synchronization guard failed:")
        for error in errors:
            fail(error)
        return 1

    mode = "structure et preuves GitHub" if args.remote else "structure"
    print(f"MADSuite synchronization guard passed ({mode}): {REGISTRY}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
