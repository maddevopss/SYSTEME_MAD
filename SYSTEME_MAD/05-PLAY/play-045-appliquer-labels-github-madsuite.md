---
Projet: MADSuite
Document: PLAY-045 — Appliquer les labels GitHub MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-045 — Appliquer les labels GitHub MADSuite

## Rôle du playbook

Ce playbook explique comment créer la taxonomie de labels GitHub définie dans `CHK-049`.

Référence :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-049-github-label-taxonomy-madsuite.md
```

---

## Repos concernés

```text
bleeband/SYSTEME_MAD
maddevopss/madsuite-backend
maddevopss/madsuite-frontend
maddevopss/e2e
maddevopss/desktop-agent
```

---

## Précondition

Installer GitHub CLI et être connecté :

```powershell
gh auth status
```

---

## Labels à créer

### Type

```powershell
gh label create "type: bug" --color "d73a4a" --description "Dysfonctionnement confirmé ou suspecté"
gh label create "type: change" --color "a2eeef" --description "Amélioration ou changement demandé"
gh label create "type: docs" --color "0075ca" --description "Documentation"
gh label create "type: ci" --color "5319e7" --description "CI, workflow, checks"
gh label create "type: guard" --color "5319e7" --description "Guard MADPROOF"
gh label create "type: release" --color "0e8a16" --description "Release ou validation release"
gh label create "type: incident" --color "b60205" --description "Problème observé après release"
gh label create "type: debt" --color "fbca04" --description "Dette technique ou gouvernance"
```

### Area

```powershell
gh label create "area: backend" --color "1d76db" --description "API, DB, jobs, services"
gh label create "area: frontend" --color "1d76db" --description "UI, routes, build web"
gh label create "area: e2e" --color "1d76db" --description "Playwright et parcours test"
gh label create "area: desktop" --color "1d76db" --description "Desktop-agent"
gh label create "area: systeme-mad" --color "1d76db" --description "Documentation source de vérité"
gh label create "area: billing" --color "1d76db" --description "Factures, paiements, ledger"
gh label create "area: auth" --color "1d76db" --description "Login, sessions, accès"
gh label create "area: modules" --color "1d76db" --description "Modules, subscription, activation"
gh label create "area: madproof" --color "1d76db" --description "Gouvernance et conformité produit"
```

### Priority

```powershell
gh label create "priority: p0" --color "b60205" --description "Bloquant immédiat"
gh label create "priority: p1" --color "d93f0b" --description "Important avant release"
gh label create "priority: p2" --color "fbca04" --description "Hardening ou amélioration planifiée"
gh label create "priority: p3" --color "cfd3d7" --description "Plus tard"
```

### Status

```powershell
gh label create "status: triage" --color "ededed" --description "À analyser"
gh label create "status: blocked" --color "b60205" --description "Bloqué"
gh label create "status: ready" --color "0e8a16" --description "Prêt à faire"
gh label create "status: in-progress" --color "fbca04" --description "En cours"
gh label create "status: needs-evidence" --color "d93f0b" --description "Preuve terrain requise"
gh label create "status: done" --color "0e8a16" --description "Complété et vérifié"
```

### Source

```powershell
gh label create "source: manual" --color "cfd3d7" --description "Créé manuellement"
gh label create "source: ci" --color "5319e7" --description "Vient d’un échec CI"
gh label create "source: dependabot" --color "0366d6" --description "Vient de Dependabot"
gh label create "source: release" --color "0e8a16" --description "Vient d’une release"
gh label create "source: audit" --color "5319e7" --description "Vient d’un audit"
```

---

## Commande PowerShell multi-repo

À exécuter depuis n’importe quel dossier avec `gh` connecté :

```powershell
$repos = @(
  "bleeband/SYSTEME_MAD",
  "maddevopss/madsuite-backend",
  "maddevopss/madsuite-frontend",
  "maddevopss/e2e",
  "maddevopss/desktop-agent"
)

$labels = @(
  @{n="type: bug"; c="d73a4a"; d="Dysfonctionnement confirmé ou suspecté"},
  @{n="type: change"; c="a2eeef"; d="Amélioration ou changement demandé"},
  @{n="type: docs"; c="0075ca"; d="Documentation"},
  @{n="type: ci"; c="5319e7"; d="CI, workflow, checks"},
  @{n="type: guard"; c="5319e7"; d="Guard MADPROOF"},
  @{n="type: release"; c="0e8a16"; d="Release ou validation release"},
  @{n="type: incident"; c="b60205"; d="Problème observé après release"},
  @{n="type: debt"; c="fbca04"; d="Dette technique ou gouvernance"},
  @{n="area: backend"; c="1d76db"; d="API, DB, jobs, services"},
  @{n="area: frontend"; c="1d76db"; d="UI, routes, build web"},
  @{n="area: e2e"; c="1d76db"; d="Playwright et parcours test"},
  @{n="area: desktop"; c="1d76db"; d="Desktop-agent"},
  @{n="area: systeme-mad"; c="1d76db"; d="Documentation source de vérité"},
  @{n="area: billing"; c="1d76db"; d="Factures, paiements, ledger"},
  @{n="area: auth"; c="1d76db"; d="Login, sessions, accès"},
  @{n="area: modules"; c="1d76db"; d="Modules, subscription, activation"},
  @{n="area: madproof"; c="1d76db"; d="Gouvernance et conformité produit"},
  @{n="priority: p0"; c="b60205"; d="Bloquant immédiat"},
  @{n="priority: p1"; c="d93f0b"; d="Important avant release"},
  @{n="priority: p2"; c="fbca04"; d="Hardening ou amélioration planifiée"},
  @{n="priority: p3"; c="cfd3d7"; d="Plus tard"},
  @{n="status: triage"; c="ededed"; d="À analyser"},
  @{n="status: blocked"; c="b60205"; d="Bloqué"},
  @{n="status: ready"; c="0e8a16"; d="Prêt à faire"},
  @{n="status: in-progress"; c="fbca04"; d="En cours"},
  @{n="status: needs-evidence"; c="d93f0b"; d="Preuve terrain requise"},
  @{n="status: done"; c="0e8a16"; d="Complété et vérifié"},
  @{n="source: manual"; c="cfd3d7"; d="Créé manuellement"},
  @{n="source: ci"; c="5319e7"; d="Vient d’un échec CI"},
  @{n="source: dependabot"; c="0366d6"; d="Vient de Dependabot"},
  @{n="source: release"; c="0e8a16"; d="Vient d’une release"},
  @{n="source: audit"; c="5319e7"; d="Vient d’un audit"}
)

foreach ($repo in $repos) {
  foreach ($label in $labels) {
    gh label create $label.n --repo $repo --color $label.c --description $label.d --force
  }
}
```

---

## Après application

- [ ] vérifier les labels dans GitHub;
- [ ] appliquer les labels aux issues P2 ouvertes;
- [ ] noter le résultat dans CHK-048;
- [ ] mettre à jour le board P2 si le statut change.
