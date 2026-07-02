# Spécifications Techniques et Règles Anti-Rejet : Écosystème Google ChromeOS (PWAs & IWAs)

Ce document rassemble toutes les spécifications d'ingénierie et critères de certification pour développer et publier des applications sur l'autre grand système d'exploitation de Google : **ChromeOS**. Bien qu'il puisse exécuter des apps Android, sa plateforme native reine et prioritaire est le Web sous forme de **Progressive Web Apps (PWAs)** et d'**Isolated Web Apps (IWAs)**.

---

## 1. Choix Technologique : PWA vs IWA (Isolated Web Apps)

Pour distribuer un logiciel performant sur ChromeOS sans passer par le runtime Android, Google mise tout sur les standards du Web moderne.

### 🌐 Desktop Progressive Web Apps (PWAs)
* **Concept :** Une application web standard enrichie, installable, qui s'exécute dans une fenêtre autonome (standalone) sans l'interface du navigateur.
* **Moteur d'exécution :** Toujours basé sur la version stable la plus récente de **Google Chrome** (mises à jour aux 4 semaines).
* **Format de distribution :** Déploiement standard sur un serveur HTTPS. L'utilisateur l'installe via l'icône dans l'omnibox de Chrome.

### 🔒 Isolated Web Apps (IWAs) - La nouveauté Sécurité
* **Concept :** Pour les applications d'entreprise ou hautement sécurisées, les IWAs ne sont pas servies depuis une URL publique. Elles sont packagées dans un format signé cryptographiquement (`.swbn` - Signed Web Bundle).
* **Avantage :** Elles profitent d'une isolation stricte des processus, d'une politique de sécurité de contenu (CSP) ultra-verrouillée, et ont accès à des API système avancées interdites aux PWAs normales.

---

## 2. Spécifications Graphiques : Manifeste Web & Intégration OS

Pour qu'une PWA soit acceptée comme une application système par ChromeOS (présente dans le lanceur d'applications, épinglable sur l'étagère/shelf), le fichier `manifest.json` doit respecter des critères rigoureux.

### 📐 Spécifications des Icônes (`manifest.json`)
Vous devez déclarer une panoplie d'icônes carrées pour éviter le flou lors du redimensionnement dans l'interface de ChromeOS.
* **Tailles requises :** Minimum **192 x 192 pixels** et **512 x 512 pixels** (format PNG obligatoirement).
* **Icônes adaptatives (Maskable Icons) :** Vous devez inclure l'attribut `"purpose": "maskable"` pour au moins une icône de chaque taille. ChromeOS utilise des masques circulaires ou arrondis pour son lanceur. Si vos icônes ne sont pas adaptatives, l'OS ajoutera un fond blanc affreux autour de votre logo.
* **Mode d'affichage :** La clé `"display": "standalone"` ou `"display": "minimal-ui"` est obligatoire pour forcer l'ouverture dans une vraie fenêtre d'application sans barre d'URL.

### 🚀 Captures d'Écran du Magasin (Google Play Store Desktop)
Les PWAs peuvent être distribuées directement sur le Google Play Store pour les Chromebooks.
* **Dimensions :** Captures d'écran au format paysage, ratio 16:9, recommandées en **1920 x 1080 pixels**.

---

## 3. Gestion Réseau, Mode Hors-ligne & Cycle de Vie

Un des plus grands motifs de rejet d'une application Web sur ChromeOS est l'incapacité à s'ouvrir si le Chromebook n'a pas de Wi-Fi.

### ⚙️ Le Service Worker : Obligation de Cache
L'application doit enregistrer un **Service Worker** valide qui intercepte les requêtes réseau (`fetch`).
* **Stratégie Anti-Rejet :** Le Service Worker doit implémenter une stratégie de cache de type *Cache-First* ou *Stale-While-Revalidate* pour les actifs essentiels (HTML, JS, CSS, icônes).
* **Page Hors-ligne :** Si l'application requiert des données du serveur en temps réel, le Service Worker doit intercepter l'erreur réseau et servir une page HTML hors-ligne personnalisée propre (ex: `offline.html`) au lieu de laisser l'application afficher la page d'erreur de crash par défaut de Chrome (le dinosaure).

### 🔄 Multi-Fenêtrage & Cycle de Vie
* **Window Management API :** Les Chromebooks sont souvent branchés sur des moniteurs externes. L'application doit gérer l'ouverture de fenêtres secondaires sur des écrans distincts de façon fluide.
* **Mise en cache de l'état :** ChromeOS nettoie agressivement les processus d'arrière-plan ou gèle les onglets/fenêtres inactifs (Tab freezing) pour économiser l'énergie. L'application doit sauvegarder l'état utilisateur en continu via `localStorage` ou `IndexedDB`.

---

## 4. Top Checklist Anti-Rejet pour ChromeOS

### 1. Prise en charge Clavier / Souris vs Écrans Tactiles
* **Le Piège :** Concevoir l'application uniquement en pensant aux téléphones tactiles. De nombreux Chromebooks n'ont pas d'écran tactile et s'utilisent uniquement avec un trackpad et un clavier physique.
* **Le Rejet :** L'application doit obligatoirement être entièrement navigable au clavier (gestion du focus `tabindex`, écoute des touches `Enter`, `Escape`, etc.) et supporter le clic droit (menus contextuels souris).

### 2. Politique de Sécurité de Contenu (CSP - Content Security Policy)
* **Le Piège :** Utiliser du JavaScript en ligne (`<script>...</script>` direct dans le HTML) ou des fonctions d'évaluation dynamique comme `eval()`.
* **Le Rejet :** Le moteur d'exécution de ChromeOS applique des règles CSP très strictes. Tout script externe non signé ou injection de code non vérifiée bloque instantanément l'exécution de l'application. Tous vos scripts doivent être modulaires et importés depuis des fichiers `.js` distincts.

### 3. Permissions Système Spécifiques
Pour utiliser le matériel, vous devez déclarer les capacités dans le manifeste et demander l'autorisation dynamiquement via les API du Web moderne (Fugu APIs) :
* **Accès aux Fichiers Locaux :** Utilisation obligatoire de l'API **File System Access API** pour permettre à l'utilisateur d'ouvrir et de sauvegarder des fichiers directement dans le dossier "Téléchargements" ou "Google Drive" intégré à ChromeOS.
* **Périphériques USB / Série :** Utilisation de `WebUSB API` ou `WebSerial API` (très utile pour les applications industrielles ou de configuration de matériel sous ChromeOS).
