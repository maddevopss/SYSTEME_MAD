---
Projet: MADSuite
Document: Résumé de recherche — Assistance cognitive TDAH
Version: 0.1
Dernière révision: 2026-06-29
Statut: Brouillon MADPROOF-R&D
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé — Assistance cognitive adaptative pour MADSuite

## 1. Vision générale

MADSuite explore une approche d’assistance cognitive conçue pour les utilisateurs qui vivent avec des difficultés d’attention, de planification, d’initiation, de reprise de tâche et de perception du temps, notamment dans un contexte TDAH.

L’objectif n’est pas de diagnostiquer le TDAH, de remplacer un professionnel ou de présenter MADSuite comme une thérapie numérique validée. L’objectif est de créer une interface de travail plus lisible, plus tolérante, plus contextualisée et plus aidante pour les fonctions exécutives.

La vision centrale est la suivante :

> MADSuite ne force pas l’utilisateur à travailler contre son cerveau. Il transforme le travail numérique en parcours guidé, lisible et soutenable.

Quatre grands piliers ont été définis :

1. IA de l’attention et scaffolding bidirectionnel;
2. Représentation spatiale du temps;
3. Support social par IA et body doubling virtuel;
4. Prothèse exécutive par analyse de tâches en temps réel.

Ces piliers forment ensemble une interface d’étayage cognitif : une interface qui aide à commencer, continuer, reprendre et terminer sans culpabiliser l’utilisateur.

---

## 2. Pilier 1 — IA de l’attention et scaffolding bidirectionnel

### 2.1. Principe

MADSuite peut intégrer une IA de l’attention qui adapte l’interface selon des signaux comportementaux discrets. Le principe n’est pas seulement de réduire les distractions, mais d’ajuster le niveau de stimulation selon le contexte.

Certains décrochages peuvent venir d’une surcharge cognitive. D’autres peuvent venir d’une sous-stimulation ou d’un ennui. Une bonne interface doit donc pouvoir agir dans deux directions :

- simplifier l’environnement lorsque l’utilisateur semble surchargé ou fatigué;
- ajouter une micro-stimulation douce lorsque l’utilisateur semble décrocher par inertie ou ennui.

### 2.2. Signaux possibles

MADSuite peut observer des signaux non intrusifs comme :

- périodes d’inactivité;
- changements fréquents de module;
- retours répétés sur le même écran;
- abandon d’un formulaire;
- tâche ouverte sans progression;
- rythme d’interaction;
- interruption d’une séquence;
- reprise après une pause.

Ces signaux ne doivent pas être présentés comme des diagnostics. Ils servent uniquement à formuler une hypothèse d’interface.

### 2.3. États opérationnels possibles

MADSuite peut modéliser des états internes non médicaux :

| État | Signification produit |
|---|---|
| Focus stable | L’utilisateur avance normalement. |
| Dérive / sous-stimulation | L’utilisateur semble décrocher ou tourner en rond. |
| Surcharge / friction | L’utilisateur semble bloqué ou submergé par l’interface. |
| Fatigue | L’utilisateur semble avoir besoin d’une interface plus calme et plus simple. |

Ces états sont des catégories UX internes, pas des catégories cliniques.

### 2.4. Interventions possibles

Selon l’état observé, MADSuite peut :

- reformuler la prochaine action;
- découper une tâche trop longue;
- proposer un jalon visuel;
- réduire la densité de l’interface;
- masquer les éléments secondaires;
- ajouter une micro-animation douce;
- proposer une pause;
- ramener l’utilisateur à une seule prochaine étape.

### 2.5. Statut MADPROOF

**Statut : MADPROOF-R&D fort**

À utiliser :

- “signaux comportementaux discrets”;
- “hypothèse d’interface”;
- “scaffolding adaptatif”;
- “réduction de friction”;
- “micro-stimulation douce”.

À éviter :

- “l’IA détecte l’état émotionnel réel”;
- “l’IA diagnostique la fatigue ou l’inattention”;
- “l’interface corrige le TDAH”;
- “détection fiable et clinique de l’état attentionnel”.

---

## 3. Pilier 2 — Représentation spatiale du temps

### 3.1. Principe

