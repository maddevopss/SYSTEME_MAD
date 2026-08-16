---
Projet: MADSuite / MAD DevOps
Document: Matrice MADPROOF — MVP / R&D / Clinique / Interdit
Version: 1.1
Dernière révision: 2026-08-16
Statut: Officiel
Classification: MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Matrice MADPROOF — MVP / R&D / Clinique / Interdit

## 1. Objectif

Cette matrice sert à classer toute idée, claim, recherche, fonctionnalité ou formulation MADSuite avant intégration officielle.

Elle permet de distinguer :

- ce qui peut être intégré au MVP;
- ce qui doit rester en R&D;
- ce qui exige une validation clinique ou professionnelle;
- ce qui est interdit ou contraire à la charte éthique.

## 2. Règle d’or

```text
Pas MADPROOF = pas officiel.
```

Un élément issu d’une zone de travail temporaire ou d’une source brute archivée ne doit pas être promu dans le corpus actif sans classification MADPROOF.

## 3. Catégories principales

| Catégorie | Signification | Utilisation |
|---|---|---|
| MVP | Utilisable maintenant avec risques maîtrisés | Produit, documentation interne, roadmap MVP |
| MVP sous conditions | Utilisable seulement avec consentement, garde-fous ou limites explicites | Fonctionnalités sensibles mais contrôlables |
| R&D | Prometteur, plausible ou stratégique, mais non prouvé produit | Recherche, prototype, expérimentation |
| Clinique | Nécessite validation médicale, clinique ou scientifique formelle | Claims santé, efficacité thérapeutique, diagnostic |
| Interdit MVP | Exclu du MVP pour raisons éthiques, privacy, sécurité ou confiance | À ne pas développer sans nouvelle ADR |
| Interdit | Contraire à la charte MADSuite ou trop risqué | À supprimer/refuser |
| À vérifier | Information potentiellement utile, mais source ou actualité insuffisante | Recherche web, source officielle, validation externe |
| À reformuler | Idée acceptable, formulation trop forte | Réécriture prudente avant usage |

## 4. Critères MVP

Un élément peut être classé **MVP** si :

- il sert directement l’utilisateur;
- il ne prétend pas diagnostiquer ou traiter;
- il respecte la vie privée;
- il est explicable;
- il est corrigeable par l’utilisateur;
- il ne nécessite pas de preuve clinique;
- il ne crée pas de surveillance passive;
- il peut être testé produit de façon raisonnable.

Exemples MVP :

| Élément | Classement | Condition |
|---|---|---|
| Timer manuel | MVP | Contrôle utilisateur complet |
| Notes rapides | MVP | Édition/suppression disponibles |
| Start Now, Sort Later | MVP | L’utilisateur classe plus tard |
| Résumé de journée privé | MVP | Données minimisées |
| Facturation depuis temps validé | MVP | Validation humaine obligatoire |
| États vides guidants | MVP | Langage non culpabilisant |
| Accessibilité clavier/focus | MVP | Standard obligatoire |
| Export comptable simple | MVP | Aucune promesse fiscale |

## 5. Critères MVP sous conditions

Un élément peut être classé **MVP sous conditions** s’il est utile, mais sensible.

Conditions possibles :

- consentement explicite;
- désactivé par défaut;
- traitement local par défaut;
- minimisation des données;
- transparence complète;
- suppression facile;
- validation humaine avant conséquence;
- mode local-only;
- aucune transmission brute inutile.

Exemples :

| Élément | Classement | Conditions minimales |
|---|---|---|
| Capture de l’application active | MVP sous conditions | Consentement, local-first, visible, désactivable |
| Titre de fenêtre | MVP sous conditions strictes | Masquage, exclusion apps/domaines, consentement |
| Domaine web actif | MVP sous conditions | Pas URL complète par défaut, minimisation |
| Suggestion de classification du temps | MVP sous conditions | Suggestion seulement, validation utilisateur |
| Notification de reprise | MVP sous conditions | Non intrusive, fréquence contrôlée |
| Analyse IA distante | MVP sous conditions | Consentement, minimisation, pas de secrets |
| Synchronisation cloud | MVP sous conditions | Chiffrement, consentement, suppression possible |

## 6. Critères R&D

Un élément doit rester **R&D** si :

- l’idée est prometteuse mais pas validée;
- l’effet utilisateur doit être mesuré;
- la formulation pourrait devenir un claim excessif;
- l’architecture demande des essais;
- la compatibilité technique varie selon plateformes;
- le bénéfice dépend fortement du contexte.

