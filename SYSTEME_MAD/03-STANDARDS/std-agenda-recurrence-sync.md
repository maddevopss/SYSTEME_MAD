---
Projet: MADSuite / MAD DevOps
Document: Standard — Agenda, récurrence et synchronisation
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-AGENDA-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Agenda, récurrence et synchronisation

## 1. Objectif

Ce standard définit les règles minimales pour un futur module agenda, planification, réservation ou délais dans MADSuite.

Documents liés :

```text
SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/agenda/fiche-madproof-agenda-planification-sync.md
SYSTEME_MAD/04-ADR/ADR-agenda-sync-crdt-vs-server-authoritative.md
```

## 2. Règle centrale

```text
Serveur = source de vérité.
Client = cache local + file d’actions + résolution de conflits.
```

Les connecteurs externes sont optionnels.

## 3. Modèle minimal

Un événement ou bloc de planification doit contenir :

- [ ] identifiant unique;
- [ ] organisation;
- [ ] propriétaire;
- [ ] titre;
- [ ] début;
- [ ] fin;
- [ ] fuseau horaire;
- [ ] statut;
- [ ] version;
- [ ] date de modification;
- [ ] source de sync;
- [ ] lien client/projet si pertinent;
- [ ] ressource réservée si pertinent;
- [ ] règle de récurrence si pertinent;
- [ ] exceptions de récurrence si pertinent.

## 4. Récurrence

- [ ] Utiliser un format d’échange compatible iCalendar si export/import.
- [ ] Conserver la règle source.
- [ ] Générer les occurrences par fenêtre.
- [ ] Ne pas matérialiser une infinité d’occurrences.
- [ ] Gérer exceptions et annulations d’occurrence.
- [ ] Tester fin de mois.
- [ ] Tester heure d’été.
- [ ] Tester événement toute la journée.
- [ ] Tester changement de timezone.

## 5. Timezone

- [ ] Stocker l’instant serveur en UTC pour les événements fixes.
- [ ] Conserver le fuseau horaire original.
- [ ] Distinguer fixed time et floating time.
- [ ] Afficher clairement le fuseau si ambigu.
- [ ] Ne jamais convertir silencieusement un événement métier important.

## 6. Synchronisation

- [ ] Sync serveur prioritaire.
- [ ] Cache local lecture seulement si possible au départ.
- [ ] File d’actions offline si édition offline.
- [ ] Version ou timestamp serveur obligatoire.
- [ ] Conflit détecté avant écrasement.
- [ ] Conflit visible à l’utilisateur.
- [ ] Pas de fusion silencieuse pour champs critiques.
- [ ] Backoff avec jitter sur retry réseau.

## 7. Réservation de ressources

Si réservation :

- [ ] vérifier disponibilité serveur;
- [ ] verrou temporaire avec expiration;
- [ ] libération automatique;
- [ ] protection multi-tenant;
- [ ] message clair si créneau pris;
- [ ] audit des modifications critiques.

## 8. Notifications

- [ ] Aucun rappel critique uniquement côté navigateur/client.
- [ ] Notifications opt-in.
- [ ] Refus respecté.
- [ ] Pas de promesse à la seconde.
- [ ] Pas de spam.
- [ ] Pas de culpabilisation.
- [ ] Fallback visible si notification non disponible.

## 9. Connecteurs externes

Pour Google Calendar, Apple Calendar, Outlook, CalDAV ou agenda OS :

- [ ] connecter seulement sur demande;
- [ ] expliquer les permissions;
- [ ] limiter les scopes;
- [ ] permettre déconnexion;
- [ ] supprimer tokens au retrait;
- [ ] définir la source de vérité;
- [ ] gérer conflits;
- [ ] journaliser sans exposer le contenu sensible.

## 10. Sécurité / privacy

- [ ] organisation obligatoire sur chaque donnée;
- [ ] RLS ou guard multi-tenant;
- [ ] aucun calendrier cross-tenant;
- [ ] pas de données agenda dans logs inutiles;
- [ ] exports protégés;
- [ ] suppression/export utilisateur si requis;
- [ ] permissions minimales;
- [ ] pas de surveillance d’agenda employé sans cadre clair.

## 11. Claims interdits

Ne pas écrire :

- synchronisation parfaite;
- aucun conflit;
- rappel garanti à la seconde;
- compatible avec tous les calendriers;
- intégration native universelle;
- aucune perte de données possible;
- fonctionne offline sans limite;
- fusion automatique parfaite.

Formulation recommandée :

```text
Le module agenda gère la récurrence, les fuseaux horaires et les conflits de manière explicite, avec des connecteurs externes optionnels.
```

## 12. Gate avant officialisation

- [ ] ADR sync validée.
- [ ] Tests timezone.
- [ ] Tests récurrence.
- [ ] Tests conflits.
- [ ] Tests offline si édition offline.
- [ ] Tests notifications.
- [ ] Tests permissions connecteurs.
- [ ] Tests multi-tenant.
- [ ] Claims MADPROOF validés.

## 13. Verdict MADPROOF

Ce standard est **MADPROOF-AGENDA-RD**.

Il peut servir de base à un futur module agenda, mais ne doit pas promettre une synchronisation parfaite, des rappels garantis ou une compatibilité universelle.