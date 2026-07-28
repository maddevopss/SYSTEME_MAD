from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "guard-madsuite-sync-transition.py"
spec = importlib.util.spec_from_file_location("guard_madsuite_sync_transition", SCRIPT)
module = importlib.util.module_from_spec(spec)
assert spec and spec.loader
spec.loader.exec_module(module)


def delivery(delivery_id: str = "lot-1", status: str = "in_progress") -> dict:
    return {
        "id": delivery_id,
        "title": "Lot de validation",
        "status": status,
        "repositories": {
            "backend": {
                "required": True,
                "repository": "maddevopss/madsuite-backend",
                "pullRequest": 1,
                "commit": "a" * 40,
            },
            "frontend": {
                "required": False,
                "repository": "maddevopss/madsuite-frontend",
                "reason": "Aucun changement.",
            },
        },
        "validation": {
            "environment": "CI",
            "rollback": "Revenir au commit précédent.",
            "evidence": ["Tests verts"],
        },
    }


def registry(*items: dict) -> dict:
    return {"schemaVersion": 1, "deliveries": list(items)}


class TransitionGuardTests(unittest.TestCase):
    def test_allows_new_delivery(self) -> None:
        self.assertEqual(module.validate_transition(registry(), registry(delivery())), [])

    def test_allows_closing_complete_delivery(self) -> None:
        before = delivery(status="in_progress")
        after = delivery(status="closed")
        self.assertEqual(module.validate_transition(registry(before), registry(after)), [])

    def test_rejects_deleted_delivery(self) -> None:
        errors = module.validate_transition(registry(delivery()), registry())
        self.assertIn("Livraison existante supprimée", errors[0])

    def test_rejects_reopening_closed_delivery(self) -> None:
        before = delivery(status="closed")
        after = delivery(status="in_progress")
        errors = module.validate_transition(registry(before), registry(after))
        self.assertIn("Livraison fermée modifiée", errors[0])

    def test_rejects_changed_proof_on_closed_delivery(self) -> None:
        before = delivery(status="closed")
        after = delivery(status="closed")
        after["repositories"]["backend"]["commit"] = "b" * 40
        errors = module.validate_transition(registry(before), registry(after))
        self.assertIn("Livraison fermée modifiée", errors[0])

    def test_rejects_closure_without_commit(self) -> None:
        before = delivery(status="in_progress")
        after = delivery(status="closed")
        del after["repositories"]["backend"]["commit"]
        errors = module.validate_transition(registry(before), registry(after))
        self.assertIn("fermeture impossible", errors[0])


if __name__ == "__main__":
    unittest.main()
