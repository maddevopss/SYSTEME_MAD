# Spécifications Avancées Windows (Passe 2) : Registre, Données Locales, Notifications Nativisées & Multi-Fenêtrage

Ce document approfondit les requis techniques pour les applications Windows (WinUI 3 / WPF / .NET) afin de garantir la conformité aux architectures modernes (x64/ARM64), la gestion robuste du système de fichiers et le respect strict du cycle de vie du système d'exploitation Windows 11.

---

## 1. Gestion des Données Locales & Virtualisation du Registre

Avec le format de packaging moderne **MSIX**, Windows isole l'application pour protéger le système. Cela change la donne sur la façon de sauvegarder les données utilisateur et de configurer les paramètres.

### 📁 Répertoires de Fichiers (Sandboxing)
* **Interdiction d'écriture :** Il est strictement interdit d'essayer d'écrire des données, des logs ou des configurations directement dans le dossier d'installation de l'application (`C:\Program Files\WindowsApps\...`). Ce répertoire est en lecture seule. Toute tentative lève une exception `UnauthorizedAccessException`.
* **Emplacements Autorisés (API `AppData`) :**
  * **Données Locales non synchronisées :** Utiliser `ApplicationData.Current.LocalFolder` (équivalent moderne de `LocalAppData`). C'est là qu'on stocke les bases de données SQLite locales, la cache ou les gros fichiers.
  * **Données Temporaires :** Utiliser `ApplicationData.Current.TemporaryFolder` pour les fichiers volatils qui peuvent être nettoyés par l'assistant de stockage de Windows.
* **Le Piège du Rejet :** Hardcoder des chemins comme `C:\MonApp\` ou écrire directement à la racine du disque `C:\` provoquera un échec immédiat au test du kit de certification (WACK).

### 🔑 Base de Registre Windows
* **Virtualisation du Registre :** Si votre application utilise les API classiques pour écrire dans le Registre Windows (ex: `HKLM` ou `HKCU\Software\MonApp`), le conteneur MSIX intercepte ces appels. Les écritures sont redirigées vers un fichier privé propre à l'application (`Registry.dat`).
* **Conséquence :** Les autres applications du système ne peuvent pas lire ces clés. Si votre application doit communiquer avec un autre logiciel tiers via le Registre standard, vous devez configurer une extension de type `desktop7:RegistryWriteVirtualization` ou distribuer l'application hors du conteneur strict (avec la capacité `runFullTrust`).

---

## 2. Intégration Native : Notifications & Gestion du Multi-Fenêtrage

### 🔔 Notifications de la Barre des Tâches & Centre d'Actions (Toast Notifications)
* **Format XML / JSON :** Les notifications Windows 11 utilisent un schéma XML spécifique pour structurer le texte, les images et les boutons d'action rapide.
* **Gestion du Background Activation :** Si l'utilisateur clique sur un bouton dans la notification (ex: "Répondre" ou "Snooze"), l'application doit enregistrer un protocole d'arrière-plan ou un *Background Task* lié à un COM Server pour traiter l'action sans nécessairement ouvrir la fenêtre principale au complet.
* **Scénario Multimédia :** Pour afficher une image dans la notification, celle-ci doit être stockée localement ou téléchargée via HTTPS en respectant un timeout strict de 5 secondes, sinon la notification s'affiche sans l'image.

### 🖥️ Gestion de l'Affichage, DPI et Multi-Fenêtrage
* **Per-Monitor DPI Awareness V2 :** Votre application doit déclarer explicitement le support du DPI dynamique dans son manifeste d'application (`app.manifest`). Si un utilisateur glisse la fenêtre d'un écran 4K (mis à l'échelle à 200%) vers un écran 1080p (à 100%), l'application doit recalculer la taille des polices et des marges en temps réel sans devenir floue.
* **Snap Layouts (Windows 11) :** Les applications WinUI 3 intègrent nativement le menu d'ancrage de Windows 11 lorsqu'on passe la souris sur le bouton Maximiser. Si vous utilisez un chrome de fenêtre personnalisé (Custom Title Bar), vous devez obligatoirement implémenter l'API `AppWindow.TitleBar` ou traiter le message système `WM_NCHITTEST` pour que les Snap Layouts fonctionnent, sous peine de voir l'application jugée non conforme à l'expérience UX de Windows 11.

---

## 3. Support des Architectures : Le Défi ARM64

* **La Règle de Soumission :** Avec l'arrivée massive des processeurs Snapdragon sur Windows 11 (PC Copilot+), soumettre un package uniquement compilé en x86 (32-bit) ou x64 (64-bit Intel/AMD) est une mauvaise pratique qui limite la portée.
* **Compilation Multi-Architecture :** Le package MSIX final (`.msixbundle`) doit idéalement contenir les builds pour **x64** ET **ARM64**. 
* **Le Piège du Rejet / Performance :** Si votre application dépend de DLL natives externes (fichiers `.dll` en C++ par exemple), s'assurer qu'elles ont été recompilées pour ARM64. Faire tourner du code x64 émulé sur une machine ARM64 consomme énormément de batterie, ce qui peut mener à un retrait ou à de mauvaises notes de performance par les testeurs automatisés de Microsoft.

---

## 4. Cycle de Vie, Suspension et Gestion de l'Énergie

Windows gère agressivement l'énergie des ordinateurs portables et des tablettes.
* **État Suspendu :** Lorsqu'un utilisateur réduit votre application ou verrouille sa session, Windows peut basculer le processus en mode "Suspendu" pour libérer le processeur.
* **Sauvegarde d'État Immédiate :** L'application doit écouter l'événement `Suspending` pour sauvegarder l'état actuel de l'utilisateur (ex: le texte en cours de saisie, la position dans un menu) dans le `LocalFolder`. Vous disposez de quelques secondes maximum pour exécuter ce code avant que le thread ne soit gelé par l'OS.
* **Reprise (Resuming) :** Lors du retour, l'application doit restaurer l'état de manière transparente pour que l'utilisateur ne se rende même pas compte que l'application s'était arrêtée.