Pour réduire l’effet de cécité temporelle, MADSuite évite de dépendre uniquement des chronomètres classiques ou des comptes à rebours visibles, qui peuvent augmenter la pression cognitive chez certains utilisateurs.

L’interface transforme plutôt le temps en repères visuels concrets.

Le principe est simple : plus une tâche demande de temps ou d’énergie, plus elle occupe d’espace dans l’interface. Une tâche estimée à une heure peut, par exemple, être affichée deux fois plus grande qu’une tâche de trente minutes.

La journée devient alors une carte lisible plutôt qu’une suite abstraite d’heures.

### 3.2. Objectif

L’objectif n’est pas de “guérir” la cécité temporelle, mais d’aider l’utilisateur à :

- mieux percevoir la charge réelle de sa journée;
- anticiper les transitions;
- visualiser les tâches longues;
- éviter la surcharge invisible;
- progresser sans être constamment confronté à un compte à rebours stressant.

### 3.3. Formes possibles dans MADSuite

Cette représentation peut prendre la forme de :

- blocs de travail proportionnels;
- zones d’énergie;
- jalons visuels;
- parcours de journée;
- carte temporelle;
- ligne de progression basée sur le chemin parcouru;
- affichage centré sur les repères plutôt que sur le temps restant.

### 3.4. Phrase stratégique

> La journée devient une carte, pas une horloge.

Ou :

> MADSuite ne demande pas à l’utilisateur de courir contre une horloge. Il lui donne une carte pour avancer.

### 3.5. Statut MADPROOF

**Statut : MADPROOF-R&D solide / UX produit fort**

À utiliser :

- “représentation spatiale du temps”;
- “repères visuels concrets”;
- “blocs proportionnels”;
- “zones d’énergie”;
- “progression par jalons”.

À éviter :

- “réduit scientifiquement la cécité temporelle”;
- “validé cliniquement pour tous les utilisateurs TDAH”;
- “guérit la time blindness”.

---

## 4. Pilier 3 — Support social par IA et body doubling virtuel

### 4.1. Principe

Pour plusieurs personnes TDAH, la gestion des tâches n’est pas seulement un processus individuel. Elle peut bénéficier d’un soutien externe, d’un sentiment de présence et d’une forme d’accountability douce.

MADSuite peut donc explorer une approche de support social assisté par IA, inspirée du body doubling.

Le body doubling consiste à travailler en présence d’une autre personne, physiquement ou virtuellement. Cette présence ne sert pas à surveiller ou contrôler. Elle agit plutôt comme un point d’ancrage : quelqu’un est là, la tâche est nommée, le départ devient plus facile et l’effort paraît moins isolé.

### 4.2. Traduction produit

Dans MADSuite, ce principe peut devenir un mode de travail accompagné, activé volontairement par l’utilisateur.

Ce mode peut intégrer :

- une présence visuelle minimale;
- un rituel de départ;
- une confirmation d’intention;
- des relances douces;
- des points de synchronisation courts;
- un résumé de progression;
- différents niveaux de présence.

### 4.3. Exemples d’interaction

Avant la tâche :

> Qu’est-ce qu’on avance maintenant?

Pendant la tâche :

> On revient à la prochaine petite étape?

À la fin :

> Tu as avancé 22 minutes, terminé 2 sous-étapes et réduit la tâche principale.

### 4.4. Niveaux de présence possibles

| Niveau | Comportement |
|---|---|
| Désactivé | Aucun accompagnement. |
| Silencieux | Présence visuelle seulement. |
| Discret | Quelques rappels contextuels. |
| Encourageant | Relances plus visibles et résumé de progression. |

### 4.5. Phrase stratégique

> MADSuite ne surveille pas l’utilisateur. Il crée une présence de travail calme, volontaire et non jugeante pour aider à commencer, continuer et revenir sans culpabilité.

### 4.6. Statut MADPROOF

**Statut : MADPROOF-R&D fort**

À utiliser :

- “s’inspire du body doubling”;
- “présence légère, volontaire et non jugeante”;
- “accountability douce”;
- “soutien à l’initiation et au retour à la tâche”;
- “efficacité variable selon les utilisateurs”.

À éviter :

- “cliniquement prouvé pour ancrer la concentration”;
- “remplace le soutien humain”;
- “l’IA devient un thérapeute”;
- “l’IA comprend réellement l’état émotionnel”.

