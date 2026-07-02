---
Projet: MAD DevOps
Document: Registre des risques MADSuite / MADPROOF
Version: 1.0
Dernière révision: 2026-07-02
Statut: Brouillon
Auteur: Marc-André Dufour
---

# Registre des risques MADSuite / MADPROOF

## Rôle du document

Ce registre suit les risques liés à MADSuite, MADPROOF, MAD Ariane, au Cognitive Engine et aux fonctionnalités d’assistance cognitive.

Il sert à garder visibles les risques produit, éthiques, techniques, scientifiques, UX, sécurité et communication.

---

## Règle d’usage

Chaque risque doit avoir :

- une description claire;
- une catégorie;
- une sévérité;
- une probabilité;
- une mitigation;
- un propriétaire ou document responsable;
- un statut.

Un risque non suivi devient une dette documentaire ou produit.

---

## Échelle de sévérité

| Niveau | Signification |
|---|---|
| Faible | Impact limité, correction simple. |
| Moyen | Impact réel sur cohérence, UX, qualité ou confiance. |
| Élevé | Impact important sur produit, sécurité, crédibilité ou conformité. |
| Critique | Peut nuire fortement à l’utilisateur, au produit ou à la confiance. |

---

## Échelle de probabilité

| Niveau | Signification |
|---|---|
| Faible | Peu probable à court terme. |
| Moyenne | Possible si non surveillé. |
| Élevée | Probable sans garde-fou actif. |

---

## Registre initial

| ID | Risque | Catégorie | Sévérité | Probabilité | Mitigation | Statut |
|---|---|---|---|---|---|---|
| R-001 | Transformer une hypothèse MADPROOF-R&D en promesse produit. | Claims / Produit | Élevé | Moyenne | Utiliser `STD-506`, `CHK-032` et le registre des claims. | Actif |
| R-002 | Présenter MADSuite comme un outil médical ou thérapeutique. | Éthique / Communication | Critique | Moyenne | Respecter `ADR-002` et `STD-505`; interdire les formulations médicales. | Actif |
| R-003 | Utiliser des termes cognitifs trop forts comme “détecter la fatigue cognitive”. | Claims / UX | Élevé | Élevée | Utiliser le glossaire et reformuler en signaux d’usage. | Actif |
| R-004 | Laisser des documents concurrents hors de `SYSTEME_MAD/`. | Documentation | Moyen | Moyenne | Appliquer `STD-006`, `CHK-002` et archiver/supprimer les doublons. | Actif |
| R-005 | Ajouter une fonctionnalité cognitive sans expliquer les données utilisées. | Données / IA | Élevé | Moyenne | Documenter données utilisées, données exclues et contrôle utilisateur. | Actif |
| R-006 | Introduire caméra, micro, biométrie ou capture permanente dans le MVP. | Vie privée | Critique | Faible | Rappel permanent dans `STD-505`, `STD-506`, glossaire et specs. | Surveillé |
| R-007 | Présenter les labels Cognitive Engine comme des états mentaux réels. | IA / Produit | Élevé | Moyenne | Décrire les labels comme observations ou hypothèses d’interface. | Actif |
| R-008 | Produire des suggestions culpabilisantes. | UX | Moyen | Moyenne | Utiliser formulations neutres : “il reste” plutôt que “vous avez oublié”. | Actif |
| R-009 | Créer trop de documents et augmenter la charge mentale documentaire. | Documentation | Moyen | Élevée | Créer seulement si le document a un rôle distinct; mettre à jour les index. | Actif |
| R-010 | Ne pas relier un nouveau document aux index. | Documentation | Moyen | Moyenne | Mettre à jour l’index global MADSuite ou l’index du dossier concerné. | Actif |
| R-011 | Confondre roadmap business et recherche cognitive. | Produit / R&D | Moyen | Moyenne | Séparer `10-ROADMAP`, `01-PRODUIT` et `13-RESSOURCES/research`. | Actif |
| R-012 | Surcharger MADSuite avec R&D avant de stabiliser le Revenue Core. | Business | Élevé | Moyenne | Prioriser première facture, paiement, dashboard revenus et acquisition. | Actif |
| R-013 | Implémenter MAD Ariane sans tests utilisateur. | Produit | Élevé | Moyenne | Utiliser `CHK-017`, tests produit et validation de ressenti non intrusif. | Actif |
| R-014 | L’utilisateur se sent surveillé par les suggestions. | UX / Vie privée | Critique | Moyenne | Suggestions explicables, désactivables, non intrusives et contrôlables. | Actif |
| R-015 | Les agents IA rédigent des formulations interdites. | Agents IA | Élevé | Élevée | Lire `ai-context-madsuite-madproof.md`, `STD-506` et le glossaire avant rédaction. | Actif |
| R-016 | Les claims publics ne correspondent pas aux preuves internes. | Communication | Élevé | Moyenne | Passer tout claim public par `CHK-032` et le registre des claims. | Actif |
| R-017 | Les documents MADPROOF deviennent trop théoriques et non actionnables. | Documentation / Produit | Moyen | Moyenne | Toujours lier un concept à une implication produit ou une décision. | Actif |
| R-018 | Le vocabulaire varie selon les documents. | Cohérence | Moyen | Élevée | Utiliser `glossaire-madsuite-madproof.md` comme référence. | Actif |
| R-019 | Une fonctionnalité IA devient difficile à désactiver ou comprendre. | IA / Contrôle utilisateur | Élevé | Moyenne | Exiger explication, désactivation et contrôle utilisateur. | Actif |
| R-020 | Les priorités de documentation prennent le dessus sur l’exécution produit. | Exécution | Élevé | Moyenne | Garder la roadmap orientée Revenue Core et prochains livrables applicatifs. | Actif |

---

## Risques à surveiller en priorité

## P0 — Critiques

- R-002 — Dérive médicale.
- R-006 — Données intrusives dans le MVP.
- R-014 — Ressenti de surveillance.

## P1 — Élevés

- R-001 — Hypothèse R&D transformée en promesse.
- R-003 — Claims cognitifs trop forts.
- R-005 — Données mal expliquées.
- R-007 — Labels Cognitive Engine mal interprétés.
- R-012 — R&D avant Revenue Core.
- R-013 — MAD Ariane sans validation utilisateur.
- R-015 — Agents IA qui dérivent dans le wording.
- R-016 — Claims publics non alignés.
- R-019 — IA difficile à contrôler.
- R-020 — Documentation au détriment de l’exécution.

---

## Mitigations permanentes

| Mitigation | Document responsable |
|---|---|
| Gouvernance claims | `SYSTEME_MAD/03-STANDARDS/std-506.md` |
| Validation claim | `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md` |
| Registre claims | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` |
| Positionnement non médical | `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md` |
| Gouvernance MADPROOF | `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md` |
| Glossaire | `SYSTEME_MAD/06-KNOWLEDGE-BASE/glossaire-madsuite-madproof.md` |
| Index global | `SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md` |

---

## Routine de revue recommandée

Revoir ce registre :

- après l’ajout d’un module MADSuite;
- après une nouvelle fonctionnalité IA;
- avant publication d’un texte marketing MADSuite;
- avant implémentation d’un module cognitif;
- après test utilisateur;
- lors d’une passe qualité documentaire.

---

## Décision finale

Ce registre ne remplace pas la roadmap.

Il sert à protéger la roadmap contre les angles morts.

Phrase de contrôle :

> Quel risque devient plus probable si on ajoute cette fonctionnalité ou ce claim sans garde-fou?
