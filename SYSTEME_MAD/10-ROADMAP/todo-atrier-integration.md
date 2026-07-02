---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 5.0
Dernière révision: 2026-07-02
Statut: Roadmap opérationnelle / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# TODO — Intégration consolidée du dossier `atrier`

## 1. Règle centrale

```text
Pas MADPROOF = pas officiel.
```

Pipeline obligatoire :

```text
atrier -> analyse MADPROOF -> résumé propre -> classification -> TODO -> intégration SYSTEME_MAD
```

## 2. Fondation MADPROOF — terminé

| Action | Fichier | Statut |
|---|---|---|
| Matrice MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Fait |
| Template claim | `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Fait |
| Registre claims | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Fait |
| Index MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/README.md` | Fait |
| README `atrier` | `docs/research/atrier/README.md` | Fait |
| Inventaire final `atrier` | `SYSTEME_MAD/10-ROADMAP/inventaire-final-atrier-madproof.md` | Fait / v1.0 |

## 3. Blocs traités

| Bloc | Statut |
|---|---|
| Web / PWA / accessibilité | Terminé |
| Compliance / sécurité / fiscal / droit / open source | Terminé pour sources principales |
| MADSuite cognition / time monitoring | Terminé |
| Géospatial / terrain | Structure initiale terminée |

## 4. Blocs restants

| Bloc | Sources principales | Priorité |
|---|---|---|
| Distribution / anti-rejet | `specifications_anti_rejet.md`, `specifications_mobiles_android.md`, `specifications_reseau_securite.md` | P1 |
| Agenda / planification / sync | `specifications_agenda_planification.md`, `specifications_agenda_consolidation.md` | P2 |
| Plateformes desktop / OS | `specifications_windows*.md`, `specifications_linux*.md`, `specifications_chromeos.md`, `specifications_multiplateforme.md` | P3 |
| Cheatsheets dev | `commandes_node_prisma_tsx.md`, sections restantes de `gemini-code-1783002804829.md` | P4 |

## 5. Décisions confirmées

- [x] `docs/research/atrier` reste une zone brute non officielle.
- [x] Les documents validés sortent vers `SYSTEME_MAD/...`.
- [x] Les fonctions de surveillance invasive restent exclues du MVP cognitif.
- [x] Le géospatial reste un module futur séparé.
- [x] Fiscalité/droit restent internes et nécessitent validation professionnelle.
- [x] La localisation ne doit pas être utilisée pour inférer un état cognitif.
- [x] Les mesures GPS ne deviennent jamais contractuelles automatiquement.

## 6. Priorité immédiate

Traiter :

```text
docs/research/atrier/specifications_anti_rejet.md
```

Sorties recommandées :

```text
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-anti-rejet.md
SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md
```

## 7. Note finale

Le système MADPROOF est la couche de gouvernance documentaire du projet. Le dossier `atrier` n’est pas une source officielle.