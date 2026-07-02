---
Projet: MAD DevOps
Document: Index — Standards
Version: 1.2
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Standards MAD DevOps

## Rôle du document

Cet index facilite la navigation dans les standards officiels du Système MAD.

Il sert de point d’entrée pour les humains, les collaborateurs et les agents IA qui doivent comprendre les règles applicables à un projet MAD DevOps ou MADSuite.

---

## Ordre de lecture recommandé

### Lecture minimale

1. `std-000.md` — Cadre des Standards
2. `std-006.md` — Qualité documentaire du Système MAD
3. Le standard directement lié à la tâche

### Pour un projet logiciel complet

1. Développement — `STD-001` à `STD-006`
2. Architecture — `STD-101` à `STD-105`
3. Sécurité — `STD-201` à `STD-205`
4. Qualité — `STD-301` à `STD-305`
5. DevOps — `STD-401` à `STD-405`
6. IA — `STD-501` à `STD-506` si le projet utilise l’IA
7. Documentation — `STD-601` à `STD-605`

---

## Famille 000 — Développement et cadre général

| Standard | Sujet | Rôle |
|---|---|---|
| `std-000.md` | Cadre des Standards | Définit la structure et l’usage des standards. |
| `std-001.md` | Convention de codage | Encadre la cohérence du code. |
| `std-002.md` | Structure de projet | Encadre l’organisation des projets. |
| `std-003.md` | Gestion des erreurs | Encadre les erreurs applicatives. |
| `std-004.md` | Journalisation | Encadre les logs et traces applicatives. |
| `std-005.md` | Documentation du code | Encadre la documentation technique dans le code. |
| `std-006.md` | Qualité documentaire | Encadre la qualité des documents du Système MAD. |

---

## Famille 100 — Architecture

| Standard | Sujet | Rôle |
|---|---|---|
| `std-101.md` | Architecture logicielle | Guide les choix d’architecture. |
| `std-102.md` | Architecture frontend | Encadre la structure des interfaces. |
| `std-103.md` | Base de données | Encadre les choix et pratiques de données. |
| `std-104.md` | SaaS multi-tenant | Encadre l’isolation des organisations. |
| `std-105.md` | Configuration | Encadre les variables, environnements et secrets de configuration. |

---

## Famille 200 — Sécurité

| Standard | Sujet | Rôle |
|---|---|---|
| `std-201.md` | Authentification | Vérifier l’identité. |
| `std-202.md` | Autorisation | Contrôler les actions permises. |
| `std-203.md` | Gestion des secrets | Protéger clés, jetons et secrets. |
| `std-204.md` | Protection des données | Protéger confidentialité, intégrité et disponibilité. |
| `std-205.md` | Journal d’audit | Retracer les événements importants. |

---

## Famille 300 — Qualité

| Standard | Sujet | Rôle |
|---|---|---|
| `std-301.md` | Stratégie de tests | Protéger les comportements critiques. |
| `std-302.md` | Revue de code | Protéger qualité, sécurité et maintenabilité. |
| `std-303.md` | Definition of Done | Définir ce que veut dire terminé. |
| `std-304.md` | Gestion des anomalies | Qualifier, corriger et documenter les problèmes. |
| `std-305.md` | Validation avant livraison | Vérifier avant de livrer. |

---

## Famille 400 — DevOps

| Standard | Sujet | Rôle |
|---|---|---|
| `std-401.md` | Environnements | Séparer clairement les contextes d’exécution. |
| `std-402.md` | CI/CD | Automatiser les validations utiles. |
| `std-403.md` | Déploiement | Livrer de manière préparée et vérifiable. |
| `std-404.md` | Observabilité | Comprendre l’état réel du système. |
| `std-405.md` | Reprise et retour arrière | Prévoir quoi faire si un changement tourne mal. |

---

## Famille 500 — Intelligence artificielle

| Standard | Sujet | Rôle |
|---|---|---|
| `std-501.md` | IA responsable | Encadrer l’usage responsable de l’IA. |
| `std-502.md` | Prompts et sorties IA | Encadrer prompts, résultats et validation. |
| `std-503.md` | Données et confidentialité IA | Protéger les données utilisées avec l’IA. |
| `std-504.md` | Agents IA | Encadrer les agents et leur périmètre. |
| `std-505.md` | IA cognitive non médicale | Encadrer MADSuite et l’assistance cognitive non médicale. |
| `std-506.md` | Gouvernance des claims MADPROOF | Encadrer les claims cognitifs, TDAH, R&D et marketing MADSuite. |

---

## Famille 600 — Documentation

| Standard | Sujet | Rôle |
|---|---|---|
| `std-601.md` | Structure des documents | Rendre les documents lisibles et navigables. |
| `std-602.md` | Indexation documentaire | Rendre la documentation facile à retrouver. |
| `std-603.md` | Cycle de vie documentaire | Gérer brouillon, officiel, archive et déprécié. |
| `std-604.md` | Archivage documentaire | Retirer du flux actif sans perdre l’historique. |
| `std-605.md` | Documentation prête pour agents IA | Rendre les sources claires pour les agents IA. |

---

## Standards critiques MADSuite

Pour MADSuite, les standards à lire en priorité sont :

- `std-104.md` — SaaS multi-tenant;
- `std-201.md` — Authentification;
- `std-202.md` — Autorisation;
- `std-204.md` — Protection des données;
- `std-301.md` — Stratégie de tests;
- `std-404.md` — Observabilité;
- `std-501.md` — IA responsable;
- `std-503.md` — Données et confidentialité IA;
- `std-505.md` — IA cognitive non médicale;
- `std-506.md` — Gouvernance des claims MADPROOF.

---

## Règle pour agents IA

Avant de modifier un standard, un agent IA doit lire :

1. `SYSTEME_MAD/MANIFEST.md`
2. `std-000.md`
3. `std-006.md`
4. Le standard concerné
5. Les standards liés

Un agent IA ne doit pas créer un nouveau standard si un standard existant peut être enrichi sans créer de doublon.
