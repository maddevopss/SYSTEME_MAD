import importlib.util
import unittest
from pathlib import Path

SCRIPT = Path(__file__).parents[1] / "scripts" / "guard-madsuite-corrections.py"
spec = importlib.util.spec_from_file_location("guard_madsuite_corrections", SCRIPT)
module = importlib.util.module_from_spec(spec)
assert spec and spec.loader
spec.loader.exec_module(module)


class CorrectionGuardTests(unittest.TestCase):
    def registry(self, deliveries):
        return {"schemaVersion": 1, "deliveries": deliveries}

    def test_accepts_valid_correction_of_closed_delivery(self):
        errors = module.validate(self.registry([
            {"id": "base", "status": "closed"},
            {"id": "fix", "status": "planned", "corrects": "base"},
        ]))
        self.assertEqual([], errors)

    def test_rejects_missing_target(self):
        errors = module.validate(self.registry([
            {"id": "fix", "status": "planned", "corrects": "absent"},
        ]))
        self.assertTrue(any("introuvable" in error for error in errors))

    def test_rejects_open_target(self):
        errors = module.validate(self.registry([
            {"id": "base", "status": "in_progress"},
            {"id": "fix", "status": "planned", "corrects": "base"},
        ]))
        self.assertTrue(any("doit être fermée" in error for error in errors))

    def test_rejects_self_reference(self):
        errors = module.validate(self.registry([
            {"id": "fix", "status": "planned", "corrects": "fix"},
        ]))
        self.assertTrue(any("elle-même" in error for error in errors))

    def test_rejects_cycle(self):
        errors = module.validate(self.registry([
            {"id": "a", "status": "closed", "corrects": "b"},
            {"id": "b", "status": "closed", "corrects": "a"},
        ]))
        self.assertTrue(any("Cycle" in error for error in errors))


if __name__ == "__main__":
    unittest.main()
