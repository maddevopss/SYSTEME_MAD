---
Projet: MAD DevOps
Document: CHK-019 — Validation accessibilité et UI/UX cognitif du site Web
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-019 — Validation accessibilité et UI/UX cognitif du site Web

## Objectif

Valider que le site Web MAD DevOps respecte la base interne UI/UX accessible et cognitive.

Cette checklist vise un site simple, compréhensible, utilisable, prévisible et moins fatigant.

---

## Documents liés

| Document | Rôle |
|---|---|
| `02-GUIDE/base-uiux-accessible-cognitive-mad-devops.md` | Base interne UI/UX accessible et cognitive. |
| `13-RESSOURCES/research/03-madproof/005-liste-verification-accessibilite-uiux-cognitif-site-web.md` | Vérifications MADPROOF à faire. |
| `13-RESSOURCES/research/03-madproof/006-note-verification-sources-accessibilite-uiux-cognitif.md` | Note de vérification complémentaire. |
| `02-GUIDE/architecture-site-web-mad-devops.md` | Architecture du site Web. |
| `07-TEMPLATES/template-contenu-site-complet-mad-devops.md` | Contenu complet du site. |

---

# 1. Clarté du message

| Point | Statut |
|---|---|
| Le site explique rapidement ce que fait MAD DevOps. | `[OK / À corriger]` |
| Le message évite le jargon DevOps/cloud inutile. | `[OK / À corriger]` |
| Les services sont nommés simplement : Web, Mobile, Automatisation, logiciels utiles. | `[OK / À corriger]` |
| Le visiteur comprend à qui s’adresse l’offre. | `[OK / À corriger]` |
| Le visiteur comprend quoi faire ensuite. | `[OK / À corriger]` |

---

# 2. Navigation

| Point | Statut |
|---|---|
| La navigation principale est simple. | `[OK / À corriger]` |
| Les liens principaux sont prévisibles. | `[OK / À corriger]` |
| Le menu mobile est clair et utilisable. | `[OK / À corriger]` |
| Aucun lien important n’est caché inutilement. | `[OK / À corriger]` |
| Les liens qui ouvrent un nouvel onglet sont annoncés si pertinent. | `[OK / À corriger]` |

---

# 3. Charge cognitive

| Point | Statut |
|---|---|
| Chaque section a un objectif clair. | `[OK / À corriger]` |
| Les textes sont courts et scannables. | `[OK / À corriger]` |
| Les paragraphes longs sont évités. | `[OK / À corriger]` |
| Une action principale ressort clairement. | `[OK / À corriger]` |
| Les informations secondaires ne surchargent pas l’écran. | `[OK / À corriger]` |

---

# 4. CTA et parcours

| Point | Statut |
|---|---|
| Le CTA principal est visible. | `[OK / À corriger]` |
| Le CTA principal est formulé simplement. | `[OK / À corriger]` |
| Le visiteur peut demander une rencontre ou contacter facilement. | `[OK / À corriger]` |
| Le formulaire de contact est court. | `[OK / À corriger]` |
| Le formulaire indique clairement les champs requis. | `[OK / À corriger]` |
| Les erreurs de formulaire expliquent comment corriger. | `[OK / À corriger]` |

---

# 5. Accessibilité visuelle

| Point | Statut |
|---|---|
| Le contraste texte/fond est suffisant. | `[OK / À corriger]` |
| Les liens sont identifiables autrement que par la couleur seule. | `[OK / À corriger]` |
| Les états hover/focus/disabled sont visibles. | `[OK / À corriger]` |
| Les messages succès/erreur ne reposent pas seulement sur la couleur. | `[OK / À corriger]` |
| Les textes restent lisibles sur mobile. | `[OK / À corriger]` |

---

# 6. Clavier et interaction

| Point | Statut |
|---|---|
| Le site est navigable au clavier. | `[OK / À corriger]` |
| Le focus est visible. | `[OK / À corriger]` |
| L’ordre du focus est logique. | `[OK / À corriger]` |
| Aucun piège clavier n’est présent. | `[OK / À corriger]` |
| Les boutons et liens sont assez grands et espacés. | `[OK / À corriger]` |

---

# 7. Faible stimulation

| Point | Statut |
|---|---|
| Aucune animation agressive n’est utilisée. | `[OK / À corriger]` |
| Aucun son automatique n’est utilisé. | `[OK / À corriger]` |
| Aucun carrousel automatique essentiel n’est utilisé. | `[OK / À corriger]` |
| Les transitions sont sobres. | `[OK / À corriger]` |
| Les préférences de réduction de mouvement sont respectées si possible. | `[OK / À corriger]` |

---

# 8. Confiance et autonomie

| Point | Statut |
|---|---|
| Les textes ne culpabilisent pas l’utilisateur. | `[OK / À corriger]` |
| Les limites de l’offre sont compréhensibles. | `[OK / À corriger]` |
| Le visiteur n’est pas forcé dans un parcours agressif. | `[OK / À corriger]` |
| Les informations de contact sont faciles à trouver. | `[OK / À corriger]` |
| La promesse commerciale reste prudente et réaliste. | `[OK / À corriger]` |

---

# 9. MADPROOF public

| Point | Statut |
|---|---|
| Aucun claim médical n’est présent. | `[OK / À corriger]` |
| Aucun claim non vérifié sur le TDAH ou la cognition n’est présent. | `[OK / À corriger]` |
| MADSuite / MAD Ariane sont présentés prudemment si mentionnés. | `[OK / À corriger]` |
| BaseMAD reste interne sauf formulation publique volontairement simplifiée. | `[OK / À corriger]` |
| Les sources fragiles ne sont pas citées publiquement. | `[OK / À corriger]` |

---

# 10. Décision finale

```text
Décision : [Validé / Validé avec corrections / Non validé]
Corrections requises : [Liste]
Risque principal : [Résumé]
Prochaine action : [Action]
```

---

## Critère d’acceptation

Le site peut passer à l’étape suivante lorsque :

```text
le message est clair,
la navigation est simple,
le CTA est visible,
le contenu est scannable,
le clavier fonctionne,
les contrastes sont acceptables,
les animations sont sobres,
et aucun claim public fragile n’est présent.
```
