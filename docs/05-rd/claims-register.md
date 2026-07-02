---
Projet: MADSuite / MADDevOps
Document: Registre des claims MADPROOF
Version: 0.1
Dernière révision: 2026-07-02
Statut: Brouillon R&D
Auteur: MAD DevOps
---

# Registre des claims MADPROOF

## 1. Objectif

Ce registre sert à suivre les affirmations scientifiques, produit, marketing et UX utilisées dans MADSuite.

Chaque claim doit être classé selon son niveau de preuve, sa formulation acceptable, ses risques et sa décision produit.

Le but est d’éviter les formulations imprudentes, médicalisées ou impossibles à prouver.

---

## 2. Statuts possibles

- MADPROOF-FONDATION : utilisable comme fondation produit.
- MADPROOF-R&D : prometteur, mais validation produit requise.
- À reformuler : idée utile, wording trop fort.
- À remplacer : angle à corriger.
- À supprimer : incompatible avec les garde-fous.

---

## 3. Registre initial

| ID | Claim | Statut | Niveau de preuve | Formulation acceptée | Formulation interdite | Implication produit | Décision |
|---|---|---|---|---|---|---|---|
| C-001 | Les interruptions peuvent rendre la reprise de tâche plus difficile. | MADPROOF-FONDATION | Solide | Les interruptions peuvent compliquer le retour à une tâche. | Les interruptions détruisent l’attention. | Concevoir des outils de reprise. | Garder |
| C-002 | Des indices externes peuvent faciliter la reprise après interruption. | MADPROOF-FONDATION | Solide | Des indices contextuels peuvent aider à reprendre une tâche. | Les indices restaurent l’état mental. | Créer des snapshots de reprise. | Garder |
| C-003 | L’externalisation cognitive peut réduire la charge organisationnelle. | MADPROOF-FONDATION | Solide | MADSuite aide à externaliser une partie de l’organisation. | MADSuite remplace les fonctions exécutives. | Notes, rappels, historique, résumé. | Garder |
| C-004 | La charge cognitive peut être réduite par une interface plus simple. | MADPROOF-FONDATION | Solide | Une interface simple peut réduire certaines frictions. | Une interface simple règle le TDAH. | UX claire, moins d’étapes, états vides utiles. | Garder |
| C-005 | Certains utilisateurs vivent une perception du temps difficile à gérer. | MADPROOF-FONDATION | Solide avec prudence | MADSuite rend le temps travaillé plus visible. | MADSuite corrige la time blindness. | Timer visible, résumé, blocs de travail. | Garder |
| C-006 | MADSuite peut aider l’utilisateur à garder le fil. | MADPROOF-FONDATION | Produit / UX | MADSuite aide à garder le fil opérationnel. | MADSuite restaure l’attention. | Positionnement central. | Garder |
| C-007 | MAD Ariane peut réduire le coût de reprise après interruption. | MADPROOF-R&D | Plausible | MAD Ariane vise à faciliter la reprise de contexte. | MAD Ariane restaure l’état mental. | Prototype et tests utilisateurs. | Valider |
| C-008 | Les points d’insertion naturels peuvent réduire les interruptions inutiles. | MADPROOF-R&D | Plausible | MADSuite peut attendre des moments moins intrusifs pour suggérer une action. | MADSuite sait quand le cerveau est prêt. | JITAI context-aware sans caméra. | Valider |
| C-009 | Les signaux applicatifs peuvent indiquer des moments de friction. | MADPROOF-R&D | Plausible | Certains signaux d’usage peuvent suggérer une friction dans le parcours. | MADSuite détecte la fatigue cognitive réelle. | Cognitive Engine V1. | Reformuler |
| C-010 | Le flow peut être observé par des sessions longues et peu interrompues. | À reformuler | Fragile | MADSuite peut identifier des périodes de travail continu. | MADSuite mesure le flow. | Dashboard activité. | Reformuler |
| C-011 | La fatigue peut être inférée par des patterns d’usage. | À reformuler | Fragile | MADSuite peut observer des signaux d’usage associés à une friction ou baisse de rythme. | MADSuite détecte la fatigue mentale. | Ne pas afficher comme état mental. | Reformuler strictement |
| C-012 | MADSuite peut soutenir des personnes TDAH. | À reformuler | Variable | MADSuite est conçu avec une attention particulière aux besoins d’organisation et d’accessibilité cognitive. | MADSuite traite le TDAH. | Marketing prudent. | Reformuler |
| C-013 | MADSuite peut devenir une prothèse exécutive. | À remplacer | Trop fort | MADSuite peut agir comme support externe d’organisation. | MADSuite remplace les fonctions exécutives. | Positionnement R&D interne seulement. | Remplacer |
| C-014 | Le système peut savoir quand l’utilisateur décroche. | À supprimer | Non acceptable | Le système peut observer certaines pauses ou interruptions applicatives. | Le système sait quand l’utilisateur décroche. | Risque surveillance mentale. | Supprimer |
| C-015 | La caméra peut aider à détecter l’état cognitif. | À supprimer pour MVP | Intrusif / hors scope | La caméra est exclue du MVP. | MADSuite utilise la caméra pour lire l’attention. | Privacy by design. | Supprimer MVP |
| C-016 | L’IA peut analyser l’état psychologique de l’utilisateur. | À supprimer | Incompatible | L’IA peut résumer le contexte opérationnel. | L’IA analyse l’état psychologique. | Non-substitution médicale. | Supprimer |
| C-017 | Les recommandations peuvent être personnalisées selon les habitudes. | MADPROOF-R&D | Plausible | MADSuite peut proposer des suggestions selon l’historique d’usage local. | MADSuite profile l’utilisateur. | Patterns locaux, contrôle utilisateur. | Valider |
| C-018 | Les rappels peuvent être moins intrusifs s’ils respectent le contexte. | MADPROOF-R&D | Plausible | Les rappels peuvent être déclenchés à des moments plus appropriés selon l’activité. | MADSuite sait le meilleur moment mental. | Rappels contextuels. | Valider |
| C-019 | Les brouillons et tâches incomplètes peuvent être détectés applicativement. | MADPROOF-FONDATION | Produit solide | MADSuite peut détecter des éléments applicatifs incomplets. | MADSuite sait ce que l’utilisateur a oublié. | Brouillons à reprendre. | Garder |
| C-020 | Une métrique cognitive peut représenter l’état mental. | À supprimer | Incompatible | Une métrique peut représenter une tendance d’activité numérique. | Une métrique représente l’état mental. | Dashboard prudent. | Supprimer |

