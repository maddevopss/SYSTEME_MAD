---
Projet: MADSuite / MAD DevOps
Document: ADR — Synchronisation agenda : serveur source de vérité vs CRDT
Version: 1.0
Dernière révision: 2026-07-02
Statut: Accepté / MADPROOF-AGENDA-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# ADR — Synchronisation agenda : serveur source de vérité vs CRDT

## 1. Statut

Accepté.

## 2. Contexte

Les fichiers `specifications_agenda_planification.md` et `specifications_agenda_consolidation.md` explorent plusieurs approches pour un module agenda :

- iCalendar / RFC 5545;
- RRULE;
- CalendarContract;
- EventKit;
- CalDAV;
- Google Calendar API;
- verrouillage optimiste;
- verrouillage pessimiste;
- CRDT LWW-Element-Set;
- floating times;
- fixed times;
- backoff réseau;
- chiffrement local.

Ces approches sont utiles, mais certaines sont trop complexes pour un MVP MADSuite.

Le risque principal : construire trop vite un système distribué complexe alors que MADSuite peut d’abord fonctionner avec un serveur source de vérité, un journal de changements et une gestion explicite des conflits.

## 3. Décision

MADSuite utilisera par défaut une architecture **server-authoritative** pour l’agenda.

```text
Serveur = source de vérité.
Client = cache local + file d’actions + résolution de conflits.
```

Les CRDT restent classés **R&D** et ne doivent pas être introduits dans le MVP agenda sans preuve de nécessité.

## 4. Raison

Cette décision réduit :

- la complexité;
- les risques de conflits silencieux;
- les bugs de fuseaux horaires;
- les problèmes de clock skew;
- les risques multi-tenant;
- les coûts de tests;
- la difficulté d’audit.

## 5. Architecture retenue

### 5.1 Source de vérité

- [ ] Base serveur MADSuite.
- [ ] `organisation_id` obligatoire.
- [ ] RLS ou garde multi-tenant.
- [ ] `version` ou `updated_at` obligatoire.
- [ ] Audit log sur changements critiques.

### 5.2 Client

- [ ] Cache local.
- [ ] Lecture offline si possible.
- [ ] File d’actions offline.
- [ ] Sync au retour réseau.
- [ ] Erreur explicite en cas de conflit.
- [ ] Interface de résolution si conflit métier important.

### 5.3 Conflits

- [ ] Détection par version ou timestamp serveur.
- [ ] Pas de fusion silencieuse pour les champs critiques.
- [ ] Conflit visible à l’utilisateur.
- [ ] Historique minimal conservé.
- [ ] Résolution manuelle possible.

## 6. Réservations en temps réel

Pour les ressources critiques :

```text
Verrou temporaire serveur + expiration courte + libération automatique.
```

À utiliser pour :

- réservation d’équipement;
- réservation d’équipe;
- créneau facturable;
- réservation avec paiement/dépôt;
- ressource rare.

## 7. CRDT

Les CRDT peuvent être utiles si MADSuite devient fortement distribué :

- longue période offline;
- plusieurs appareils modifient les mêmes données;
- faible connexion réseau;
- besoin de fusion automatique non critique.

Mais pour le MVP :

```text
CRDT = R&D, pas MVP.
```

Risques CRDT :

- comportement difficile à expliquer;
- conflits silencieux;
- clock skew;
- audit plus complexe;
- tests plus lourds;
- UX de résolution moins claire;
- perte de confiance si l’utilisateur ne comprend pas le résultat.

## 8. Timezone

MADSuite doit distinguer :

| Type | Description | Stockage recommandé |
|---|---|---|
| Fixed time | Moment précis dans le temps global | UTC + timezone source |
| Floating time | Heure locale intentionnelle | Date/heure locale + timezone/règle explicite |

Règle :

```text
Aucune conversion silencieuse de fuseau horaire sur un événement métier important.
```

## 9. Notifications

Les notifications doivent être prudentes :

- [ ] rappel côté serveur pour événements critiques;
- [ ] notification locale seulement si supportée;
- [ ] fallback si notification refusée;
- [ ] pas de promesse “à la seconde”;
- [ ] pas de time-sensitive sans justification forte;
- [ ] pas de spam;
- [ ] pas de culpabilisation.

## 10. Connecteurs externes

Les connecteurs sont optionnels :

- Google Calendar;
- Apple Calendar;
- Outlook;
- CalDAV;
- agenda OS natif.

Ils ne doivent pas remplacer la source de vérité MADSuite sans ADR dédiée.

## 11. Conséquences positives

- Architecture plus simple.
- Audit plus facile.
- Multi-tenant plus sûr.
- Conflits visibles.
- Moins de magie invisible.
- Meilleure compatibilité avec MADPROOF.

## 12. Conséquences négatives

- Moins élégant qu’un système CRDT complet.
- Offline avancé moins puissant.
- Certains conflits nécessitent intervention utilisateur.
- Le serveur doit être robuste.
- Les connecteurs externes demandent du mapping.

## 13. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/agenda/fiche-madproof-agenda-planification-sync.md` | Fiche agenda MADPROOF. |
| `docs/research/atrier/specifications_agenda_planification.md` | Source brute. |
| `docs/research/atrier/specifications_agenda_consolidation.md` | Source brute. |

## 14. Verdict MADPROOF

Décision acceptée.

MADSuite doit commencer par un agenda server-authoritative avec cache local, sync contrôlée et conflits visibles. Les CRDT restent une piste R&D, pas une fondation MVP.