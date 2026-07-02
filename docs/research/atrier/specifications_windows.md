# Spécifications Techniques, Graphiques et Anti-Rejet : Application Windows (MSIX / Microsoft Store)

Ce document rassemble toutes les spécifications requises pour concevoir, compiler et publier une application de bureau moderne sur **Windows 10 & 11** via le **Microsoft Store** ou en distribution directe.

---

## 1. Architecture, Frameworks & OS Supportés

Pour s'intégrer parfaitement à l'écosystème Windows moderne, l'application doit respecter les derniers standards de Microsoft.

* **OS Supportés :** Windows 10 (Version 1809, Build 17763 minimum) et Windows 11.
* **Frameworks Recommandés :** 
  * **WinUI 3 / Windows App SDK :** Le standard moderne natif pour les applications de bureau avec l'interface fluide (Fluent Design).
  * **WPF (.NET 8+) :** Pour des applications d'entreprise matures avec support XAML robuste.
  * **MAUI / Flutter / React Native for Desktop :** Si une base de code multiplateforme est réutilisée.
* **Architecture Interne :** MVVM (Model-View-ViewModel) fortement recommandé avec injection de dépendances.
* **Format de Package (Distribution) :** **MSIX** (obligatoire pour le Microsoft Store). C'est un format sécurisé qui gère l'installation propre, les mises à jour atomiques et l'isolation des fichiers.

---

## 2. Spécifications Graphiques (Icônes & Écrans)

Le Microsoft Store et le menu Démarrer de Windows exigent une panoplie d'actifs visuels à des échelles (Scales) différentes pour s'adapter aux écrans Haute Densité (DPI).

### 📐 Actifs Visuels du Package MSIX (AppX Manifest)
Les dimensions ci-dessous sont les tailles de base à **100% scale**. Il est fortement recommandé de fournir les déclinaisons à **200%** et **400%** pour éviter le flou sur les écrans 4K.

| Type d'Actif | Taille de Base (100% Scale) | Rôle / Affichage |
| :--- | :--- | :--- |
| **Square 44x44 Logo** | 44 x 44 pixels | Icône dans la barre des tâches, la liste des applications du menu Démarrer. |
| **Square 150x150 Logo** | 150 x 150 pixels | Tuile (Tile) standard dans le menu Démarrer. |
| **Store Logo** | 50 x 50 pixels | Icône affichée dans les détails du Microsoft Store. |
| **Badge Logo** | 24 x 24 pixels | Icône monochrome pour les notifications sur l'écran de verrouillage. |
| **SplashScreen** | 620 x 300 pixels | Image centrale affichée au lancement de l'application. |

* **Zone de sécurité :** Pour l'icône 44x44, laissez une marge transparente de 10% à 15% autour du logo pour éviter qu'il ne colle aux bords des boutons de la barre des tâches.
* **Format :** Fichiers `.png` avec canal alpha (transparence) ou fichiers vectoriels `.svg`.

### 🚀 Captures d'Écran pour le Store
* **Dimensions :** Minimum **1366 x 768 pixels**, recommandé **1920 x 1080 (1080p)** ou **3840 x 2160 (4K)**.
* **Quantité :** Minimum 1 capture, max 9. Les captures doivent montrer l'application en mode fenêtre standard ou plein écran, sans inclure le bureau de votre ordinateur (pas d'icônes Windows ou de fond d'écran visible en arrière-plan).

---

## 3. Sécurité Réseau & Intégrité du Système

Windows intègre des barrières strictes (SmartScreen, User Account Control) pour protéger le système des exécutables malveillants.

### 🌐 Sécurité Réseau (App Capability)
* **Isolation réseau (Sandbox) :** Dans le fichier `Package.appxmanifest`, vous devez déclarer explicitement les capacités réseau requises :
  * `internetClient` : Permet à l'application de faire des requêtes sortantes vers Internet (HTTPS obligatoire par défaut).
  * `internetClientServer` / `privateNetworkClientServer` : Requis uniquement si votre application écoute sur un port ou communique sur un réseau local (ex: connexion à une base de données locale ou un appareil IoT).

### 🔏 Signature de Code (Code Signing)
* **Le mur SmartScreen :** Si vous distribuez votre application en dehors du Store (via un installateur `.msix` ou `.exe`), Windows va afficher un avertissement bleu "Windows a protégé votre ordinateur" (SmartScreen).
* **Solution :** Vous devez signer numériquement le package avec un certificat de signature de code (**Code Signing Certificate**) émis par une autorité reconnue (comme DigiCert ou Sectigo). Un certificat auto-signé fonctionne uniquement en mode développeur sur votre propre machine.
* **Avantage du Store :** Si vous publiez via le Microsoft Store, c'est Microsoft qui signe numériquement votre application avec son propre certificat de confiance. Votre application s'installe alors sans aucune alerte de sécurité.

---

## 4. Top Checklist Anti-Rejet pour le Microsoft Store

Le processus de certification de Microsoft combine des tests automatisés (WACK) et une révision humaine.

### 1. Passer le Windows App Certification Kit (WACK)
* Avant de soumettre, vous devez obligatoirement rouler l'outil **WACK** intégré à Visual Studio. Il vérifie :
  * Qu'aucune API bannie ou non sécurisée n'est appelée.
  * Que l'application ne fait pas planter le système au démarrage ou à la fermeture.
  * Que la consommation de mémoire au repos est normale.
* **Le Rejet :** Un échec au test WACK bloque automatiquement la soumission sur l'Espace Partenaire (Partner Center).

### 2. Gestion du Mode Hors-ligne et Crashs
* Si l'application requiert internet, elle ne doit pas fermer brusquement (crash) si le réseau est coupé. Elle doit afficher un message d'erreur propre ("Pas de connexion réseau"). Un crash instantané au lancement sans réseau équivaut à un rejet immédiat.

### 3. Informations de Test pour les Réviseurs
* Tout comme Apple et Google, si votre application demande une authentification, vous devez fournir un compte de test pleinement fonctionnel dans les notes de soumission de l'Espace Partenaire.

### 4. Respect des Politiques de Contenu (Store Policies)
* L'application doit inclure un lien vers une **Politique de Confidentialité** valide si elle accède à internet ou collecte la moindre donnée technique (comme des rapports de crash anonymes).
* Pas de contenu de type "placeholder" (faux boutons, texte de remplissage).
