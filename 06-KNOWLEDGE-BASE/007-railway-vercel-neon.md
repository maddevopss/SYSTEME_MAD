---
Projet: MAD DevOps
Document: KB-007 — Railway, Vercel et Neon
Version: 1.1
Dernière révision: 2026-07-22
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-007 — Railway, Vercel et Neon

## Rôle de la fiche

Cette fiche conserve les repères d’usage de Railway, Vercel et Neon dans les projets MAD DevOps.

Elle décrit une architecture hébergée sur des plateformes gérées. Elle ne constitue plus l’architecture de production actuelle de MADSuite depuis le 22 juillet 2026.

Pour l’architecture de production en vigueur, consulter :

- `06-KNOWLEDGE-BASE/008-infrastructure-production-madsuite-vps.md`;
- `05-PLAY/play-012-acces-ssh-vps-ovh.md`.

---

## Statut dans MADSuite

Depuis le 22 juillet 2026, `madsuite.ca` est hébergé sur un VPS OVHcloud contrôlé par MAD DevOps.

La combinaison Vercel, Railway et Neon demeure :

- une option d’architecture possible;
- une référence historique;
- une solution utile pour des prototypes, des essais ou des environnements secondaires;
- une solution de repli possible si elle est explicitement approuvée.

Elle ne doit plus être présentée comme l’architecture de production officielle de MADSuite.

---

## Rôle des plateformes

### Vercel

Vercel peut être utilisé pour :

- interfaces Web;
- sites publics;
- applications React;
- aperçus de déploiement;
- environnements temporaires.

### Railway

Railway peut être utilisé pour :

- serveurs applicatifs;
- interfaces de programmation;
- services Node.js;
- tâches planifiées simples;
- environnements de déploiement rapides.

### Neon

Neon peut être utilisé pour :

- PostgreSQL hébergé;
- environnements de développement ou d’essai;
- prototypes;
- architecture gérée à faible charge opérationnelle.

---

## Bonnes pratiques MAD DevOps

- Séparer clairement l’interface, le serveur applicatif et la base de données.
- Documenter les variables d’environnement importantes.
- Vérifier les adresses entre l’interface et le serveur.
- Ne pas mélanger les environnements d’essai et de production.
- Garder une trace des services utilisés.
- Prévoir une validation après chaque déploiement.
- Documenter les limites du forfait utilisé.
- Identifier clairement si une plateforme gérée est officielle, temporaire, secondaire ou historique.

---

## Points d’attention

### Configuration

Les erreurs fréquentes viennent souvent de :

- mauvaise adresse du serveur applicatif;
- variable manquante;
- mauvais environnement;
- service externe non configuré;
- base de données différente de celle attendue.

### Déploiement

Après un déploiement, vérifier :

- interface accessible;
- serveur applicatif accessible;
- connexion à la base de données;
- route de santé;
- journaux récents;
- parcours utilisateur minimal.

### Coûts et limites

Les plateformes gérées permettent d’aller vite, mais il faut surveiller :

- limites du forfait;
- sommeil ou redémarrage des services;
- stockage;
- performance;
- coûts lorsque l’usage augmente;
- dépendance envers un fournisseur externe.

---

## Liens avec les standards

- STD-105 — Gestion de la configuration
- STD-305 — Validation avant livraison
- STD-401 — Environnements
- STD-403 — Déploiement
- STD-404 — Observabilité

---

## Décision MADSuite

L’architecture officielle de production de MADSuite est désormais documentée séparément afin d’éviter toute confusion entre :

- l’état actuel;
- les solutions historiques;
- les options futures.
