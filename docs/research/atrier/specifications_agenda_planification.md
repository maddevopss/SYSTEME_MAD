# Rapport de Recherche : Moteurs de Planification Temporelle, Gestion d'Agendas et Synchronisation Multiplateforme

Ce document compile les standards techniques, les structures de données (RFC), les contraintes d'API et les règles d'intégration OS pour la gestion de calendriers, de réservations et le calcul de délais contractuels sur **Android, iOS, Windows, Linux et ChromeOS**.

---

## 1. Structures de Données & Standards Globaux (RFC 5545 - iCalendar)

Peu importe la plateforme ou le système d'exploitation, la gestion de calendriers et de réservations repose sur un standard d'échange universel de l'IETF.

* **Le Standard iCalendar (RFC 5545) :** C'est la spécification qui définit comment formater les événements (`VEVENT`), les tâches à faire (`VTODO`), les fuseaux horaires (`VTIMEZONE`) et les réservations de ressources. Tout moteur de planification doit utiliser ou parser ce format pour assurer l'interopérabilité (ex: envoyer une invitation par courriel qui s'ouvre dans Outlook, Google Calendar ou Apple Calendar).
* **Le Défi de la Récurrence (RRULE) :** Calculer les répétitions complexes (ex: "le premier mardi de chaque mois pendant 6 mois, sauf les jours fériés") requiert un moteur d'évaluation de règles de récurrence (`RRULE`). Charger tous les événements futurs en mémoire brise les performances; l'application doit générer les instances dynamiquement (On-the-Fly Generation) uniquement pour la plage temporelle affichée à l'écran à l'aide d'indexations de dates en timestamps UTC.

---

## 2. Intégration Native par Système d'Exploitation

Pour offrir une expérience fluide, l'application doit interagir avec les bases de données d'agendas natives de chaque système ou s'intégrer aux interfaces du système.

### 🤖 Android : `CalendarContract` et Alarmes Évoluées
* **Accès à l'Agenda Global :** L'application interagit avec le fournisseur de contenu natif via l'API **`CalendarContract`**. Cela permet de lire et d'écrire des rendez-vous directement dans le calendrier Google principal de l'utilisateur, à condition d'obtenir les permissions `READ_CALENDAR` et `WRITE_CALENDAR`.
* **Planification de Délais & Rapports (Anti-Rejet) :** Pour déclencher un rappel de contrat ou une notification de réservation à une seconde précise (ex: 15 minutes avant un rendez-vous), l'utilisation d'un simple thread d'arrière-plan est interdite car l'OS suspend les processus inactifs. Tu **dois** enregistrer l'événement dans le **`AlarmManager`** du système en utilisant la méthode `setExactAndAllowWhileIdle()`. Depuis Android 14, cela nécessite la permission spéciale `SCHEDULE_EXACT_ALARM`, qui doit être rigoureusement justifiée lors de la soumission sur le Play Store pour éviter un rejet.

### 🍏 iOS : Framework `EventKit` & Mode Arrière-Plan
* **Accès à l'Agenda Global :** Apple fournit le framework **`EventKit`** (`EKEventStore`) pour manipuler les calendriers et les rappels d'iOS (iCloud, Exchange). Depuis iOS 17, l'accès requiert des invites de permission distinctes et ultra-spécifiques (`NSCalendarsWriteOnlyAccessLevel` ou `NSCalendarsFullAccessLevel`) dans le fichier `Info.plist`.
* **Événements à Temps Critique :** Pour s'assurer qu'un rappel de contrat important s'affiche même si le téléphone est en mode "Ne pas déranger" (Focus Mode) ou en sommeil profond, l'application doit implémenter les **Time-Sensitive Notifications**. Cela nécessite l'activation de l'entitlement `com.apple.developer.usernotifications.time-sensitive` dans Xcode, et toute utilisation abusive pour du marketing provoque un bannissement immédiat de l'App Store.

### 🖥️ Windows : API `Windows.ApplicationModel.Appointments` & Contrats de Tâches
* **Intégration native :** Sur Windows 10 et 11, l'application interagit avec l'agenda système via l'espace de noms `Windows.ApplicationModel.Appointments`. Cela permet d'ajouter des rendez-vous qui s'intègrent directement dans le panneau de calendrier de la barre des tâches Windows.
* **Tâches d'arrière-plan :** Pour surveiller l'échéance des contrats ou envoyer des alertes sans que l'application soit ouverte, il faut enregistrer une tâche de fond système via `BackgroundTaskBuilder` configurée avec un déclencheur de temps (`TimeTrigger`), s'exécutant au minimum toutes les 15 minutes.

### 🐧 Linux : Protocoles CalDAV & Intégration EDS (Evolution Data Server)
* **EDS (Evolution Data Server) :** Sous les environnements GNOME (Ubuntu, Fedora), EDS est le démon centralisé en arrière-plan qui gère les calendriers et les tâches via D-Bus. L'application doit envoyer des requêtes D-Bus à `org.gnome.evolution.dataserver.Calendar` pour inscrire les rendez-vous de manière à ce qu'ils apparaissent dans l'horloge centrale du bureau Linux.
* **Standard Réseau CalDAV (RFC 4791) :** Contrairement aux environnements propriétaires, l'écosystème Linux privilégie la synchronisation directe via CalDAV. L'application doit intégrer un client HTTP capable de gérer les requêtes `PROPFIND` et `REPORT` pour synchroniser les rendez-vous avec des serveurs open-source (Nextcloud, OwnCloud, Baïkal).

### 🌐 ChromeOS : Google Calendar API & Alignement du Fuseau Horaire PWA
* **Intégration PWA/IWA :** Puisque l'application sur ChromeOS s'exécute dans le conteneur web, elle ne peut pas accéder à une base de données d'agenda locale. Elle doit utiliser l'API **Google Calendar REST API** via des flux d'authentification sécurisés **OAuth2**.
* **Fiabilité des Délais (Service Workers) :** Pour gérer des rappels de réservation hors-ligne, les minuteurs JavaScript standards (`setTimeout`) échouent dès que le Chromebook tombe en veille. La PWA doit s'appuyer sur l'API **Web Alarms API** (si disponible) ou synchroniser des tâches d'arrière-plan avec l'API **Periodic Background Sync API** pour mettre à jour les délais de contrats dès que le réseau revient.

---

## 3. Algorithmes de Réservation : Gestion des Conflits et Verrous (Concurrency)

Pour un client paysagiste ou couvreur, deux équipes ne doivent jamais réserver la même ressource (ex: une pelle mécanique ou un camion) ou le même bloc horaire simultanément.

* **Le Verrouillage Optimiste (Optimistic Concurrency Control) :** Idéal pour les applications déconnectées/hors-ligne. Chaque rendez-vous en base de données possède un numéro de version ou un timestamp de modification. Si l'estimateur A modifie un horaire de contrat hors-ligne sur sa canne GPS et que l'estimateur B modifie le même horaire sur son laptop, le premier qui synchronise gagne. Le deuxième reçoit une erreur de conflit (`409 Conflict`) et l'application doit lui présenter une interface de résolution de conflit visuelle pour fusionner les agendas.
* **Le Verrouillage Pessimiste (Pour les réservations en temps réel) :** Lorsque l'application est en ligne, l'ouverture d'un formulaire de réservation doit bloquer temporairement le créneau sur le serveur via un jeton à expiration rapide (ex: verrou de 10 minutes via Redis ou un champ `is_locked` en base de données), empêchant un autre client de réserver le même espace durant la saisie du contrat.
