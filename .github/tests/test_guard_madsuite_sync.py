from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path
from unittest.mock import patch

SCRIPT = Path(__file__).parents[1] / "scripts" / "guard-madsuite-sync.py"
SPEC = importlib.util.spec_from_file_location("guard_madsuite_sync", SCRIPT)
assert SPEC and SPEC.loader
GUARD = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(GUARD)

SHA = "a" * 40
OTHER_SHA = "b" * 40


def make_payload(*, status: str = "closed", commit: str = SHA) -> dict:
    return {
        "schemaVersion": 1,
        "deliveries": [
            {
                "id": "delivery-test",
                "title": "Livraison de test",
                "status": status,
                "repositories": {
                    "backend": {
                        "required": True,
                        "repository": "example/backend",
                        "pullRequest": 12,
                        "commit": commit,
                    },
                    "frontend": {
                        "required": False,
                        "repository": "example/frontend",
                        "reason": "Aucun changement frontend.",
                    },
                    "e2e": {
                        "required": False,
                        "repository": "example/e2e",
                        "reason": "Aucun scénario E2E requis.",
                    },
                    "desktopAgent": {
                        "required": False,
                        "repository": "example/desktop-agent",
                        "reason": "Aucune surface bureau.",
                    },
                    "governance": {
                        "required": False,
                        "repository": "example/governance",
                        "reason": "Aucun changement de gouvernance.",
                    },
                },
                "validation": {
                    "environment": "GitHub Actions",
                    "rollback": "Revenir au commit précédent.",
                    "evidence": ["Tests automatisés réussis"],
                },
            }
        ],
    }


class StructureValidationTests(unittest.TestCase):
    def test_valid_payload_passes(self) -> None:
        self.assertEqual(GUARD.validate_structure(make_payload()), [])

    def test_missing_exclusion_reason_fails(self) -> None:
        payload = make_payload()
        payload["deliveries"][0]["repositories"]["frontend"]["reason"] = ""
        errors = GUARD.validate_structure(payload)
        self.assertTrue(any("reason obligatoire" in error for error in errors))

    def test_invalid_commit_fails(self) -> None:
        errors = GUARD.validate_structure(make_payload(commit="abc"))
        self.assertTrue(any("SHA-1 complet obligatoire" in error for error in errors))


class RemoteValidationTests(unittest.TestCase):
    def test_merged_pr_and_existing_commit_pass(self) -> None:
        def fake_github_json(path: str, token: str) -> dict:
            self.assertEqual(token, "token")
            if "/pulls/" in path:
                return {"merged_at": "2026-07-28T00:00:00Z", "merge_commit_sha": SHA}
            return {"sha": SHA}

        with patch.object(GUARD, "github_json", side_effect=fake_github_json):
            self.assertEqual(GUARD.validate_remote(make_payload(), "token"), [])

    def test_unmerged_pr_fails(self) -> None:
        def fake_github_json(path: str, token: str) -> dict:
            if "/pulls/" in path:
                return {"merged_at": None, "merge_commit_sha": SHA}
            return {"sha": SHA}

        with patch.object(GUARD, "github_json", side_effect=fake_github_json):
            errors = GUARD.validate_remote(make_payload(), "token")
        self.assertTrue(any("non fusionnée" in error for error in errors))

    def test_wrong_merge_commit_fails(self) -> None:
        def fake_github_json(path: str, token: str) -> dict:
            if "/pulls/" in path:
                return {"merged_at": "2026-07-28T00:00:00Z", "merge_commit_sha": OTHER_SHA}
            return {"sha": SHA}

        with patch.object(GUARD, "github_json", side_effect=fake_github_json):
            errors = GUARD.validate_remote(make_payload(), "token")
        self.assertTrue(any("différent du commit de fusion" in error for error in errors))

    def test_non_closed_delivery_skips_remote_calls(self) -> None:
        with patch.object(GUARD, "github_json") as github_json:
            self.assertEqual(GUARD.validate_remote(make_payload(status="in_progress"), "token"), [])
            github_json.assert_not_called()


if __name__ == "__main__":
    unittest.main()
