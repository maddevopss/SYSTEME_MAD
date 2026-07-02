# Spécifications Avancées & Architecture Multiplateforme (Android, iOS, Windows, Linux)

Ce document rassemble les spécifications architecturales et les stratégies d'ingénierie logicielle pour concevoir une application unique ciblant simultanément le mobile (Android/iOS) et le bureau (Windows/Linux) sans dupliquer la logique d'affaires.

---

## 1. Choix du Framework & Stratégie de Partage de Code

Pour cibler efficacement quatre plateformes, trois approches industrielles dominent. Le choix dépend de la réutilisation des composants UI et des besoins de performance native.

| Approche / Framework | Langage Unique | Rendu UI | Partage de Logique d'Affaires | Performance Globale |
| :--- | :--- | :--- | :--- | :--- |
| **Flutter** | Dart | Propre moteur graphique (Impeller/Skia) | ~95% (UI et Logique identiques) | Excellente (Compilé natif) |
| **React Native + Native Desktop** | JavaScript / TypeScript | Composants natifs de chaque OS via un Bridge | ~80-90% (UI adaptée par plateforme) | Très bonne (Proche du natif) |
| **Kotlin Multiplatform (KMP)** | Kotlin | Jetpack Compose Multiplatform ou UI 100% Native | 100% de la logique partagée (Données/API) | Maximale (Zéro overhead de runtime) |

---

## 2. Abstraction des API Système (La Stratégie par Interface/Bridge)

Le plus grand défi du multiplateforme est d'accéder aux fonctionnalités spécifiques de chaque système (fichiers, bases de données, notifications) sans polluer le code principal d'instructions conditionnelles (`if OS == Android`).

### 🛠️ Le Pattern Abstraction-Implémentation (Dependency Inversion)
La logique d'affaires interagit uniquement avec une interface commune, et chaque plateforme injecte sa propre implémentation native au démarrage.

```
                  ┌───────────────────────────────┐
                  │      Logique d'Affaires       │
                  │  (Shared / Core Application)   │
                  └───────────────┬───────────────┘
                                  │ (Appelle l'interface)
                                  ▼
                  ┌───────────────────────────────┐
                  │   interface ILocalStorage     │
                  └───────────────┬───────────────┘
                                  │
         ┌────────────────────────┼────────────────────────┬────────────────────────┐
         ▼                        ▼                        ▼                        ▼
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ Implémentation  │      │ Implémentation  │      │ Implémentation  │      │ Implémentation  │
│     Android     │      │       iOS       │      │     Windows     │      │      Linux      │
│ (Room / ShPref) │      │ (CoreData / KC) │      │ (WinUI/AppData) │      │(XDG / D-Bus)    │
└─────────────────┘      └─────────────────┘      └─────────────────┘      └─────────────────┘
```

---

## 3. Spécifications du Stockage de Données Multiplateforme

L'application doit utiliser un moteur de base de données standardisé capable de rouler sur les quatre architectures.

* **Le Moteur Commun :** **SQLite** est le standard incontourné. Il est supporté nativement sur toutes les plateformes mobiles et de bureau.
* **Couche d'Abstraction Recommandée :**
  * Si utilisation de **Flutter** : `Isar` ou `sqflite`.
  * Si utilisation de **KMP** : `SQLDelight` (génère du code type-safe natif pour chaque OS).
  * Si utilisation de **React Native** : `WatermelonDB` ou `react-native-quick-sqlite`.
* **Gestion des Chemins d'Accès Absolus :** La logique partagée ne doit jamais écrire un chemin en dur. Elle doit appeler une fonction native injectée pour obtenir le dossier de données sécurisé correspondant à chaque OS :
  * **Android :** `Context.filesDir`
  * **iOS :** `FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)`
  * **Windows :** `ApplicationData.Current.LocalFolder`
  * **Linux :** `$XDG_DATA_HOME` ou `~/.local/share/`

---

## 4. Sécurité & Gestion des Secrets Multiplateforme

Les jetons d'authentification (JWT) et clés privées ne doivent jamais être stockés dans la base de données standard ou dans des fichiers de configuration non chiffrés.

* **Composant Partagé :** L'interface `ISecureStorage` doit rediriger vers les coffres-forts natifs chiffrés par le matériel (Hardware-backed Keystore / Enclave) :
  * **Android :** `EncryptedSharedPreferences` (Jetpack Security).
  * **iOS :** `Keychain Services`.
  * **Windows :** `DataProtectionProvider` ou l'API `Credential Manager`.
  * **Linux :** `Secret Service API` via D-Bus (interagissant avec GNOME Keyring ou KWallet).

---

## 5. Pipeline d'Intégration et de Déploiement Continu (CI/CD)

Compiler manuellement pour quatre plateformes différentes est une perte de temps monumentale. Une architecture multiplateforme moderne exige un pipeline automatisé.

* **Le Problème de la Compilation iOS/Mac :** Pour compiler l'application pour iOS et macOS, un environnement **macOS** physique ou virtuel (avec Xcode) est **strictement obligatoire**. On ne peut pas compiler un fichier `.ipa` ou une archive Xcode nativement depuis Windows ou Linux.
* **Stratégie CI/CD Recommandée (GitHub Actions / GitLab CI) :**
  * **Runner macOS :** S'occupe de compiler le build iOS (génère le `.ipa`) et de le pousser sur TestFlight / App Store Connect.
  * **Runner Windows :** S'occupe de compiler le build Windows (génère le package `.msix`) et de le pousser sur l'Espace Partenaire de Microsoft.
  * **Runner Linux (Ubuntu) :** S'occupe de compiler l'APK/AAB pour Android (via le SDK Android) ET de packager le Flatpak/Snap pour Linux (poussé sur Flathub/Snapcraft).
