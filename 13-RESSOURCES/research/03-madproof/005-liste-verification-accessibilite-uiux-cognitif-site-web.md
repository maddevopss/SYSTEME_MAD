---
Projet: MAD DevOps
Document: Liste de vérification MADPROOF — Accessibilité et UI/UX cognitif site Web
Version: 1.0
Dernière révision: 2026-07-01
Statut: À vérifier
Auteur: Marc-André Dufour
---

# Liste de vérification MADPROOF — Accessibilité et UI/UX cognitif site Web

## Objectif

Lister les éléments à vérifier avant d’intégrer la recherche accessibilité / UI-UX cognitif dans BaseMAD et dans le chantier du site Web MAD DevOps.

Ce document sert à distinguer :

- les fondations fiables;
- les claims à reformuler;
- les chiffres à vérifier;
- les sources à retrouver;
- les recommandations utiles au site Web;
- les éléments UI/UX cognitifs déjà collectés à ne pas oublier.

---

## Décision de départ

```text
Ne pas intégrer la recherche brute telle quelle comme source officielle.
La conserver comme matière première à durcir.
Extraire les principes utiles.
Vérifier les références avant tout usage public.
```

---

# 1. Sources normatives à vérifier

| Élément | Vérification à faire | Statut |
|---|---|---|
| WCAG 2.2 | Confirmer les critères cités et leurs numéros exacts. | `[À faire]` |
| WCAG 3.0 | Confirmer que le document est encore un brouillon et ne pas l’utiliser comme obligation. | `[À faire]` |
| W3C COGA | Vérifier les patterns cités et reformuler sans statistiques non sourcées. | `[À faire]` |
| WebAIM Million | Vérifier l’année et les chiffres exacts du rapport utilisé. | `[À faire]` |
| EN 301 549 | Vérifier la version applicable et son lien avec WCAG. | `[À faire]` |
| ISO 30071-1 | Vérifier la version et la portée exacte. | `[À faire]` |
| Material Design 3 | Vérifier les recommandations couleur/contraste et daltonisme. | `[À faire]` |
| Microsoft Inclusive Design | Vérifier les chiffres avant citation. | `[À faire]` |

---

# 2. Corrections WCAG à appliquer

| Claim brut | Problème | Correction attendue | Statut |
|---|---|---|---|
| `3.3.7 Accessible Authentication` | Numéro probablement incorrect. | Vérifier : 3.3.7 Redundant Entry, 3.3.8 Accessible Authentication Minimum, 3.3.9 Enhanced. | `[À faire]` |
| `2.4.11 Focus Appearance` | Numéro probablement incorrect. | Vérifier : Focus Appearance correspond à 2.4.13 dans WCAG 2.2. | `[À faire]` |
| Focus ≥ 3:1 et ≥ 2 px | À confirmer précisément selon le critère. | Reprendre le wording officiel WCAG. | `[À faire]` |
| Cibles tactiles 44×44 | À relier au bon critère WCAG et niveau. | Vérifier 2.5.5 Target Size et 2.5.8 Target Size Minimum. | `[À faire]` |
| Dragging Movements | À confirmer. | Conserver si aligné WCAG 2.2. | `[À faire]` |

---

# 3. Sources scientifiques à retrouver avant usage

Ces références ne doivent pas être utilisées comme preuves tant que les titres, DOI et résultats n’ont pas été confirmés.

| Référence brute | À vérifier | Décision provisoire |
|---|---|---|
| O’Brien & Lebow 2022 — novice/expert navigation | Existence, titre exact, DOI, résultats. | Ne pas citer pour l’instant. |
| Schmutz et al. 2021 — fMRI et complexité web | Existence, DOI, méthodologie, résultats. | Ne pas citer pour l’instant. |
| Brewer et al. 2023 — cognitive and learning disabilities | Existence exacte, titre, méta-analyse ou non. | Ne pas citer pour l’instant. |
| Tanaka et al. 2022 — redundancy coding color vision | Existence, DOI, résultats. | Ne pas citer pour l’instant. |
| Grawemeyer et al. 2022 — anxiety and web navigation | Existence et pertinence. | Ne pas citer pour l’instant. |
| Birch 2022 — prévalence daltonisme | Existence et données exactes. | À vérifier. |

---

# 4. Études de cas à vérifier avant usage