Exemples R&D :

| Élément | Classement | Note MADPROOF |
|---|---|---|
| MAD Ariane — Snapshot de reprise | R&D fort / MVP progressif | MVP possible en version simple, bénéfice à mesurer |
| Classification locale de friction | R&D | Ne pas dire “détection mentale” |
| Micro-actions contextuelles | R&D | Mesurer utilité et non-intrusion |
| Temps spatial | R&D fondation UX | Bon concept, effet à tester |
| Accountability douce | R&D | Éviter dépendance ou manipulation |
| Modèle de flow/friction/fatigue | R&D | Labels opérationnels, pas état mental intime |
| JITAI context-aware | R&D | Attendre points naturels, éviter interruption |
| AttentionGuard / preprints récents | R&D veille | Pas fondation clinique |
| GPS/RTK terrain | R&D module métier | Pas cœur MVP MADSuite |
| Passkeys/WebAuthn | R&D/roadmap technique | Utile mais ne bloque pas MVP |

## 7. Critères Clinique

Un élément devient **Clinique** si on veut affirmer un bénéfice santé, cognitif mesuré médicalement ou thérapeutique.

À classer Clinique :

- traiter le TDAH;
- réduire des symptômes;
- améliorer une fonction exécutive au sens clinique;
- diagnostiquer un trouble;
- détecter un état mental;
- mesurer fatigue cognitive comme état de santé;
- faire une thérapie numérique;
- revendiquer efficacité clinique.

Exemples :

| Élément | Classement | Décision |
|---|---|---|
| “MADSuite traite le TDAH” | Clinique / Interdit sans preuve | À supprimer |
| “Réduit les symptômes TDAH” | Clinique | Étude requise |
| “Détecte la surcharge cognitive” | Clinique/R&D sensible | Reformuler en signaux opérationnels |
| “Thérapie numérique” | Clinique | Interdit marketing sans validation |
| “Diagnostic de fatigue” | Clinique | Interdit MVP |

## 8. Critères Interdit MVP

Un élément est **Interdit MVP** s’il peut être théoriquement étudié plus tard, mais ne respecte pas la posture MVP privacy-first.

Exemples :

| Élément | Classement | Raison |
|---|---|---|
| Captures d’écran périodiques | Interdit MVP | Surveillance, données sensibles |
| Keylogging | Interdit MVP | Trop intrusif |
| Webcam/caméra attention | Interdit MVP | Vie privée mentale/biométrie |
| Pupillométrie | Interdit MVP | Biométrie, claim cognitif sensible |
| Reconnaissance émotionnelle | Interdit MVP | Inférence intime non fiable/sensible |
| Score productivité employé | Interdit MVP | Surveillance punitive |
| Dashboard patronal nominatif | Interdit MVP | Risque RH/surveillance |
| Comparaison entre employés | Interdit MVP | Discrimination/pression |

## 9. Critères Interdit

Un élément est **Interdit** s’il contredit la charte éthique ou expose MADSuite à un risque inacceptable.

Interdit :

- manipulation émotionnelle;
- culpabilisation volontaire;
- dépendance artificielle forcée;
- profilage externe;
- vente de données cognitives;
- collecte silencieuse;
- claim médical faux;
- garantie de conformité ou sécurité absolue;
- promesse fiscale non validée;
- publicité basée sur signaux cognitifs.

Exemples de formulations interdites :

| Formulation | Décision |
|---|---|
| “Guérit la cécité temporelle” | Supprimer |
| “Traite le TDAH” | Supprimer |
| “Détecte vos émotions” | Supprimer |
| “Confidentialité absolue” | Reformuler |
| “Sécurité garantie” | Supprimer |
| “Admissible RS&DE à coup sûr” | Supprimer |
| “Le gouvernement paie X%” | Supprimer sans validation |
| “Surveille automatiquement vos employés” | Supprimer |

## 10. Catégorie À vérifier

Un élément est **À vérifier** si :

- la source est inconnue;
- la source est ancienne;
- la loi/règle peut avoir changé;
- le claim dépend du pays/province;
- le claim dépend d’une version navigateur/OS;
- le claim vient d’un document généré par IA;
- les chiffres semblent trop précis.

Exemples :

