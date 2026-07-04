---
Projet: MADSuite
Document: Mobile E2E Hardening Board
Version: 1.0
Dernière révision: 2026-07-04
Statut: À valider
Auteur: Marc-André Dufour
---

# Mobile E2E Hardening Board

## Objectif

Ce document suit la mise en place du filet anti-régression mobile de MADSuite.

Il relie les constats QA mobile réelle, les tests automatisés Playwright, les corrections frontend, les garde-fous MADPROOF et les décisions de release.

---

## Source de vérité

```text
SYSTEME_MAD = gouvernance, checklists, playbooks, roadmap
maddevopss/e2e = tests exécutables
maddevopss/madsuite-frontend = interface produit
maddevopss/madsuite-backend = API et sécurité
```

---

## Statut global

| Axe | Statut | Note |
|---|---|---|
| Checklist mobile officielle | En cours | CHK-033 créée pour validation |
| Playbook QA mobile réelle | En cours | PLAY-038 créé pour validation |
| Repo E2E | En cours | À initialiser avec Playwright |
| Tests responsive | En cours | À connecter aux pages critiques |
| Tests iPhone réel | Manuel | À documenter après chaque passe |
| CI E2E | À faire | À ajouter après stabilisation locale |

---

## P0 — Anti-régression mobile

- [ ] Initialiser `maddevopss/e2e` avec Playwright.
- [ ] Ajouter `tests/responsive-mobile.spec.js`.
- [ ] Ajouter `playwright.config.js`.
- [ ] Ajouter `.env.example`.
- [ ] Ajouter helpers anti-scroll horizontal.
- [ ] Tester Dashboard, Timesheet, Clients, Projets, Invoices, Reports et Settings.
- [ ] Tester 375, 390, 430, 768 et 1440 px.
- [ ] Produire un rapport HTML Playwright.

---

## P1 — Cohérence documentation / code

- [ ] Vérifier le chemin du script frontend `test:e2e:responsive`.
- [ ] Vérifier ou créer `MOBILE_RESPONSIVE_ANTI_REGRESSION.md`.
- [ ] Aligner le README frontend avec le repo E2E réel.
- [ ] Mettre à jour `SYSTEME_MAD/00-SYSTEME-MAD/repos.md` lorsque le repo E2E devient actif.

---

## P1 — QA mobile réelle

- [ ] Tester sur iPhone Safari.
- [ ] Tester menu mobile et drawer.
- [ ] Tester modales.
- [ ] Tester timer flottant ou header timer.
- [ ] Tester Settings et Modules.
- [ ] Tester factures et estimés.
- [ ] Documenter les bugs avec appareil, navigateur et parcours.

---

## P2 — Accessibilité cognitive

- [ ] Vérifier que chaque page mobile montre une action principale claire.
- [ ] Réduire les états vides sans CTA.
- [ ] Éviter les textes culpabilisants.
- [ ] Vérifier les formulations MADPROOF sur les écrans IA ou cognitifs.
- [ ] Vérifier que l’utilisateur peut reprendre le fil après navigation ou interruption.

---

## P3 — CI / Release

- [ ] Ajouter un workflow GitHub Actions pour E2E smoke.
- [ ] Publier un rapport Playwright HTML.
- [ ] Conserver les traces de test seulement en cas d’échec.
- [ ] Marquer la release comme non prête si une page critique présente un scroll horizontal.
- [ ] Ajouter une matrice minimale Chromium et WebKit.

---

## Définition de Done

Le hardening mobile est considéré prêt lorsque :

1. les tests Playwright responsive passent localement;
2. une passe iPhone / Safari réelle est documentée;
3. aucun écran critique n’a de scroll horizontal;
4. les modales et drawers sont utilisables;
5. les CTA critiques restent visibles;
6. les textes MADSuite restent non médicaux;
7. le repo E2E n’est plus seulement réservé, mais réellement exécutable.
