---
Projet: MAD DevOps
Document: Exemple — Validation CHK-026 page Guide client
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Validation CHK-026 page Guide client

## Objectif

Montrer comment valider un contenu public de page Web avant publication.

Contenu évalué :

```text
SYSTEME_MAD/02-GUIDE/exemple-contenu-page-guide-client-public.md
```

---

## Documents liés

- `SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/synthese-chaine-site-web-contenu-public.md`
- `SYSTEME_MAD/02-GUIDE/synthese-publication-controlee-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/page-guide-client-rapide-mad-devops.md`

---

## Contenu évalué

| Élément | Valeur |
|---|---|
| Type | Page Web publique préparatoire |
| Page | Guide client rapide |
| Usage | Orientation client avant demande entrante |
| Verdict | Prêt en brouillon public, publication non autorisée sans go explicite |

---

## 1. Utilité client

- [x] Le contenu parle d’abord du besoin du client.
- [x] Il aide à comprendre une prochaine étape.
- [x] Il n’est pas centré sur l’architecture interne MAD DevOps.
- [x] Le langage est clair pour une personne non technique.

Résultat :

```text
Valide. Le contenu aide le visiteur à se situer sans jargon inutile.
```

---

## 2. Protection de la méthode

- [x] Les routines internes complètes ne sont pas publiées.
- [x] Les playbooks internes ne sont pas publiés.
- [x] Les checklists internes complètes ne sont pas publiées.
- [x] Les mesures internes brutes ne sont pas publiées.
- [x] Les décisions stratégiques ne sont pas exposées.

Résultat :

```text
Valide. Le contenu publie la clarté, pas la mécanique.
```

---

## 3. Noms et concepts internes

- [x] Les noms internes ne sont pas utilisés inutilement.
- [x] CerveauMAD n’est pas présenté comme méthode publique.
- [x] Machine à clients n’est pas exposée comme mécanique.
- [x] BaseMAD reste interne.

Résultat :

```text
Valide. Les concepts internes sont explicitement gardés privés.
```

---

## 4. Communication commerciale

- [x] Le contenu reste simple et humain.
- [x] Aucune promesse exagérée n’est ajoutée.
- [x] Aucun jargon technique inutile n’est présent.
- [x] La prochaine étape est claire.
- [x] Le contenu ne donne pas toute la recette gratuitement.

Résultat :

```text
Valide. Le contenu peut servir de brouillon public.
```

---

## 5. Publication

- [x] Le contenu est compréhensible sans contexte interne.
- [x] Les appels à l’action sont cohérents.
- [x] Le contenu peut être corrigé facilement.
- [ ] Publication autorisée sur le repo du site Web.

Résultat :

```text
Contenu prêt côté documentation.
Publication réelle bloquée tant que le go explicite n’est pas donné pour le repo du site Web.
```

---

## Résultat de validation

- [ ] Prêt à publier
- [x] Prêt en brouillon public
- [ ] À simplifier
- [ ] À anonymiser
- [ ] À garder interne
- [ ] À retravailler

---

## Décision finale

```text
Décision : brouillon public valide, non publié.
Condition : obtenir un go explicite avant toute modification du repo maddevops.
```

---

## Statut

```text
Statut : Exemple
Usage : exemple rempli de validation CHK-026 pour page Guide client
Cycle lié : contenu public / site Web / publication contrôlée
```
