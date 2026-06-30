---
Projet: MAD DevOps
Document: KB-004 — Prisma
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-004 — Prisma

## Rôle de la fiche

Cette fiche regroupe les repères Prisma utiles pour les projets MAD DevOps.

Prisma sert à modéliser, migrer et interagir avec une base de données depuis une application Node.js ou TypeScript.

---

## Quand utiliser Prisma

Prisma est pertinent lorsque le projet a besoin :

- d’un schéma de données lisible;
- d’un client typé;
- d’un flux de migration structuré;
- d’une intégration claire avec Node.js;
- d’une couche d’accès aux données maintenable.

---

## Bonnes pratiques MAD DevOps

- Garder le schéma Prisma lisible.
- Nommer clairement les modèles et relations.
- Relire les migrations avant application.
- Ne pas traiter Prisma comme une boîte noire.
- Tester les requêtes critiques.
- Documenter les décisions de modèle importantes.
- Séparer logique métier et accès aux données lorsque possible.

---

## Points d’attention

### Schéma

Le fichier Prisma doit représenter le modèle métier réel.

Un mauvais modèle au départ finit souvent par compliquer les services, les requêtes et les migrations.

### Migrations

Les migrations doivent être comprises avant d’être appliquées.

Vérifier :

- ajout ou retrait de colonne;
- changement de relation;
- valeur par défaut;
- impact sur les données existantes;
- compatibilité avec le code déployé.

### Requêtes

Les requêtes doivent rester intentionnelles.

Éviter :

- lectures trop larges;
- inclusions inutiles;
- absence de pagination;
- logique métier cachée dans des requêtes difficiles à comprendre.

---

## Questions utiles

- Le modèle correspond-il au besoin métier ?
- Cette relation est-elle nécessaire ?
- La migration peut-elle être appliquée sans ambiguïté ?
- La requête retourne-t-elle seulement ce qui est nécessaire ?
- La logique devrait-elle être dans le service plutôt que dans la requête ?

---

## Liens avec les standards

- STD-103 — Base de données
- STD-301 — Stratégie de tests
- STD-303 — Definition of Done
- STD-405 — Reprise et retour arrière

---

## Note MADSuite

Dans MADSuite, Prisma doit rester aligné avec le modèle métier : organisations, utilisateurs, clients, projets, temps, factures, paiements, tâches récurrentes et métriques.
