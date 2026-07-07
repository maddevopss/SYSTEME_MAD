---
Projet: MAD DevOps
Document: Spécification technique — MAD Ariane Snapshot de reprise
Version: 1.1
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Spécification technique — MAD Ariane Snapshot de reprise

## Objectif

Définir une spécification technique contrôlée pour le MVP MAD Ariane.

MAD Ariane doit produire un snapshot de reprise basé sur le contexte applicatif MADSuite afin d’aider l’utilisateur à reprendre son fil opérationnel après une interruption.

---

## Positionnement technique

```text
Le module observe uniquement l’état applicatif nécessaire.
Le module ne lit pas l’état mental.
Le module ne détecte pas l’attention.
Le module ne nécessite pas de caméra.
```

---

## Composants proposés

| Composant | Rôle |
|---|---|
| `ContextCapture` | Capturer le contexte applicatif minimal. |
| `ResumeSnapshotService` | Construire le snapshot de reprise. |
| `ResumeSnapshotStore` | Conserver temporairement les snapshots. |
| `ResumeSnapshotCard` | Afficher le snapshot dans l’interface. |
| `UserControlSettings` | Permettre activation, désactivation et préférences. |
| `SnapshotTelemetry` | Mesurer uniquement l’usage produit minimal. |

---

## Modèle de données minimal

```json
{
  "snapshotId": "uuid",
  "userId": "uuid",
  "organisationId": "uuid",
  "createdAt": "datetime",
  "expiresAt": "datetime",
  "module": "invoices",
  "entityType": "invoice",
  "entityId": "uuid",
  "section": "draft",
  "lastActionLabel": "Ajout d’un item non sauvegardé",
  "suggestedNextAction": "Vérifier le total ou sauvegarder le brouillon",
  "confidence": "low|medium|high",
  "dismissed": false
}
```

---

## Données autorisées

| Donnée | Source | Règle |
|---|---|---|
| Module actif | Router / état frontend | Autorisé |
| Entité active | Store applicatif | Autorisé |
| Section ou onglet | UI state | Autorisé |
| Dernière action applicative | Action métier explicite | Autorisé |
| Formulaire incomplet | État applicatif local ou brouillon | Autorisé avec prudence |

---

## Données interdites

- caméra;
- microphone;
- analyse biométrique;
- inférence émotionnelle;
- diagnostic cognitif;
- contenu hors application;
- historique navigateur externe;
- surveillance globale du poste.

---

## Déclencheurs

Le snapshot peut être généré lorsque :

- l’utilisateur quitte un module avec un contexte actif;
- l’utilisateur revient après une période d’inactivité;
- un formulaire non terminé existe;
- une entité métier active était ouverte avant interruption.

---

## Règles de conservation

| Élément | Règle |
|---|---|
| Snapshot actif | Conservation courte durée. |
| Snapshot expiré | Suppression automatique. |
| Snapshot ignoré | Marquer comme ignoré, puis supprimer selon TTL. |
| Données sensibles | Ne pas inclure dans le texte du snapshot. |
| Historique long terme | Exclu du MVP. |

TTL recommandé MVP :

```text
24 heures maximum, à réduire si possible selon le contexte réel.
```

---

## API minimale proposée

### Créer ou mettre à jour un snapshot

```text
POST /api/madsuite/resume-snapshots
```

### Lire le snapshot actif

```text
GET /api/madsuite/resume-snapshots/active
```

### Ignorer un snapshot

```text
POST /api/madsuite/resume-snapshots/:id/dismiss
```

### Désactiver la fonction

```text
PATCH /api/madsuite/preferences/resume-snapshot
```

---

## UX minimale

Le snapshot doit être affiché comme une carte non bloquante.

La carte doit expliquer pourquoi elle apparaît avant de proposer une action.

Exemple ajusté :

```text
Reprendre le fil
Vous revenez après une interruption. Voici le dernier contexte applicatif détecté.

Vous étiez dans : Factures
Contexte : Facture brouillon
Dernière action : ajout d’un item non sauvegardé
Prochaine action possible : vérifier le total ou sauvegarder

[Continuer] [Ignorer] [Désactiver]
```

---

## Règles UX

- Ne jamais bloquer l’utilisateur.
- Ne jamais forcer l’action suggérée.
- Afficher pourquoi la carte apparaît.
- Permettre de fermer facilement.
- Permettre la désactivation.
- Garder le texte court.
- Ne pas afficher de données sensibles inutiles.
- Éviter les détails client sensibles par défaut.
- Préférer un contexte générique lorsque le détail nominatif n’est pas nécessaire.

---

## Règles de contenu du snapshot

| Élément | Règle |
|---|---|
| Module | Affichable par défaut. |
| Type d’entité | Affichable par défaut. |
| Nom du client | Masqué par défaut si non nécessaire. |
| Montant, note privée, contenu sensible | Exclu du snapshot. |
| Dernière action | Résumée en langage simple. |
| Prochaine action | Toujours optionnelle. |

---

## Critères de sécurité

- Respecter le scope organisation.
- Ne jamais exposer un snapshot cross-tenant.
- Ne jamais inclure de secret.
- Ne jamais inclure de données hors contexte applicatif.
- Appliquer les mêmes règles d’authentification que les autres modules MADSuite.
- Journaliser les erreurs techniques sans contenu sensible.

---

## Tests requis

| Test | Objectif |
|---|---|
| Création snapshot | Vérifier la création avec données minimales. |
| Lecture snapshot actif | Retourner uniquement le snapshot de l’utilisateur courant. |
| Isolation organisation | Bloquer tout accès cross-tenant. |
| Expiration TTL | Supprimer ou masquer les snapshots expirés. |
| Dismiss | Un snapshot ignoré ne doit plus être proposé. |
| Désactivation | Aucun snapshot ne doit être affiché si la fonction est désactivée. |
| Données interdites | Empêcher caméra, micro ou données externes. |
| UX non bloquante | Vérifier que l’utilisateur peut continuer sans répondre. |
| Explication de la carte | Vérifier que l’utilisateur comprend pourquoi le snapshot apparaît. |
| Masquage détails sensibles | Vérifier que le snapshot n’affiche pas de données inutiles. |

---

## Critères de réussite MVP

Le MVP est techniquement acceptable si :

```text
le snapshot est utile,
les données sont minimales,
l’utilisateur garde le contrôle,
la conservation est courte,
l’isolation multi-tenant est respectée,
et aucun claim médical n’est induit par l’interface.
```

---

## Historique d’ajustement

| Version | Ajustement | Source |
|---|---|---|
| 1.1 | Ajout d’une phrase explicative et de règles de masquage des détails sensibles. | Validation simulée 2026-07-01 |

---

## Liens

```text
SYSTEME_MAD/01-PRODUIT/madsuite/mvp-mad-ariane-snapshot-reprise.md
SYSTEME_MAD/01-PRODUIT/madsuite/tests-produit-mad-ariane.md
SYSTEME_MAD/01-PRODUIT/madsuite/validation-simulee-mad-ariane-2026-07-01.md
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/003-validation-mad-ariane-chk-016.md
SYSTEME_MAD/09-CHECKLISTS/chk-016-validation-madproof-cognitif-madsuite.md
```
