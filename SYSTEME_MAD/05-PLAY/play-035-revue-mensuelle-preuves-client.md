---
Projet: MAD DevOps
Document: PLAY-035 — Revue mensuelle preuves client
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-035 — Revue mensuelle preuves client

## Objectif

Décrire une routine mensuelle courte pour revoir les preuves client MAD DevOps.

Cette revue sert à décider quoi demander, quoi anonymiser, quoi publier, quoi garder privé et quoi archiver.

---

## Documents requis

- `SYSTEME_MAD/10-ROADMAP/registre-preuves-client.md`
- `SYSTEME_MAD/02-GUIDE/synthese-preuve-client-portfolio-mad-devops.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-030-validation-preuve-client.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md`
- `SYSTEME_MAD/05-PLAY/play-019-transformer-livraison-en-preuve-client.md`
- `SYSTEME_MAD/02-GUIDE/portfolio-mad-devops.md`

---

## Fréquence

```text
Une fois par mois.
Durée cible : 20 à 45 minutes.
```

---

## Principe

```text
Une preuve client utile doit avoir une permission, un statut et une prochaine action.
```

---

## Étapes

### 1. Ouvrir le registre

Ouvrir :

```text
SYSTEME_MAD/10-ROADMAP/registre-preuves-client.md
```

Repérer les preuves :

- à identifier;
- à demander;
- en attente de permission;
- à anonymiser;
- prêtes pour usage privé;
- prêtes pour usage public;
- publiées;
- à archiver.

---

### 2. Vérifier les livraisons récentes

Pour chaque livraison acceptée du mois, demander :

```text
Est-ce qu’il y a une preuve utile à conserver ?
Témoignage court ?
Référence privée ?
Fiche projet publique ?
Étude de cas anonymisée ?
Apprentissage interne ?
```

---

### 3. Choisir la bonne action

| Situation | Action |
|---|---|
| Livraison acceptée, valeur claire | Demander une preuve. |
| Client sensible ou données privées | Garder privé ou anonymiser. |
| Permission partielle | Produire une version limitée. |
| Preuve utile mais non publiable | Garder pour usage privé. |
| Preuve publique possible | Passer CHK-030 puis CHK-026. |
| Preuve faible ou risquée | Archiver. |

---

### 4. Valider les preuves candidates

Utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-030-validation-preuve-client.md
```

Si la preuve devient publique, utiliser aussi :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-026-validation-contenu-public-mad-devops.md
```

---

### 5. Mettre à jour les statuts

Chaque preuve doit avoir un statut clair :

```text
À demander
Permission demandée
Autorisé
Autorisé partiellement
À anonymiser
Prêt public
Usage privé seulement
Publié
Refusé
Archivé
```

---

### 6. Choisir une action du mois

Limiter la revue à une action principale :

```text
1 preuve à demander
ou 1 preuve à anonymiser
ou 1 preuve à publier
ou 1 preuve à archiver
```

---

## Résultat attendu

À la fin de la revue :

- le registre est à jour;
- les preuves sans statut sont clarifiées;
- les permissions manquantes sont identifiées;
- une action principale est choisie;
- aucune preuve publique ne sort sans validation.

---

## Garde-fous

- Ne pas demander une preuve avant une livraison acceptée.
- Ne pas publier sans permission.
- Ne pas inventer de résultats.
- Ne pas transformer la revue en exercice marketing lourd.
- Ne pas exposer de données client sensibles.
- Garder la revue courte.

---

## Statut

```text
Statut : Officiel
Usage : revue mensuelle légère des preuves client MAD DevOps
Cycle lié : livraison / preuve client / registre / portfolio / publication contrôlée
```
