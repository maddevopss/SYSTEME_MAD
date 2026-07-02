---
Projet: MADSuite / MAD DevOps
Document: PLAY-037 — Ajouter ou corriger un claim MADPROOF
Version: 2.0
Dernière révision: 2026-07-02
Statut: Officiel / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# PLAY-037 — Ajouter ou corriger un claim MADPROOF

## 1. Objectif

Ce playbook décrit comment ajouter, corriger, reformuler, valider ou supprimer un claim MADPROOF dans le Système MAD.

Il s’applique aux claims liés à :

- MADSuite;
- MAD DevOps;
- l’assistance cognitive;
- le TDAH;
- la reprise de tâche;
- l’accessibilité cognitive;
- la friction numérique;
- les fonctionnalités IA;
- la sécurité;
- la vie privée;
- la conformité;
- la fiscalité;
- le juridique;
- les capacités techniques et plateformes.

Règle centrale :

```text
Pas MADPROOF = pas officiel.
```

## 2. Déclencheurs

Utiliser ce playbook quand :

- une nouvelle idée cognitive est proposée;
- une fonctionnalité MADSuite utilise un claim sensible;
- un texte marketing mentionne TDAH, attention, flow, fatigue, cognition ou assistance cognitive;
- un texte promet une conformité, une sécurité, une fiscalité ou une performance;
- un agent IA génère une formulation trop forte;
- une source de recherche est ajoutée à `docs/research/atrier`;
- une hypothèse R&D doit devenir une décision produit;
- un claim doit être supprimé ou remplacé;
- un document officiel utilise une formulation qui donne trop de pouvoir au système.

## 3. Documents requis

Lire avant d’agir :

1. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
2. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md`
3. `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
4. `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md`
5. `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
6. `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
7. `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
8. `SYSTEME_MAD/04-ADR/ADR-time-tracking-vs-monitoring.md`

## 4. Vue d’ensemble du processus

```text
Claim brut
  -> capture exacte
  -> contexte d’usage
  -> classification matrice MADPROOF
  -> checklist CHK-032
  -> fiche claim si sensible
  -> registre MADPROOF
  -> mise à jour documents liés
  -> décision finale
