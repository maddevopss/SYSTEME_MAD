---
Projet: MADSuite
Document: Responsive Visual Evidence
Version: 1.0
Dernière révision: 2026-07-03
Statut: Officiel
Auteur: Marc-André Dufour
Standard lié: STD-106
---

# Responsive Visual Evidence — MADSuite

## Objectif

Conserver des preuves visuelles ciblées pour faciliter le diagnostic des régressions responsive dans MADSuite.

Ce document complète :

- `SYSTEME_MAD/03-STANDARDS/std-106.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_ANTI_REGRESSION.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_CI_INTEGRATION.md` ;
- `SYSTEME_MAD/09-CHECKLISTS/MOBILE_RESPONSIVE_NIGHTLY_EXTENDED.md`.

---

## Principe

Les screenshots responsive servent de preuves visuelles et d’aide au diagnostic.

Ils ne remplacent pas les assertions Playwright anti-régression.

Les screenshots doivent rester :

- ciblés ;
- non bloquants au départ ;
- exécutés en nightly seulement ;
- conservés comme artifacts ;
- utiles pour comprendre rapidement un échec.

---

## Règle obligatoire

Les validations nightly peuvent conserver des screenshots ciblés pour faciliter le diagnostic des régressions responsive.

Ces captures doivent rester diagnostiques au départ, non bloquantes, et ne doivent pas remplacer les assertions Playwright anti-régression.

---

## Suite de référence

Dans MADSuite, la suite de screenshots responsive est :

```text
e2e/responsive-screenshots.spec.js
```

Elle est destinée au nightly et aux diagnostics manuels.

---

## Captures minimales recommandées

Les captures minimales recommandées sont :

- Dashboard @390px ;
- Invoices @390px ;
- Timesheet @390px ;
- Settings @390px ;
- Dashboard @1440px.

Captures additionnelles utiles :

- Header @390px ;
- Main layout @390px ;
- Clients @390px ;
- Projets @390px ;
- Reports @390px ;
- composants flottants / AI Copilot si applicable.

---

## Artifacts

Les screenshots doivent être conservés dans les artifacts GitHub Actions lorsque la suite nightly est exécutée.

Emplacement recommandé :

```text
test-results/screenshots/
```

Exemples de noms :

```text
dashboard-390px-mobile.png
invoices-390px-mobile.png
timesheet-390px-mobile.png
settings-390px-mobile.png
dashboard-1440px-desktop.png
```

Durée de conservation recommandée :

- 14 jours.

---

## Politique de blocage

Au départ, les screenshots ne doivent pas bloquer les PR.

Ils servent à :

- comprendre un échec Playwright ;
- comparer rapidement un layout avant/après ;
- documenter une régression visuelle ;
- accélérer le diagnostic mobile.

Les assertions anti-scroll horizontal demeurent la source de vérité automatisée pour bloquer les régressions critiques.

---

## Critères d’acceptation

La Phase 6 est conforme si :

1. une suite de screenshots ciblés existe ;
2. les screenshots sont générés en nightly ;
3. les screenshots sont conservés comme artifacts ;
4. le PR gate rapide reste inchangé ;
5. les captures ne remplacent pas les assertions Playwright ;
6. aucune logique métier n’est modifiée ;
7. aucun backend n’est modifié ;
8. la documentation explique où retrouver les captures.

---

## Risques à surveiller

- screenshots trop nombreux et artifacts trop lourds ;
- faux sentiment de sécurité si les screenshots remplacent les assertions ;
- captures instables à cause d’animations ;
- données de test non déterministes ;
- dérive entre les pages critiques et les captures réellement générées.

---

## Historique des versions

| Version | Date | Description |
|---|---|---|
| 1.0 | 2026-07-03 | Création de la checklist Responsive Visual Evidence. |
