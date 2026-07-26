#!/usr/bin/env python3
"""Vérifie le contrat local des contrôles GitHub requis de SYSTEME_MAD."""

from pathlib import Path
import re
import sys

REQUIRED = {
    ".github/workflows/pr-governance.yml": {
        "workflow": "PR governance",
        "job": "PR governance",
        "timeout": 10,
    },
    ".github/workflows/docs-quality.yml": {
        "workflow": "Docs quality smoke",
        "job": "Docs quality smoke",
        "timeout": 10,
    },
    ".github/workflows/registry-integrity.yml": {
        "workflow": "Registry integrity",
        "job": "MAD Registry integrity",
        "timeout": 20,
    },
}


def audit(path_text: str, contract: dict[str, object], errors: list[str]) -> None:
    path = Path(path_text)
    if not path.is_file():
        errors.append(f"Workflow requis absent : {path_text}")
        return

    content = path.read_text(encoding="utf-8")
    lines = content.splitlines()
    workflow_name = str(contract["workflow"])
    job_name = str(contract["job"])
    timeout = int(contract["timeout"])

    if not re.search(rf"(?m)^name:\s*{re.escape(workflow_name)}\s*$", content):
        errors.append(f"Nom de workflow requis modifié dans {path_text} : {workflow_name}")

    if not re.search(rf"(?m)^\s{{4}}name:\s*{re.escape(job_name)}\s*$", content):
        errors.append(f"Nom de job requis modifié dans {path_text} : {job_name}")

    if not re.search(rf"(?m)^\s{{4}}timeout-minutes:\s*{timeout}\s*$", content):
        errors.append(
            f"Délai requis absent ou modifié dans {path_text} : {timeout} minutes"
        )

    for required_key in ("permissions:", "concurrency:", "cancel-in-progress: true"):
        if required_key not in content:
            errors.append(f"Protection absente dans {path_text} : {required_key}")

    pull_request_index = next(
        (index for index, line in enumerate(lines) if line.strip() == "pull_request:"),
        None,
    )
    if pull_request_index is None:
        errors.append(f"Déclencheur pull_request absent dans {path_text}")
        return

    for line in lines[pull_request_index + 1 :]:
        if line and not line.startswith(" "):
            break
        if line.strip() in {"paths:", "paths-ignore:"}:
            errors.append(
                f"Filtre de chemins interdit sur {path_text}; le contrôle requis doit "
                "apparaître sur toutes les PR visant main."
            )


def main() -> int:
    errors: list[str] = []
    for path, contract in REQUIRED.items():
        audit(path, contract, errors)

    if errors:
        print("Required checks contract failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Required checks contract passed for 3 required workflows.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
