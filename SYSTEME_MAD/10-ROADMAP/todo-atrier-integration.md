---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 4.2
Dernière révision: 2026-07-02
Statut: Roadmap opérationnelle / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# TODO — Intégration consolidée du dossier `atrier`

## 1. Résumé exécutif

Le dossier `docs/research/atrier` est le bac brut de recherche non triée.

Tout document qui en sort doit suivre le pipeline :

```text
atrier -> analyse MADPROOF -> résumé propre -> classification -> TODO -> intégration SYSTEME_MAD
```

Règle permanente :

```text
Pas MADPROOF = pas officiel.
```

## 2. Fondation MADPROOF terminée

| Action | Fichier | Statut |
|---|---|---|
| Matrice officielle MVP / R&D / Clinique / Interdit | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Fait |
| Template fiche claim | `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Fait |
| Registre des claims | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Fait |
| Index MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/README.md` | Fait |
| README zone brute `atrier` | `docs/research/atrier/README.md` | Fait |

## 3. Standards, ADR et checklists terminés

| Axe | Fichier | Statut |
|---|---|---|
| ADR Time Tracking vs Monitoring | `SYSTEME_MAD/04-ADR/ADR-time-tracking-vs-monitoring.md` | Fait |
| Standard Web mobile / PWA | `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Fait / v1.1 |
| Checklist PWA mobile | `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Fait / v1.1 |
| Checklist Loi 25 / vie privée | `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Fait / v1.1 |
| Checklist sécurité SaaS lite | `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Fait / v1.1 |
| Checklist fiscale R&D / RS&DE | `SYSTEME_MAD/09-CHECKLISTS/chk-fiscal-rd-sred.md` | Fait / v1.0 |
| Standard Accessibilité Web | `SYSTEME_MAD/03-STANDARDS/std-accessibilite-web.md` | Fait |
| Checklist WCAG 2.2 / COGA | `SYSTEME_MAD/09-CHECKLISTS/chk-web-accessibilite-wcag22.md` | Fait |
| Checklist dépendances / contenus tiers | `SYSTEME_MAD/09-CHECKLISTS/chk-open-source-licenses.md` | Fait |
| Registre R&D / preuves | `SYSTEME_MAD/06-OPERATIONS-INTERNES/registre-rd-sred.md` | Fait |

## 4. Résumés issus de `atrier` déjà classés

| Axe | Fichier | Statut |
|---|---|---|
| MADSuite Spec V2 cognitive | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/resume-atrier-madsuite-spec-v2.md` | Classé R&D fort |
| Time tracking / monitoring | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/resume-atrier-time-monitoring-ethique.md` | Classé éthique produit |
| Web mobile / HTML / CSS / JS / accessibilité | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Classé engineering |
| Sécurité / vie privée / fiscal / juridique | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/resume-atrier-securite-vie-privee-juridique-fiscal.md` | Classé compliance |
| GPS / géospatial / offline | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Classé module futur |

## 5. Bloc Web technique — terminé

| Source | Sortie MADPROOF | Statut |
|---|---|---|
| `Recherche-html.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md` | Fait |
| `Recherche-css.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-css.md` | Fait |
| `Recherche-JavaScript.md` | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-javascript.md` | Fait |
| Fiches Web consolidées | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/compatibilite-web-apis-fallbacks.md` | Fait |
| Standards durables Web/PWA extraits | `std-web-mobile.md` + `chk-pwa-mobile.md` | Fait |

## 6. Bloc compliance — terminé pour les sources principales

| Source / action | Sortie | Statut |
|---|---|---|
| `Recherche-vieprivee.md` | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-vieprivee.md` | Fait |
| Alignement checklist Loi 25 | `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Fait / v1.1 |
| `Recherche-cybersecurite.md` | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-cybersecurite.md` | Fait |
| Alignement checklist sécurité SaaS | `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Fait / v1.1 |
| `Recherche-fiscale.md` | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-fiscale.md` | Fait |
| Checklist fiscale RS&DE | `SYSTEME_MAD/09-CHECKLISTS/chk-fiscal-rd-sred.md` | Fait / v1.0 |
| `Recherche-droitauteur.md` | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-droitauteur.md` | Fait |
| Checklist open source licenses | `SYSTEME_MAD/09-CHECKLISTS/chk-open-source-licenses.md` | À vérifier / aligner si nécessaire |

## 7. Bloc produit / terrain — à faire

| Source | Destination prévue | Statut |
|---|---|---|
| `Recherche-gps.md` | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/` | À faire |
| Spécifications géospatiales restantes | Dossier géospatial | À faire |

## 8. Décisions produit à confirmer plus tard

- [ ] Est-ce que MADSuite vise PWA installable en priorité ? Recommandé : oui.
- [ ] Est-ce que le desktop agent capture automatiquement l’app active ? Recommandé : oui, local et validé par l’utilisateur.
- [x] Exclure les fonctions de surveillance invasive du MVP cognitif.
- [x] Garder le géospatial comme module futur séparé.
- [x] Garder fiscalité/droit comme checklists internes, jamais comme conseil professionnel.

## 9. Priorité recommandée immédiate

Ordre conseillé :

1. Vérifier / aligner `chk-open-source-licenses.md` avec la fiche IP.
2. Revenir ensuite au bloc géospatial / terrain.
3. Traiter `Recherche-gps.md` et les spécifications associées.

## 10. Note finale

Le système MADPROOF est la couche de gouvernance documentaire du projet.

Le dossier `atrier` n’est pas une source officielle. C’est une zone d’entrée brute.