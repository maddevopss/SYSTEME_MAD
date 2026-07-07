---
Projet: MADSuite / MAD DevOps
Document: Registre opérationnel des claims MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Registre officiel à maintenir / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Registre opérationnel des claims MADPROOF

## 1. Objectif

Ce registre sert à suivre les affirmations scientifiques, produit, marketing, UX, techniques, fiscales, juridiques et sécurité utilisées dans MADSuite et MAD DevOps.

Chaque claim doit être classé selon :

- sa catégorie MADPROOF;
- son niveau de preuve;
- sa formulation autorisée;
- sa formulation interdite;
- ses risques;
- sa décision produit.

Le but est d’éviter les formulations imprudentes, médicalisées, fiscales non validées, juridiquement risquées, impossibles à prouver ou contraires à la charte éthique.

## 2. Documents de référence

Ce registre doit être maintenu avec :

- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md`
- `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
- `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md`

## 3. Catégories officielles

| Catégorie | Signification |
|---|---|
| MVP | Utilisable maintenant avec risques maîtrisés. |
| MVP sous conditions | Utilisable seulement avec consentement, garde-fous ou limites explicites. |
| R&D | Prometteur, plausible ou stratégique, mais non prouvé produit. |
| Clinique | Nécessite validation médicale, clinique ou scientifique formelle. |
| Interdit MVP | Exclu du MVP pour raisons éthiques, privacy, sécurité ou confiance. |
| Interdit | Contraire à la charte MADSuite ou trop risqué. |
| À vérifier | Information utile potentielle, mais source, actualité ou applicabilité insuffisante. |
| À reformuler | Idée acceptable, formulation trop forte. |

## 4. Registre initial — Claims cognitifs et produit

| ID | Claim brut | Catégorie | Niveau de preuve | Formulation MADPROOF | Formulation interdite | Risque | Décision |
|---|---|---|---|---|---|---|---|
| C-001 | Les interruptions peuvent rendre la reprise de tâche plus difficile. | MVP | Solide | Les interruptions peuvent compliquer le retour à une tâche. | Les interruptions détruisent l’attention. | Marketing / cognition | Garder |
| C-002 | Des indices externes peuvent faciliter la reprise après interruption. | MVP | Solide | Des indices contextuels peuvent aider à reprendre une tâche. | Les indices restaurent l’état mental. | Cognition | Garder |
| C-003 | L’externalisation cognitive peut réduire la charge organisationnelle. | MVP | Solide | MADSuite aide à externaliser une partie de l’organisation. | MADSuite remplace les fonctions exécutives. | Clinique / marketing | Garder avec prudence |
| C-004 | La charge cognitive peut être réduite par une interface plus simple. | MVP | Solide | Une interface simple peut réduire certaines frictions. | Une interface simple règle le TDAH. | Clinique / UX | Garder |
| C-005 | Certains utilisateurs vivent une perception du temps difficile à gérer. | MVP | Solide | MADSuite rend le temps travaillé plus visible. | MADSuite corrige la time blindness. | Clinique / marketing | Garder avec prudence |
| C-006 | MADSuite peut aider l’utilisateur à garder le fil. | MVP | Plausible | MADSuite aide à garder le fil opérationnel. | MADSuite restaure l’attention. | Cognition / marketing | Garder |
| C-007 | MAD Ariane peut réduire le coût de reprise après interruption. | R&D | Plausible | MAD Ariane vise à faciliter la reprise de contexte. | MAD Ariane restaure l’état mental. | Cognition / preuve produit | Prototyper et valider |
| C-008 | Les points d’insertion naturels peuvent réduire les interruptions inutiles. | R&D | Plausible | MADSuite peut attendre des moments moins intrusifs pour suggérer une action. | MADSuite sait quand le cerveau est prêt. | Cognition / privacy | Valider |
| C-009 | Les signaux applicatifs peuvent indiquer des moments de friction. | R&D | Plausible | Certains signaux d’usage peuvent suggérer une friction dans le parcours. | MADSuite détecte la fatigue cognitive réelle. | Clinique / inférence mentale | Reformuler strictement |
| C-010 | Le flow peut être observé par des sessions longues et peu interrompues. | À reformuler | Fragile | MADSuite peut identifier des périodes de travail continu. | MADSuite mesure le flow. | Cognition / claim non mesuré | Reformuler |
| C-011 | La fatigue peut être inférée par des patterns d’usage. | À reformuler | Fragile | MADSuite peut observer des signaux d’usage associés à une friction ou à une baisse de rythme. | MADSuite détecte la fatigue mentale. | Clinique / inférence intime | Reformuler strictement |
| C-012 | MADSuite peut soutenir des personnes TDAH. | À reformuler | Plausible | MADSuite est conçu avec une attention particulière aux besoins d’organisation et d’accessibilité cognitive. | MADSuite traite le TDAH. | Clinique / marketing | Reformuler |
| C-013 | MADSuite peut devenir une prothèse exécutive. | À reformuler | Plausible | MADSuite peut agir comme support externe d’organisation. | MADSuite remplace les fonctions exécutives. | Clinique / identité produit | Remplacer le wording public |
| C-014 | Le système peut savoir quand l’utilisateur décroche. | Interdit MVP | Incompatible | Le système peut observer certaines pauses ou interruptions applicatives. | Le système sait quand l’utilisateur décroche. | Inférence mentale / confiance | Supprimer la formulation |
| C-015 | La caméra peut aider à détecter l’état cognitif. | Interdit MVP | Incompatible MVP | La caméra est exclue du MVP. | MADSuite utilise la caméra pour lire l’attention. | Biométrie / vie privée mentale | Exclure MVP |
| C-016 | L’IA peut analyser l’état psychologique de l’utilisateur. | Interdit | Incompatible | L’IA peut résumer le contexte opérationnel. | L’IA analyse l’état psychologique. | Clinique / vie privée mentale | Supprimer |
| C-017 | Les recommandations peuvent être personnalisées selon les habitudes. | MVP sous conditions | Plausible | MADSuite peut proposer des suggestions selon l’historique d’usage local. | MADSuite profile l’utilisateur. | Privacy / profilage | Valider avec consentement |
| C-018 | Les rappels peuvent être moins intrusifs s’ils respectent le contexte. | R&D | Plausible | Les rappels peuvent être déclenchés à des moments plus appropriés selon l’activité. | MADSuite sait le meilleur moment mental. | Cognition / automatisation | Valider |
| C-019 | Les brouillons et tâches incomplètes peuvent être détectés applicativement. | MVP sous conditions | Solide | MADSuite peut détecter des éléments applicatifs incomplets. | MADSuite sait ce que l’utilisateur a oublié. | Privacy / inférence | Garder sous conditions |
| C-020 | Une métrique cognitive peut représenter l’état mental. | Interdit | Incompatible | Une métrique peut représenter une tendance d’activité numérique. | Une métrique représente l’état mental. | Clinique / éthique | Supprimer |