| Cas | Vérification à faire | Décision provisoire |
|---|---|---|
| GOV.UK | Vérifier les chiffres de complétion, erreurs, coûts. | Garder comme inspiration, pas preuve chiffrée. |
| IKEA | Vérifier rapport exact et chiffres daltonisme/conversion. | Ne pas citer sans source primaire. |
| Airbnb | Vérifier rapport et chiffres d’usage accessibilité. | Ne pas citer sans source primaire. |
| BNP Paribas | Vérifier prix, chiffres support et satisfaction. | Ne pas citer sans source primaire. |
| BBC iPlayer | Vérifier chiffres sous-titres/audio description/satisfaction. | Garder source accessibilité générale. |
| Shopify Admin | Vérifier article UX et métriques SUS/support. | Ne pas citer sans source primaire. |
| La Poste | Vérifier rapport DSI et chiffres. | Ne pas citer sans source primaire. |
| Revenu Québec | Vérifier rapport annuel et chiffres 65+/support. | Ne pas citer sans source primaire. |

---

# 5. Cadre légal et normatif à vérifier

## Canada

| Sujet | Vérification à faire | Statut |
|---|---|---|
| Loi canadienne sur l’accessibilité | Confirmer les obligations exactes et entités visées. | `[À faire]` |
| Plans d’accessibilité | Confirmer fréquence, rapports et mécanismes de rétroaction. | `[À faire]` |
| Sanctions | Vérifier montants exacts et contexte. | `[À faire]` |
| CAN/ASC - EN 301 549 | Confirmer statut de norme et portée. | `[À faire]` |
| Guide Canada.ca | Vérifier exigences de langage clair. | `[À faire]` |

## Québec

| Sujet | Vérification à faire | Statut |
|---|---|---|
| SGQRI 008 | Confirmer version applicable, obligations et échéances. | `[À faire]` |
| WCAG 2.1 AA / 2.2 | Clarifier ce qui est obligatoire vs anticipé. | `[À faire]` |
| Déclaration d’accessibilité | Vérifier obligation exacte pour organismes publics. | `[À faire]` |
| Mécanisme de rétroaction | Vérifier obligation exacte. | `[À faire]` |
| Applicabilité au site MAD DevOps privé | Clarifier : obligation légale directe ou bonne pratique volontaire. | `[À faire]` |

## États-Unis

| Sujet | Vérification à faire | Statut |
|---|---|---|
| ADA Title II 2024 | Vérifier échéances exactes. | `[À faire]` |
| ADA Title III | Vérifier jurisprudence et ne pas sur-généraliser. | `[À faire]` |
| Section 508 | Vérifier niveau WCAG actuel. | `[À faire]` |
| USWDS | Garder comme référence de design system accessible. | `[À faire]` |

## Europe

| Sujet | Vérification à faire | Statut |
|---|---|---|
| European Accessibility Act | Vérifier date d’application et secteurs concernés. | `[À faire]` |
| Sanctions | Ne pas citer de montant sans source nationale précise. | `[À faire]` |
| EN 301 549 | Vérifier version et portée. | `[À faire]` |

---

# 6. Claims à reformuler

| Formulation brute | Risque | Formulation MADPROOF recommandée |
|---|---|---|
| `Cette étude prouve que...` | Trop fort. | `Les recommandations disponibles suggèrent que...` |
| `Améliore les troubles cognitifs de X %` | Claim médical ou non vérifié. | `Peut faciliter la compréhension ou la navigation, à valider avec utilisateurs.` |
| `Conçu pour TDAH/TSA` | Risque médical / ciblage trop étroit. | `Conception accessible et inclusive utile à plusieurs profils cognitifs et situationnels.` |
| `Réduit l’anxiété` | Claim santé mentale. | `Réduit les stimuli inutiles et les surprises d’interface.` |
| `Mode neurodivergent` | Risque de catégorisation. | `Mode faible stimulation` ou `mode simplifié`. |
| `Interface adaptée aux handicaps cognitifs` | Peut être acceptable mais prudent. | `Interface conçue avec des principes d’accessibilité cognitive.` |

---

# 7. Principes UI/UX cognitifs déjà collectés à ne pas oublier

Ces éléments font partie des acquis MADSuite / MAD Ariane / BaseMAD et doivent rester dans le chantier UI/UX cognitif.

## Réduction de charge cognitive

