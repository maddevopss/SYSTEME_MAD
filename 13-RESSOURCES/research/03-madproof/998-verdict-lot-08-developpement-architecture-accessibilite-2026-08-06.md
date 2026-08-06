---
Projet: Système MAD
Document: Verdict MADPROOF du lot 08 — Développement, architecture et accessibilité
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider
Auteur: MAD DevOps
---

# Verdict MADPROOF du lot 08 — Développement, architecture et accessibilité

## 1. Périmètre

Corpus analysé dans Google Drive `/recherche` :

- documents de synthèse sur architecture web/mobile, accessibilité, synchronisation, publication mobile et design tokens;
- notes Markdown sur architecture multiplateforme, mobile Android/iOS, boutiques, agendas hors ligne, GPS, géospatial, RTK, LiDAR et commandes Prisma/MongoDB;
- documents connexes du lot 08 portant sur besoins d’entreprises, innovation, support, SMS, marketing, fiscalité et financement.

Le présent verdict distingue les principes d’ingénierie vérifiables des affirmations exigeant une validation supplémentaire.

## 2. Verdict global

**Lot admissible sous conditions comme ressource de conception et de recherche technique.**

Aucun document du corpus ne devient une norme officielle du Système MAD tel quel. Les contenus sont hétérogènes, plusieurs sources ne sont pas identifiées précisément et plusieurs chiffres, compatibilités, obligations légales, performances ou formulations commerciales ne sont pas démontrés dans les documents.

## 3. Éléments admissibles comme principes de conception

Les éléments suivants peuvent alimenter des standards internes après adaptation au contexte du projet :

- concevoir l’accessibilité avec des critères testables, une validation automatisée et une évaluation humaine;
- utiliser WCAG 2.2 comme référence technique, sans la présenter comme une garantie juridique universelle;
- ne pas transmettre une information par la couleur seule;
- prévoir clavier, focus visible, libellés, erreurs compréhensibles, tailles de cibles et alternatives aux gestes complexes;
- centraliser les design tokens et limiter les couches CSS implicites;
- séparer tokens, composants, compositions et exceptions documentées;
- adopter RFC 5545/iCalendar pour les échanges calendaires lorsque le domaine le justifie;
- distinguer les événements à instant fixe des horaires locaux récurrents;
- générer les occurrences récurrentes dans une fenêtre contrôlée plutôt que matérialiser sans limite;
- traiter le mode hors ligne, l’idempotence, la reprise, les conflits, les horodatages et la télémétrie comme décisions d’architecture explicites;
- utiliser les API natives et les permissions minimales pour les fonctions de calendrier ou de rappel;
- documenter les versions de plateforme, les permissions, les limites de batterie et les scénarios de refus;
- conserver les données de localisation au minimum nécessaire, avec consentement, durée de conservation et contrôle utilisateur adaptés.

## 4. Classement MADPROOF

| Sous-lot | Classe | Décision |
|---|---|---|
| Accessibilité web/mobile | Intégrable sous conditions | Transformer les principes en checklist testable alignée sur WCAG 2.2; retirer les statistiques non sourcées |
| Architecture CSS/design tokens | Intégrable sous conditions | Conserver comme guide interne après revue sur les navigateurs et frameworks réellement utilisés |
| Calendriers et interopérabilité | Intégrable sous conditions | RFC 5545 est une référence valide; valider les choix de fuseaux, récurrence, import/export et intégrations |
| Synchronisation hors ligne/CRDT | R&D / À vérifier | Ne pas imposer un CRDT; comparer avec versioning, journal d’événements, résolution métier et contraintes de sécurité |
| Publication Android/iOS | À vérifier | Les règles de boutique évoluent; vérifier chaque version dans la documentation officielle avant soumission |
| GPS, RTK, LiDAR et photogrammétrie | R&D / À vérifier | Prototyper avec matériel, conditions terrain, système de coordonnées et protocole d’erreur; aucune précision commerciale garantie |
| GPS hors ligne et tuiles | R&D / À vérifier | Valider licences de données, formats, cache, chiffrement, consommation et exactitude |
| Prisma/MongoDB et commandes | Référence opératoire à vérifier | Exécuter uniquement après validation de la version, du schéma et de l’environnement; ne pas considérer la note comme procédure universelle |
| Marketing, SMS, fiscalité, financement et besoins d’entreprise | Séparer des standards techniques | Traiter avec leurs lots spécialisés; validation juridique, fiscale ou commerciale requise |

