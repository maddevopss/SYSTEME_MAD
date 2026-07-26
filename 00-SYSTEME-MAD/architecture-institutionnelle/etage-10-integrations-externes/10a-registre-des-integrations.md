---
Projet: MAD DevOps
Document: Étage 10A — Registre des intégrations
Version: 1.0
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
---

# Étage 10A — Registre des intégrations

## Intention

Toute connexion entre MADSuite et un système externe doit être connue, attribuée, limitée et retirable. Le registre des intégrations décrit la relation réelle, pas seulement le nom d’un fournisseur.

## Fiche minimale

Chaque intégration indique : finalité, propriétaire, fournisseur, données échangées, direction des flux, authentification, secrets utilisés, environnements, dépendances, quotas, engagements, mécanismes d’erreur, reprise, observabilité, coûts, risques, statut de cycle de vie et procédure de retrait.

## Règles

- aucune intégration active ne demeure sans propriétaire;
- un environnement d’essai ne doit pas recevoir des données de production sans autorisation;
- les permissions doivent être minimales;
- les dépendances critiques doivent prévoir un mode dégradé;
- les changements contractuels ou techniques significatifs mettent à jour le registre;
- une intégration retirée demeure traçable avec sa date, ses données résiduelles et son remplacement.

## Classification

Les intégrations sont classées selon leur criticité, sensibilité des données, réversibilité, concentration fournisseur et effet d’une indisponibilité ou d’une compromission.

## Application à MADSuite

Le registre couvre notamment Stripe, services de courriel, hébergement, base de données gérée, observabilité, stockage, authentification externe, webhooks, connecteurs comptables et outils de collaboration réellement activés.

## Vérification

L’état déclaré doit être confronté aux secrets existants, domaines autorisés, journaux d’appels, configurations, contrats et flux observés. Une intégration découverte hors registre constitue un écart de sécurité et de gouvernance.

## Fermeture

La section est fermée lorsque toutes les intégrations actives sont recensées, attribuées, classées, reliées à des preuves, associées à une procédure d’incident et dotées d’un mécanisme de retrait.