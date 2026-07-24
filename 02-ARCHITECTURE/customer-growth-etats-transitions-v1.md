---
Projet: MAD DevOps
Document: États et transitions du domaine customer_growth
Version: 1.0
Dernière révision: 2026-07-24
Statut: Proposition
Auteur: Marc-André Dufour
---

# États et transitions du domaine `customer_growth`

## Objet

Définir les états métier minimaux du parcours `Prospect → Opportunité → Client → Projet ou devis`, sans imposer encore un schéma SQL ni un numéro de migration.

## Principes

- toute transition est portée par `organisation_id`;
- les suppressions sont logiques;
- les conversions sont transactionnelles, auditées et idempotentes;
- un prospect converti ne devient pas une seconde copie du client;
- une opportunité gagnée ne crée jamais directement un projet ou un devis en contournant les services canoniques;
- les transitions interdites retournent un conflit métier explicite.

## Prospect

États initiaux proposés :

- `new` : prospect saisi, non encore traité;
- `contacted` : premier contact effectué;
- `qualified` : besoin réel confirmé;
- `unqualified` : prospect non pertinent pour le moment;
- `converted` : client existant créé ou rattaché;
- `archived` : fermé sans suppression physique.

Transitions permises :

| De | Vers | Condition minimale |
|---|---|---|
| `new` | `contacted` | activité de contact enregistrée |
| `new` | `unqualified` | motif requis |
| `contacted` | `qualified` | besoin et responsable confirmés |
| `contacted` | `unqualified` | motif requis |
| `qualified` | `converted` | conversion transactionnelle réussie |
| `unqualified` | `contacted` | réouverture explicitement auditée |
| tout état non converti | `archived` | motif requis |

Règles :

- `converted_client_id` est nul avant la conversion;
- une conversion réussie rend toute seconde conversion incohérente impossible;
- une même clé d’idempotence retourne le résultat déjà produit;
- une clé différente après conversion retourne un conflit;
- l’adresse courriel seule ne suffit pas automatiquement à fusionner deux personnes.

## Opportunité

États initiaux proposés :

- `open` : possibilité créée;
- `qualified` : portée et valeur estimée établies;
- `proposal` : devis ou proposition en préparation ou transmis;
- `negotiation` : conditions en discussion;
- `won` : entente gagnée;
- `lost` : entente perdue;
- `abandoned` : arrêt volontaire sans résultat commercial.

Transitions permises :

| De | Vers | Condition minimale |
|---|---|---|
| `open` | `qualified` | client ou prospect et besoin confirmés |
| `qualified` | `proposal` | valeur et prochaine action présentes |
| `proposal` | `negotiation` | interaction de négociation enregistrée |
| `proposal` | `won` | client existant ou converti requis |
| `negotiation` | `won` | client existant ou converti requis |
| état ouvert | `lost` | motif de perte requis |
| état ouvert | `abandoned` | motif d’abandon requis |
| `lost` | `open` | réouverture auditée |

Règles :

- `won` est un état terminal pour la première version;
- une opportunité gagnée peut produire un projet, un devis ou les deux selon une commande explicite;
- les identifiants produits sont conservés sur l’opportunité;
- les conversions répétées doivent retourner le même résultat ou un conflit;
- la probabilité est informative et ne décide jamais seule d’une transition.

## Activité commerciale

Types initiaux :

- `call`;
- `email`;
- `meeting`;
- `note`;
- `task`.

États d’une tâche commerciale :

- `pending`;
- `completed`;
- `cancelled`.

Une activité est immuable après audit, sauf correction explicitement journalisée. Les courriels et notes ne doivent pas contenir de secrets, jetons ou données cognitives non nécessaires.

## Conversion vers les domaines existants

### Prospect vers client

La commande doit :

1. verrouiller le prospect dans la transaction;
2. valider son organisation;
3. vérifier l’idempotence;
4. appeler le service canonique de création ou rattachement du client;
5. enregistrer `converted_client_id` et `converted_at`;
6. écrire l’audit métier;
7. publier l’événement d’outbox après succès transactionnel.

### Opportunité vers projet ou devis

La commande doit :

1. verrouiller l’opportunité;
2. exiger l’état `won` ou effectuer atomiquement la transition vers `won`;
3. exiger un client existant dans la même organisation;
4. appeler le service canonique demandé;
5. conserver les identifiants produits;
6. écrire l’audit et l’événement d’outbox;
7. refuser toute incohérence de répétition.

## Événements métier proposés

- `sales.lead.created`;
- `sales.lead.qualified`;
- `sales.lead.converted`;
- `sales.opportunity.created`;
- `sales.opportunity.stage_changed`;
- `sales.opportunity.won`;
- `sales.opportunity.lost`;
- `sales.opportunity.project_created`;
- `sales.opportunity.estimate_created`.

Chaque événement doit inclure l’organisation, l’entité, l’acteur, l’identifiant de corrélation et une charge minimale sans données sensibles inutiles.

## Exclusions

- campagnes automatisées;
- envoi de SMS;
- notation par intelligence artificielle;
- synchronisation externe;
- fusion automatique de contacts;
- prévisions commerciales avancées.

## Critères de promotion

Ce contrat peut passer en implémentation lorsque le mécanisme RLS actif, la matrice de permissions, les signatures des services canoniques et le prochain numéro de migration sont confirmés.