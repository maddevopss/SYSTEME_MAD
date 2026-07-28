from __future__ import annotations

import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
WORKFLOW = ROOT / ".github" / "workflows" / "submit-madsuite-sync.yml"


class SubmitMadsuiteSyncContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.text = WORKFLOW.read_text(encoding="utf-8")

    def test_is_manual_and_targets_main(self):
        self.assertIn("workflow_dispatch:", self.text)
        self.assertIn("ref: main", self.text)
        self.assertIn("--base main", self.text)

    def test_has_minimal_write_permissions(self):
        self.assertIn("contents: write", self.text)
        self.assertIn("pull-requests: write", self.text)
        for forbidden in (
            "actions: write",
            "checks: write",
            "deployments: write",
            "id-token: write",
            "packages: write",
            "security-events: write",
            "statuses: write",
        ):
            self.assertNotIn(forbidden, self.text)

    def test_validates_before_writing(self):
        append_at = self.text.index("Append delivery to registry")
        validate_at = self.text.index("Validate registry and remote evidence")
        commit_at = self.text.index("Commit registry update")
        open_pr_at = self.text.index("Open governance pull request")
        self.assertLess(append_at, validate_at)
        self.assertLess(validate_at, commit_at)
        self.assertLess(commit_at, open_pr_at)

    def test_uses_ephemeral_branch_and_no_force_push(self):
        self.assertIn("github.run_id", self.text)
        self.assertIn("git switch -c", self.text)
        self.assertNotIn("--force", self.text)
        self.assertNotIn("--force-with-lease", self.text)

    def test_pr_body_keeps_governance_sections(self):
        for section in (
            "## Intention",
            "## Changements principaux",
            "## Vérifications effectuées",
            "## Risques et points à surveiller",
        ):
            self.assertIn(section, self.text)
        self.assertEqual(self.text.count("gh pr create"), 1)
        self.assertIn("--body-file", self.text)


if __name__ == "__main__":
    unittest.main()
