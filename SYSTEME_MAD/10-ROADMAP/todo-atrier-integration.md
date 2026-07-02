---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 3.4
Dernière révision: 2026-07-02
Statut: Roadmap opérationnelle / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# TODO — Intégration consolidée du dossier `atrier`

## 1. Résumé exécutif

Le dossier `docs/research/atrier` est le bac brut de recherche non triée.

Les documents qui en sortent doivent maintenant passer par le pipeline MADPROOF :

```text
atrier -> analyse MADPROOF -> résumé propre -> classification -> TODO -> intégration SYSTEME_MAD
```

La première passe a produit des résumés et documents de gouvernance maintenant rangés dans `SYSTEME_MAD/...`.

## 2. Règles permanentes

- [x] Garder `docs/research/atrier` comme zone brute / non officielle.
- [x] Ne pas rendre officiel un claim non classé MADPROOF.
- [x] Ranger les documents validés hors de `docs/research/atrier`.
- [x] Éviter le double système `docs/` vs `SYSTEME_MAD/`.
- [x] Utiliser YAML standard sur les nouveaux fichiers Markdown.
- [x] Garder les docs officielles professionnelles et prudentes.

## 3. Terminé — Fondation MADPROOF

| Action | Fichier | Statut |
|---|---|---|
| Créer la matrice officielle MVP / R&D / Clinique / Interdit | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Fait |
| Mettre à jour le template de fiche claim | `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Fait |
| Mettre à jour le registre des claims | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Fait |
| Mettre à jour l’index MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/README.md` | Fait |
| Déplacer les résumés research hors de `docs/research` | `SYSTEME_MAD/13-RESSOURCES/research/...` | Fait |

## 4. Terminé — Standards, ADR et checklists

| Axe | Fichier | Statut |
|---|---|---|
| ADR Time Tracking vs Monitoring | `SYSTEME_MAD/04-ADR/ADR-time-tracking-vs-monitoring.md` | Fait |
| Standard Web mobile / PWA | `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Fait |
| Standard Accessibilité Web | `SYSTEME_MAD/03-STANDARDS/std-accessibilite-web.md` | Fait |
| Checklist PWA mobile | `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Fait |
| Checklist WCAG 2.2 / COGA | `SYSTEME_MAD/09-CHECKLISTS/chk-web-accessibilite-wcag22.md` | Fait |
| Checklist Loi 25 / vie privée | `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Fait |
| Checklist sécurité SaaS lite | `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Fait |
| Checklist dépendances / contenus tiers | `SYSTEME_MAD/09-CHECKLISTS/chk-open-source-licenses.md` | Fait |
| Registre R&D / preuves | `SYSTEME_MAD/06-OPERATIONS-INTERNES/registre-rd-sred.md` | Fait |

## 5. Résumés issus de `atrier` déjà classés

