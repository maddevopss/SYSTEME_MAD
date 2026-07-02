# Guide de Référence Rapide : Commandes Principales (Full Stack, Systèmes, Production & Bases de Données)

Ce document rassemble les commandes incontournables pour le développement quotidien avec **Node.js**, **Prisma ORM**, **tsx**, **React (Vite)**, **Git**, les paquets serveurs (**Express, Axios, Dotenv**), la sécurité/validation (**Zod, Argon2, JWT**), la gestion de temps (**date-fns**), le linting (**ESLint, Prettier**), les outils de performance brute (**Vitest, BullMQ/Redis, Pino**), ainsi que les écosystèmes **SQL (PostgreSQL, SQLite)**, **MongoDB**, **Rust (Cargo)** et **Java**.

---

## 1. Gestion des Paquets & Initialisation (Node.js / npm)

### 🚀 Initialisation du Projet
* `npm init -y` : Initialise un projet Node.js en créant un fichier `package.json` par défaut. [cite: 15]

### 📦 Installation des Dépendances
* `npm install <nom_paquet>` : Installe un paquet requis pour l'exécution en production. [cite: 15]
* `npm install -D <nom_paquet>` : Installe un paquet requis uniquement pour l'environnement de développement. [cite: 15]

---

## 2. Bases de Données : Moteurs SQL, PostgreSQL & NoSQL MongoDB

Lignes de commande et requêtes de base pour manipuler, inspecter et connecter tes serveurs de données locaux ou distants.

### 🐘 PostgreSQL (Moteur Relationnel SQL de Production)
* `psql -U <utilisateur> -d <nom_base>` : Connecte le terminal à une base de données PostgreSQL locale ou distante via le client officiel en ligne de commande.
* `pg_dump -U <utilisateur> <nom_base> > backup.sql` : Génère une sauvegarde complète (dump) de la structure et des données au format SQL.
* `psql -U <utilisateur> <nom_base> < backup.sql` : Restaure une base de données à partir d'un fichier de sauvegarde SQL.

### 🍃 MongoDB (Moteur Documentaire NoSQL pour flux GPS/Logs flous)
* `mongosh` : Lance le shell de commande officiel de MongoDB pour manipuler les collections et documents.
* `mongodump --uri="mongodb://localhost:27107/ma_base" --out=/chemin/backup` : Crée une sauvegarde binaire complète des collections NoSQL.
* `mongorestore --uri="mongodb://localhost:27107/ma_base" /chemin/backup/ma_base` : Restaure les collections à partir d'un dossier de backup.

### 🔗 Initialisation de Prisma pour PostgreSQL ou MongoDB
* `npx prisma init --datasource-provider postgresql` : Initialise Prisma configuré spécifiquement pour une base de données relationnelle **PostgreSQL** (met à jour le `schema.prisma` et le `.env`).
* `npx prisma init --datasource-provider mongodb` : Initialise Prisma configuré pour **MongoDB**. (Note : Requiert l'utilisation d'identifiants de type `String @id @map("_id") @db.ObjectId` dans ton schéma).

---

## 3. Performance de Production, Files d'Attente & Tests (Vitest, BullMQ, Redis, Pino)

Outils critiques pour tester tes calculs de toits/terrains, gérer les flux massifs de coordonnées GPS sans bloquer ton API et journaliser la prod.

