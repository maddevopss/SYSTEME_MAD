#!/usr/bin/env python3
"""Tests sans dépendance externe pour run-ci-governance-suite.py."""

from __future__ import annotations

import importlib.util
import sys
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).with_name("run-ci-governance-suite.py")
MODULE_NAME = "ci_governance_suite"
SPEC = importlib.util.spec_from_file_location(MODULE_NAME, SCRIPT)
assert SPEC and SPEC.loader
MODULE = importlib.util.module_from_spec(SPEC)
sys.modules[MODULE_NAME] = MODULE
SPEC.loader.exec_module(MODULE)


class GovernanceSuiteTests(unittest.TestCase):
    def test_markdown_report_summarizes_all_states(self) -> None:
        results = [
            MODULE.AuditResult("a.py", "passed", 0, 0.1, "ok", ""),
            MODULE.AuditResult("b.py", "failed", 2, 0.2, "", "erreur"),
            MODULE.AuditResult("c.py", "not_available", None, 0.0, "", ""),
        ]
        report = MODULE.markdown_report(results)
        self.assertIn("réussis : **1**", report)
        self.assertIn("échoués ou expirés : **1**", report)
        self.assertIn("non disponibles : **1**", report)
        self.assertIn("`a.py`", report)
        self.assertIn("erreur", report)

    def test_run_audit_reports_missing_script(self) -> None:
        result = MODULE.run_audit("08-BOOTSTRAPS/fichier-inexistant.py", 1)
        self.assertEqual("not_available", result.status)
        self.assertIsNone(result.returncode)

    def test_report_files_are_utf8_and_stable(self) -> None:
        results = [MODULE.AuditResult("audit.py", "passed", 0, 0.01, "réussi", "")]
        with tempfile.TemporaryDirectory() as directory:
            target = Path(directory) / "rapport.md"
            target.write_text(MODULE.markdown_report(results), encoding="utf-8")
            self.assertIn("réussi", target.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