---

## 5. Pilier 4 — Prothèse exécutive par analyse de tâches en temps réel

### 5.1. Principe

MADSuite explore une approche de prothèse exécutive logicielle : une interface capable d’aider l’utilisateur à retrouver rapidement où il en est, quelle micro-étape vient ensuite et quel petit geste peut relancer l’action.

Les difficultés exécutives associées au TDAH peuvent toucher :

- l’initiation;
- la planification;
- la mémoire de travail;
- la priorisation;
- la flexibilité cognitive;
- la reprise après interruption;
- la capacité à terminer une tâche.

Dans un environnement numérique, ces difficultés peuvent se manifester par des blocages concrets :

- ouvrir un module sans avancer;
- abandonner un formulaire;
- changer plusieurs fois de contexte;
- revenir au même écran sans savoir quoi faire;
- créer un projet sans définir de prochaine action;
- perdre le fil après une interruption.

### 5.2. Positionnement

MADSuite ne doit pas présenter ce système comme une thérapie numérique ou un diagnostic clinique.

Le bon positionnement est :

> Une technologie d’assistance exécutive contextualisée qui réduit le coût mental de reprendre, séquencer et compléter une tâche.

### 5.3. Signaux observables

MADSuite peut observer localement des événements comme :

| Signal | Exemple |
|---|---|
| `task_opened` | Une tâche, facture ou projet est ouvert. |
| `field_focused` | Un champ devient actif. |
| `field_abandoned` | Un champ est quitté sans valeur. |
| `module_switched` | Passage d’un module à un autre. |
| `idle_started` | Début d’inactivité. |
| `resume_after_idle` | Retour après pause. |
| `draft_created` | Création d’un brouillon. |
| `step_completed` | Étape validée. |
| `same_view_revisited` | Retour répété au même écran. |

### 5.4. États opérationnels non médicaux

| État | Signification |
|---|---|
| `lost_context` | Reprise après interruption. |
| `blocked_step` | Écran ouvert sans progression. |
| `missing_next_action` | Projet ou tâche sans prochaine action. |
| `looping` | Retours répétés au même endroit. |
| `over_switching` | Changements de contexte fréquents. |
| `draft_stalled` | Brouillon commencé mais non terminé. |

Ces états ne décrivent pas l’état mental réel. Ils décrivent une friction observable dans l’usage du logiciel.

### 5.5. Micro-prompts de reprise

L’intervention doit être minimale, claire et non culpabilisante.

Exemples :

- “Tu étais en train de compléter cette facture. Prochaine étape : ajouter une ligne de service.”
- “Il manque seulement le client pour continuer.”
- “Ce projet existe, mais aucune première action n’est définie.”
- “Tu es revenu trois fois à cet écran. Veux-tu découper cette étape?”
- “On peut commencer par une version brouillon de deux minutes.”
- “Dernière action : validation du montant. Prochaine action : envoyer ou sauvegarder en brouillon.”

### 5.6. Nom produit possible

Noms possibles :

- Mode Reprise Assistée;
- Fil d’Ariane Exécutif;
- Executive Restart Engine;
- Reprise Contextuelle;
- Prochain Point d’Appui.

Le meilleur nom francophone proposé :

> Fil d’Ariane Exécutif

### 5.7. Phrase stratégique

> Quand l’utilisateur perd le fil, MADSuite ne lui demande pas de tout reconstruire mentalement. Il lui redonne simplement le prochain point d’appui.

Ou :

> MADSuite agit comme un fil d’Ariane exécutif. Il n’interprète pas médicalement l’utilisateur; il observe les points de friction dans le travail numérique et propose la prochaine micro-action utile pour reprendre le fil.

### 5.8. Statut MADPROOF

**Statut : MADPROOF-R&D avancé / produit implémentable**

À utiliser :

- “prothèse exécutive logicielle” comme métaphore produit;
- “analyse de séquences numériques”;
- “friction opérationnelle”;
- “micro-action contextuelle”;
- “reprise de tâche”;
- “réduction de la charge exécutive”.

À éviter :

- “thérapie numérique validée”;
- “traitement de la dysfonction exécutive”;
- “YOLOv5 prouve cette approche pour le TDAH”;
- “l’IA sait exactement où l’utilisateur est bloqué”;
- “l’IA fournit l’impulsion exacte”.