### 🧪 Tests Unitaires Ultra-Rapides (Développement)
* `npm install -D vitest` : Installe le moteur de test moderne basé sur Vite.
* `npx vitest` : Lance le gestionnaire de tests en mode surveillance (Watch Mode). Il réexécute automatiquement tes tests unitaires (ex: validation de ta formule de l'arpenteur) chaque fois que tu modifies ton code.
* `npx vitest run` : Roule les tests une seule fois (idéal pour tes pipelines CI/CD).

### ⏳ Files d'Attente & Tâches d'Arrière-Plan (Production)
* `npm install bullmq ioredis` : Installe la gestion de files d'attente basée sur **Redis**. Essentiel pour garrocher tes requêtes GPS lourdes dans une queue en 1 milliseconde pour que ton serveur Express reste super réactif.
* **Commandes Docker rapides pour Redis (Local) :**
  * `docker run --name mon-redis -p 6379:6379 -d redis` : Démarre instantanément un serveur Redis local en arrière-plan pour alimenter BullMQ.

### 🌲 Journalisation Rapide de Production (Production)
* `npm install pino` : Installe le logger JSON ultra-rapide. Remplaçant de niveau industriel pour les `console.log()`.
* `npm install -D pino-pretty` : Outil de développement pour formater les logs JSON bruts de Pino dans ton terminal pour qu'ils soient lisibles par un humain.

---

## 4. Framework Backend, Requêtes & Config (Express, Axios, Dotenv)

### 📦 Installation des Librairies Principales (Production)
* `npm install express axios dotenv` : Installe le framework web, le client de requêtes HTTP et le gestionnaire de fichiers `.env`. [cite: 19]

### 🛠️ Installation des Types TypeScript (Développement)
* `npm install -D @types/express` : Installe les types requis pour qu'Express soit entièrement typé dans ton VS Code. [cite: 19]

---

## 5. Sécurité, Validation, Dates & Qualité de Code (Zod, Argon2, JWT, date-fns, Prettier)

### 🔐 Sécurité & Authentification (Production)
* `npm install argon2 jsonwebtoken` : Installe Argon2 pour hacher les mots de passe et JWT pour les jetons de session. [cite: 20]
* `npm install -D @types/jsonwebtoken` : Installe les définitions de types TypeScript pour JWT. [cite: 20]

### 📐 Validation de Données Robustes (Production)
* `npm install zod` : Installe la validation de schéma pour sécuriser tes entrées d'API (coordonnées, contrats). [cite: 20]

### 📅 Gestion des Délais et Calendriers (Production)
* `npm install date-fns` : Installe l'outil de manipulation de dates et délais. [cite: 20]

### 🎨 Qualité de Code & Clean Code (Développement)
* `npm install -D prettier eslint` : Installe Prettier pour le formatage automatique et ESLint pour l'analyse statique du code. [cite: 20]

---

## 6. Création et Gestion Front-End (React + Vite)

### ⚡ Initialisation d'un Projet React
* `npm create vite@latest <nom_du_projet> -- --template react-ts` : Crée un nouveau projet React + TypeScript avec Vite. [cite: 16, 19]

### 🏃 Serveur de Développement & Compilation
* `npm run dev` : Lance le serveur de développement local (généralement sur `http://localhost:5173`). [cite: 16, 19]
* `npm run build` : Compile et optimise l'application pour la production dans le dossier `/dist`. [cite: 16, 19]

---

## 7. Programmation Système & Performance (Rust + Cargo)

### 🦀 Initialisation de Projet
* `cargo new <nom_projet>` : Crée une application Rust binaire complète. [cite: 18, 19]

### 🏃 Développement & Analyse
* `cargo check` : Analyse le code à l'aide du compilateur de Rust de façon ultra-rapide. [cite: 18, 19]
* `cargo build --release` : Compile le projet avec les optimisations maximales pour générer le binaire final dans `target/release/`. [cite: 18, 19]

---

## 8. Écosystème d'Entreprise & Multiplateforme (Java / Maven & Gradle)

### ☕ Exécution Directe & Outils de Build
* `java <NomFichier>.java` : Exécute directement un fichier de code source unique. [cite: 18, 19]
* `mvn package` : Package le code avec Maven dans son format de distribution final (fichier `.jar`). [cite: 18, 19]
* `./gradlew build` : Compile, teste et assemble le projet au grand complet avec Gradle. [cite: 18, 19]

---

## 9. Gestion de Version & Collaboration (Git)

### 🎬 Initialisation et Enregistrement
* `git init` : Initialise un nouveau dépôt Git local. [cite: 17, 19]
* `git status` : Affiche l'état des fichiers modifiés ou prêts pour le commit. [cite: 17, 19]
* `git commit -m "Mon message"` : Enregistre les modifications avec un message descriptif. [cite: 17, 19]

---

## 10. Exécution TypeScript Moderne (tsx)

### 🏃 Exécution à la Volée
* `npx tsx <chemin_fichier.ts>` : Compile en mémoire et exécute le fichier TypeScript. [cite: 15, 16, 19]
* `npx tsx --watch <chemin_fichier.ts>` : Exécute en mode surveillance et redémarre au moindre changement. [cite: 15, 16, 19]

---

## 11. Gestion de la Base de Données & Modélisation (Prisma ORM)

### ⚙️ Initialisation & Synchronisation
* `npx prisma init --datasource-provider sqlite` : Initialise Prisma configuré sur SQLite. [cite: 15, 16, 19]
* `npx prisma migrate dev --name <nom>` : Crée et applique une migration SQL locale, puis regénère le client. [cite: 15, 16, 19]
* `npx prisma db push` : Synchronise le schéma directement avec la base de données sans créer d'historique SQL. [cite: 15, 16, 19]
