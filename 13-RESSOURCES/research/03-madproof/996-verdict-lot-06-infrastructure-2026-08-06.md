---
Projet: Système MAD
Document: Verdict MADPROOF du lot 06 — Infrastructure, cybersécurité et assistance distante
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider
Auteur: MAD DevOps
---

# Verdict MADPROOF du lot 06 — Infrastructure, cybersécurité et assistance distante

## 1. Objet

Analyser le lot 06 du répertoire Google Drive Recherche et déterminer ce qui peut être conservé comme connaissance de recherche, base de conception ou futur standard MAD.

Cette PR documente un verdict. Elle ne transforme aucun document Drive en source officielle et ne modifie aucun code, contrat API, architecture produit ou document original.

## 2. Corpus vérifié

Le lot contient 21 documents, notamment :

- lexique d’infrastructure souveraine et de cybersécurité;
- cadres et documents d’assistance distante souveraine;
- architecture et concepts de « Boîte Bleue »;
- cybersécurité moderne, passkeys et Zero Trust;
- VPS, auto-hébergement, Docker et Kubernetes;
- spécifications Linux, Windows et ChromeOS;
- sécurité réseau, contenu généré par les utilisateurs et géospatial.

Les documents sont de nature hétérogène : guides pédagogiques, spécifications, concepts, prototypes compilés et documents normalisés selon la structure MAD. La normalisation structurelle ne constitue pas une validation technique, juridique ou de sécurité.

## 3. Verdict global

**NON ADMISSIBLE À L’INTÉGRATION CANONIQUE AUTOMATIQUE.**

**Admissible sous conditions comme ressource de recherche et base de conception technique.**

Motifs :

- bibliographies et versions de référence incomplètes dans plusieurs documents;
- mélange entre hypothèse, recommandation, architecture cible, prototype et garantie;
- claims juridiques sur la Loi 25, le CLOUD Act, la FISA et l’hébergement territorial dépassant la preuve fournie;
- claims de sécurité absolus ou impossibles à garantir par une seule technologie;
- performances, compatibilité OS, exigences de boutique et comportements réseau à vérifier dans l’environnement réel;
- risques de présenter un choix d’architecture comme une conformité réglementaire acquise.

## 4. Éléments utilisables prudemment

Les éléments suivants peuvent servir de pistes de conception, à condition de les traiter comme des décisions à vérifier :

- séparation des environnements, des identités, des secrets et des privilèges;
- principe de moindre privilège et contrôle explicite des opérations d’assistance;
- consentement visible, finalité déclarée, durée de session, mécanisme d’arrêt et journalisation;
- distinction entre co-navigation, partage d’écran et contrôle du système d’exploitation;
- traitement local ou local-first lorsque le besoin, la menace et les limites sont documentés;
- chiffrement, gestion des clés, rotation, sauvegardes et restauration comme contrôles complémentaires;
- adoption éventuelle de WebRTC pour des communications temps réel, après validation du signalement, des relais TURN, de la journalisation et de la localisation des flux;
- utilisation éventuelle d’Argon2 conformément à RFC 9106 pour un cas de dérivation ou de hachage de mot de passe approprié;
- architecture Zero Trust comme modèle de contrôle, non comme certification ni garantie;
- tests ciblés par système d’exploitation, version, matériel, permission et mode hors ligne.

WebRTC est une spécification d’API de communication temps réel; elle ne prouve pas à elle seule que les flux resteront dans une juridiction donnée ni qu’un système d’assistance est sécurisé. Argon2 est décrit dans RFC 9106 comme une fonction résistante à la mémoire pour le hachage de mots de passe et certaines applications de preuve de travail; son emploi, ses paramètres et sa gestion des secrets doivent être définis par le système réel. Le modèle Zero Trust doit être évalué selon le contexte d’architecture et les contrôles effectivement déployés.

## 5. Claims bloqués

Les formulations suivantes ne doivent pas être promues dans le canon sans preuve spécialisée, contexte précis et reformulation :

- « l’hébergement québécois garantit la conformité à la Loi 25 »;
- « la localisation au Québec neutralise ou élimine les risques extraterritoriaux »;
- « la Boîte Bleue rend l’organisation exclusivement soumise au droit québécois ou canadien »;
- « le chiffrement, le TPM, une enclave, le zero-knowledge ou le crypto-shredding garantissent une immunité ou une sécurité absolue »;
- « WebRTC garantit que les flux ne quittent jamais le territoire ou ne passent jamais par un relais tiers »;
- « une preuve de position par latence rend la localisation infalsifiable ou bannit les VPN »;
- « les journaux signés ont automatiquement une force probante ou sont opposables devant un tribunal »;
- « une seule ÉFVP est inutile lorsque les données sont hébergées localement »;
- « une technologie, une permission, une version de Windows/Linux/ChromeOS ou une règle de boutique est obligatoire dans tous les contextes »;
- toute valeur de performance, de disponibilité, de précision, de coût ou de réduction de risque sans protocole reproductible.