Reformulation sécurisée :

> MADSuite peut proposer une micro-suggestion contextuelle probable lorsque la séquence d’usage indique une friction ou une perte de contexte.

---

## 6. Synthèse des quatre piliers

| Pilier | Rôle | Promesse produit | Statut MADPROOF |
|---|---|---|---|
| IA de l’attention | Adapter stimulation et simplification | Garder l’utilisateur dans une zone de travail soutenable | MADPROOF-R&D fort |
| Temps spatial | Rendre la journée visible et tangible | Transformer l’horloge en carte | MADPROOF-R&D solide |
| Body doubling virtuel | Ajouter une présence non jugeante | Aider à commencer et revenir sans culpabilité | MADPROOF-R&D fort |
| Prothèse exécutive | Redonner le fil et la prochaine micro-action | Réduire le coût mental de reprise | MADPROOF-R&D avancé |

---

## 7. Claims globaux recommandés

### Claims sécurisés

- MADSuite soutient certaines fonctions exécutives dans le contexte du travail numérique.
- MADSuite aide l’utilisateur à visualiser sa journée, retrouver le fil et avancer par micro-actions.
- MADSuite propose une assistance contextuelle non médicale, volontaire et désactivable.
- MADSuite s’inspire des recherches sur le TDAH, les interfaces adaptatives, le body doubling, la reprise de tâche et les technologies d’assistance cognitive.
- MADSuite vise à réduire la friction cognitive dans les tâches de gestion, de temps, de facturation et de suivi de projet.

### Claims à éviter

- MADSuite traite le TDAH.
- MADSuite guérit la cécité temporelle.
- MADSuite est une thérapie numérique validée.
- MADSuite détecte l’état mental réel de l’utilisateur.
- MADSuite remplace un professionnel, un coach ou une présence humaine.
- Le body doubling virtuel est cliniquement prouvé.
- L’IA fournit l’impulsion exacte.

---

## 8. Positionnement final recommandé

MADSuite doit être présenté comme :

> Un SaaS de gestion du temps, des projets et de la facturation enrichi d’une couche d’assistance cognitive pour travailleurs autonomes, PME et utilisateurs neurodivergents.

Et non comme :

> Une thérapie numérique ou un outil médical.

Positionnement court :

> MADSuite est un copilote exécutif pour le travail numérique : il aide à visualiser le temps, commencer les tâches, retrouver le fil et avancer sans culpabilité.

---

## 9. Phrase de vision consolidée

> MADSuite transforme le travail numérique en carte cognitive. L’utilisateur ne court pas contre une horloge, ne reste pas seul devant sa tâche et n’a pas à reconstruire mentalement son contexte après chaque interruption. MADSuite lui redonne des repères, une présence et le prochain point d’appui.

---

## 10. Noyau produit proposé

### 10.1. Modules cognitifs possibles

1. **Carte temporelle**
   - Blocs proportionnels;
   - zones d’énergie;
   - jalons de progression;
   - visualisation de la charge réelle.

2. **Mode Travail Accompagné**
   - Présence discrète;
   - rituel de départ;
   - relances douces;
   - résumé de progression.

3. **Fil d’Ariane Exécutif**
   - Détection de friction;
   - reprise après interruption;
   - micro-prompts contextuels;
   - prochaine action claire.

4. **IA de l’attention**
   - Ajustement de la densité visuelle;
   - micro-stimulation douce;
   - simplification en cas de surcharge;
   - adaptation contrôlable.

### 10.2. Principe éthique commun

Tous les modules doivent respecter quatre règles :

1. Volontaire;
2. Transparent;
3. Désactivable;
4. Non médicalisé.

---

## 11. Conclusion

La vision MADSuite va au-delà d’un simple outil de temps, de facturation ou de productivité. Elle propose une interface d’assistance cognitive capable de soutenir les fonctions exécutives sans culpabiliser l’utilisateur.

Le cœur de la proposition n’est pas de contrôler l’attention, mais de l’étayer.

La promesse finale :

> Quand le travail devient abstrait, MADSuite le rend visible. Quand l’utilisateur perd le fil, MADSuite le retrouve avec lui. Quand commencer devient difficile, MADSuite offre une présence et un premier pas.

