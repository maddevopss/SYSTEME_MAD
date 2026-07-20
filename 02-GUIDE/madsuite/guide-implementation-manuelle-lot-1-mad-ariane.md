---
Projet: MAD DevOps
Document: Guide implementation manuelle — Lot 1 MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon controle
Auteur: Marc-Andre Dufour
---

# Guide implementation manuelle — Lot 1 MAD Ariane

## Objectif

Ce guide transforme le Lot 1 — Fondation donnees MAD Ariane en etapes concretes pour une implementation manuelle dans MADSuite.

Il vise un stack Node, Express, PostgreSQL et Prisma, avec adaptation selon le projet reel.

---

## Resultat attendu

A la fin du Lot 1, le projet doit contenir :

- un modele ou une table `resume_snapshots`;
- les contraintes minimales;
- les index necessaires;
- une regle TTL maximum 24 heures;
- une isolation par `organisation_id` et `user_id`;
- un filtrage ou rejet des champs non autorises;
- les tests P0.

---

# 1. Modele Prisma propose

A adapter selon les types reels du projet.

```prisma
model ResumeSnapshot {
  id                    String   @id @default(uuid())
  organisation_id       String
  user_id               String
  module                String
  entity_type           String?
  entity_id             String?
  section               String?
  last_action_label     String?
  suggested_next_action String?
  confidence            String   @default("low")
  dismissed             Boolean  @default(false)
  created_at            DateTime @default(now())
  expires_at            DateTime
  updated_at            DateTime @updatedAt

  @@index([organisation_id, user_id])
  @@index([organisation_id, user_id, expires_at])
  @@index([organisation_id, user_id, dismissed])
  @@map("resume_snapshots")
}
```

---

# 2. Contraintes minimales

- `organisation_id` obligatoire.
- `user_id` obligatoire.
- `module` obligatoire.
- `expires_at` obligatoire.
- `dismissed` par defaut a false.
- `confidence` limite a `low`, `medium`, `high`.
- index sur `organisation_id`, `user_id`, `expires_at`, `dismissed`.

---

# 3. Regle TTL

TTL recommande MVP :

```text
24 heures maximum.
```

Regles :

- un snapshot expire ne doit jamais etre retourne comme actif;
- un snapshot expire peut etre supprime par nettoyage;
- aucune conservation long terme dans le MVP;
- un snapshot ignore doit etre retire de l experience utilisateur.

---

# 4. Isolation

Chaque lecture active doit respecter :

```text
organisation_id = organisation courante
user_id = utilisateur courant
dismissed = false
expires_at > maintenant
```

Un utilisateur ne doit jamais acceder :

- au snapshot d une autre organisation;
- au snapshot d un autre utilisateur;
- a un snapshot expire;
- a un snapshot ignore comme actif.

---

# 5. Validation des champs affichables

Les champs affichables doivent rester courts, applicatifs et non sensibles.

Champs a valider :

- `last_action_label`;
- `suggested_next_action`;
- `section`;
- `entity_type`.

Regle :

```text
Si un champ contient une information non necessaire au contexte de reprise, il doit etre retire, resume ou refuse.
```

---

# 6. Tests P0 a creer

- creation avec donnees minimales valide;
- creation sans organisation rejetee;
- creation sans utilisateur rejetee;
- lecture active avec bon utilisateur retourne le snapshot;
- lecture active cross-user ne retourne rien;
- lecture active cross-tenant ne retourne rien;
- snapshot expire non retourne;
- snapshot dismissed non retourne;
- champ non autorise rejete ou filtre.

---

# 7. Checklist avant commit

| Point | Statut |
|---|---|
| La table ou le modele existe. | `[OK / A corriger]` |
| `organisation_id` est obligatoire. | `[OK / A corriger]` |
| `user_id` est obligatoire. | `[OK / A corriger]` |
| `module` est obligatoire. | `[OK / A corriger]` |
| `expires_at` est obligatoire. | `[OK / A corriger]` |
| Le TTL maximum recommande est respecte. | `[OK / A corriger]` |
| Les snapshots expires ne sont pas actifs. | `[OK / A corriger]` |
| Les snapshots dismissed ne sont pas actifs. | `[OK / A corriger]` |
| Les acces cross-user sont bloques. | `[OK / A corriger]` |
| Les acces cross-tenant sont bloques. | `[OK / A corriger]` |
| Les champs affichables sont valides. | `[OK / A corriger]` |
| Les tests P0 existent. | `[OK / A corriger]` |

---

# 8. Commandes indicatives

Selon le projet :

```bash
npx prisma migrate dev --name add_resume_snapshots
npx prisma generate
npm test -- resumeSnapshot
```

Adapter les commandes a l environnement reel.

---

## Limites du Lot 1

Ce lot ne doit pas inclure :

- UX du snapshot;
- carte frontend;
- suggestions avancees;
- telemetrie produit;
- IA generative;
- camera, micro ou donnees biometriques;
- logique medicale ou detection d attention.

---

## Definition de termine

```text
Le Lot 1 est termine lorsque le modele existe, les contraintes sont appliquees, l isolation organisation/utilisateur est verifiee, les snapshots expires ou dismissed sont exclus et les tests P0 passent.
```
