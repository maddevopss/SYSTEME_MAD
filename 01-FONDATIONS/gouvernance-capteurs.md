---
Projet: MADSuite
Document: Gouvernance des capteurs
Version: 2.0
Dernière révision: 2026-07-14
Statut: Officiel
Auteur: Marc-André Dufour
---

# MADPROOF — Gouvernance des capteurs

## Principe directeur

> Aucun capteur n’est interdit par principe. Aucun capteur n’est autorisé par défaut.

MADSuite n’utilise jamais un capteur simplement parce qu’il est disponible. Tout usage doit être nécessaire à une fonctionnalité explicite, proportionné au bénéfice attendu, transparent et entièrement contrôlable par l’utilisateur.

## Principes obligatoires

### Neutralité des capteurs

L’acceptabilité d’un capteur dépend de sa finalité, de sa nécessité, de sa proportionnalité et des garanties offertes à l’utilisateur.

### Finalité explicite

Chaque capteur doit être associé à une fonctionnalité clairement décrite. Toute utilisation secondaire exige une nouvelle justification et un nouveau consentement explicite.

### Consentement granulaire et révocable

Le consentement doit être distinct pour chaque catégorie de capteur ou finalité. Le refus ne doit pas bloquer les fonctions qui n’en dépendent pas. Le retrait du consentement doit être simple et immédiat.

### Minimisation

Seules les données strictement nécessaires sont captées, dérivées, conservées ou transmises.

### Traitement local prioritaire

Le traitement sur l’appareil est privilégié lorsque cela est techniquement possible. La transmission d’un flux brut doit rester exceptionnelle, justifiée et clairement signalée.

### Transparence continue

L’utilisateur doit pouvoir savoir quel capteur est actif, pourquoi il l’est, quelles données sont traitées, où elles le sont, combien de temps elles sont conservées et comment arrêter le traitement.

### Contrôle utilisateur

L’utilisateur peut activer, désactiver, suspendre, révoquer et, lorsque cela s’applique, supprimer les données associées.

### Alternative moins intrusive

Avant d’introduire un capteur, l’équipe doit vérifier si la même valeur peut être fournie avec une méthode moins intrusive.

## Interdictions permanentes

MADSuite interdit :

- la surveillance cachée;
- l’activation sans information claire;
- le profilage externe;
- la réutilisation non consentie;
- l’inférence sensible non sollicitée;
- le diagnostic médical automatique;
- l’optimisation de l’engagement au détriment de l’autonomie;
- toute captation portant atteinte à la dignité ou à la liberté cognitive.

## Politique MVP

Le MVP reste volontairement restrictif. Par défaut, il n’utilise ni caméra, ni microphone, ni biométrie, ni capture permanente, ni surveillance passive.

Cette restriction est un choix de portée et de minimisation. Elle ne constitue pas une interdiction technologique définitive. Toute exception future doit passer par une décision documentée, une analyse de risques, un consentement granulaire et une validation MADPROOF.

## Usages futurs envisageables

Des usages comme la traduction d’une langue des signes, l’interaction gestuelle, l’assistance visuelle ou certains appareils connectés peuvent être étudiés lorsqu’ils respectent l’ensemble des principes ci-dessus.

## Philosophie MAD

> La technologie s’adapte à l’humain. L’humain ne s’adapte jamais à la technologie.