| Élément | Action |
|---|---|
| Taux RS&DE / CDAE | Vérifier avec sources officielles et comptable |
| Règles App Store / Play Store | Vérifier documentation officielle actuelle |
| Support API navigateur | Vérifier MDN/Can I Use/Browser Compatibility Data |
| Loi 25 / RGPD / AI Act | Vérifier source officielle actuelle |
| Chiffres d’impact UX | Vérifier étude primaire |
| Statistiques marché | Vérifier source récente |

## 11. Catégorie À reformuler

Un élément est **À reformuler** si l’idée est acceptable mais la formulation crée un risque.

| Formulation brute | Reformulation MADPROOF |
|---|---|
| “MADSuite détecte la fatigue” | MADSuite peut identifier des patterns d’usage compatibles avec une friction ou une baisse de rythme. |
| “L’IA comprend l’état mental” | L’IA propose une aide à partir de signaux applicatifs limités et explicables. |
| “Réduit le TDAH” | Peut soutenir certaines tâches d’organisation; effet à valider. |
| “Automatise la productivité” | Aide l’utilisateur à reconstruire son temps et ses priorités. |
| “Surveille l’activité” | Capture assistive volontaire et transparente. |
| “Mesure précise GPS” | Estime ou mesure selon matériel, conditions et validation terrain. |

## 12. Règles par domaine

### 12.1 Cognition / TDAH

| Type d’élément | Classement par défaut |
|---|---|
| Aide externe, rappel, structure | MVP |
| Reprise de contexte | MVP/R&D |
| Claims d’efficacité cognitive | R&D ou Clinique |
| Diagnostic / traitement | Clinique / Interdit sans preuve |
| Inférence émotionnelle | Interdit MVP |

### 12.2 Privacy / surveillance

| Type d’élément | Classement par défaut |
|---|---|
| Timer manuel | MVP |
| Capture app active locale | MVP sous conditions |
| Capture contenu exact | Interdit MVP |
| Keylogging | Interdit MVP |
| Capture écran | Interdit MVP |
| Dashboard employeur nominatif | Interdit MVP |

### 12.3 Sécurité

| Type d’élément | Classement par défaut |
|---|---|
| RLS multi-tenant | MVP |
| Rate limit | MVP |
| Audit logs | MVP |
| Passkeys | R&D/roadmap |
| Enclaves confidentielles | R&D enterprise |
| Sécurité garantie | Interdit |

### 12.4 Fiscal / juridique

| Type d’élément | Classement par défaut |
|---|---|
| Registre R&D interne | MVP |
| Export comptable | MVP |
| Claim d’admissibilité RS&DE | À vérifier / validation comptable |
| Conseil fiscal personnalisé | Interdit sans professionnel |
| Garantie de conformité | Interdit |

### 12.5 Web / PWA / accessibilité

| Type d’élément | Classement par défaut |
|---|---|
| HTML sémantique | MVP |
| WCAG 2.2 AA comme cible | MVP |
| PWA installable | MVP/R&D selon produit |
| API Web expérimentale | R&D ou MVP sous fallback |
| “Support partout” | À reformuler |

### 12.6 Géospatial / GPS

| Type d’élément | Classement par défaut |
|---|---|
| Estimation satellite | R&D module métier |
| RTK Fix + audit log | R&D module métier |
| Mesure contractuelle automatique | À vérifier / validation terrain |
| Promesse de précision garantie | Interdit |

## 13. Processus de tri depuis une source brute

Pour chaque fichier brut :

1. Identifier les claims.
2. Séparer faits, hypothèses, idées produit et formulations marketing.
3. Classer chaque claim avec la matrice.
4. Vérifier les sources si nécessaire.
5. Reformuler les claims trop forts.
6. Supprimer les claims interdits.
7. Produire un résumé MADPROOF.
8. Ranger le résumé dans le dossier canonique approprié sous `13-RESSOURCES/research/` ou dans la zone produit/gouvernance concernée.
9. Mettre à jour TODO/roadmap si action produit.

## 14. Template court de décision

```text
Élément :
Source :
Classification : MVP / MVP sous conditions / R&D / Clinique / Interdit MVP / Interdit / À vérifier / À reformuler
Raison :
Conditions :
Formulation MADPROOF :
Action : intégrer / prototyper / vérifier / reformuler / supprimer
```

## 15. Verdict

Cette matrice devient la règle officielle de tri des recherches MADSuite.

**Décision : toute intégration future doit passer par cette matrice avant d’être considérée officielle.**
