---
Projet: MADSuite
Document: Index P3 — Stabilisation Produit
Version: 1.4
Dernière révision: 2026-07-06
Statut: Préparation — à ouvrir après fermeture P2
Auteur: Marc-André Dufour
---

# Index P3 — Stabilisation Produit

## Rôle du document

Cet index centralise les documents préparatoires de la phase P3.

P3 doit rester en statut préparation tant que P2 n’est pas officiellement fermée.

---

## Condition d’ouverture P3

```text
P3 peut être ouverte seulement lorsque :
1. npm run check:backend est vert.
2. npm run check:desktop est vert.
3. GitHub Actions backend-guards est verte.
4. GitHub Actions desktop-guards est verte.
5. P2 closure est mise à jour avec validation confirmée.
```

---

## Documents principaux

| Document | Rôle | Statut |
|---|---|---|
| `SYSTEME_MAD/10-ROADMAP/p3-stabilisation-produit.md` | Plan principal P3 | Préparation |
| `SYSTEME_MAD/10-ROADMAP/p3-backlog-priorise.md` | Backlog P3 priorisé | Préparation |
| `SYSTEME_MAD/10-ROADMAP/p3-criteres-fermeture.md` | Critères de fermeture P3 | Préparation |
| `SYSTEME_MAD/10-ROADMAP/p4-preparation-acquisition-premiers-clients.md` | Préparation P4, non ouverte | Future |

---

## Checklists P3 préparées

| Checklist | Rôle | Priorité | Statut |
|---|---|---|---|
| CHK-070 — Smoke tests backend + desktop-agent | Validation manuelle critique post-guards | P0 | À exécuter |
| CHK-071 — Parcours revenu complet | Stabiliser le moteur revenus | P0 | À exécuter |
| CHK-072 — Mobile iPhone/Safari critical paths | Valider UX mobile réelle | P0 | À exécuter |
| CHK-073 — Matrice plans/modules officielle | Clarifier accès, plans, subscriptions | P0 | À valider |
| CHK-074 — Desktop-agent smoke test exécuté | Preuve d’exécution terrain desktop | P0 | À exécuter localement |
| CHK-075 — Copy UX non-médicale | Protéger langage produit/cognition | P0 | À exécuter |
| CHK-076 — Runbook incident minimal | Préparer opérations premiers clients | P1 | À exécuter |
| CHK-077 — Guide installation desktop-agent client | Préparer distribution client desktop | P1 | À préparer |
| CHK-078 — Consentement progressif et privacy | Encadrer modules sensibles | P0 | À valider |
| CHK-079 — Erreurs connues client/support | Préparer support premiers clients | P1 | À préparer |
| CHK-080 — Readiness premiers clients | Définir go/no-go client réel | P0 | À valider |
| CHK-081 — Branch protection et CI gates | Exiger les checks avant merge | P0 | À confirmer GitHub |
| CHK-082 — Observabilité minimale / Dashboard santé | Détecter incidents critiques | P1 | À préparer |
| CHK-083 — Tests dynamiques multi-tenant | Compléter les guards par runtime tests | P1 | À implémenter |
| CHK-084 — Release P3 | Encadrer publication staging/prod | P1 | À préparer |
| CHK-085 — Onboarding premier client | Encadrer activation du premier client | P0 | À préparer |
| CHK-086 — Registre des environnements | Clarifier local/test/staging/prod | P1 | À préparer |
| CHK-087 — Sauvegarde et restauration | Protéger données clients et restore | P1 | À préparer |
| CHK-088 — Stratégie E2E P3 | Prioriser E2E produit | P1 | À préparer |
| CHK-089 — Accessibilité minimale | Garantir utilisabilité réelle | P1 | À vérifier |
| CHK-090 — Compatibilité navigateurs/appareils | Définir support testé | P1 | À vérifier |
| CHK-091 — Revue pricing et offres | Aligner plans, Stripe, MRR et discours | P0 | À décider |

---

