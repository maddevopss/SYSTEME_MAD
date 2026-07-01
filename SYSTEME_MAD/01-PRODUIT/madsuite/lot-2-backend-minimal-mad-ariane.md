---
Projet: MAD DevOps
Document: Lot 2 — Backend minimal MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 2 — Backend minimal MAD Ariane

## Objectif

Préparer l’implémentation backend minimale de MAD Ariane après la fondation données.

Ce lot définit les routes, services, contrôleurs, règles d’accès et tests attendus pour exposer les snapshots de reprise sans implémenter encore l’interface frontend complète.

---

## Prérequis

Le Lot 2 suppose que le Lot 1 est en place :

- table ou modèle `resume_snapshots`;
- scope `organisation_id`;
- scope `user_id`;
- TTL;
- exclusion des snapshots expirés;
- exclusion des snapshots ignorés;
- validation des champs affichables.

---

## Portée du lot

| ID | Priorité | Tâche | Résultat attendu |
|---|---|---|---|
| MAD-ARIANE-005 | P0 | Créer `ResumeSnapshotService`. | Le service orchestre création, lecture active et dismissal. |
| MAD-ARIANE-006 | P0 | Créer `POST /api/madsuite/resume-snapshots`. | Un snapshot valide peut être créé ou mis à jour. |
| MAD-ARIANE-007 | P0 | Créer `GET /api/madsuite/resume-snapshots/active`. | L’utilisateur reçoit seulement son snapshot actif. |
| MAD-ARIANE-008 | P0 | Créer `POST /api/madsuite/resume-snapshots/:id/dismiss`. | Le snapshot ignoré ne revient pas. |
| MAD-ARIANE-009 | P0 | Créer préférence activation/désactivation. | L’utilisateur peut désactiver la fonction. |

---

## Routes proposées

```text
POST   /api/madsuite/resume-snapshots
GET    /api/madsuite/resume-snapshots/active
POST   /api/madsuite/resume-snapshots/:id/dismiss
PATCH  /api/madsuite/preferences/resume-snapshot
```

---

## Règles d’accès

Chaque route doit :

- exiger un utilisateur authentifié;
- exiger une organisation courante;
- utiliser l’organisation de la session, jamais celle envoyée librement par le client;
- utiliser l’utilisateur courant, jamais un `user_id` arbitraire envoyé par le client;
- ne jamais retourner un snapshot cross-tenant;
- ne jamais retourner un snapshot cross-user.

---

## Création de snapshot

### Entrée autorisée

Le client peut envoyer uniquement :

- `module`;
- `entity_type`;
- `entity_id`;
- `section`;
- `last_action_label`;
- `suggested_next_action`;
- `confidence`;
- `expires_at` optionnel.

### Entrée interdite

Le client ne doit pas contrôler directement :

- `organisation_id`;
- `user_id`;
- `created_at`;
- `updated_at`;
- `dismissed`.

Ces valeurs doivent être définies côté serveur.

---

## Lecture du snapshot actif

Un snapshot actif doit respecter :

```text
organisation_id = organisation courante
user_id = utilisateur courant
dismissed = false
expires_at > maintenant
```

Si aucun snapshot valide n’existe, retourner :

```json
{
  "snapshot": null
}
```

---

## Dismiss

La route de dismissal doit :

- vérifier que le snapshot appartient à l’organisation courante;
- vérifier que le snapshot appartient à l’utilisateur courant;
- marquer `dismissed = true`;
- ne pas supprimer immédiatement la ligne sauf décision technique explicite;
- retourner un statut simple.

Exemple :

```json
{
  "dismissed": true
}
```

---

## Préférence utilisateur

La préférence d’activation doit permettre :

```text
resume_snapshot_enabled = true | false
```

Règle MVP :

- si désactivé, l’API active doit retourner `snapshot: null`;
- la création peut être ignorée ou refusée selon décision technique;
- l’utilisateur doit pouvoir réactiver plus tard.

---

## Réponses API recommandées

### Création réussie

```json
{
  "snapshot": {
    "id": "...",
    "module": "invoices",
    "entity_type": "invoice",
    "section": "draft",
    "last_action_label": "Ajout d’un item non sauvegardé",
    "suggested_next_action": "Vérifier le total ou sauvegarder",
    "confidence": "low",
    "expires_at": "..."
  }
}
```

### Snapshot actif absent

```json
{
  "snapshot": null
}
```

### Erreur de validation

```json
{
  "error": "resume_snapshot_invalid"
}
```

---

## Tests P0 requis

| Test | Résultat attendu |
|---|---|
| POST valide | Crée un snapshot scopé serveur-side. |
| POST avec organisation forcée | L’organisation envoyée est ignorée ou rejetée. |
| POST avec user forcé | L’utilisateur envoyé est ignoré ou rejeté. |
| GET active | Retourne seulement le snapshot actif de l’utilisateur. |
| GET active sans snapshot | Retourne `snapshot: null`. |
| GET active après expiration | Retourne `snapshot: null`. |
| GET active après dismissed | Retourne `snapshot: null`. |
| Dismiss cross-user | Refusé ou sans effet. |
| Dismiss cross-tenant | Refusé ou sans effet. |
| Préférence désactivée | Aucun snapshot actif retourné. |

---

## Hors portée

Ce lot ne doit pas inclure :

- carte frontend;
- capture automatique du contexte;
- télémétrie produit;
- IA générative;
- logique médicale;
- détection d’attention;
- caméra;
- microphone;
- biométrie.

---

## Définition de terminé

Le Lot 2 est terminé lorsque :

```text
les routes backend existent,
les valeurs organisation/user sont imposées serveur-side,
la lecture active respecte TTL et dismissed,
le dismissal respecte le scope,
la préférence de désactivation est respectée,
et les tests P0 passent.
```
