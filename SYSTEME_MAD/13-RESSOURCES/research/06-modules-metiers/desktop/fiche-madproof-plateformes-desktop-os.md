---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Plateformes desktop et OS
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-DESKTOP-RD
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Plateformes desktop et OS

## 1. Sources brutes

```text
docs/research/atrier/specifications_windows.md
docs/research/atrier/specifications_windows_avancees.md
docs/research/atrier/specifications_linux.md
docs/research/atrier/specifications_linux_avancees.md
docs/research/atrier/specifications_chromeos.md
docs/research/atrier/specifications_multiplateforme.md
```

## 2. Verdict

**MADPROOF-DESKTOP-RD : les sources sont utiles pour préparer une stratégie desktop/multiplateforme, mais non utilisables comme standards officiels sans validation par cible, framework et canal de distribution.**

Les documents couvrent :

- Windows MSIX / Microsoft Store;
- Windows App SDK / WPF / WinUI;
- signature de code;
- WACK / certification;
- AppData / registre virtualisé;
- notifications Windows;
- DPI / multi-fenêtrage;
- ARM64;
- Linux Flatpak;
- XDG paths;
- Secret Service / GNOME Keyring / KWallet;
- PipeWire;
- ChromeOS PWA / IWA;
- Service Workers;
- CSP;
- WebUSB/WebSerial;
- Flutter / React Native / KMP;
- stockage local;
- secure storage;
- CI/CD multiplateforme.

## 3. Règle centrale

```text
Desktop n’est pas une cible unique : chaque OS impose ses propres chemins, permissions, packaging, stockage et contraintes de cycle de vie.
```

Pour MADSuite :

```text
Le cœur produit reste Web/PWA-first. Le desktop agent doit rester séparé, minimal, signé, auditable et non intrusif.
```

## 4. À conserver

| Élément | Décision |
|---|---|
| Signature de code desktop | Conserver. |
| MSIX / Store comme option Windows | Conserver. |
| Distribution directe comme option Windows | Conserver avec signature. |
| AppData / LocalFolder pour données locales | Conserver. |
| Aucun write dans dossier d’installation | Conserver. |
| Gestion suspension/reprise | Conserver. |
| DPI / multi-écrans | Conserver. |
| ARM64 comme compatibilité à évaluer | Conserver. |
| Flatpak comme option Linux | Conserver comme option, pas absolu. |
| Secret Service / Keyring Linux | Conserver pour secrets. |
| PipeWire | Conserver si audio/vidéo natif nécessaire. |
| PWA ChromeOS | Conserver. |
| Service Worker + offline page | Conserver. |
| CSP stricte | Conserver. |
| Abstraction par interface/bridge | Conserver. |
| Secure storage par plateforme | Conserver. |
| CI par OS | Conserver. |

## 5. À reformuler ou vérifier

| Claim brut | Problème | Décision |
|---|---|---|
| Compatibilité absolue Linux via Flatpak. | Trop absolu. | Reformuler. |
| MSIX obligatoire. | Obligatoire pour certains canaux, pas pour toute distribution. | Reformuler. |
| WACK obligatoire dans tous les cas. | Pertinent Microsoft Store, pas distribution directe. | Reformuler. |
| SmartScreen toujours évité via signature. | La réputation du certificat et du fichier compte aussi. | Reformuler. |
| Échec WACK = rejet automatique. | Dépend canal/processus. | Reformuler. |
| Linux interdit `.env` utilisateur. | Mauvaise pratique pour secrets, mais “interdit” trop absolu. | Reformuler. |
| PipeWire garantit <5 ms et isolation complète. | Claim performance trop fort. | À vérifier / reformuler. |
| ChromeOS PWA toujours basée sur dernière Chrome stable. | Dépend canal et politique device. | Reformuler. |
| IWA donne accès à APIs interdites aux PWA normales. | À vérifier selon APIs et statut IWA. | Reformuler. |
| File System Access obligatoire ChromeOS. | Option si besoin fichier local. | Reformuler. |
| Flutter partage 95 %, RN 80-90 %, KMP 100 %. | Claims marketing variables. | À supprimer ou contextualiser. |
| macOS strictement obligatoire pour compiler iOS. | Généralement vrai pour Xcode officiel, mais à garder comme contrainte pratique à vérifier. | Reformuler prudent. |

## 6. Décisions MADSuite

