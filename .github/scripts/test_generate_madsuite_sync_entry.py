#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("generate-madsuite-sync-entry.py")
spec = importlib.util.spec_from_file_location("generate_madsuite_sync_entry", SCRIPT)
module = importlib.util.module_from_spec(spec)
assert spec and spec.loader
spec.loader.exec_module(module)


def valid_source() -> dict:
    sha = "a" * 40
    repositories = {
        "backend": {"required": True, "repository": "maddevopss/madsuite-backend", "pullRequest": 1, "commit": sha},
        "frontend": {"required": True, "repository": "maddevopss/madsuite-frontend", "pullRequest": 2, "commit": sha},
        "e2e": {"required": True, "repository": "maddevopss/e2e", "pullRequest": 3, "commit": sha},
        "desktopAgent": {"required": False, "repository": "maddevopss/desktop-agent", "reason": "Non concerné."},
        "governance": {"required": True, "repository": "maddevopss/SYSTEME_MAD", "pullRequest": 4, "commit": sha},
    }
    return {
        "id": "delivery-test",
        "title": "Livraison test",
        "status": "closed",
        "repositories": repositories,
        "validation": {
            "environment": "CI",
            "rollback": "Revenir aux commits précédents.",
            "evidence": ["Tests verts"],
        },
    }


class GeneratorTests(unittest.TestCase):
    def test_builds_normalized_delivery(self) -> None:
        delivery = module.build_delivery(valid_source())
        self.assertEqual(delivery["id"], "delivery-test")
        self.assertEqual(tuple(delivery["repositories"]), module.REQUIRED_KEYS)

    def test_rejects_missing_repository(self) -> None:
        source = valid_source()
        del source["repositories"]["e2e"]
        with self.assertRaisesRegex(ValueError, "Dépôts manquants"):
            module.build_delivery(source)

    def test_rejects_invalid_sha(self) -> None:
        source = valid_source()
        source["repositories"]["backend"]["commit"] = "court"
        with self.assertRaisesRegex(ValueError, "SHA complet"):
            module.build_delivery(source)

    def test_rejects_unjustified_exclusion(self) -> None:
        source = valid_source()
        source["repositories"]["desktopAgent"]["reason"] = ""
        with self.assertRaisesRegex(ValueError, "reason obligatoire"):
            module.build_delivery(source)

    def test_rejects_duplicate_delivery(self) -> None:
        delivery = module.build_delivery(valid_source())
        registry = {"schemaVersion": 1, "deliveries": [delivery.copy()]}
        with self.assertRaisesRegex(ValueError, "déjà présente"):
            module.append_delivery(registry, delivery)

    def test_appends_delivery(self) -> None:
        delivery = module.build_delivery(valid_source())
        registry = {"schemaVersion": 1, "deliveries": []}
        updated = module.append_delivery(registry, delivery)
        self.assertEqual(updated["deliveries"], [delivery])


if __name__ == "__main__":
    unittest.main()
