# Spécifications Techniques et Graphiques Avancées : Éviter les Refus sur Android & iOS

Ce document regroupe les exigences strictes, tailles d'actifs, configurations de sécurité et pièges fréquents qui causent le rejet d'une application sur le **Google Play Store** et l'**Apple App Store**.

---

## 1. Icônes de l'Application & Écrans de Démarrage (Launch Screens)

Les deux plateformes exigent des formats spécifiques pour éviter que l'icône soit déformée, pixélisée ou coupée.

### 🤖 Spécifications Android (Adaptive Icons)
Depuis Android 8.0, les icônes doivent être "adaptatives" (elles s'adaptent aux masques des différents fabricants : carré, rond, squircle).
* **Structure :** L'icône est composée de deux couches distinctes (Foreground et Background) au format vectoriel (`.xml` ou SVG épuré) ou PNG.
* **Dimensions globales :** **108 x 108 dp** pour les deux couches.
* **Zone de sécurité (Safe Zone) :** Tout le contenu important (logo, texte) doit être confiné dans un cercle central de **66 dp de diamètre** pour éviter d'être rogné par le masque de l'OS.
* **Icône du Play Store (Haute Résolution) :** PNG 32-bit, **512 x 512 pixels**, max 1024 Ko, fond opaque obligatoire (pas de transparence alpha).

### 🍏 Spécifications iOS (App Icon Asset Catalog)
Apple a simplifié la gestion, mais reste intransigeant sur la qualité et les coins.
* **Format unique (Xcode 14+) :** Fournir une image unique de **1024 x 1024 pixels** (PNG 100% opaque, pas de canal alpha/transparence). Xcode se charge de générer les déclinaisons pour iPhone, iPad, et App Store.
* **Règle d'or des coins :** **Ne jamais arrondir les coins vous-même.** Fournir une image strictement carrée. Apple applique son propre masque de courbure (squircle). Si vous arrondissez les coins, du noir ou du blanc apparaîtra dans les angles.
* **Zone de sécurité :** Garder les éléments visuels importants à au moins 40-50 pixels des bords de l'image de 1024x1024.

### 🚀 Écrans de démarrage (Splash / Launch Screen)
* **Android :** Utilisation obligatoire de l'API **SplashScreen** (Android 12+). L'icône centrale au sein du Splash Screen doit respecter :
  * Icône avec arrière-plan circulaire : 160 dp de diamètre (icône de 112 dp à l'intérieur).
  * Icône sans arrière-plan : 288 x 288 dp (zone sécurisée de 192 x 192 dp).
* **iOS :** Utilisation obligatoire d'un fichier de storyboard (`LaunchScreen.storyboard`) ou configuration de la clé `UILaunchScreen` dans le `Info.plist`. Les images statiques fixes pour le Launch Screen sont dépréciées et causent des rejets.

---

## 2. Guide d'Actifs Graphiques pour les Boutiques (Store Assets)

Pour soumettre l'application, les magasins exigent des captures d'écran et des bannières aux dimensions exactes sous peine de bloquer l'importation.

### 🤖 Google Play Store
| Actif | Dimensions Requises | Format / Contraintes |
| :--- | :--- | :--- |
| **Graphisme de présentation** | 1024 x 500 pixels | PNG ou JPEG, max 15 Mo. Éviter de mettre du texte important près des bords. |
| **Captures d'écran (Tél)** | Min: 320 px | Max: 3840 px. Ratio 16:9 ou 9:16. Au moins 2 captures requises (max 8). |
| **Captures d'écran (7" & 10")**| Min: 1024 x 600 px | Requis si l'application est déclarée compatible tablette. |

### 🍏 Apple App Store Connect
Apple valide manuellement la conformité des captures d'écran. Elles doivent refléter la vraie interface de l'application en cours d'utilisation (pas de simples publicités).
* **Écrans 6.5 pouces (iPhone Pro Max récents) :** **1284 x 2778 pixels** (Portrait) ou 2778 x 1284 pixels (Paysage). *Obligatoire.*
* **Écrans 5.5 pouces (Anciens iPhone avec bouton Home) :** **1242 x 2208 pixels** (Portrait) ou 2208 x 1242 pixels (Paysage). *Obligatoire.*
* **iPad (Si compatible) :** Écrans 12.9 pouces de 2e et 3e génération (**2048 x 2732 pixels**).

---

## 3. Top 5 des Causes de Refus (checklist Anti-Rejet)

Pour passer la révision humaine d'Apple et la révision automatisée/humaine de Google, validez ces points avant de soumettre.

### 1. Guideline de Connexion Tiers (Apple Review Guideline 4.8)
* **Le Piège :** Si votre application propose "Se connecter avec Google" ou "Se connecter avec Facebook", vous **devez obligatoirement** proposer **"Se connecter avec Apple"** (*Sign in with Apple*).
* **L'exception :** Pas obligatoire si l'application utilise exclusivement votre propre système de compte (courriel/mot de passe standard) ou un système d'authentification gouvernemental/institutionnel.

### 2. Comptes de Test pour les Réviseurs (App Store Connect & Play Console)
* **Le Piège :** Si votre application requiert une connexion (Login), vous devez fournir des identifiants de test (User / Password) valides et pleinement fonctionnels dans le formulaire de soumission.
* **Le Rejet :** Si le réviseur d'Apple ouvre l'application et tombe sur un écran de connexion bloqué sans pouvoir tester les fonctionnalités internes, l'application est rejetée à 100%.

### 3. Transparence du Suivi (App Tracking Transparency - iOS)
* **Le Piège :** Si vous collectez l'IDFA (identifiant publicitaire) ou utilisez des traceurs tiers (comme Facebook SDK, AdMob), vous devez déclencher le prompt **ATT** natif d'iOS.
* **Texte d'explication :** La chaîne de texte affichée à l'utilisateur (`NSUserTrackingUsageDescription` dans le `Info.plist`) doit expliquer *clairement* et *spécifiquement* ce que vous faites des données. Un texte trop vague comme "Nous utilisons vos données pour améliorer l'expérience" sera immédiatement rejeté.

### 4. Fonctionnalités Incomplètes ou "Placeholder"
* **Le Piège :** Ne laissez aucun bouton "Bientôt disponible", aucun texte en *Lorem Ipsum*, et aucune icône de test.
* **Le Rejet :** Les deux stores considèrent cela comme une application incomplète ou bêta, ce qui va à l'encontre des règles de distribution publique.

### 5. Demande Abusive de Permissions
* **Le Piège :** Demander l'accès à la localisation en arrière-plan (Background Location) sans justification valable pour le cœur de l'application.
* **Résolution :** Justifiez l'accès dans le code et expliquez-le clairement à l'utilisateur avant le prompt système. Sur Android, les accès SMS ou Call Logs sont ultra-restreints et nécessitent un formulaire de dérogation spécial.

---

## 4. Configuration Clé des Fichiers Manifest et Info.plist

Certaines configurations de base font planter la soumission si elles manquent.

### 🤖 Android: `AndroidManifest.xml`
* `android:exported`: Depuis Android 12, toute activité, service ou récepteur de diffusion qui utilise des filtres d'intention (`<intent-filter>`) doit explicitement définir `android:exported="true"` ou `"false"`. Si vous l'oubliez, l'application refuse de s'installer sur les OS récents.
* `android:allowBackup`: Définir à `false` si votre application manipule des données financières ou hautement confidentielles pour empêcher l'extraction de données via ADB.

### 🍏 iOS: `Info.plist` (Usage Descriptions)
Pour chaque API système sensible utilisée, vous devez déclarer une clé de description de l'usage. Si le code contient une référence à une API (même via une librairie tierce) sans la description associée, l'App Store rejette le build automatiquement à l'importation.
* **Caméra :** `NSCameraUsageDescription`
* **Localisation (En premier plan) :** `NSLocationWhenInUseUsageDescription`
* **Microphone :** `NSMicroPhoneUsageDescription`
* **Bibliothèque de photos :** `NSPhotoLibraryUsageDescription`
