---
Projet: MAD DevOps
Document: Synthèse finale Site Web et contenu public
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Synthèse finale Site Web et contenu public

## Objectif

Fermer le bloc Site Web / contenu public côté Système MAD.

Cette synthèse relie la publication contrôlée, les contenus Web candidats, la validation CHK-026, la validation site CHK-015 et la règle de go explicite avant modification du repo public.

---

## Principe central

```text
Le site Web doit aider le client à comprendre quoi faire ensuite sans révéler la mécanique interne MAD DevOps.
```

---

## Chaîne complète

```text
Idée de contenu Web
→ cadrage public / privé
→ brouillon public
→ registre contenus Web publics
→ validation CHK-026
→ validation CHK-015 si site complet
→ go explicite
→ modification du repo public
→ vérification après publication
```

---

## Documents de pilotage

| Document | Rôle |
|---|---|
| `synthese-chaine-site-web-contenu-public.md` | Chaîne principale du bloc Web. |
| `synthese-publication-controlee-mad-devops.md` | Règle générale de publication contrôlée. |
| `page-guide-client-rapide-mad-devops.md` | Cadrage de la page Guide client. |
| `registre-contenus-web-publics.md` | Suivi des contenus Web publics candidats. |
| `chk-026-validation-contenu-public-mad-devops.md` | Validation du contenu public. |
| `chk-015-validation-site-web-mad-devops.md` | Validation du site Web complet. |

---

## Documents produits dans ce bloc

| Document | Rôle |
|---|---|
| `exemple-contenu-page-guide-client-public.md` | Exemple de contenu public préparatoire. |
| `exemple-validation-chk-026-page-guide-client.md` | Exemple de validation CHK-026. |
| `registre-contenus-web-publics.md` | Registre léger des contenus Web. |

---

## Décisions possibles

| Situation | Décision |
|---|---|
| Contenu clair et non sensible | Valider côté documentation. |
| Contenu utile mais trop interne | Simplifier. |
| Contenu qui révèle la mécanique | Garder privé. |
| Contenu client avec preuve | Exiger permission + CHK-030. |
| Site complet prêt | Passer CHK-015. |
| Repo public à modifier | Exiger go explicite. |

---

## Garde-fous finaux

- Ne pas toucher au repo public sans go explicite.
- Ne pas publier les playbooks internes.
- Ne pas publier les checklists complètes.
- Ne pas exposer CerveauMAD, BaseMAD ou Machine à clients comme mécanique détaillée.
- Ne pas publier de preuve client sans permission.
- Ne pas promettre une solution avant qualification.
- Garder le langage simple pour une personne non technique.

---

## Critère de fermeture du bloc

Le bloc Site Web / contenu public est complet côté Système MAD si :

1. la chaîne Web est définie;
2. un contenu public préparatoire existe;
3. CHK-026 est démontrée par un exemple rempli;
4. les contenus Web sont suivis dans un registre;
5. la règle de go explicite protège le repo public;
6. la publication réelle reste séparée de la préparation documentaire.

---

## Statut

```text
Statut : Officiel
Usage : synthèse finale du bloc Site Web / contenu public
Cycle lié : contenu public / site Web / validation / publication contrôlée
```
