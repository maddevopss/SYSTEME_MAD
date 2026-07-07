# MADSuite --- Documentation de Recherche et Spécifications Techniques (V2.0)

**Dernière mise à jour :** 30 juin 2026

**Statut :** Document de référence MADPROOF --- R&D

## 1. Résumé Exécutif

MADSuite est un système d'assistance cognitive adaptative pour le
travail numérique, conçu pour les utilisateurs présentant des défis
exécutifs (TDAH-like). Il transforme l\'interface de travail en un
environnement lisible, spatialisé et soutenu par une IA discrète,
évitant ainsi la surcharge et la cécité temporelle.

## 2. Méthodologie de Recherche (Synthèse)

La recherche adopte une approche translationnelle mixte :

- **Approche clinique :** S\'appuie sur les modèles de Barkley, la TCC
  et l\'ACT pour le design d\'interactions (cues de présence,
  acceptation, action engagée).

- **Rigueur technique :** Utilisation de Python (Pandas, NumPy,
  Scikit-learn, MNE-Python) pour l\'analyse des signaux comportementaux
  et EEG (Power Spectral Density, Random Forest).

- **Conformité :** Alignement sur les normes ISO 9241 (UX) et ISO 62366
  (dispositifs médicaux) pour garantir la sécurité et la qualité de
  l\'assistance.

## 3. Les 4 Piliers de MADSuite

  -----------------------------------------------------------------------
  Pilier                  Concept                 Positionnement MADPROOF
  ----------------------- ----------------------- -----------------------
  IA de l'attention       Ajustement              Détection de friction
                          bidirectionnel de la    opérationnelle, non
                          stimulation.            émotionnelle.

  Temps Spatial           Externalisation du      Réduction de la cécité
                          temps sous forme de     temporelle via repères.
                          carte.                  

  Body Doubling           Présence sociale IA     Soutien à
                          pour l\'accountability. l\'initiation, non
                                                  thérapeutique.

  Prothèse Exécutive      Analyse de séquence     Aide à la reprise de
                          pour micro-prompts.     tâche (fil d\'Ariane).
  -----------------------------------------------------------------------

## 4. Spécifications Techniques et Implémentation

### 4.1. Analyse et Biométrie (Edge Computing)

Le système repose sur une inférence locale (on-device) pour garantir la
confidentialité absolue :

\# Analyse bandes de fréquence EEG (ex: Theta/Beta)\
raw.filter(0.5, 40)\
psds, freqs = mne.time_frequency.psd_welch(raw, \...)\
\# Classification par Random Forest/LSTM\
clf = RandomForestClassifier(n_estimators=100)

Les modèles traitent les données de navigation (keystrokes, mouse
dynamics) pour détecter l\'état de l\'utilisateur (Focus, Dérive,
Surcharge, Fatigue).

### 4.2. Architecture de Reprise (Fil d\'Ariane Exécutif)

L\'IA analyse les signaux (task_opened, field_abandoned) pour proposer
des micro-actions :

- Détection de blocage : Retour répété à la même vue.

- Réponse : Prompt contextuel (« Prochaine action suggérée : sauvegarder
  en brouillon »).

## 5. Charte Éthique et MADPROOF Compliance

Pour protéger l\'intégrité du projet, les règles suivantes sont absolues
:

- **À utiliser :** \"Prothèse exécutive\", \"scaffolding adaptatif\",
  \"friction opérationnelle\", \"accountability douce\".

- **À éviter :** \"Thérapie numérique\", \"détection de l\'état
  émotionnel\", \"remplace un professionnel\", \"guérit la cécité
  temporelle\".

## 6. Feuille de Route

1.  **Phase 1 (12 mois) :** Preuve de concept (N=40), entraînement
    modèles LSTM.

2.  **Phase 2 (6 mois) :** Prototype intégré (Wizard-of-Oz inversé).

3.  **Phase 3 (12 mois) :** Pilote autonome (bandit contextuel).

4.  **Phase 4 (18 mois) :** Essai clinique pivot (N=150) --- Mesures :
    AISRS, productivité objective.
