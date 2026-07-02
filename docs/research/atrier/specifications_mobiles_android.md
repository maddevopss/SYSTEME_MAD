# Cahier des Charges & Spécifications Techniques : Application Mobile Multiplateforme (Android & iOS)

Ce document rassemble toutes les spécifications techniques, fonctionnelles et UX requises pour le développement de l'application mobile sur les plateformes **Android** et **iOS**.

---

## 1. Architecture & Technologies Cibles

Pour garantir une expérience fluide, sécurisée et performante sur les deux plateformes, les standards natifs ou frameworks cross-platform modernes doivent être respectés.

### 🤖 Spécifications Android
* **OS Supportés :** Android 10.0 (API OS 29) jusqu'à Android 14+ (API OS 34+).
* **Langages / Frameworks :** Kotlin (Développement Natif) ou Flutter / React Native (Cross-Platform avec bridges natifs).
* **Interface Utilisateur :** Jetpack Compose pour le rendu moderne, respect des lignes directrices **Material Design 3**.
* **Architecture Interne :** MVVM (Model-View-ViewModel) avec Clean Architecture. Utilisation de *Coroutines* et *Flow* pour la gestion de l'asynchronisme.
* **Format de Publication :** Android App Bundle (`.aab`) requis pour le Google Play Store.

### 🍏 Spécifications iOS
* **OS Supportés :** iOS 15.0 minimum jusqu'à la version la plus récente (iOS 17+).
* **Langages / Frameworks :** Swift (Développement Natif) ou Flutter / React Native.
* **Interface Utilisateur :** SwiftUI pour les vues, respect strict des **Human Interface Guidelines (HIG)** d'Apple.
* **Architecture Interne :** MVVM ou Clean Architecture avec l'utilisation de *Combine* ou *Async/Await* natif.
* **Format de Publication :** Archive Xcode (`.ipa`) pour soumission via App Store Connect.

---

## 2. Spécifications Fonctionnelles Communes

### 🔐 Gestion des Comptes & Authentification
* **Méthodes d'authentification :** * Connexion par Courriel/Mot de passe sécurisé.
  * *Social Login* (Google, Apple Sign-In). **Note obligatoire :** Si l'application intègre une connexion tierce (ex: Google), Apple exige l'intégration de *Sign in with Apple* sous peine de refus.
* **Sécurité Biométrique :** Intégration native de **BiometricPrompt** (Android) et **FaceID / TouchID** (iOS) après une première authentification réussie.
* **Déconnexion & Suppression de compte :** Option claire et accessible pour supprimer définitivement le compte utilisateur, conformément aux règles d'Apple et du RGPD / Lois sur la protection de la vie privée.

### 📲 Notifications Poussées (Push Notifications)
* **Infrastructure :** Utilisation de **Firebase Cloud Messaging (FCM)** comme passerelle unifiée.
* **Spécificité iOS :** Configuration obligatoire d'**APNs (Apple Push Notification service)** lié à FCM avec gestion des certificats de signature (.p8).
* **Gestion des permissions :** demande explicite à l'utilisateur via une boîte de dialogue personnalisée avant le prompt système (surtout sous iOS et Android 13+).

### 🔄 Gestion des Données & Mode Hors-ligne
* **Base de données locale :** Room DB (Android) / CoreData (iOS) ou une solution multiplateforme comme SQLite / Realm.
* **Synchronisation :** Mécanisme de cache pour permettre la consultation des données hors-ligne et synchronisation automatique lors du retour du réseau (via WorkManager sur Android / Background Tasks sur iOS).
* **Sécurité :** Chiffrement des données sensibles locales via **EncryptedSharedPreferences** (Android) et le **Keychain** (iOS).

---

## 3. Interfaces & Expérience Utilisateur (UX/UI)

L'application doit s'adapter aux particularités physiques et logicielles de chaque plateforme.

### 📐 Adaptabilité & Écrans
* **Gestion des encoches :** Prise en compte obligatoire de la *Safe Area* (iOS) et des *WindowInsets / DisplayCutout* (Android) pour éviter que le contenu ne soit caché par la caméra frontale ou la Dynamic Island.
* **Résolutions :** Design réactif (Responsive) testé sur des formats compacts (ex: iPhone SE, petits téléphones Android) et grands formats (Pro Max, Ultra).

### 🎨 Thèmes & Accessibilité
* **Mode Sombre / Clair :** Basculement automatique basé sur les préférences du système d'exploitation ou forcé via les paramètres de l'application.
* **Accessibilité (A11y) :** * Support du redimensionnement dynamique du texte (Dynamic Type sur iOS / Font Scaling sur Android).
  * Compatibilité avec les lecteurs d'écran : **TalkBack** (Android) et **VoiceOver** (iOS).

---

## 4. cycle de Vie & Performances

* **Gestion du cycle de vie :** Sauvegarde de l'état de l'application lors du passage en arrière-plan (Background) pour éviter la perte de données si l'OS détruit le processus pour libérer de la mémoire.
* **Optimisation de la batterie :** Restriction des tâches de fond trop gourmandes en énergie. Utilisation des API officielles pour les jobs en arrière-plan.

---

## 5. Déploiement & Magasins d'Applications (App Stores)

### 🚀 Google Play Store (Android)
* Compte Développeur Google Play Console requis.
* Fournir les visuels : Icône de l'application (adaptative), captures d'écran pour téléphones et tablettes, description courte et longue.
* Fichier de configuration de l'intégrité de l'application (*Play Integrity API*) pour contrer le piratage.

### 🍏 Apple App Store (iOS)
* Compte Apple Developer Program requis (frais annuels).
* Fournir les visuels requis dans App Store Connect (tailles d'écrans spécifiques pour iPhone de 6.5 pouces et 5.5 pouces minimum).
* **Règle d'or :** Respecter le processus de revue d'Apple (App Review Guidelines). Fournir un compte de test valide aux réviseurs si l'application nécessite une connexion.
