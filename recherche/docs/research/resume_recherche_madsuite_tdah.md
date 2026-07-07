# Résumé Recherche : Ingénierie Cognitive & UX pour TDAH - MADSuite

## Contexte et Objectif
Recherche synthétisée sur l'application de neurosciences, psychologie cognitive et UX adaptative pour TDAH (cécité temporelle, dysfonction exécutive). Focus sur externalisation spatiale, détection temps réel et prothèses cognitives numériques pour MADSuite (VisualTimer, Cognitive Budget, gestion interruptions).

## Concepts Principaux Développés

### 1. Représentation Spatiale du Temps (Temporal Landmark Navigation)
- Temps cartographié dans l'espace (hauteur proportionnelle durée, sea ux d'énergie visuels, repères temporels comme "chemin physique").
- Évite anxiété des compteurs traditionnels.
- Sources : Pattern 5 (arXiv 2025 "Orchestrating Attention"), Barkley (1997), Toplak & Tannock (2005).
- Causes principales : Dysfonction exécutive PFC + dysrégulation dopaminergique circuits timing.
- Données : Effets larges (d=1.21 charge cognitive) dans pilotes ; métas confirment déficits timing (g 0.4-0.66).
- Tendances : Externalisation spatiale adulte, détection adaptative, mesures mixtes.

### 2. Biométrie Comportementale de Pointe
- Signaux privacy-preserving on-device : keystroke/mouse dynamics (latence, entropy), rythme interaction (proxy perception temps), webcam pupillométrie/micro-expressions.
- Détection 4 états attentionnels (Focused/Drifting/Hyperfocused/Fatigued) + charge cognitive.
- Modèles IA : LSTM/GRU (séquences temporelles), Transformer tiny (attention + XAI), fusion multi-modale, quantization on-device (<50ms latence, <500KB).
- Lien MADSuite : Déclenche adaptations spatiales, gestion interruptions (buffer 5min), ajustement Cognitive Budget.
- Matériel : CPU standard + webcam intégrée ; pas de GPU requis.

### 3. Prothèse Exécutive par Analyse de Tâches en Temps Réel
- IA analyse séquence actions numériques pour détecter micro-étape bloquée et fournir prompt ciblé ("impulsion exacte").
- Sources : AI scaffolding/executive outsourcing (2025 articles), LSTM time-series activity analysis (arXiv 2025), agents génératifs (SwiftSage).
- Intégration : Étend biométrie + contexte tâches MADSuite → next-action prediction + prompts LLM/XAI.
- Base des futures thérapies numériques pour dysfonction exécutive.

### 4. Thérapies Numériques et Approches Thérapeutiques
- **Digital Therapeutics (DTx)** : EndeavorRx (FDA 2020, jeu vidéo attention enfants, RCT STARS-ADHD), MindPro1 (Chine 2024). Preuves amélioration attention/symptoms.
- **TCC pour TDAH** : Restructuration, activation comportementale, stratégies temps. Intégration : prompts IA CBT-informed + feedback biométrie + spatialisation.
- **ACT pour TDAH** : Flexibilité psychologique (acceptation, défusion, valeurs, action engagée). Techniques détaillées : défusion cognitive, acceptation sensations, contact présent, soi-contexte, valeurs + action engagée. Intégration : prompts IA ACT-informed déclenchés par biométrie (évitement/stuck) + cues spatiales (chemin valeurs).

## Liens MADSuite & Implémentation
- **Frontend** : Extension useTimer hook + event listeners → features → inférence on-device (TF.js/ONNX) → seuils → adaptations React (timeline spatiale, repères, sea ux d'énergie, prompts).
- **Middleware** : Erreur contextuelle enrichie + XAI ("raison de l'adaptation").
- **Pipeline complet** : Biométrie + analyse tâches → détection état/micro-étape → technique thérapeutique (TCC/ACT) ou prothèse → feedback spatial/temps réel.
- **Validation** : Pilotes avec mesures mixtes (NASA-TLX, performance, pupillométrie, AAQ-II flexibilité, ADHD-RS). N≥30, diagnostic confirmé. Cibles : McGill/The Neuro, Paris Brain Institute.
- **Hardware** : CPU moderne standard + webcam ; privacy-first (tout local).

## Recommandations Clés
- Développer "Executive Prompt Engine" + détection biométrie temps réel.
- Combiner spatialisation + biométrie + prompts thérapeutiques pour DTx complet TDAH adulte.
- Pilotes cliniques pour claims thérapeutiques (potentiel Class II device).
- Prochaines itérations : Datasets séquences interaction TDAH-like, LLM local pour prompts, mesure impact sur cécité temporelle et flow.

Cette recherche pose les fondations d'une MADSuite comme plateforme neuro-accessible et thérapeutique numérique pour TDAH, combinant externalisation spatiale, détection IA avancée et techniques TCC/ACT en temps réel.