

## Méthodologie de Recherche et Analyse des Données

**Type de recherche** : Synthèse translationnelle mixte (clinique + computationnelle + UX appliquée). Combinaison de revue de littérature (modèles théoriques Barkley, études empiriques timing/EEG, preprints UI), analyse de patterns UX validés (Navneet 2025), et propositions d'implémentation technique pour MADSuite (prototypes biométrie, prothèse exécutive, intégration TCC/ACT). Approche itérative : fondements scientifiques → causes/mécanismes → tendances → outils d'analyse → recommandations pratiques.

**Outils d'analyse qualitative** : Thématique (codage thématique sur littérature TDAH/cognitive prosthetics), analyse de contenu (sources primaires vs secondaires), synthèse narrative avec focus sur implications UX/prothèses. Outils : NVivo ou équivalent pour codage ; Markdown pour synthèse itérative.

**Outils d'analyse quantitative** : Statistiques descriptives et effets de taille (Cohen's d, Hedges' g des études), corrélations (AUC, accuracy modèles ML), mesures mixtes (self-report NASA-TLX + performance + physiologiques). Pour EEG/DL : métriques classification (accuracy, F1, AUC-ROC), cross-validation.

**Outils Python pour l'analyse** :
- **Bibliothèques principales** : Pandas (manipulation données), NumPy/SciPy (calculs/signaux), Matplotlib/Seaborn (visualisation bandes EEG, tendances), Scikit-learn (modèles baseline classification), MNE-Python (EEG preprocessing/analyse).

**Exemples de code Python avec commentaires (pour analyse EEG/biométrie)** :

```python
# Importations selon PEP 8 : imports standards, puis tiers, puis locaux
import numpy as np
import pandas as pd
import mne  # Pour EEG
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt

# Exemple 1 : Chargement et analyse bandes de fréquence EEG
def analyser_bandes_eeg(raw_eeg_data, sfreq=256):
    """Analyse des bandes de fréquence EEG (delta, theta, alpha, beta, gamma).
    Utile pour classification états attentionnels TDAH (ex. theta élevé = inattention).
    """
    # Prétraitement : filtrage bandpass
    raw = mne.io.RawArray(raw_eeg_data, info=mne.create_info(ch_names=['EEG'], sfreq=sfreq))
    raw.filter(0.5, 40)  # Filtre standard EEG
    
    # PSD (Power Spectral Density) par bande
    psds, freqs = mne.time_frequency.psd_welch(raw, fmin=0.5, fmax=40, n_fft=256)
    
    # Bandes classiques
    bands = {
        'delta': (0.5, 4),
        'theta': (4, 8),   # Élevé dans TDAH inattention
        'alpha': (8, 13),
        'beta': (13, 30),  # Focus
        'gamma': (30, 40)
    }
    
    band_powers = {}
    for band_name, (fmin, fmax) in bands.items():
        idx = np.logical_and(freqs >= fmin, freqs <= fmax)
        band_powers[band_name] = psds[:, idx].mean(axis=1)  # Moyenne par canal
    
    return band_powers

# Exemple utilisation
# band_powers = analyser_bandes_eeg(eeg_data)
# print("Puissance theta (inattention) :", band_powers['theta'])

# Exemple 2 : Classification émotions/états via DL (simplifié avec sklearn baseline)
def classifier_etats_eeg(features_df, labels):
    """Classification états (focus, drift, etc.) à partir features EEG + comportementales.
    Extension possible vers LSTM/Transformer pour séries temporelles.
    """
    X_train, X_test, y_train, y_test = train_test_split(
        features_df, labels, test_size=0.2, random_state=42, stratify=labels
    )
    
    clf = RandomForestClassifier(n_estimators=100, random_state=42)
    clf.fit(X_train, y_train)
    
    accuracy = clf.score(X_test, y_test)
    print(f"Accuracy classification états : {accuracy:.3f}")
    
    # Feature importance pour XAI
    importances = pd.Series(clf.feature_importances_, index=features_df.columns)
    print("Top features (XAI) :", importances.nlargest(5))
    
    return clf

# Conventions PEP 8 respectées :
# - Indentation 4 espaces
# - Lignes < 88 chars
# - Noms fonctions/variables snake_case
# - Docstrings détaillées
# - Imports organisés
# - Espaces autour opérateurs
```

Ces outils et exemples permettent l'analyse reproductible des données EEG, biométrie et tendances dans la recherche pour MADSuite. 

**Normes ISO pertinentes** :
- ISO 9241 (Ergonomie interaction homme-système, incl. accessibilité UX).
- ISO 13485 (Dispositifs médicaux, pertinent pour DTx/prothèses cognitives).
- ISO 14971 (Gestion risques dispositifs médicaux).
- ISO/IEC 62366 (Utilisabilité ingénierie dispositifs médicaux).
- Spécifiques : Conformité pour claims thérapeutiques (FDA Class II équivalent) et neuro-accessibilité.

**Applications cliniques EEG** : Diagnostic TDAH (biomarqueurs theta/bêta), neurofeedback, monitoring charge cognitive temps réel, BCI pour prothèses, classification émotions (valence/arousal via asymétrie frontale, etc.). EEG portable/mobile (Muse, Emotiv, OpenBCI) avec DL pour edge computing.

**Spécifications techniques EEG portable** : Résolution 8-24 canaux, sampling 256-500Hz, bande 0.5-40Hz, impédance <5kOhm, Bluetooth/WiFi, autonomie 8+ heures, logiciels open-source (OpenBCI, MNE). Intégration MADSuite via API pour feedback adaptatif. 

Documents mis à jour avec toutes les recherches récentes (EEG, DL, méthodologie, outils Python, normes, etc.). Fichier résumé également rafraîchi si besoin.