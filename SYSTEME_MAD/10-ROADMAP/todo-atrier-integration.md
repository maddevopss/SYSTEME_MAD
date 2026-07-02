---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 5.4
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
| Distribution / anti-rejet | Structure initiale terminée |

## 4. Bloc distribution / anti-rejet — structure terminée

| Source / action | Sortie | Statut |
|---|---|---|
| `specifications_anti_rejet.md` | `fiche-madproof-distribution-anti-rejet.md` | Fait |
| Checklist release stores | `SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md` | Fait / v1.0 |
| `specifications_mobiles_android.md` | `fiche-madproof-distribution-mobile.md` | Fait |
| `specifications_reseau_securite.md` | `fiche-madproof-distribution-reseau-securite.md` | Fait |
| Standard distribution multiplateforme | `SYSTEME_MAD/03-STANDARDS/std-distribution-multiplateforme.md` | Fait / v1.0 |

## 5. Blocs restants

| Bloc | Sources principales | Priorité |
|---|---|---|
| Agenda / planification / sync | `specifications_agenda_planification.md`, `specifications_agenda_consolidation.md` | P2 |
| Plateformes desktop / OS | `specifications_windows*.md`, `specifications_linux*.md`, `specifications_chromeos.md`, `specifications_multiplateforme.md` | P3 |
| Cheatsheets dev | `commandes_node_prisma_tsx.md`, sections restantes de `gemini-code-1783002804829.md` | P4 |

## 6. Décisions confirmées

- [x] `docs/research/atrier` reste une zone brute non officielle.
- [x] Les documents validés sortent vers `SYSTEME_MAD/...`.
- [x] Les fonctions de surveillance invasive restent exclues du MVP cognitif.
- [x] Le géospatial reste un module futur séparé.
- [x] Fiscalité/droit restent internes et nécessitent validation professionnelle.
- [x] La localisation ne doit pas être utilisée pour inférer un état cognitif.
- [x] Les mesures GPS ne deviennent jamais contractuelles automatiquement.
- [x] Une checklist anti-rejet réduit les risques, sans garantir l’acceptation store.
- [x] La stratégie mobile MADSuite reste PWA-first tant qu’un besoin natif clair n’est pas démontré.
- [x] Les exceptions réseau local doivent rester limitées, documentées et testées.

## 7. Priorité immédiate

Traiter :

```text
docs/research/atrier/specifications_agenda_planification.md
```

Sortie recommandée :

```text
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/agenda/fiche-madproof-agenda-planification-sync.md
```

## 8. Note finale

Le système MADPROOF est la couche de gouvernance documentaire du projet. Le dossier `atrier` n’est pas une source officielle.