Les montants de sanctions, articles de loi, obligations de transfert, exigences de consentement et effets juridiques doivent être vérifiés dans les textes officiels applicables et ne peuvent pas être déduits d’un choix d’hébergement.

## 6. Position juridique et vie privée

Le corpus peut soutenir une démarche de protection des renseignements personnels, mais il ne peut pas conclure à la conformité.

La documentation gouvernementale québécoise décrit l’évaluation des facteurs relatifs à la vie privée comme une démarche préventive exigée dans certains cas. Les conditions applicables dépendent notamment de la nature des renseignements, de la finalité, des mesures de protection et du cadre juridique concerné.

Avant toute fonctionnalité d’assistance distante ou de synchronisation :

- définir les renseignements réellement collectés;
- distinguer capture d’écran, contrôle, télémétrie, journaux et contenu utilisateur;
- établir la finalité et la base de traitement;
- recueillir un consentement compréhensible lorsque requis;
- documenter la conservation, la suppression et les accès;
- analyser les fournisseurs, relais, sauvegardes et transferts;
- effectuer l’évaluation requise avec les responsables compétents;
- obtenir une revue juridique québécoise avant toute promesse commerciale.

Aucun document du lot ne doit être cité comme avis juridique.

## 7. Classement MADPROOF

| Sous-ensemble | Classe | Décision |
|---|---|---|
| Concepts local-first, séparation des privilèges et gestion des secrets | R&D / base de conception | Conserver; convertir plus tard en exigences testables |
| Assistance distante, co-navigation et contrôle du poste | R&D à risque élevé | Bloquer toute implémentation sans modèle de menace, consentement, arrêt et tests de sécurité |
| Passkeys, Zero Trust, chiffrement et Argon2 | Base technique sous conditions | Vérifier les sources, paramètres, bibliothèques, menaces et preuves |
| VPS, Docker, Kubernetes et auto-hébergement | Architecture à vérifier | Ne pas confondre résidence, contrôle opérationnel et conformité |
| Linux, Windows et ChromeOS | Spécifications à vérifier | Vérifier chaque API, version, permission, paquet et politique officielle |
| Loi 25, CLOUD Act, FISA, sanctions et force probante | À validation spécialisée | Ne pas intégrer au canon sans sources officielles et revue juridique |
| Preuve de position, ZKP, TEE et crypto-shredding | R&D | Aucune promesse de garantie, d’infaillibilité ou d’effacement absolu |
| Guides pédagogiques et documents normalisés | Ressource de recherche | Conserver la provenance; la normalisation ne vaut pas validation |

## 8. Conditions d’une future intégration

Toute extraction vers un standard MAD devra :

1. citer une source primaire et une version vérifiable;
2. séparer fait, exigence, recommandation, hypothèse et exemple;
3. remplacer les garanties absolues par des contrôles et critères observables;
4. définir le modèle de menace et le périmètre de confiance;
5. préciser les données, permissions, acteurs, relais et journaux;
6. fournir des tests ciblés et des preuves reproductibles;
7. documenter les limites et les scénarios d’échec;
8. appliquer CHK-032 pour chaque claim sensible;
9. obtenir une validation humaine et, lorsque nécessaire, juridique ou sécurité;
10. créer un standard ou un ADR ciblé plutôt que copier le corpus de recherche.

## 9. Sources primaires consultées

- Gouvernement du Québec — [Protection des renseignements personnels](https://www.quebec.ca/gouvernement/travailler-gouvernement/normes-gouvernance-pratiques-internes/protection-des-renseignements-personnels)
- W3C — [WebRTC: Real-Time Communication in Browsers](https://www.w3.org/TR/webrtc/)
- IETF/IRTF — [RFC 9106: Argon2](https://www.rfc-editor.org/rfc/rfc9106.html)
- NIST — [SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)

Ces sources confirment des technologies ou cadres généraux; elles ne valident pas l’architecture « Boîte Bleue », la conformité de MADSuite, ni les claims du corpus.

## 10. Décision

Aucun document du lot 06 n’est ajouté au canon officiel par cette PR.

Le lot demeure classé **R&D / base de conception sous conditions / à validation spécialisée**. La prochaine production admissible est un livrable séparé : un modèle de menace et une checklist de contrôle pour l’assistance distante, sans claim de conformité automatique et sans collecte de contenu par défaut.

## 11. Limites

Ce verdict n’est ni un audit de sécurité, ni une certification, ni un avis juridique, ni une revue systématique. Les documents originaux demeurent dans Google Drive et n’ont pas été modifiés.


<!-- ci-trigger: PR-481 2026-08-06 -->