---

## 4. Template pour nouveaux claims

| Champ | Description |
|---|---|
| ID | Identifiant unique du claim |
| Claim | Affirmation exacte à évaluer |
| Source | Source scientifique, technique, produit ou interne |
| Statut | MADPROOF-FONDATION, MADPROOF-R&D, À reformuler, À remplacer, À supprimer |
| Niveau de preuve | Solide, plausible, fragile, non validé, incompatible |
| Formulation acceptée | Wording autorisé |
| Formulation interdite | Wording à éviter |
| Implication produit | Fonction ou décision liée |
| Risques | Scientifique, légal, éthique, UX, marketing |
| Décision | Garder, valider, reformuler, remplacer, supprimer |
| Dernière révision | Date de mise à jour |

---

## 5. Règles de maintien

Le registre doit être mis à jour quand :

- une nouvelle fonctionnalité cognitive est ajoutée;
- une page marketing utilise un claim scientifique;
- une source de recherche est intégrée;
- un module IA est ajouté;
- une métrique utilisateur est renommée;
- un wording médical ou psychologique apparaît;
- un test utilisateur invalide une hypothèse.

---

## 6. Règle finale

Un claim doit être supprimé ou reformulé si :

- il sonne médical;
- il semble diagnostiquer;
- il prétend mesurer un état mental;
- il implique une surveillance;
- il dépasse la preuve disponible;
- il réduit l’autonomie utilisateur;
- il nuit à la confiance.

Phrase de contrôle :

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?