```

## 5. Étape 1 — Capturer le claim brut

Écrire le claim exactement comme il apparaît.

Ne pas le corriger tout de suite.

Exemples :

```text
MADSuite détecte la fatigue cognitive de l’utilisateur.
```

```text
MADSuite améliore les fonctions exécutives.
```

```text
Cette architecture garantit la sécurité des données.
```

```text
Ce module est admissible aux crédits RS&DE.
```

## 6. Étape 2 — Identifier le contexte d’usage

Déterminer où le claim sera utilisé :

- documentation produit;
- recherche R&D;
- landing page;
- interface utilisateur;
- assistant IA;
- pitch commercial;
- spécification technique;
- backlog;
- conformité;
- sécurité;
- fiscalité;
- juridique;
- documentation client.

Le niveau de prudence doit être plus élevé pour les usages publics que pour les notes internes.

## 7. Étape 3 — Classer avec la matrice officielle

Utiliser :

```text
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md
```

Catégories possibles :

| Catégorie | Usage |
|---|---|
| MVP | Utilisable maintenant avec risques maîtrisés. |
| MVP sous conditions | Utilisable seulement avec garde-fous explicites. |
| R&D | Prometteur, mais non prouvé produit. |
| Clinique | Validation médicale/scientifique formelle requise. |
| Interdit MVP | Exclu du MVP. |
| Interdit | À supprimer ou remplacer. |
| À vérifier | Source officielle ou validation externe requise. |
| À reformuler | Idée acceptable, wording trop fort. |

Règle rapide :

- si le claim parle d’un état mental réel, il doit être reformulé, classé clinique ou supprimé;
- si le claim parle d’un signal d’usage, il peut être validé avec prudence;
- si le claim parle d’un diagnostic ou d’un traitement, il doit être classé Clinique ou Interdit;
- si le claim parle d’une hypothèse produit, il doit rester R&D;
- si le claim promet conformité, sécurité, fiscalité ou performance, il doit être vérifié sur source officielle ou reformulé.

## 8. Étape 4 — Identifier les gates bloquants

Bloquer immédiatement ou reformuler si le claim :

- prétend diagnostiquer;
- prétend traiter le TDAH;
- promet une amélioration clinique;
- lit ou mesure l’état mental;
- détecte la fatigue cognitive réelle;
- transforme un signal d’usage en vérité psychologique;
- promet une sécurité absolue;
- promet une conformité garantie;
- promet une admissibilité fiscale;
- implique keylogging, screenshots, caméra, biométrie ou surveillance passive;
- permet un scoring employé ou une comparaison punitive;
- donne trop de pouvoir au système.

Décision possible :

- supprimer;
- reformuler;
- classer Interdit MVP;
- classer Interdit;
- classer Clinique;
- classer À vérifier.

## 9. Étape 5 — Reformuler prudemment

Transformer les claims trop forts en formulations opérationnelles.

| Claim brut | Reformulation MADPROOF |
|---|---|
| MADSuite détecte la fatigue cognitive. | MADSuite peut observer certains signaux d’usage associés à une friction ou une baisse de rythme. |
| MADSuite restaure l’attention. | MADSuite aide à reprendre le contexte opérationnel d’une tâche. |
| MADSuite traite le TDAH. | MADSuite est conçu avec une attention particulière aux besoins d’organisation et d’accessibilité cognitive. |
| MADSuite sait quand l’utilisateur décroche. | MADSuite peut détecter certaines pauses ou interruptions applicatives. |
| MADSuite garantit la sécurité des données. | MADSuite applique une baseline de sécurité documentée et vérifiable. |
| Cette fonction est conforme à la Loi 25. | Cette fonction est conçue selon une checklist interne inspirée des exigences Loi 25; validation juridique selon contexte. |
| Ce module donne droit à des crédits RS&DE. | Ce module peut générer des traces R&D utiles à une discussion avec un professionnel compétent. |
| Cette API fonctionne partout. | Cette API doit être utilisée avec détection de support et fallback. |

## 10. Étape 6 — Vérifier les données nécessaires

Identifier les données nécessaires au claim.

Questions :

- Le claim peut-il être soutenu avec des événements applicatifs?
- Le claim exige-t-il caméra, micro, biométrie ou capture d’écran?
- Les données sont-elles proportionnées?
- L’utilisateur peut-il comprendre et contrôler l’usage?
- La donnée est-elle nécessaire au bénéfice réel?
- Le claim peut-il fonctionner en mode local-only?

Si le claim exige des données intrusives pour être vrai, il doit être reformulé, classé Interdit MVP ou supprimé.

## 11. Étape 7 — Passer CHK-032

Utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Verdicts possibles :

- Validé — MVP.
- Validé — MVP sous conditions.
- À garder en R&D.
- Réservé clinique.
- À vérifier.
- À reformuler.
- Interdit MVP.
- Interdit / à supprimer.

## 12. Étape 8 — Créer une fiche claim si sensible

Utiliser le template :

```text
SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md
```

Créer une fiche si le claim est :

- public;
- médical/cognition/TDAH;
- juridique;
- fiscal;
- sécurité;
- privacy;
- IA;
- automatisation sensible;
- lié à une décision produit structurante;
- susceptible d’être réutilisé dans plusieurs documents.

## 13. Étape 9 — Mettre à jour le registre

Ajouter ou modifier l’entrée dans :

```text
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md
```

L’entrée doit contenir au minimum :

- ID;
- claim brut;
- catégorie;
- niveau de preuve;
- formulation MADPROOF;
- formulation interdite;
- risque;
- décision.

Format rapide :

```markdown
| C-YYYY-MM-DD-XXX | [Claim brut] | [Catégorie] | [Niveau de preuve] | [Formulation MADPROOF] | [Formulation interdite] | [Risque] | [Décision] |
```

## 14. Étape 10 — Mettre à jour les documents liés

Selon le contexte, mettre à jour :

- roadmap;
- spécification produit;
- document R&D;
- checklist;
- template;
- page marketing;
- prompt agent;
- ADR si la décision change la gouvernance;
- README ou index si le document crée une nouvelle règle.

Ne pas créer une source concurrente.

Si le claim provient de `docs/research/atrier`, produire ou mettre à jour un résumé MADPROOF dans le bon dossier `SYSTEME_MAD/...`.

## 15. Étape 11 — Résumer la décision

Chaque correction importante doit laisser une trace courte :

```text
Claim initial : ...
Classification : ...
Décision : reformulé / supprimé / accepté / R&D / interdit MVP
Raison : ...
Document mis à jour : ...
```

## 16. Garde-fous permanents

Toujours éviter :

- diagnostic;
- traitement;
- thérapie numérique non validée;
- lecture mentale;
- mesure psychologique réelle;
- score de normalité;
- caméra par défaut;
- biométrie MVP;
- keylogging;
- capture d’écran passive;
- culpabilisation;
- promesse clinique;
- promesse fiscale;
- garantie de conformité;
- garantie de sécurité absolue;
- comparaison entre utilisateurs;
- profilage externe.

## 17. Résultat attendu

À la fin du playbook :

- le claim est classé selon la matrice officielle;
- la formulation sûre est disponible;
- le registre est à jour;
- la checklist CHK-032 est passée;
- une fiche claim existe si le claim est sensible;
- les documents liés ne se contredisent pas;
- l’utilisateur reste au centre de la formulation;
- le claim ne sort pas de `atrier` sans décision claire.

## 18. Phrase de fermeture

> Si le claim donne l’impression que MADSuite sait mieux que l’utilisateur ce qui se passe dans sa tête, on reformule.

> Si le claim promet une certitude médicale, fiscale, juridique, sécurité ou performance sans preuve forte, on bloque.