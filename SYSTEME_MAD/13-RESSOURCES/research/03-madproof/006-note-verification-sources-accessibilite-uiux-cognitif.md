---
Projet: MAD DevOps
Document: Note de vérification — Sources accessibilité et UI/UX cognitif
Version: 1.0
Dernière révision: 2026-07-01
Statut: À vérifier
Auteur: Marc-André Dufour
---

# Note de vérification — Sources accessibilité et UI/UX cognitif

## Objectif

Capturer la seconde passe de vérification des sources accessibilité / UI-UX cognitif, sans transformer automatiquement les références en preuves officielles BaseMAD.

Cette note complète :

```text
005-liste-verification-accessibilite-uiux-cognitif-site-web.md
```

---

## Décision MADPROOF

```text
La seconde passe améliore la vérifiabilité, mais ne suffit pas à marquer toutes les sources comme validées.
Les sources normatives officielles peuvent être privilégiées.
Les articles payants ou DOI-only doivent rester à confirmer par page source officielle, résumé éditeur ou accès académique.
Les erreurs de numérotation WCAG doivent être corrigées avant toute bibliographie finale.
```

---

# 1. Statut par type de source

| Type | Statut MADPROOF | Décision |
|---|---|---|
| W3C / WCAG / COGA | Fort | À privilégier. |
| WebAIM | Fort | À privilégier pour tendances et outils. |
| Design systems officiels | Fort | À utiliser comme références pratiques. |
| NN/g articles gratuits | Bon | À utiliser comme UX guidance, pas comme norme. |
| Rapports NN/g payants | Restreint | Ne pas citer si non consultés. |
| Articles académiques DOI-only | À confirmer | Citer seulement si page officielle ou résumé consulté. |
| Études de cas commerciales | Fragile | Ne pas citer sans source primaire précise. |
| Cadre légal | À vérifier | Vérifier sur sources gouvernementales à jour. |

---

# 2. Corrections obligatoires WCAG

La bibliographie proposée contient encore deux erreurs de numérotation.

## Accessible Authentication

Correction :

```text
3.3.7 = Redundant Entry
3.3.8 = Accessible Authentication (Minimum)
3.3.9 = Accessible Authentication (Enhanced)
```

## Focus Appearance

Correction :

```text
2.4.11 = Focus Not Obscured (Minimum)
2.4.12 = Focus Not Obscured (Enhanced)
2.4.13 = Focus Appearance
```

## Target Size

Correction :

```text
2.5.5 = Target Size (Enhanced)
2.5.8 = Target Size (Minimum)
```

---

# 3. Sources à conserver en priorité

## Normatives / publiques

- W3C WCAG 2.2;
- W3C COGA Making Content Usable;
- WebAIM Million;
- WebAIM Cognitive Disabilities;
- WebAIM Color-blindness;
- Material Design Accessibility;
- Apple Human Interface Guidelines Accessibility;
- Microsoft Fluent Accessibility;
- U.S. Web Design System;
- GOV.UK Service Manual Accessibility;
- Canada.ca Guide de rédaction;
- SGQRI 008, après vérification à jour;
- ADA.gov, après vérification à jour.

---

# 4. Sources académiques à classer prudemment

| Source | Statut proposé | Usage recommandé |
|---|---|---|
| Schmutz et al. 2021 — complexité web et charge cognitive | À confirmer par page éditeur | Peut soutenir la prudence sur la complexité visuelle, sans chiffres. |
| Brewer et al. 2023 — revue accessibilité cognitive | À confirmer par page ACM | Peut soutenir l’importance de l’accessibilité cognitive, sans chiffres si non consulté. |
| Tanaka et al. 2022 — redondance couleur | À confirmer par page éditeur | Peut soutenir le double codage couleur + texte/forme, sans chiffres si non consulté. |
| O’Brien & Lebow 2022 — novice/expert | À confirmer | Remplacer par NN/g gratuit si l’accès est restreint. |

---

# 5. Remplacements recommandés

| Besoin | Source principale recommandée | Source secondaire |
|---|---|---|
| Accessibilité générale | W3C WCAG 2.2 | WebAIM |
| Accessibilité cognitive | W3C COGA | WebAIM Cognitive Disabilities |
| Couleur / daltonisme | WCAG 1.4.1 + WebAIM | Material Design / Apple / Microsoft |
| Cibles tactiles | WCAG 2.5.8 et 2.5.5 | Material Design / Apple HIG |
| Débutant vs expert | NN/g articles gratuits | GOV.UK content design |
| Faible stimulation | W3C COGA + bonnes pratiques design systems | À sourcer davantage |
| Site public simple | Canada.ca / GOV.UK / COGA | UX générale |

---

# 6. Bibliographie finale — règle MADPROOF

Une bibliographie peut être marquée “vérifiable” seulement si :

```text
la source officielle est accessible,
ou le DOI pointe vers une page éditeur consultée,
ou le document est un standard public,
ou la source gouvernementale est à jour,
ou la page de référence indique clairement le contenu cité.
```

Ne pas inclure dans une bibliographie finale :

- chiffres non lus dans la source primaire;
- citations croisées non consultées;
- rapports payants non lus;
- cas d’affaires sans source officielle;
- montants de sanctions non vérifiés par juridiction;
- dates légales non confirmées sur source gouvernementale.

---

# 7. Application au site MAD DevOps

Pour le site MAD DevOps, il n’est pas nécessaire de citer toutes les études académiques.

La base suffisante pour agir :

```text
WCAG 2.2 AA comme cible interne;
COGA pour accessibilité cognitive;
WebAIM pour validation pratique;
Canada.ca / GOV.UK pour langage clair;
Design systems officiels pour couleur, focus, taille cible et interaction.
```

---

# 8. Décision finale de cette passe

```text
Décision : conserver cette seconde passe comme note de vérification complémentaire.
Statut : À vérifier.
Utilité : élevée.
Risque : moyen si utilisée comme bibliographie finale sans corrections WCAG et vérification des pages éditeurs.
Prochaine action : produire une checklist opérationnelle CHK-019 pour le site MAD DevOps à partir des sources normatives fortes.
```