| Axe | Fichier | Statut |
|---|---|---|
| MADSuite Spec V2 cognitive | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/resume-atrier-madsuite-spec-v2.md` | Classé R&D fort |
| Time tracking / monitoring | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/resume-atrier-time-monitoring-ethique.md` | Classé éthique produit |
| Web mobile / HTML / CSS / JS / accessibilité | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/resume-atrier-web-mobile-accessibilite.md` | Classé engineering |
| Sécurité / vie privée / fiscal / juridique | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/resume-atrier-securite-vie-privee-juridique-fiscal.md` | Classé compliance |
| GPS / géospatial / offline | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/resume-atrier-geospatial-gps-offline.md` | Classé module futur |

## 6. Prochaines actions P1 — Solidifier le système MADPROOF

### 6.1 Créer la checklist MADPROOF unifiée

- [x] Vérifier si `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md` existe et est à jour.
- [x] L’aligner avec la matrice MVP / R&D / Clinique / Interdit.
- [x] Ajouter gate : claim public interdit sans registre.
- [x] Ajouter gate : claim légal/fiscal/sécurité doit être vérifié sur source officielle récente.
- [x] Ajouter gate : claim médical/clinique doit être exclu ou marqué clinique.

### 6.2 Mettre à jour le playbook claim MADPROOF

- [x] Vérifier `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`.
- [x] L’aligner avec le template V2.
- [x] Ajouter procédure : claim brut -> classification -> reformulation -> registre.
- [x] Ajouter procédure de suppression d’un claim interdit.

### 6.3 Ajouter un README dans `docs/research/atrier`

- [x] Créer ou mettre à jour `docs/research/atrier/README.md`.
- [x] Indiquer que le dossier est brut / non officiel.
- [x] Ajouter la règle : tout fichier traité doit sortir vers `SYSTEME_MAD/...`.
- [x] Ajouter le lien vers la matrice MADPROOF.
- [x] Ajouter la procédure de tri.

## 7. Prochaines actions P2 — Nettoyage du contenu `atrier`

### 7.1 Nettoyer les fichiers convertis depuis Word

- [ ] Corriger les blocs Markdown échappés issus de conversion Word.
- [ ] Retirer les phrases conversationnelles comme “Chef ?” dans docs officielles.
- [ ] Remplacer les formulations trop fortes : “obligatoire”, “complet”, “partout”, “rejet immédiat”.
- [ ] Séparer fait vérifié, bonne pratique, hypothèse produit, idée R&D.
- [ ] Ajouter sources officielles à chaque claim légal/fiscal/sécurité.

### 7.2 Traiter les sources techniques Web

- [x] Traiter `Recherche-html.md` -> `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-html.md`.
- [x] Traiter `Recherche-css.md` -> `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-css.md`.
- [x] Traiter `Recherche-JavaScript.md` -> `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-recherche-javascript.md`.
- [x] Consolider les fiches Web dans `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/compatibilite-web-apis-fallbacks.md`.
- [ ] Extraire seulement les standards durables vers `std-web-mobile.md` si nécessaire.
- [x] Marquer les APIs récentes comme `À vérifier` ou `R&D` si support partiel pour `Recherche-html.md`.
- [x] Marquer les fonctionnalités CSS récentes comme `À vérifier`, `R&D` ou `MVP sous fallback` pour `Recherche-css.md`.
- [x] Marquer les APIs JavaScript sensibles comme `MVP sous conditions`, `R&D`, `À vérifier` ou `Interdit MVP` selon privacy/sécurité.

### 7.3 Traiter les sources compliance

- [ ] Traiter `Recherche-vieprivee.md`.
- [ ] Traiter `Recherche-cybersecurite.md`.
- [ ] Traiter `Recherche-fiscale.md`.
- [ ] Traiter `Recherche-droitauteur.md`.
- [ ] Garder les sujets fiscal/juridique comme internes, jamais comme conseil professionnel.

### 7.4 Traiter les sources produit / terrain

- [ ] Traiter `Recherche-gps.md`.
- [ ] Traiter les spécifications géospatiales restantes.
- [ ] Garder le géospatial dans `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/`.
- [ ] Ne pas mélanger avec le cœur MADSuite cognitif.

## 8. Décisions produit à confirmer plus tard

- [ ] Est-ce que MADSuite vise PWA installable en priorité ? Recommandé : oui.
- [ ] Est-ce que le desktop agent capture automatiquement l’app active ? Recommandé : oui, local et validé par l’utilisateur.
- [x] Est-ce qu’on exclut screenshots/keylogging du MVP ? Décision actuelle : oui.
- [x] Est-ce que le géospatial devient un module futur séparé ? Décision actuelle : oui.
- [x] Est-ce que les documents fiscalité/droit deviennent des checklists internes seulement ? Décision actuelle : oui.

## 9. Priorité recommandée immédiate

Ordre conseillé :

1. Vérifier si `std-web-mobile.md` et `chk-pwa-mobile.md` doivent recevoir une courte section “API avancée = fallback + consentement”.
2. Passer ensuite aux fichiers compliance : vie privée, cybersécurité, fiscalité, droit d’auteur.

## 10. Note finale

Le système MADPROOF est maintenant la couche de gouvernance documentaire du projet.

Le dossier `atrier` n’est pas une source officielle. C’est une zone d’entrée brute.

La prochaine étape est de faire respecter ce pipeline à chaque nouveau fichier, claim ou idée :

```text
brut -> MADPROOF -> décision -> rangement -> TODO
```