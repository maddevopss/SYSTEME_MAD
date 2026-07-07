# 🐧 Spécifications de Déploiement Linux : Sandboxing et Intégration Bureau

**Projet :** MADSuite / MAD DevOps **Standard visé :** Baseline 2026

## 1. Format de Distribution Unifié : Flatpak (Flathub)

Pour assurer une compatibilité absolue sans subir l\'enfer des
dépendances brisées (*Dependency Hell*) sur Ubuntu, Debian, Fedora, Arch
et Linux Mint, le format de packaging principal est **Flatpak**.

### 🛠️ Structure du Manifeste d\'Application (com.maddevops.madsuite.yaml)

L\'application doit s\'isoler au sein d\'un bac à sable sécurisé tout en
gardant accès aux ressources de l\'ordinateur de l\'utilisateur (comme
ses capteurs de chantiers).

app-id: com.maddevops.madsuite

runtime: org.freedesktop.Platform

runtime-version: \'23.08\'

sdk: org.freedesktop.Sdk

command: madsuite-bin

modules:

\- name: madsuite

buildsystem: simple

build-commands:

\- install -D madsuite-bin /app/bin/madsuite-bin

### **🔓 Déclaration Fine des Accès (Finish-Args)**

- \--share=network : Obligatoire pour consommer tes API et synchroniser
  l\'agenda en ligne.

- \--share=ipc : Requis pour accélérer le rendu graphique via l\'accès
  inter-processus.

- \--socket=fallback-x11 / \--socket=wayland : Permet l\'affichage natif
  fluide, peu importe le serveur d\'affichage Linux actif (Wayland
  moderne ou ancien X11).

- \--device=all : Permet l\'accès bas niveau aux ports USB/Série afin de
  lire les données NMEA brutes de tes antennes GPS RTK physiques
  connectées en filaire.

## **2. Intégration Native au Menu Applications (.desktop)**

Pour que l\'application s\'installe proprement avec son icône dans le
menu système de l\'utilisateur (GNOME, KDE), le fichier d\'entrée de
bureau doit être configuré à
/app/share/applications/com.maddevops.madsuite.desktop :

Ini, TOML

\[Desktop Entry\]

Version=1.0

Type=Application

Name=MADSuite

Comment=Système intégré d\'assistance cognitive et gestion d\'affaires

Exec=madsuite-bin

Icon=com.maddevops.madsuite

Terminal=false

Categories=Office;Finance;Utility;

Keywords=Accounting;GPS;Task;TDAH;

StartupWMClass=madsuite-bin

MimeType=application/ics;

- **Note de pro :** La ligne MimeType=application/ics; permet
  d\'associer nativement ton application Linux avec l\'ouverture des
  fichiers de calendriers standardisés (RFC 5545).