- Limiter le nombre de choix visibles à la fois.
- Utiliser la divulgation progressive.
- Garder une hiérarchie visuelle claire.
- Prioriser une action principale par écran.
- Éviter les panneaux ou menus inutiles.
- Réduire les interruptions et notifications.
- Préférer des blocs courts, lisibles et scannables.

## Reprise après interruption

- Afficher où l’utilisateur était.
- Afficher pourquoi ce contexte est pertinent.
- Proposer une prochaine action possible.
- Ne pas prétendre restaurer l’état mental.
- Ne pas détecter l’attention.
- Ne pas utiliser caméra, micro ou biométrie.
- Laisser l’utilisateur ignorer ou désactiver.

## Accessibilité cognitive

- Langage clair.
- Titres explicites.
- Formulaires courts.
- Étapes visibles.
- Messages d’erreur utiles.
- Prévention d’erreurs avant correction.
- Rappels contextuels non intrusifs.
- Cohérence des libellés.

## Débutants vs utilisateurs expérimentés

- Interface simple par défaut.
- Raccourcis ou accès rapides pour utilisateurs avancés.
- Ne pas cacher les actions essentielles.
- Ne pas forcer un mode expert.
- Prévoir un chemin guidé et un chemin rapide.

## Couleur et perception

- Ne jamais utiliser la couleur comme seul indicateur.
- Ajouter texte, icône, forme ou motif.
- Vérifier les contrastes.
- Tester les états hover/focus/disabled.
- Simuler daltonisme sur maquettes importantes.

## Motricité et interaction

- Boutons suffisamment grands.
- Espacement suffisant entre actions.
- Alternative au drag-and-drop.
- Navigation clavier fonctionnelle.
- Focus visible.
- Pas de piège clavier.

## Faible stimulation

- Éviter les animations automatiques.
- Éviter les carrousels agressifs.
- Éviter les sons automatiques.
- Prévenir si un lien ouvre un nouvel onglet.
- Garder les transitions sobres.
- Respecter les préférences de réduction de mouvement.

## Confiance et contrôle utilisateur

- Expliquer pourquoi une aide apparaît.
- Ne jamais forcer une action suggérée.
- Permettre de fermer, ignorer ou désactiver.
- Éviter les formulations culpabilisantes.
- Rendre les limites visibles.
- Préserver l’autonomie.

---

# 8. Recommandations directement applicables au site MAD DevOps

| Recommandation | Priorité | Source à relier |
|---|---|---|
| Cibler WCAG 2.2 AA comme standard interne. | Haute | WCAG |
| Écrire pour le commun des mortels. | Haute | Canada.ca / COGA |
| Éviter le jargon DevOps/cloud en page publique. | Haute | Stratégie MAD DevOps |
| Offrir une navigation simple : Accueil, Services, Réalisations, À propos, Contact. | Haute | UX générale / COGA |
| Mettre un CTA principal visible. | Haute | UX générale |
| Contraste texte/fond suffisant. | Haute | WCAG |
| Focus clavier visible. | Haute | WCAG |
| Formulaire court et clair. | Haute | COGA / WCAG |
| Aucun mouvement automatique essentiel. | Moyenne | Accessibilité / faible stimulation |
| Texte court, sections scannables. | Haute | COGA / langage clair |
| Couleur jamais utilisée seule. | Haute | WCAG |
| Déclaration d’accessibilité simple. | Moyenne | Bonne pratique / normes publiques |

---

# 9. Sources à privilégier pour la version durcie

Utiliser prioritairement :

- W3C WCAG 2.2;
- W3C COGA Making Content Usable;
- WebAIM Million;
- Canada.ca Design System / Guide de rédaction;
- SGQRI 008 pour contexte Québec;
- ADA.gov pour contexte États-Unis;
- European Accessibility Act pour contexte Europe;
- Material Design Accessibility;
- Microsoft Inclusive Design;
- USWDS;
- documentation officielle des navigateurs pour tests accessibilité.

Éviter les sources secondaires non vérifiées pour les chiffres d’impact.

---

# 10. Décision MADPROOF

```text
Décision : Garder comme matière première, ne pas publier tel quel.
Niveau : MADPROOF — à reformuler et sourcer.
Utilité : Forte pour le site Web MAD DevOps et le UI/UX cognitif MADSuite.
Risque : chiffres, DOI et études de cas non vérifiés.
Prochaine action : produire une checklist accessibilité site Web MAD DevOps fondée sur sources fiables.
```
