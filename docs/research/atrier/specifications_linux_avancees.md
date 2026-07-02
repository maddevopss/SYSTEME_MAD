\-\-- \### 📄 Fichier 2 : \`specifications_linux_avancees.md\`
\`\`\`markdown \# ⚙️ Spécifications Linux Avancées : IPC D-Bus, Trouseau
de Clés & PipeWire \*\*Projet :\*\* MADSuite / MAD DevOps \-\-- \## 1.
Sécurisation des Secrets : Libsecret & D-Bus API Sous Linux, il est
strictement interdit de stocker les secrets d\'API, les mots de passe de
bases de données Postgres/Mongo ou les jetons de session JWT dans des
fichiers de configuration non chiffrés (\`.json\`, \`.env\`) dans le
dossier utilisateur. \### 🔐 Protocole d\'interaction avec
org.freedesktop.secrets L\'application doit envoyer des messages IPC via
le bus système \*\*D-Bus\*\* vers le service central de gestion de la
sécurité (\`org.freedesktop.secrets\`). \* \*\*GNOME Environment :\*\*
Pris en charge en arrière-plan par le démon \*\*GNOME Keyring\*\*. \*
\*\*KDE Environment :\*\* Pris en charge de manière transparente par
\*\*KWallet\*\*. \* \*\*Mécanisme :\*\* L\'application appelle la
méthode \`CreateItem\` de l\'interface D-Bus pour stocker de manière
chiffrée au repos le secret matériel, lié à la session utilisateur
courante verrouillée par l\'OS. \-\-- \## 2. Gestion Multimédia
Éco-Énergétique : PipeWire Si ton application utilise des alertes
sonores de chantiers pour avertir les couvreurs d\'une échéance
contractuelle imminente, ou exploite la synthèse vocale pour dicter des
coordonnées GPS, l\'utilisation de l\'ancien ALSA ou PulseAudio direct
est interdite. \### 🚨 Routage Natif via PipeWire \* L\'application doit
instancier un client multimédia épuré communiquant avec le serveur
\*\*PipeWire\*\*. \* \*\*Avantage architectural :\*\* PipeWire unifie le
traitement audio/vidéo Linux en garantissant une latence ultra-faible
(inférieure à 5 ms) et une isolation complète. Il évite de bloquer la
carte son de la machine si une autre application multimédia est en cours
d\'exécution, maximisant la résilience de ton service d\'arrière-plan.
