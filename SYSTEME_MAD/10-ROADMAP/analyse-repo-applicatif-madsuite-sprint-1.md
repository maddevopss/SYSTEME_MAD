---
Projet: MAD DevOps
Document: Analyse repo applicatif — Sprint 1 MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Analyse repo applicatif — Sprint 1 MADSuite

## Objectif

Ce document analyse les dépôts accessibles afin de mapper les tickets Sprint 1 MADSuite sur les fichiers applicatifs réels.

Sprint 1 visé :

```text
Auth simple → Organisation simple → Client → Projet → Temps manuel → Facture brouillon → Total clair → PDF simple
```

---

## Dépôts accessibles observés

Les dépôts accessibles via le connecteur GitHub sont :

```text
bleeband/SYSTEME_MAD
bleeband/maddevops
```

---

## Constat principal

Aucun dépôt applicatif MADSuite SaaS complet n’est visible dans les dépôts accessibles au moment de cette analyse.

Le dépôt `bleeband/maddevops` semble être un site vitrine statique MAD DevOps, pas l’application SaaS MADSuite.

Il contient notamment :

```text
README.md
index.html
v2.html
```

---

## Analyse du dépôt `bleeband/maddevops`

### Nature du dépôt

Le dépôt présente MAD DevOps comme studio de création Web, mobile, automatisation et outils internes.

Le fichier principal `index.html` contient :

- métadonnées SEO;
- style CSS embarqué;
- header;
- hero;
- sections services;
- exemples concrets;
- approche;
- projet en vedette;
- contact;
- footer.

### Ce que le dépôt peut servir à faire

Ce dépôt peut servir à :

- améliorer la page publique MAD DevOps;
- ajouter une section MADSuite;
- pointer vers une future page Early Access;
- soutenir la Machine à clients;
- présenter MADSuite quand le MVP sera prêt.

### Ce que le dépôt ne permet pas de faire directement

Ce dépôt ne permet pas de mapper directement les tickets Sprint 1 applicatifs suivants :

- auth;
- organisation;
- clients;
- projets;
- temps manuel;
- factures;
- PDF;
- dashboard revenus;
- feedback applicatif;
- sécurité multi-tenant.

---

## Mapping Sprint 1 avec l’état actuel

| Ticket | Mapping actuel | Statut |
|---|---|---|
| TICKET-001 — Vérifier l’état actuel du repo applicatif | Partiellement fait pour les dépôts accessibles. | À compléter quand le vrai repo SaaS est accessible. |
| TICKET-002 — Auth simple | Aucun fichier applicatif trouvé. | Non mappable. |
| TICKET-003 — Organisation simple | Aucun fichier applicatif trouvé. | Non mappable. |
| TICKET-004 — Clients MVP | Aucun module clients trouvé. | Non mappable. |
| TICKET-005 — Projets MVP | Aucun module projets trouvé. | Non mappable. |
| TICKET-006 — Entrées de temps manuelles | Aucun module temps trouvé. | Non mappable. |
| TICKET-007 — Facture brouillon MVP | Aucun module factures trouvé. | Non mappable. |
| TICKET-008 — Ajouter temps facturable à facture | Aucun module temps/facture trouvé. | Non mappable. |
| TICKET-009 — Statuts facture simples | Aucun module factures trouvé. | Non mappable. |
| TICKET-010 — PDF simple | Aucun générateur PDF applicatif trouvé. | Non mappable. |
| TICKET-011 — Parcours première facture de bout en bout | Pas de parcours applicatif visible. | Non mappable. |
| TICKET-012 — Sécurité minimale Sprint 1 | Pas de backend visible. | Non mappable. |
| TICKET-013 — États vides orientés action | Applicable au SaaS, pas visible ici. | À reporter. |
| TICKET-014 — Mini récap valeur après première facture | Applicable au SaaS, pas visible ici. | À reporter. |
| TICKET-015 — Feedback léger après première facture | Applicable au SaaS, pas visible ici. | À reporter. |

---

## Recommandation

Avant de lancer l’agent codeur Sprint 1, il faut rendre accessible le vrai dépôt applicatif MADSuite ou confirmer son nom exact.

Le repo attendu devrait contenir au minimum :

```text
backend/
frontend/
package.json
src/
prisma/
migrations/
routes/
controllers/
services/
components/
pages/
```

ou une structure équivalente.

---

## Action possible avec `bleeband/maddevops`

Si aucun autre dépôt n’est disponible, la seule action utile liée à MADSuite dans `bleeband/maddevops` serait de créer une section ou page publique :

```text
MADSuite — Early Access
```

Cette action relève de la Machine à clients, pas du Sprint 1 applicatif.

---

## Verdict

Le mapping Sprint 1 sur le repo applicatif ne peut pas être complété avec les dépôts actuellement visibles.

Le dépôt `bleeband/maddevops` est utile pour la présence publique MAD DevOps, mais il ne contient pas les modules nécessaires pour coder le parcours première facture MADSuite.

---

## Prochaine action recommandée

1. Donner accès au vrai dépôt applicatif MADSuite.
2. Relancer `TICKET-001 — Vérifier l’état actuel du repo applicatif`.
3. Mapper les tickets Sprint 1 sur les fichiers réels.
4. Lancer l’agent codeur avec le prompt Sprint 1.

---

## Phrase de contrôle

> Est-ce que le dépôt analysé contient réellement le parcours première facture, ou seulement la présence publique du studio?
