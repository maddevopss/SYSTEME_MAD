---
Projet: SYSTEME_MAD
Document: Cadre proposé des annexes d’ingénierie
Version: 0.1
Dernière révision: 2026-07-25
Statut: Proposition
Auteur: Marc-André Dufour
Langue source: Français
---

# Cadre proposé des annexes d’ingénierie

## Objet

Définir les annexes évolutives nécessaires pour appliquer la Constitution d’ingénierie sans alourdir son texte fondateur ni le rendre dépendant d’une technologie particulière.

## Annexes prévues

### 1. Registre des invariants

Recense les règles qui doivent demeurer vraies malgré les changements d’architecture, d’outils ou d’équipe.

Chaque invariant doit préciser :

- son identifiant;
- son origine institutionnelle;
- sa portée;
- les systèmes concernés;
- les preuves attendues;
- les conséquences d’une violation;
- la procédure d’amendement.

### 2. Décisions d’architecture

Les décisions structurantes sont conservées dans des ADR reliées aux principes, invariants, issues, PR, tests et preuves d’exploitation concernés.

### 3. Catalogue des preuves

Décrit les formes de preuves acceptables selon le risque :

- tests automatisés;
- validations fonctionnelles;
- exercices de restauration;
- mesures de performance;
- audits de sécurité;
- démonstrations reproductibles;
- observations d’exploitation;
- décisions assumées.

### 4. Indice de conformité MAD

L’Indice de conformité MAD est un instrument de lecture de la santé du système, non une note destinée à juger les personnes.

Dimensions proposées :

- respect des invariants;
- sécurité et isolation;
- qualité et non-régression;
- documentation et transmission;
- observabilité;
- réversibilité;
- conformité des données;
- gouvernance de l’intelligence assistée;
- traçabilité verticale;
- exploitation durable.

Toute mesure doit être explicable, reproductible et accompagnée de ses limites.

### 5. Gouvernance de l’intelligence assistée

Précise :

- les usages autorisés;
- les contextes accessibles;
- les actions nécessitant une confirmation humaine;
- les exigences d’explicabilité;
- les journaux d’audit;
- les mécanismes de désactivation;
- les évaluations et contrôles de dérive.

### 6. Glossaire en langage clair

Chaque terme spécialisé doit être expliqué d’abord par ce qu’il fait dans la vie réelle. Le terme technique ou l’acronyme peut ensuite être ajouté entre parenthèses.

### 7. Registre de traçabilité verticale

Permet de relier :

```text
Principe
  ↓
Article constitutionnel
  ↓
Invariant
  ↓
Décision d’architecture
  ↓
Issue et branche
  ↓
Commit et pull request
  ↓
Tests et audits
  ↓
Déploiement
  ↓
Preuves d’exploitation
  ↓
Retour d’expérience
```

## Règle de séparation

Les annexes peuvent évoluer plus fréquemment que la Constitution d’ingénierie. Elles ne peuvent toutefois ni contredire son texte, ni créer silencieusement une nouvelle autorité fondamentale.

Lorsqu’une annexe révèle qu’un principe permanent doit changer, un amendement constitutionnel spécialisé doit être proposé.

## Ordre de mise en œuvre proposé

1. registre des invariants;
2. registre de traçabilité verticale;
3. catalogue des preuves;
4. gouvernance de l’intelligence assistée;
5. Indice de conformité MAD;
6. glossaire et guides d’application.
