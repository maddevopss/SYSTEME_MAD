---
Projet: SYSTEME_MAD
Document: Checklist de stabilisation du cœur de SYSTEME_MAD
Version: 1.0
Dernière révision: 2026-07-19
Statut: Officiel
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# CHK-010 — Stabilisation du cœur de SYSTEME_MAD

Cette checklist applique le contrat `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md`.

## A. Constitution et autorité

- [ ] La Constitution possède les métadonnées obligatoires.
- [ ] Son statut correspond à son autorité réelle.
- [ ] L'ordre d'autorité documentaire est cohérent avec le Manifeste et le registre.
- [ ] Les non-négociables et la souveraineté des bâtisseurs sont référencés.
- [ ] Aucun document actif ne contredit silencieusement la Constitution.

## B. Propriété documentaire

- [ ] Chaque responsabilité fondamentale possède un propriétaire principal identifiable.
- [ ] Les documents complémentaires déclarent leur relation au propriétaire.
- [ ] Aucun doublon critique actif n'est connu.
- [ ] Les documents remplacés sont reliés à leur successeur ou archivés.

## C. Fondations

- [ ] Les fondations actives ont un statut explicite.
- [ ] Les fondations candidates ne sont pas présentées comme scientifiquement validées.
- [ ] Les dépendances principales entre fondations sont documentées.
- [ ] Les produits et implémentations ne redéfinissent pas rétroactivement les fondations.

## D. MADPROOF

- [ ] Les faits, hypothèses, extrapolations et décisions sont distingués.
- [ ] Les affirmations structurantes ont des preuves proportionnées à leur portée.
- [ ] Les limites et incertitudes sont visibles.
- [ ] Les claims candidats sont reliés au registre MADPROOF lorsqu'applicable.
- [ ] Aucun résultat produit n'est généralisé sans justification.

## E. Canon et mémoire institutionnelle

- [ ] Le Canon actif est distingué des archives et des explorations.
- [ ] Les règles de remplacement conservent l'historique.
- [ ] Les décisions structurantes sont traçables par PR, ADR ou registre.
- [ ] Les relations `dépend de`, `complète`, `contraint`, `informe`, `implémente`, `soutient`, `valide`, `remplace`, `archive` ou `contredit` sont utilisées de façon cohérente.

## F. Qualité automatisée

- [ ] La validation des entêtes YAML passe.
- [ ] La validation des liens Markdown passe.
- [ ] L'audit de gouvernance documentaire passe.
- [ ] Le tableau de bord documentaire est à jour.
- [ ] Les contrôles ne masquent aucun échec critique par une exception générale.

## G. Dette et propositions ouvertes

- [ ] Les propositions encore non stabilisées sont listées.
- [ ] Chaque conflit connu possède une décision, un propriétaire ou une échéance documentaire.
- [ ] Les doublons absorbés sont fermés avec une trace vers leur propriétaire final.
- [ ] Aucun élément exploratoire n'est promu uniquement pour fermer la campagne.

## H. Décision de version

- [ ] Les changements depuis la dernière version stable sont résumés.
- [ ] Les risques résiduels sont documentés.
- [ ] La décision est assumée par un bâtisseur identifiable.
- [ ] La version et la date de révision des documents promus sont mises à jour.
- [ ] La déclaration de stabilité précise son périmètre et n'affirme pas davantage que les preuves disponibles.

## Résultat

- **Stable** : toutes les exigences critiques sont satisfaites et les écarts mineurs sont documentés.
- **Stable sous réserve** : aucun conflit fondamental, mais des écarts non critiques possèdent un propriétaire et une trajectoire explicite.
- **Non stable** : conflit d'autorité, doublon critique, preuve insuffisante, contrôle essentiel défaillant ou responsabilité fondamentale sans propriétaire.
