---
Projet: MADSuite / MAD DevOps
Document: Checklist — Inventaire des dépendances et contenus tiers
Version: 1.1
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-IP-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Inventaire des dépendances et contenus tiers

## 1. Objectif

Cette checklist sert à garder une trace propre des bibliothèques, images, polices, templates, extraits, contenus IA et contenus tiers utilisés dans MADSuite ou dans un projet client MAD DevOps.

Elle ne remplace pas une revue juridique.

Document de référence interne :

```text
SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-droitauteur.md
```

## 2. Position MADPROOF

MAD DevOps doit pouvoir démontrer :

- d’où vient un composant;
- pourquoi il est utilisé;
- sous quelles conditions il est fourni;
- si une attribution est nécessaire;
- si une obligation de redistribution existe;
- si une licence est compatible avec la stratégie MADSuite;
- si un remplacement est souhaitable;
- si une validation externe est requise.

Règle centrale :

```text
Aucune dépendance, image, police, template ou portion de code externe ne doit être intégrée sans source et licence claire.
```

## 3. Registre minimal

Pour chaque composant important :

- [ ] Nom du composant.
- [ ] Version.
- [ ] Source officielle.
- [ ] URL de référence.
- [ ] Type : code, police, image, icône, template, texte, dataset, outil.
- [ ] Usage dans le projet.
- [ ] Licence ou conditions d’utilisation.
- [ ] Attribution requise ou non.
- [ ] Redistribution permise ou non.
- [ ] Modification permise ou non.
- [ ] Usage commercial permis ou non.
- [ ] Impact si retiré.
- [ ] Responsable de validation.
- [ ] Date de dernière vérification.
- [ ] Statut : accepté, à remplacer, à vérifier, interdit.

## 4. Dépendances logicielles

- [ ] Dépendances directes listées.
- [ ] Dépendances critiques identifiées.
- [ ] Packages abandonnés repérés.
- [ ] Packages inconnus évités.
- [ ] Versions verrouillées lorsque nécessaire.
- [ ] Vulnérabilités connues vérifiées.
- [ ] Notes d’upgrade conservées.
- [ ] Licence de chaque dépendance directe vérifiée.
- [ ] Dépendances transitives critiques surveillées.
- [ ] Aucun package au nom suspect ou typosquatting évident.
- [ ] Aucun package sans dépôt/source crédible si usage critique.

## 5. Licences open source

### 5.1 Licences généralement compatibles sous conditions

- [ ] MIT vérifiée.
- [ ] BSD vérifiée.
- [ ] Apache 2.0 vérifiée.
- [ ] ISC vérifiée.
- [ ] MPL vérifiée avec obligations comprises.

### 5.2 Licences à revue obligatoire

- [ ] GPL.
- [ ] LGPL.
- [ ] AGPL.
- [ ] SSPL.
- [ ] Elastic License.
- [ ] Commons Clause.
- [ ] Licence “source available”.
- [ ] Licence non standard.
- [ ] Licence absente.

Règle MADPROOF :

```text
GPL / AGPL / SSPL / licence non standard = revue obligatoire avant intégration dans MADSuite.
```

## 6. Obligations d’attribution et NOTICE

- [ ] Attributions nécessaires conservées.
- [ ] Fichiers LICENSE conservés si requis.
- [ ] Fichier NOTICE créé ou mis à jour si nécessaire.
- [ ] Mentions copyright conservées.
- [ ] Documentation de redistribution vérifiée si build desktop/mobile.
- [ ] Conditions de licence accessibles dans le produit si requis.
- [ ] Mentions tierces incluses dans la documentation de livraison client si nécessaire.

## 7. Contenus visuels

- [ ] Images avec source claire.
- [ ] Icônes avec source claire.
- [ ] Polices avec source claire.
- [ ] Illustrations avec source claire.
- [ ] Captures d’écran nettoyées de données sensibles.
- [ ] Attributions ajoutées si requises.
- [ ] Licence compatible avec usage commercial.
- [ ] Licence compatible avec modification.
- [ ] Licence compatible avec usage dans SaaS, site web ou app desktop.
- [ ] Aucun asset “gratuit” sans conditions vérifiées.

## 8. Polices

- [ ] Source officielle vérifiée.
- [ ] Licence Web vérifiée.
- [ ] Licence app/desktop vérifiée si intégrée dans Electron ou build distribué.
- [ ] Droit d’hébergement local vérifié.
- [ ] Droit de modification vérifié si police modifiée.
- [ ] Attribution requise ou non documentée.
- [ ] Alternative système prévue si doute.

