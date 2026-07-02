---
Projet: MADSuite / MAD DevOps
Document: Checklist — Inventaire des dépendances et contenus tiers
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Inventaire des dépendances et contenus tiers

## 1. Objectif

Cette checklist sert à garder une trace propre des bibliothèques, images, polices, templates, extraits et contenus tiers utilisés dans MADSuite ou dans un projet client MAD DevOps.

Elle ne remplace pas une revue juridique.

## 2. Position MADPROOF

MAD DevOps doit pouvoir démontrer :

- d’où vient un composant;
- pourquoi il est utilisé;
- sous quelles conditions il est fourni;
- si une attribution est nécessaire;
- si un remplacement est souhaitable;
- si une validation externe est requise.

## 3. Registre minimal

Pour chaque composant important :

- [ ] Nom du composant.
- [ ] Version.
- [ ] Source officielle.
- [ ] Type : code, police, image, icône, template, texte, outil.
- [ ] Usage dans le projet.
- [ ] Conditions d’utilisation connues.
- [ ] Attribution requise ou non.
- [ ] Impact si retiré.
- [ ] Responsable de validation.
- [ ] Date de dernière vérification.

## 4. Dépendances logicielles

- [ ] Dépendances directes listées.
- [ ] Dépendances critiques identifiées.
- [ ] Packages abandonnés repérés.
- [ ] Packages inconnus évités.
- [ ] Versions verrouillées lorsque nécessaire.
- [ ] Vulnérabilités connues vérifiées.
- [ ] Notes d’upgrade conservées.

## 5. Contenus visuels

- [ ] Images avec source claire.
- [ ] Icônes avec source claire.
- [ ] Polices avec source claire.
- [ ] Illustrations avec source claire.
- [ ] Captures d’écran nettoyées de données sensibles.
- [ ] Attributions ajoutées si requises.

## 6. Code externe ou inspiration

- [ ] Préférer les documentations officielles.
- [ ] Éviter de copier du code substantiel sans source claire.
- [ ] Comprendre et adapter le code utilisé.
- [ ] Documenter les inspirations importantes.
- [ ] Remplacer tout extrait douteux.

## 7. Contenu assisté par IA

- [ ] Vérification humaine effectuée.
- [ ] Sources importantes vérifiées.
- [ ] Aucune fausse citation conservée.
- [ ] Aucun claim légal, fiscal, médical ou scientifique sans validation.
- [ ] Texte sensible revu avant publication.
- [ ] Documents officiels relus professionnellement.

## 8. Projets clients

- [ ] Le client fournit les sources des contenus remis.
- [ ] Les contenus clients sont séparés des assets MAD DevOps.
- [ ] Les dépendances majeures sont listées dans la remise.
- [ ] Les risques connus sont communiqués clairement.
- [ ] Les éléments réutilisables MAD DevOps sont identifiés.

## 9. Gate de livraison

Avant livraison :

- [ ] Inventaire minimal complété.
- [ ] Aucun asset sans source.
- [ ] Aucune dépendance critique inconnue.
- [ ] Aucune donnée client sensible dans documentation publique.
- [ ] Attributions nécessaires ajoutées.
- [ ] Risques ouverts documentés.

## 10. Verdict MADPROOF

**MADPROOF-COMPLIANCE : accepté.**

Cette checklist est un outil interne de traçabilité. Toute question juridique spécifique doit être validée par une personne compétente.