---
Projet: MADSuite
Document: KB-008 — Infrastructure de production sur VPS
Version: 1.0
Dernière révision: 2026-07-22
Statut: Officiel
Auteur: Marc-André Dufour
---

# KB-008 — Infrastructure de production de MADSuite sur VPS

## Décision officielle

Depuis le 22 juillet 2026, `madsuite.ca` est hébergé sur un VPS OVHcloud administré par MAD DevOps.

Cette infrastructure devient la référence de production pour MADSuite.

Toute modification importante de l’hébergement, du réseau, des services exposés, des certificats, de la base de données ou de la stratégie de sauvegarde doit être documentée et révisée dans SYSTEME_MAD.

---

## Objectifs

Cette architecture vise à :

- garder le contrôle de l’hébergement;
- réduire la dépendance envers plusieurs plateformes externes;
- centraliser l’exploitation;
- rendre les déploiements reproductibles;
- documenter clairement les responsabilités;
- faciliter la sauvegarde, la restauration et la surveillance.

---

## Architecture de référence

```text
Internet
   |
   v
madsuite.ca
   |
   v
HTTPS et certificat TLS
   |
   v
Serveur mandataire inverse
   |
   +--> Interface MADSuite
   |
   +--> Serveur applicatif MADSuite
               |
               v
          PostgreSQL
               |
               v
          Sauvegardes
```

Le nom exact des logiciels utilisés pour le serveur mandataire inverse, les conteneurs, les volumes et la base de données doit rester aligné avec la configuration réellement déployée.

---

## Composants couverts

L’infrastructure de production comprend au minimum :

- le domaine `madsuite.ca`;
- le VPS OVHcloud;
- le serveur mandataire inverse;
- le certificat HTTPS;
- l’interface Web;
- le serveur applicatif;
- PostgreSQL;
- les volumes persistants;
- les journaux;
- les sauvegardes;
- les mécanismes de restauration;
- la surveillance de base.

---

## Principes d’exploitation

### Séparation des services

L’interface, le serveur applicatif et la base de données doivent rester séparés logiquement, même lorsqu’ils partagent le même VPS.

### Configuration déclarée

Les fichiers de configuration nécessaires au déploiement doivent être versionnés dans le dépôt d’infrastructure approprié, sans inclure de secret.

### Secrets

Les mots de passe, clés privées, jetons et valeurs sensibles ne doivent jamais être inscrits dans SYSTEME_MAD ni dans un dépôt public.

### Accès administrateur

L’accès au VPS doit se faire par SSH avec une clé dédiée. La procédure officielle est conservée dans :

- `05-PLAY/play-012-acces-ssh-vps-ovh.md`.

### Validation après déploiement

Après chaque mise en production, vérifier au minimum :

- résolution du domaine;
- certificat HTTPS valide;
- chargement de l’interface;
- route de santé du serveur applicatif;
- connexion à PostgreSQL;
- journaux sans erreur critique;
- parcours de connexion minimal;
- espace disque disponible.

---

## Sauvegarde minimale attendue

La stratégie de sauvegarde doit couvrir :

- la base PostgreSQL;
- les volumes persistants nécessaires;
- les fichiers de configuration non secrets;
- la fréquence des sauvegardes;
- la durée de conservation;
- l’emplacement de stockage;
- une procédure de restauration testée.

Une sauvegarde non testée ne doit pas être considérée comme une restauration garantie.

---

## Surveillance minimale attendue

Surveiller au minimum :

- disponibilité de `madsuite.ca`;
- état du serveur applicatif;
- utilisation du disque;
- utilisation de la mémoire;
- redémarrages anormaux;
- expiration du certificat;
- échec des sauvegardes;
- erreurs critiques dans les journaux.

---

## Environnements

La production doit être clairement distinguée des environnements de développement et d’essai.

L’ajout d’un environnement de préproduction sur le VPS ou ailleurs devra préciser :

- son domaine;
- sa base de données;
- ses variables;
- ses données autorisées;
- sa procédure de déploiement;
- son niveau d’accès.

---

## Responsabilité documentaire

SYSTEME_MAD conserve la décision, les principes, les procédures et l’état de référence.

Les fichiers exécutables de déploiement doivent demeurer dans le dépôt technique responsable de l’infrastructure ou du produit.

---

## Références

- `06-KNOWLEDGE-BASE/007-railway-vercel-neon.md`
- `05-PLAY/play-012-acces-ssh-vps-ovh.md`
- STD-105 — Gestion de la configuration
- STD-305 — Validation avant livraison
- STD-401 — Environnements
- STD-403 — Déploiement
- STD-404 — Observabilité
