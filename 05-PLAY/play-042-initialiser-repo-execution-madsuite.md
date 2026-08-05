---
Projet: MADSuite
Document: PLAY-042 — Initialiser un repo d’exécution MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-042 — Initialiser un repo d’exécution MADSuite

## Rôle du playbook

Ce playbook décrit comment initialiser proprement un dépôt d’exécution MADSuite, notamment :

```text
maddevopss/e2e
maddevopss/desktop-agent
```

---

## Principe

Un dépôt d’exécution ne doit jamais démarrer comme un bac à sable chaotique.

Il doit avoir dès le départ :

- un rôle clair;
- un README;
- un `.gitignore`;
- un `.env.example` si nécessaire;
- une politique `SECURITY.md` si public;
- une structure minimale;
- des commandes documentées;
- un lien vers `SYSTEME_MAD`.

---

## Étape 1 — Vérifier la source de vérité

Lire :

```text
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/ADR-004-separation-repos-execution-madsuite.md
SYSTEME_MAD/10-ROADMAP/madsuite-p2-hardening-board.md
```

---

## Étape 2 — Choisir le statut

| Statut | Usage |
|---|---|
| Réservé | Le dépôt existe, mais le code n’est pas encore migré |
| Actif | Le dépôt contient du code utilisable |
| Expérimental | Le dépôt contient une exploration non officielle |
| Archivé | Le dépôt n’est plus utilisé |

---

## Étape 3 — Ajouter les fichiers minimaux

Pour un dépôt public :

```text
README.md
SECURITY.md
.gitignore
.env.example si requis
```

Pour un dépôt applicatif :

```text
package.json ou équivalent
src/
tests/
docs/
```

---

## Étape 4 — Raccorder à SYSTEME_MAD

Le README doit inclure :

```text
La source de vérité documentaire du projet est maddevopss/SYSTEME_MAD.
```

Et pointer vers :

```text
SYSTEME_MAD/00-SYSTEME-MAD/repos.md
SYSTEME_MAD/04-ADR/ADR-004-separation-repos-execution-madsuite.md
```

---

## Étape 5 — Valider la sécurité

- [ ] Aucun secret.
- [ ] Aucun `.env` réel.
- [ ] Aucun token.
- [ ] Aucune donnée client.
- [ ] Aucune donnée médicale.
- [ ] Aucune capture brute sensible.
- [ ] Aucune dépendance inutile.

---

## Étape 6 — Créer les premières issues du repo

Issues recommandées :

- Initialisation structure repo;
- Ajouter CI minimale;
- Ajouter `.env.example`;
- Ajouter tests smoke;
- Ajouter SECURITY.md;
- Relier au tableau d’exécution SYSTEME_MAD.

---

## Étape 7 — Valider avec CHK-040

Utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md
```

---

## Definition of Done

Le repo est correctement initialisé lorsque :

- son rôle est clair;
- les fichiers minimaux existent;
- les commandes sont documentées;
- les secrets sont absents;
- le lien vers SYSTEME_MAD est visible;
- une première issue ou roadmap existe;
- la checklist CHK-040 est passée au moins partiellement.

---

## Principe final

On ne crée pas un repo pour ranger du chaos ailleurs.

On crée un repo pour rendre une responsabilité plus claire.