---
Projet: MAD DevOps
Document: KB-007 — Railway, Vercel et Neon
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-007 — Railway, Vercel et Neon

## Rôle de la fiche

Cette fiche regroupe les repères d’usage de Railway, Vercel et Neon dans les projets MAD DevOps.

Elle sert à clarifier le rôle de chaque plateforme dans une architecture Web ou SaaS légère.

---

## Rôle des plateformes

### Vercel

Vercel est principalement utilisé pour :

- frontend;
- sites Web;
- applications React;
- previews de déploiement;
- hébergement rapide d’interfaces.

### Railway

Railway est principalement utilisé pour :

- backend;
- API;
- services Node.js;
- jobs simples;
- environnements de déploiement rapides.

### Neon

Neon est principalement utilisé pour :

- PostgreSQL hébergé;
- base de données serverless;
- projets SaaS légers;
- environnements de développement, staging ou production.

---

## Bonnes pratiques MAD DevOps

- Séparer clairement frontend, backend et base de données.
- Documenter les variables d’environnement importantes.
- Vérifier les URLs entre frontend et backend.
- Ne pas mélanger les environnements test et production.
- Garder une trace des services utilisés.
- Prévoir une validation après chaque déploiement.
- Documenter les limites du plan gratuit ou d’entrée de gamme.

---

## Points d’attention

### Configuration

Les erreurs fréquentes viennent souvent de :

- mauvaise URL d’API;
- variable manquante;
- mauvais environnement;
- service externe non configuré;
- base de données différente de celle attendue.

### Déploiement

Après un déploiement, vérifier :

- frontend accessible;
- backend accessible;
- connexion backend/base de données;
- route de santé ou route principale;
- logs récents;
- parcours utilisateur minimal.

### Coûts et limites

Les plateformes simples permettent d’aller vite, mais il faut surveiller :

- limites de plan;
- sommeil ou redémarrage des services;
- stockage;
- performance;
- coûts lorsque l’usage augmente.

---

## Questions utiles

- Quel service héberge le frontend ?
- Quel service héberge le backend ?
- Quelle base de données est utilisée ?
- Les variables sont-elles documentées ?
- Les URLs correspondent-elles au bon environnement ?
- Comment valider que le déploiement fonctionne ?

---

## Liens avec les standards

- STD-105 — Gestion de la configuration
- STD-305 — Validation avant livraison
- STD-401 — Environnements
- STD-403 — Déploiement
- STD-404 — Observabilité

---

## Note MADSuite

Pour MADSuite, une architecture simple peut utiliser :

- Vercel pour le frontend;
- Railway pour le backend;
- Neon pour PostgreSQL.

Cette combinaison doit rester bien documentée afin d’éviter les confusions d’environnement.
