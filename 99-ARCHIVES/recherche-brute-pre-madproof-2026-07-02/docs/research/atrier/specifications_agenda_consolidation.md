# Spécifications Avancées & Consolidation (Dernière Passe) : Protocoles d'Échange, Time Zones Relativisés & Résilience Extrême

Ce document apporte la touche finale aux recherches précédentes en se concentrant sur les mécaniques de bas niveau indispensables pour assurer la cohérence absolue d'un système distribué (Mobile, Desktop, Véhicules) gérant du temps et de la géolocalisation.

---

## 1. Algorithmes de Résolution de Conflits Temporels (LWW-Element-Set CRDT)

Pour les applications de chantier où les couvreurs ou paysagistes modifient leurs calendriers hors-ligne en même temps, le simple verrouillage SQL classique ne suffit pas. L'état de l'art pour la synchronisation décentralisée repose sur les **CRDTs (Conflict-free Replicated Data Types)**.

### 🔄 Implémentation du LWW-Element-Set (Last-Write-Wins)
Chaque modification d'événement (modification d'un horaire de tonte de pelouse ou d'une date de livraison de bardeaux) est enregistrée localement dans deux ensembles de données : un ensemble d'ajouts (*Add Set*) et un ensemble de suppressions (*Remove Set*).
* **Structure d'un Élément :** Chaque entrée contient un identifiant unique (UUID), la donnée modifiée, et un **timestamp de haute précision** (monotonique au niveau de l'appareil).
* **Règle de Fusion (Merge) :** Lors du retour du réseau, l'application fusionne les bases de données sans intervention du serveur. Si un élément existe dans le *Add Set* et le *Remove Set*, l'application compare les timestamps. L'écriture la plus récente l'emporte (*Last-Write-Wins*).
* **Le Piège du Décalage d'Horloge (Clock Skew) :** Les horloges des téléphones des employés ne sont jamais parfaitement synchronisées. L'application doit implémenter un algorithme de calcul de dérive (Clock Drift Offset) en mesurant la différence avec le serveur via des requêtes NTP (Network Time Protocol) au démarrage pour corriger les timestamps locaux avant la fusion.

---

## 2. La Gestion des Fuseaux Horaires Relativisés (Floating Times vs Fixed Times)

Un des plus grands générateurs de bugs et de rejets dans les applications d'agenda multiplateformes est la mauvaise gestion des fuseaux horaires (`Time Zones`).

### 🌍 Événements à Temps Flottant (Floating Events)
* **Le Concept :** Pour un paysagiste qui planifie une tâche récurrente à "8h00 du matin", cette tâche doit avoir lieu à 8h00 du matin, peu importe si l'employé ou le gestionnaire change de fuseau horaire (ex: déplacement ou déplacement de l'équipe entre le Québec et l'Ontario).
* **Format Technique (ISO 8601 partiel) :** Ces dates **ne doivent pas** être stockées en UTC ou avec un offset `Z`. Elles doivent être enregistrées au format local brut : `2026-07-02T08:00:00`. La logique de l'application applique le fuseau horaire actuel de l'appareil uniquement lors de l'affichage.

### 📡 Événements à Temps Fixe (Fixed Events)
* **Le Concept :** Une réunion de livraison de matériaux ou une réservation de grue à un moment précis dans le temps global.
* **Format Technique :** Stockage obligatoire au format UNIX Epoch (Timestamp en millisecondes) ou ISO 8601 complet avec fuseau : `2026-07-02T12:00:00Z`.

---

## 3. Optimisation des Requetes Réseau en Véhicule (CarPlay / Android Auto)

Lorsque l'application roule sur l'écran d'un véhicule, l'accès au réseau cellulaire (LTE/5G) fluctue énormément à cause de la vitesse et des zones d'ombre (tunnels, campagnes).

### 📡 Gestion du Backoff Exponentiel et Gigue (Jitter)
Toutes les requêtes de synchronisation d'agenda ou de téléchargement de tuiles GPS démarrées depuis l'interface CarPlay ou Android Auto doivent utiliser un intercepteur réseau HTTP robuste.
* **Algorithme de Retry :** Si une requête échoue à cause d'une perte de signal, l'application ne doit pas réessayer en boucle immédiatement (ce qui saturerait le processeur et bloquerait l'UI). Elle doit appliquer un délai d'attente qui double à chaque échec (1s, 2s, 4s, 8s...) combiné à une variable aléatoire (**Jitter**) pour éviter que des milliers d'appareils de flottes de camions ne bombardent le serveur exactement à la même seconde lors du retour du signal réseau.

---

## 4. Sécurité Avancée des Fichiers de Données Locaux (Chiffrement au Repos)

Nous avons vu l'utilisation de SQLCipher pour la base de données. Cependant, les fichiers annexes (comme les fichiers `.pdf` de contrats signés, les photos de toitures prises par drone ou les fichiers vectoriels de terrains) doivent aussi être protégés.

### 🔐 Chiffrement des Fichiers Clés par Système
* **iOS :** Utilisation obligatoire des clés de protection d'écriture `DataProtectionKey`. Lors de l'écriture du fichier de contrat, appliquer l'attribut `NSDataWritingOptions.completeFileProtectionUnlessOpen`. Le fichier devient alors physiquement inaccessible sur le disque dès que l'utilisateur verrouille son iPhone (le chiffrement est géré au niveau matériel par la Secure Enclave).
* **Android :** Utilisation de l'API **EncryptedFile** de la bibliothèque Jetpack Security. Elle encapsule les flux de lecture/écriture standards dans un algorithme de chiffrement authentifié AES-256 en mode GCM, gérant de manière transparente la rotation des clés via le système Android Keystore.