## 5. Claims techniques, conformité et produit à ajouter progressivement

Les prochains ajouts doivent couvrir :

- time tracking vs time monitoring;
- capture assistive locale;
- Loi 25 / privacy;
- sécurité SaaS;
- PWA / accessibilité;
- fiscalité / RS&DE;
- droit d’auteur / dépendances;
- géospatial / GPS;
- MAD Ariane / snapshot de reprise.

Chaque nouvel ajout doit utiliser le template :

```text
SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md
```

## 6. Template rapide d’entrée registre

```markdown
| C-YYYY-MM-DD-XXX | [Claim brut] | [Catégorie] | [Niveau de preuve] | [Formulation MADPROOF] | [Formulation interdite] | [Risque] | [Décision] |
```

## 7. Règles de maintien

Le registre doit être mis à jour quand :

- une nouvelle fonctionnalité cognitive est ajoutée;
- une page marketing utilise un claim scientifique;
- une source de recherche est intégrée;
- un module IA est ajouté;
- une métrique utilisateur est renommée;
- un wording médical ou psychologique apparaît;
- un claim légal, fiscal, sécurité ou conformité apparaît;
- un test utilisateur invalide une hypothèse;
- une nouvelle ADR modifie la doctrine produit;
- un document sort de `docs/research/atrier`.

## 8. Règle finale

Un claim doit être supprimé ou reformulé si :

- il sonne médical;
- il semble diagnostiquer;
- il prétend mesurer un état mental;
- il implique une surveillance;
- il dépasse la preuve disponible;
- il réduit l’autonomie utilisateur;
- il nuit à la confiance;
- il promet une conformité absolue;
- il promet une économie fiscale non validée;
- il transforme une hypothèse R&D en promesse produit.

Phrase de contrôle :

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?

## 9. Verdict

Ce registre est le point de contrôle opérationnel des claims MADSuite.

**Décision : aucun claim sensible ne doit être utilisé publiquement ou intégré dans une documentation officielle sans entrée MADPROOF correspondante.**