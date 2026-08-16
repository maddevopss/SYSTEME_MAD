---
Projet: MADSuite / MAD DevOps
Document: Registre R&D — Preuves, incertitudes et essais
Version: 1.1
Dernière révision: 2026-08-16
Statut: Brouillon
Classification: MADPROOF-R&D
Auteur: Marc-André Dufour / MAD DevOps
---

# Registre R&D — Preuves, incertitudes et essais

## 1. Objectif

Ce registre sert à documenter les travaux R&D MADSuite de façon rigoureuse : hypothèses, incertitudes, essais, résultats, échecs, décisions et preuves.

Il peut soutenir une démarche interne de qualité, une analyse produit et une discussion éventuelle avec un comptable ou conseiller RS&DE. Il ne constitue pas une preuve automatique d’admissibilité fiscale.

## 2. Position MADPROOF

Une activité R&D MADSuite doit être documentée avec :

- un problème clair;
- une incertitude réelle;
- une hypothèse;
- une méthode;
- un essai;
- un résultat;
- une conclusion;
- une décision;
- une preuve conservée.

## 3. Ce qui peut être R&D

Exemples potentiels à documenter :

- classification locale de patterns de friction;
- snapshot de reprise après interruption;
- réduction de charge cognitive par interface adaptative;
- génération de micro-actions contextuelles;
- architecture privacy-first pour capture assistive;
- modèle de temps flottant/fixe;
- synchronisation offline avec conflits;
- moteur de recommandations non médicales;
- mesure de l’impact UX sur reprise de tâche.

## 4. Ce qui n’est généralement pas R&D seul

À ne pas surclasser :

- simple CRUD;
- intégration standard d’une API;
- correction de bug ordinaire;
- refactor sans incertitude;
- mise en page;
- ajout d’un formulaire;
- configuration connue;
- usage normal d’une librairie.

Ces éléments peuvent faire partie d’un projet R&D, mais ne suffisent pas seuls.

## 5. Template d’entrée R&D

### ID

`RD-YYYY-MM-DD-XXX`

### Titre

Nom court de l’essai ou de l’incertitude.

### Domaine

- Produit
- IA locale
- UX cognitive
- Privacy
- Offline sync
- Facturation
- Géospatial
- Sécurité
- Autre

### Problème

Décrire le problème observable.

### Incertitude

Décrire ce qui n’est pas connu d’avance.

### Hypothèse

Décrire ce que l’on croit possible.

### Méthode

Décrire comment l’essai sera effectué.

### Données utilisées

Décrire les données, en minimisant les renseignements personnels.

### Résultat

Décrire ce qui s’est produit.

### Échec ou limite

Documenter les limites, y compris les résultats négatifs.

### Décision

- Continuer
- Modifier
- Abandonner
- Reporter
- Valider avec utilisateurs

### Preuves conservées

- Commit
- Capture non sensible
- Log anonymisé
- Test
- Note de conception
- Mesure UX
- PR
- Issue

### Classification MADPROOF

- Fondation
- R&D
- À reformuler
- À vérifier
- À supprimer

## 6. Exemple d’entrée

### ID

`RD-2026-07-02-001`

### Titre

Snapshot de reprise après interruption

### Domaine

UX cognitive / MAD Ariane

### Problème

Après une interruption, l’utilisateur peut perdre le fil opérationnel : où il était, pourquoi il y était, et quelle action reprendre.

### Incertitude

On ne sait pas encore quelle structure de snapshot réduit le mieux la friction de reprise dans MADSuite.

### Hypothèse

Un snapshot court contenant contexte, intention et prochaine micro-action peut réduire la friction perçue.

### Méthode

Prototype avec trois formats de snapshot et test utilisateur non clinique.

### Données utilisées

État applicatif local : module, entité, onglet, action récente, brouillon.

### Résultat

À mesurer.

### Décision

À valider.

### Classification MADPROOF

MADPROOF-R&D.

## 7. Règles de preuve

- [ ] Conserver les échecs.
- [ ] Ne pas embellir les résultats.
- [ ] Séparer observation et interprétation.
- [ ] Ne pas transformer une hypothèse en claim produit.
- [ ] Ne pas utiliser de données personnelles inutiles.
- [ ] Anonymiser les traces.
- [ ] Lier les essais aux commits ou notes.

## 8. Utilisation fiscale prudente

Ce registre peut aider à préparer une discussion sur les activités R&D, mais :

- [ ] ne garantit aucune admissibilité;
- [ ] ne remplace pas un comptable;
- [ ] ne remplace pas une analyse RS&DE;
- [ ] ne doit pas être utilisé comme promesse client;
- [ ] doit rester factuel et vérifiable.

## 9. Verdict MADPROOF

**MADPROOF-R&D : accepté.**

Le registre renforce la rigueur du projet et protège MADSuite contre les claims exagérés. Il doit être rempli au fil de l’eau, pas reconstruit après coup.
