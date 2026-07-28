from __future__ import annotations

import importlib.util
import unittest
from pathlib import Path

SCRIPT = Path(__file__).parents[1] / "scripts" / "render-madsuite-sync-report.py"
spec = importlib.util.spec_from_file_location("render_sync_report", SCRIPT)
module = importlib.util.module_from_spec(spec)
assert spec and spec.loader
spec.loader.exec_module(module)


class RenderSyncReportTests(unittest.TestCase):
    def test_renders_status_counts_and_correction_link(self):
        registry = {
            "deliveries": [
                {
                    "id": "base",
                    "title": "Base",
                    "status": "closed",
                    "repositories": {},
                },
                {
                    "id": "fix",
                    "title": "Correction",
                    "status": "in_progress",
                    "corrects": "base",
                    "repositories": {
                        "backend": {
                            "required": True,
                            "pullRequest": 12,
                            "commit": "a" * 40,
                        },
                        "frontend": {
                            "required": False,
                            "reason": "Aucun changement visuel.",
                        },
                    },
                },
            ]
        }
        report = module.render(registry)
        self.assertIn("Livraisons inscrites : **2**", report)
        self.assertIn("| `closed` | 1 |", report)
        self.assertIn("corrige `base`", report)
        self.assertIn("PR #12", report)
        self.assertIn("Aucun changement visuel.", report)

    def test_empty_registry_is_supported(self):
        report = module.render({"deliveries": []})
        self.assertIn("Livraisons inscrites : **0**", report)
        self.assertIn("| `closed` | 0 |", report)


if __name__ == "__main__":
    unittest.main()