| Sujet | Décision |
|---|---|
| Stratégie produit | Web/PWA-first. |
| Desktop agent | Module séparé, minimal et explicite. |
| Electron/Tauri | À décider par ADR dédiée. |
| Windows | Prioritaire si desktop agent confirmé. |
| Linux | Support roadmap/dev/avancé. |
| ChromeOS | PWA prioritaire. |
| Store Microsoft | Option, pas obligatoire MVP. |
| Flatpak | Option Linux, pas promesse universelle. |
| IWA | R&D / entreprise, pas MVP. |
| WebUSB/WebSerial | R&D / matériel terrain, consentement explicite. |
| Secrets locaux | Stockage natif sécurisé selon OS. |
| Auto-update | Signé et contrôlé. |
| Surveillance passive | Interdite MVP. |

## 7. Baseline desktop agent

Si un desktop agent MADSuite est publié :

- [ ] fonction claire et limitée;
- [ ] consentement explicite;
- [ ] arrêt/pause visible;
- [ ] aucune capture écran silencieuse;
- [ ] aucun keylogging;
- [ ] aucun tracking employeur caché;
- [ ] logs locaux minimisés;
- [ ] secrets stockés dans coffre OS;
- [ ] update signé;
- [ ] désinstallation propre;
- [ ] documentation utilisateur;
- [ ] permissions OS minimales.

## 8. Baseline Windows

- [ ] choix canal : Store, MSIX direct, EXE installer ou autre;
- [ ] signature de code si distribution directe;
- [ ] données dans AppData/LocalFolder;
- [ ] aucun write dans Program Files / dossier app;
- [ ] offline/network errors propres;
- [ ] compte test si Store;
- [ ] privacy policy si collecte données;
- [ ] assets Store si Store;
- [ ] DPI testé;
- [ ] suspension/reprise testée;
- [ ] ARM64 évalué si clientèle pertinente.

## 9. Baseline Linux

- [ ] choisir format : AppImage, Flatpak, Snap, package natif ou tarball;
- [ ] respecter XDG paths;
- [ ] secrets via Secret Service / keyring si possible;
- [ ] aucune donnée sensible en clair sans justification;
- [ ] permissions sandbox minimales si Flatpak;
- [ ] support GNOME/KDE testé si annoncé;
- [ ] audio/vidéo via stack moderne si nécessaire;
- [ ] pas de promesse de compatibilité toutes distributions.

## 10. Baseline ChromeOS

- [ ] PWA installable;
- [ ] manifest correct;
- [ ] icônes 192/512 et maskable;
- [ ] mode standalone;
- [ ] service worker;
- [ ] offline page si réseau indisponible;
- [ ] navigation clavier/souris;
- [ ] focus visible;
- [ ] CSP stricte;
- [ ] pas de `eval`;
- [ ] permissions Web demandées au moment utile;
- [ ] WebUSB/WebSerial seulement si besoin matériel clair.

## 11. Architecture multiplateforme

Règles :

- [ ] séparer logique métier et APIs OS;
- [ ] utiliser interfaces/ports/adapters;
- [ ] éviter `if OS` dispersés dans le domaine;
- [ ] centraliser stockage local;
- [ ] centraliser secure storage;
- [ ] centraliser permissions;
- [ ] tests par plateforme;
- [ ] CI séparée par OS si distribution réelle;
- [ ] pas de promesse de code partagé fixe.

## 12. Documents à créer

| Document | Action |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-desktop-agent.md` | À créer. |
| `SYSTEME_MAD/04-ADR/ADR-desktop-agent-electron-vs-tauri.md` | À créer si choix technique nécessaire. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-desktop-release.md` | À créer si release desktop prioritaire. |

## 13. Claims interdits

Ne pas écrire :

- compatibilité absolue;
- fonctionne sur tous les OS;
- aucune alerte SmartScreen garantie;
- zéro rejet Microsoft Store;
- Linux universel;
- latence garantie;
- isolation complète garantie;
- sécurité locale garantie;
- aucune perte de données possible;
- desktop agent invisible;
- surveillance automatique silencieuse.

Formulation recommandée :

```text
Le desktop est traité comme une extension optionnelle et contrôlée de MADSuite, avec des exigences propres à chaque OS, une distribution signée et des permissions explicites.
```

## 14. Verdict final

Les spécifications desktop/OS sont traitées comme base R&D consolidée.

Elles sont utiles pour préparer un futur agent desktop, mais MADSuite doit rester PWA-first et éviter toute promesse de compatibilité universelle ou de distribution sans friction.