## Ordre recommandé d’exécution

```text
1. Fermer P2 après validation backend + desktop-agent.
2. Confirmer CHK-081 Branch protection / CI gates.
3. Valider CHK-073 Matrice plans/modules.
4. Valider CHK-091 Revue pricing/offres.
5. Valider CHK-078 Consentement progressif/privacy.
6. Exécuter CHK-071 Parcours revenu complet.
7. Exécuter CHK-072 Mobile iPhone/Safari.
8. Exécuter CHK-074 Desktop-agent smoke test.
9. Auditer CHK-075 Copy UX non-médicale.
10. Valider CHK-080 Readiness premiers clients.
11. Préparer CHK-077 Guide installation desktop-agent client.
12. Préparer CHK-076 Runbook incident minimal avant client actif.
13. Préparer CHK-079 Erreurs connues support.
14. Préparer CHK-082 Observabilité minimale.
15. Prioriser CHK-083 Tests dynamiques multi-tenant.
16. Préparer CHK-084 Release P3.
17. Préparer CHK-085 Onboarding premier client.
18. Préparer CHK-086 Registre des environnements.
19. Préparer CHK-087 Sauvegarde/restauration.
20. Préparer CHK-088 Stratégie E2E P3.
21. Vérifier CHK-089 Accessibilité minimale.
22. Vérifier CHK-090 Compatibilité navigateurs/appareils.
23. Exécuter CHK-070 comme synthèse smoke tests.
24. Valider `p3-criteres-fermeture.md` avant fermeture P3.
```

---

## P3 P0 — Bloc minimum avant client réel

| Bloc | Document | Résultat attendu |
|---|---|---|
| Guards | P2 closure | Backend + desktop-agent verts |
| CI gates | CHK-081 | Checks requis avant merge |
| Revenu | CHK-071 | Client → facture → paiement vérifié |
| Mobile | CHK-072 | iPhone/Safari utilisable sur pages critiques |
| Plans/modules | CHK-073 | Admin/internal/trial/solo/PME clarifiés |
| Pricing | CHK-091 | Prix/offres/MRR alignés |
| Desktop | CHK-074 | Agent démarre, track, sync, queue, quitte |
| Consentement | CHK-078 | Modules sensibles expliqués/contrôlés |
| Readiness | CHK-080 | Go/no-go client clair |
| Onboarding | CHK-085 | Premier client activable proprement |
| Copy | CHK-075 | Aucun claim médical ou mental abusif |

---

## P3 P1 — Bloc avant vente élargie

| Bloc | Document | Résultat attendu |
|---|---|---|
| Support | CHK-076 | Runbook incident prêt |
| Installation desktop | CHK-077 | Client peut installer/comprendre/désinstaller |
| Support client | CHK-079 | Réponses erreurs fréquentes prêtes |
| Observabilité | CHK-082 | Incidents P0/P1 visibles |
| Tests runtime | CHK-083 | Org A/B vérifié sur surfaces critiques |
| Release | CHK-084 | Release contrôlée et rollback minimal prévu |
| Environnements | CHK-086 | Cibles local/test/staging/prod claires |
| Backup/restore | CHK-087 | Restore documenté/testable |
| E2E | CHK-088 | Parcours critiques priorisés |
| Accessibilité | CHK-089 | Parcours P0 utilisables |
| Compatibilité | CHK-090 | Navigateurs/appareils supportés définis |

---

## Règles P3

```text
Pas de nouvelle grosse feature avant stabilité des parcours P0.
Pas de claim médical.
Pas de module sans matrice plan/module.
Pas de surface sensible sans guard ou checklist.
Pas de consentement global vague pour une surface sensible.
Pas de prix/offre qui ne correspond pas à la matrice modules.
Pas de client réel sans readiness go/no-go.
Pas de release sans rollback minimal documenté.
Pas de fermeture P3 sans smoke tests exécutés.
```

---

## Statut actuel

Statut : **P3 préparée, non ouverte officiellement**.