## 5. Références primaires vérifiées

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- IETF, [RFC 5545 — Internet Calendaring and Scheduling Core Object Specification](https://www.rfc-editor.org/info/rfc5545/).
- Android Developers, [Schedule exact alarms are denied by default](https://developer.android.com/about/versions/14/changes/schedule-exact-alarms).
- Android Developers, [Schedule alarms](https://developer.android.com/develop/background-work/services/alarms).
- Apple Developer, [EventKit](https://developer.apple.com/documentation/eventkit).
- Apple Developer, [Accessing the event store](https://developer.apple.com/documentation/eventkit/accessing-the-event-store).
- Apple Developer, [TN3152 — Migrating to the latest Calendar access levels](https://developer.apple.com/documentation/technotes/tn3152-migrating-to-the-latest-calendar-access-levels).

Ces références valident certains standards et mécanismes, mais ne valident pas les chiffres marketing, les performances matérielles, les résultats commerciaux ni la conformité juridique générale présents dans le corpus.

## 6. Formulations admissibles

- « Le produit vise une implémentation testable des critères d’accessibilité applicables. »
- « WCAG 2.2 sert de référence technique; la conformité doit être évaluée dans le contexte juridique et produit applicable. »
- « Le système peut utiliser iCalendar/RFC 5545 pour certains échanges calendaires. »
- « Le mode hors ligne nécessite une stratégie explicite de synchronisation et de résolution des conflits. »
- « Les fonctions de localisation sont limitées au besoin déclaré, documentées et contrôlées par l’utilisateur. »
- « Les performances RTK, LiDAR, GPS ou hors ligne doivent être mesurées dans le contexte matériel et logiciel réel. »

## 7. Formulations bloquées

Ne pas officialiser sans preuve spécifique :

- « WCAG 2.2 garantit la conformité légale au Québec ou au Canada. »
- « L’accessibilité augmente automatiquement la conversion de X %. »
- « Un CRDT garantit la cohérence de toute application hors ligne. »
- « Le choix LWW garantit la bonne décision métier. »
- « Une application est rejetée automatiquement pour une seule erreur d’icône ou de transparence. »
- « Le GPS standard est toujours précis de 3 à 5 mètres. »
- « Le RTK ou le LiDAR garantit une précision inférieure à 1 ou 2 cm dans tous les contextes. »
- « Les tuiles vectorielles réduisent toujours la taille de 80 à 90 %. »
- « Une API, une permission ou une technologie est obligatoire sur toutes les versions Android/iOS. »
- toute promesse de conformité, de performance, de sécurité, de rendement commercial ou d’exactitude sans protocole, version, environnement et preuve reproductible.

Les affirmations concernant Loi 25, SGQRI, ADA, fiscalité, financement, SMS, consentement ou obligations sectorielles doivent être traitées dans les lots juridiques ou spécialisés et validées par une source officielle ou un professionnel compétent.

## 8. Conditions avant intégration canonique

Avant de convertir un élément du lot en standard officiel :

1. identifier la source primaire et sa version;
2. séparer fait, recommandation, hypothèse et exemple;
3. supprimer les chiffres non reproductibles ou les marquer comme à vérifier;
4. préciser le contexte technique : plateforme, version, navigateur, framework, matériel et limites;
5. définir un test ou une preuve observable;
6. documenter confidentialité, permissions, conservation et consentement pour les données sensibles;
7. appliquer CHK-032 et obtenir la validation humaine requise;
8. créer une fiche normative ou un ADR ciblé, plutôt que copier une recherche entière.

## 9. Décision d’intégration

Aucun document source du lot 08 n’est copié dans le canon officiel.

Le lot est conservé comme **ressource de recherche technique et base de conception sous conditions**. Les prochains travaux admissibles sont :

- une checklist MAD d’accessibilité testable;
- un standard interne de design tokens et de structure CSS;
- un ADR comparant les stratégies de synchronisation hors ligne;
- un protocole de mesure pour GPS/RTK/LiDAR avant toute promesse produit.

## 10. Limites

Ce verdict n’est ni une revue systématique, ni une certification d’accessibilité, ni une validation juridique, fiscale, médicale, géospatiale ou commerciale. Les documents originaux demeurent dans Google Drive et n’ont pas été modifiés.