## 9. Code externe ou inspiration

- [ ] Préférer les documentations officielles.
- [ ] Éviter de copier du code substantiel sans source claire.
- [ ] Comprendre et adapter le code utilisé.
- [ ] Documenter les inspirations importantes.
- [ ] Remplacer tout extrait douteux.
- [ ] Aucun copier-coller depuis StackOverflow, blog, gist ou IA sans revue.
- [ ] Toute portion substantielle de code externe doit avoir licence compatible.
- [ ] Les snippets courts doivent quand même être revus si utilisés dans code critique.

## 10. Contenu assisté par IA

- [ ] Vérification humaine effectuée.
- [ ] Sources importantes vérifiées.
- [ ] Aucune fausse citation conservée.
- [ ] Aucun claim légal, fiscal, médical ou scientifique sans validation.
- [ ] Texte sensible revu avant publication.
- [ ] Documents officiels relus professionnellement.
- [ ] Code généré par IA revu comme code externe.
- [ ] Aucune reproduction longue d’un contenu protégé sans droit clair.
- [ ] Aucun contenu client confidentiel utilisé pour générer un asset public.

## 11. Datasets, modèles et contenus ML/IA

- [ ] Dataset avec source claire.
- [ ] Licence du dataset vérifiée.
- [ ] Usage commercial autorisé.
- [ ] Données personnelles absentes ou traitées légalement.
- [ ] Droit d’entraînement ou d’évaluation vérifié.
- [ ] Modèle pré-entraîné avec licence vérifiée.
- [ ] Restrictions d’usage du modèle vérifiées.
- [ ] Aucun dataset sensible intégré sans revue privacy/sécurité.

## 12. Projets clients

- [ ] Le client fournit les sources des contenus remis.
- [ ] Les contenus clients sont séparés des assets MAD DevOps.
- [ ] Les dépendances majeures sont listées dans la remise.
- [ ] Les risques connus sont communiqués clairement.
- [ ] Les éléments réutilisables MAD DevOps sont identifiés.
- [ ] Les droits sur les livrables sont alignés avec le contrat.
- [ ] Les composants préexistants MAD DevOps sont exclus de toute cession totale non voulue.
- [ ] Les licences tierces sont mentionnées dans la livraison si nécessaire.

## 13. Distribution SaaS / desktop / mobile

Avant distribution :

- [ ] Vérifier obligations spécifiques au SaaS.
- [ ] Vérifier obligations spécifiques à Electron/desktop.
- [ ] Vérifier obligations spécifiques aux stores mobiles si applicable.
- [ ] Vérifier si la distribution binaire exige inclusion de licences.
- [ ] Vérifier si un composant impose publication du code source.
- [ ] Vérifier si une licence réseau type AGPL affecte le SaaS.
- [ ] Documenter la décision si une dépendance à risque est conservée.

## 14. Gate de livraison

Avant livraison :

- [ ] Inventaire minimal complété.
- [ ] Aucun asset sans source.
- [ ] Aucune dépendance critique inconnue.
- [ ] Aucune licence absente sur dépendance critique.
- [ ] Aucune licence copyleft forte sans revue.
- [ ] Aucune donnée client sensible dans documentation publique.
- [ ] Attributions nécessaires ajoutées.
- [ ] NOTICE/Licenses inclus si nécessaire.
- [ ] Risques ouverts documentés.
- [ ] Remplacements prévus pour composants douteux.

## 15. Claims interdits

Ne pas écrire :

- “libre de droits” sans preuve;
- “gratuit donc utilisable”;
- “open source donc sans obligation”;
- “MIT/Apache/GPL c’est pareil”;
- “copier un petit bout de code ne compte pas”;
- “généré par IA donc sans droit d’auteur à vérifier”;
- “le client nous a donné l’image donc c’est correct”;
- “aucun risque de licence”.

Formulation prudente recommandée :

```text
Les dépendances et contenus tiers doivent être inventoriés, sourcés et vérifiés selon leur licence avant livraison ou publication.
```

## 16. Verdict MADPROOF

**MADPROOF-IP-COMPLIANCE : accepté.**

Cette checklist est un outil interne de traçabilité. Toute question juridique spécifique doit être validée par une personne compétente.