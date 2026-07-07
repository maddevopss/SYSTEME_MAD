---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Agenda, planification et synchronisation
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-AGENDA-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Agenda, planification et synchronisation

## 1. Source brute

```text
docs/research/atrier/specifications_agenda_planification.md
```

## 2. Verdict

**MADPROOF-AGENDA-RD : source utile pour un module futur d’agenda, réservations et délais, mais les intégrations OS natives doivent rester optionnelles et vérifiées selon la cible produit.**

Le fichier couvre :

- iCalendar / RFC 5545;
- VEVENT, VTODO, VTIMEZONE;
- RRULE et récurrence;
- intégrations Android, iOS, Windows, Linux, ChromeOS;
- notifications et alarmes;
- CalDAV;
- Google Calendar API;
- réservation de ressources;
- concurrence optimiste/pessimiste;
- résolution de conflits.

## 3. Règle centrale

```text
MADSuite doit contrôler son modèle d’agenda interne avant de dépendre des agendas natifs.
```

Les intégrations avec Google Calendar, Apple Calendar, Outlook, CalDAV ou APIs OS doivent être considérées comme des connecteurs, pas comme la source unique de vérité du produit.

## 4. À conserver

| Élément | Décision |
|---|---|
| Support iCalendar / RFC 5545 comme format d’échange | Conserver. |
| VEVENT pour événements | Conserver. |
| VTODO pour tâches/délais si pertinent | Conserver. |
| VTIMEZONE / timezone explicite | Conserver. |
| RRULE pour récurrence | Conserver. |
| Génération d’occurrences par fenêtre | Conserver. |
| UTC pour stockage interne | Conserver avec timezone source. |
| Gestion des conflits | Conserver. |
| Verrou temporaire pour réservation en ligne | Conserver. |
| Conflit 409 et résolution visuelle | Conserver. |
| Permissions minimales agenda | Conserver. |
| Connecteurs OS/API comme options | Conserver. |

## 5. À reformuler ou vérifier

| Claim brut | Problème | Décision |
|---|---|---|
| Tout moteur doit utiliser/parser RFC 5545. | Bon format d’échange, mais pas forcément modèle interne complet. | Reformuler. |
| CalendarContract obligatoire sur Android. | Seulement si intégration agenda système requise. | Optionnel. |
| `SCHEDULE_EXACT_ALARM` requis pour rappel précis. | Android est très contextuel et restrictif. | À vérifier par release. |
| Time-Sensitive Notifications pour rappels importants iOS. | Usage strict, pas à banaliser. | À vérifier / éviter MVP. |
| Windows Appointments requis. | Seulement si intégration Windows native. | Optionnel. |
| EDS/D-Bus requis Linux. | Dépend environnement Linux. | R&D / optionnel. |
| ChromeOS doit utiliser Google Calendar API. | Seulement si intégration Google Calendar nécessaire. | Optionnel. |
| Web Alarms API comme solution PWA. | Support à vérifier; ne pas rendre critique. | À vérifier. |
| Premier qui synchronise gagne. | Politique possible, mais à cadrer selon impact métier. | À reformuler. |

## 6. Modèle interne recommandé

Un module agenda MADSuite devrait avoir un modèle interne minimal :

- [ ] `event_id`;
- [ ] `organisation_id`;
- [ ] `owner_user_id`;
- [ ] `title`;
- [ ] `description`;
- [ ] `start_at_utc`;
- [ ] `end_at_utc`;
- [ ] `timezone`;
- [ ] `all_day`;
- [ ] `status`;
- [ ] `resource_id` si réservation;
- [ ] `client_id` / `project_id` si lié métier;
- [ ] `recurrence_rule` si récurrent;
- [ ] `recurrence_exceptions` si exceptions;
- [ ] `version`;
- [ ] `updated_at`;
- [ ] `sync_source`;
- [ ] `external_calendar_id` optionnel;
- [ ] `external_event_id` optionnel.

## 7. Récurrence

Règles :

- [ ] Ne pas matérialiser une infinité d’occurrences.
- [ ] Générer les occurrences par fenêtre affichée.
- [ ] Conserver la règle source.
- [ ] Conserver les exceptions.
- [ ] Gérer les changements de fuseau horaire.
- [ ] Tester DST / heure d’été.
- [ ] Tester événements toute la journée.
- [ ] Tester fin de mois.
- [ ] Tester annulations d’occurrence.

