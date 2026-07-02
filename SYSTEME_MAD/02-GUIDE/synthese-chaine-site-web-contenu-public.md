---
Projet: MAD DevOps
Document: Synthèse chaîne Site Web et contenu public
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Synthèse chaîne Site Web et contenu public

## Objectif

Relier les contenus publics MAD DevOps au système de publication contrôlée.

Cette synthèse sert à préparer des pages Web utiles pour les clients sans exposer la mécanique interne du Système MAD.

---

## Principe central

```text
Le site Web doit rendre l’aide claire, pas publier le système interne.
```

---

## Chaîne complète

```text
Idée de contenu public
→ fiche contenu public candidat
→ frontière public / privé
→ lexique public / privé
→ contenu de page ou section Web
→ CHK-026 contenu public
→ CHK-015 site Web si publication globale
→ publication seulement avec go explicite
```

---

## Documents liés

| Document | Rôle |
|---|---|
| `synthese-publication-controlee-mad-devops.md` | Chaîne de publication publique contrôlée. |
| `frontiere-public-prive-mad-devops.md` | Séparer ce qui peut être public de ce qui doit rester interne. |
| `lexique-public-prive-mad-devops.md` | Traduire les concepts internes en langage client. |
| `page-guide-client-rapide-mad-devops.md` | Page d’orientation rapide pour visiteurs. |
| `template-fiche-contenu-public-candidat.md` | Qualifier un contenu avant publication. |
| `template-page-orientation-client.md` | Structurer une page d’orientation client. |
| `template-page-accueil-mad-devops.md` | Préparer la page d’accueil. |
| `template-formulaire-contact-mad-devops.md` | Préparer le contact. |
| `chk-026-validation-contenu-public-mad-devops.md` | Valider un contenu public. |
| `chk-015-validation-site-web-mad-devops.md` | Valider le site Web complet. |

---

## Ce qui peut être public

- problèmes clients;
- types d’aide;
- exemples simples;
- étapes de démarrage;
- bénéfices prudents;
- offres compréhensibles;
- preuves autorisées;
- prochaine action.

---

## Ce qui doit rester interne

- CerveauMAD;
- BaseMAD;
- Machine à clients comme mécanique détaillée;
- playbooks internes;
- checklists complètes;
- décisions stratégiques;
- prompts et workflows internes;
- logique complète de qualification.

---

## Règle de publication

```text
Un contenu peut avancer s’il aide le client à comprendre son problème, l’aide possible et la prochaine étape sans révéler la mécanique interne.
```

---

## Garde-fous

- Ne pas publier sans CHK-026.
- Ne pas toucher au repo du site Web sans go explicite.
- Ne pas transformer le site en manuel interne.
- Ne pas utiliser de jargon technique inutile.
- Ne pas promettre une solution avant qualification.
- Ne pas exposer de preuve client sans permission.

---

## Statut

```text
Statut : Officiel
Usage : synthèse du bloc Site Web / contenu public
Cycle lié : publication contrôlée / contenu Web / demandes entrantes / machine à clients
```
