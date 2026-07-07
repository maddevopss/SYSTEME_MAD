---
Projet: MAD DevOps
Document: KB-003 — PostgreSQL
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-003 — PostgreSQL

## Rôle de la fiche

Cette fiche regroupe les repères PostgreSQL importants pour les projets MAD DevOps.

Elle sert de mémoire opérationnelle interne et ne remplace pas la documentation officielle.

---

## Quand utiliser PostgreSQL

PostgreSQL est recommandé lorsqu’un projet a besoin :

- de données relationnelles solides;
- de transactions fiables;
- de rapports;
- de requêtes structurées;
- d’un modèle durable pour un SaaS;
- d’une base de données évolutive et bien connue.

---

## Bonnes pratiques MAD DevOps

- Définir les relations clairement.
- Utiliser des contraintes lorsque possible.
- Ajouter des index sur les colonnes réellement utilisées.
- Prévoir les migrations comme des changements importants.
- Tester les règles critiques de données.
- Documenter les décisions de schéma importantes.
- Garder les requêtes lisibles.

---

## Points d’attention

### Migrations

Avant une migration, vérifier :

- l’impact sur les données existantes;
- la compatibilité avec le code;
- l’ordre d’application;
- l’environnement ciblé;
- la validation après application.

### SaaS

Pour un SaaS, les tables doivent être conçues avec le contexte métier approprié.

Les requêtes doivent respecter ce contexte de manière constante.

### Performance

Les problèmes fréquents viennent souvent de :

- absence d’index;
- requêtes trop larges;
- jointures mal ciblées;
- pagination absente;
- lectures excessives dans les tâches automatisées.

---

## Questions utiles avant modification

- Quelle donnée est source de vérité ?
- Cette colonne doit-elle être obligatoire ?
- Faut-il une contrainte unique ?
- Faut-il un index ?
- Que se passe-t-il lors d’une suppression ?
- La migration est-elle claire et validable ?

---

## Liens avec les standards

- STD-103 — Base de données
- STD-104 — Architecture SaaS Multi-tenant
- STD-301 — Stratégie de tests
- STD-405 — Reprise et retour arrière

---

## Note MADSuite

MADSuite utilise PostgreSQL comme fondation de données structurées.

Les zones importantes sont la facturation, les clients, les projets, les entrées de temps, les organisations, les paiements, les tâches automatisées et les métriques.
