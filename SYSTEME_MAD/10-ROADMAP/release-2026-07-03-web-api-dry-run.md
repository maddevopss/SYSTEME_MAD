---
Projet: MADSuite
Document: Release dry run — Web/API MADSuite selon PLAY-041
Version: 1.0
Dernière révision: 2026-07-03
Statut: À valider
Auteur: Marc-André Dufour
---

# Release dry run — Web/API MADSuite selon PLAY-041

## Rôle du document

Ce document applique `PLAY-041 — Release Web/API MADSuite` en mode dry run.

Il ne confirme pas un déploiement réel.

Il vérifie si les dépôts frontend et backend sont prêts pour une validation release contrôlée.

---

## Références

| Élément | Référence |
|---|---|
| Playbook release | `SYSTEME_MAD/05-PLAY/play-041-release-madsuite-web-api.md` |
| Audit MADPROOF | `SYSTEME_MAD/09-CHECKLISTS/audit-005-madproof-code-reel-madsuite.md` |
| Audit ESLint | `SYSTEME_MAD/09-CHECKLISTS/audit-006-eslint-frontend-madsuite.md` |
| Audit CI/tests/build | `SYSTEME_MAD/09-CHECKLISTS/audit-007-ci-tests-build-multirepo-madsuite.md` |
| Audit modules | `SYSTEME_MAD/09-CHECKLISTS/audit-008-coherence-modules-frontend-backend.md` |
| Matrice CI/CD | `SYSTEME_MAD/09-CHECKLISTS/chk-040-ci-cd-multirepo-madsuite.md` |

---

## Verdict exécutif

Statut : **READY FOR CONTROLLED PRE-RELEASE VALIDATION**.

La base documentaire et les validations minimales sont en place.

La release ne doit pas être considérée production-safe tant que les validations d’environnement réel ne sont pas faites.

---

## Préconditions PLAY-041

| Précondition | Statut | Commentaire |
|---|---|---|
| Issues liées identifiées | Validé | `#5`, `#6`, `#7`, `#8`, `#14` complétées; `#15` active |
| Changements relus | Validé documentaire | Audits créés et PRs mergées |
| Variables d’environnement prêtes | Validé documentaire | `.env.example` frontend/backend présents |
| Migrations comprises | À valider | Non exécuté dans ce dry run |
| Tests critiques identifiés | Validé partiel | Frontend CI + backend CI statique |
| Aucun fichier privé attendu dans le code | À surveiller | Contrôles additionnels recommandés |

---

## Étape 1 — Backend

| Contrôle PLAY-041 | Statut | Commentaire |
|---|---|---|
| Vérifier `README.md` | Validé | README backend aligné avec SYSTEME_MAD |
| Vérifier `.env.example` | Validé | Présent |
| Installer les dépendances | CI ajoutée | Workflow backend utilise `npm ci` |
| Lancer les tests | Reporté | Les tests DB doivent être rendus portables avant CI forte |
| Lancer le lint | CI ajoutée | Workflow backend PR `#5` |
| Vérifier syntaxe entrée serveur | CI ajoutée | `node -c server.js` |
| Valider migrations | À valider | Nécessite environnement sûr |
| Valider preflight organisation | À valider | À intégrer dans une CI DB future |
| Vérifier logs/runtime | À valider | Nécessite environnement réel |

---

## Étape 2 — Frontend

| Contrôle PLAY-041 | Statut | Commentaire |
|---|---|---|
| Vérifier `README.md` | Validé | README frontend aligné avec SYSTEME_MAD |
| Vérifier `.env.example` | Validé | Présent |
| Installer les dépendances | CI ajoutée | Workflow frontend utilise `npm ci` |
| Lancer les tests | CI ajoutée | Jest sans watch |
| Lancer le lint | CI ajoutée | ESLint phase 1 active |
| Lancer le build | CI ajoutée | Vite build dans CI |
| Vérifier routes principales | Validé documentaire | Routes listées dans README frontend |
| Vérifier modules visibles | Validé | Audit `#8` complété |
| Vérifier textes MADPROOF | Validé initial | Audit `#5` complété |
| Vérifier URL API production | À valider | Dépend de l’environnement réel |

---

## Étape 3 — Cohérence Web/API

| Contrôle | Statut | Commentaire |
|---|---|---|
| Cohérence modules | Validé | Audit `#8` |
| Authentification routes protégées | À valider | Smoke test requis |
| Gestion erreurs API côté UI | À valider | Tests UI/API ciblés requis |
| Isolation organisation | Validé partiel | Audits antérieurs; CI DB future recommandée |
| Endpoints publics volontaires | Validé partiel | Kiosques et modules corrigés |

---

## Étape 4 — Smoke test manuel requis

Ce dry run ne remplace pas un smoke test réel.

Parcours minimum à tester :

- login;
- dashboard;
- client;
- projet;
- temps;
- facture;
- estimé;
- portail client;
- settings;
- module désactivé;
- logout.

---

## Décision release

| Élément | Décision |
|---|---|
| Documentation | OK |
| CI minimale frontend/backend | OK |
| Release staging | Recommandée |
| Release production sans smoke test | Non recommandée |
| Release production confirmée | Non confirmée par ce document |

---

## Limites restantes

| Niveau | Limite | Suite recommandée |
|---|---|---|
| P1 | Tests backend DB non portables CI forte | Créer issue dédiée |
| P1 | Smoke test manuel non exécuté | Faire avant release réelle |
| P1 | Plateformes de déploiement non vérifiées ici | Valider dans Vercel/Railway ou équivalent |
| P2 | E2E Playwright non initialisé | Planifier |
| P2 | CI desktop-agent non ajoutée | Planifier |
| P2 | Branch protection non confirmée | Vérifier settings GitHub |

---

## Conclusion

PLAY-041 est appliqué en dry run.

MADSuite Web/API est prêt pour une validation release contrôlée, mais pas encore déclaré production-safe par ce document.

La prochaine étape réelle est une validation de release sur environnement contrôlé avec smoke test manuel.