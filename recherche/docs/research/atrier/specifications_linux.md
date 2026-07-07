# 🐧 Spécifications de Déploiement Linux : Sandboxing et Intégration Bureau
**Projet :** MADSuite / MAD DevOps
**Standard visé :** Baseline 2026

---

## 1. Format de Distribution Unifié : Flatpak (Flathub)

Pour assurer une compatibilité absolue sans subir l'enfer des dépendances brisées (*Dependency Hell*) sur Ubuntu, Debian, Fedora, Arch et Linux Mint, le format de packaging principal est **Flatpak**.

### 🛠️ Structure du Manifeste d'Application (`com.maddevops.madsuite.yaml`)
L'application doit s'isoler au sein d'un bac à sable sécurisé tout en gardant accès aux ressources de l'ordinateur de l'utilisateur (comme ses capteurs de chantiers).

```yaml
app-id: com.maddevops.madsuite
runtime: org.freedesktop.Platform
runtime-version: '23.08'
sdk: org.freedesktop.Sdk
command: madsuite-bin
modules:
  - name: madsuite
    buildsystem: simple
    build-commands:
      - install -D madsuite-bin /app/bin/madsuite-bin