## 8. Timezone

Règles :

- [ ] Stocker l’instant en UTC.
- [ ] Stocker le fuseau horaire original.
- [ ] Afficher dans le fuseau utilisateur ou événement selon contexte.
- [ ] Éviter les dates flottantes non documentées.
- [ ] Tester les transitions DST.
- [ ] Éviter les conversions implicites silencieuses.

## 9. Notifications et rappels

Règles :

- [ ] Ne pas dépendre uniquement de `setTimeout` côté client.
- [ ] Prévoir rappels côté serveur pour événements critiques.
- [ ] Prévoir notifications locales seulement si app native/PWA supportée.
- [ ] Respecter le refus de notifications.
- [ ] Ne pas utiliser les notifications critiques/time-sensitive sans justification forte.
- [ ] Pas de rappel culpabilisant.
- [ ] Pas de spam.

## 10. Concurrence et réservations

Deux stratégies possibles :

### 10.1 Optimistic concurrency

À utiliser pour :

- édition hors ligne;
- faible risque de collision;
- sync différée.

Conditions :

- [ ] version ou timestamp;
- [ ] détection conflit;
- [ ] erreur explicite;
- [ ] interface de résolution;
- [ ] historique des modifications.

### 10.2 Pessimistic locking

À utiliser pour :

- réservation de ressource rare;
- créneau critique;
- paiement/dépôt;
- réservation temps réel.

Conditions :

- [ ] verrou serveur avec expiration;
- [ ] libération automatique;
- [ ] UX indiquant le verrou;
- [ ] rollback si abandon;
- [ ] protection multi-tenant.

## 11. Intégrations externes

Les intégrations doivent être optionnelles :

- Google Calendar;
- Apple Calendar;
- Outlook / Microsoft 365;
- CalDAV;
- agendas OS natifs.

Règles :

- [ ] OAuth minimal;
- [ ] scopes limités;
- [ ] consentement clair;
- [ ] déconnexion du connecteur;
- [ ] suppression des tokens;
- [ ] logs sans contenu calendrier sensible;
- [ ] source de vérité définie;
- [ ] conflit géré.

## 12. Décisions MADSuite

| Sujet | Décision |
|---|---|
| Agenda interne | Source de vérité recommandée. |
| Connecteurs externes | Roadmap optionnelle. |
| Calendar permissions | À éviter tant que non nécessaires. |
| Exact alarms Android | À éviter MVP sauf nécessité forte. |
| Time-sensitive iOS | À éviter MVP. |
| PWA reminders | Non critiques sans fallback serveur. |
| Réservations ressources | Potentiel module métier. |
| Sync offline | À cadrer dans une ADR séparée. |

## 13. Documents à créer

| Document | Action |
|---|---|
| `SYSTEME_MAD/04-ADR/ADR-agenda-sync-crdt-vs-server-authoritative.md` | À créer après lecture consolidation. |
| `SYSTEME_MAD/03-STANDARDS/std-agenda-recurrence-sync.md` | À créer. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-agenda-sync.md` | À créer si module priorisé. |

## 14. Claims interdits

Ne pas écrire :

- synchronisation parfaite;
- aucun conflit;
- rappels garantis à la seconde;
- fonctionne dans tous les calendriers;
- compatible partout;
- notifications garanties;
- intégration native universelle;
- aucune perte de données possible.

Formulation recommandée :

```text
Le module agenda doit gérer les fuseaux horaires, la récurrence, les conflits et les permissions de manière explicite, avec des connecteurs externes optionnels.
```

## 15. TODO

- [ ] Traiter `specifications_agenda_consolidation.md`.
- [ ] Créer l’ADR sync agenda après consolidation.
- [ ] Créer le standard agenda récurrence/sync.
- [ ] Garder `specifications_agenda_planification.md` dans `atrier` comme source brute.

## 16. Verdict final

`specifications_agenda_planification.md` est traité comme source brute analysée.

Le cœur MADPROOF à retenir : modèle interne contrôlé, récurrence bornée, timezone explicite, notifications prudentes, conflits visibles et connecteurs externes optionnels.