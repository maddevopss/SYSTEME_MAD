---
Projet: MAD DevOps
Document: Index — ADR
Version: 1.4
Dernière révision: 2026-07-11
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Architecture Decision Records

## Rôle du document

Cet index recense les décisions structurantes du Système MAD.

Une ADR sert à documenter une décision importante, son contexte, ses raisons et ses conséquences.

---

## Quand créer une ADR

Créer une ADR lorsqu’une décision modifie ou stabilise :

- l’architecture du dépôt;
- l’architecture logicielle;
- la gouvernance documentaire;
- les standards;
- le positionnement produit;
- la sécurité;
- la confidentialité;
- les choix techniques majeurs;
- les règles applicables aux agents IA.

Ne pas créer une ADR pour une simple note ou une tâche mineure.

---

## ADR actives

| ADR | Statut | Décision | Standards liés |
|---|---|---|---|
| `ADR-001-architecture-depot-systeme-mad.md` | Accepté | `SYSTEME_MAD/` devient la structure officielle du dépôt. | `STD-006`, `STD-601`, `STD-602`, `STD-603`, `STD-604`, `STD-605` |
| `ADR-002-positionnement-non-medical-madsuite.md` | Accepté | MADSuite est une solution de gestion et d’assistance cognitive non médicale. | `STD-501`, `STD-503`, `STD-505` |
| `ADR-003-gouvernance-madproof-claims-madsuite.md` | Accepté | Les claims cognitifs MADSuite doivent passer par le registre et la validation MADPROOF. | `STD-006`, `CHK-016`, `CHK-032` |
| `ADR-004-separation-repos-execution-madsuite.md` | Accepté | MADSuite est organisé en dépôts spécialisés : frontend, backend, E2E, desktop-agent, avec `SYSTEME_MAD` comme source de vérité. | `STD-006`, gouvernance IA, sécurité, MADPROOF |
| `ADR-005-ecos-cadre-non-produit.md` | Accepté | ECOS demeure un cadre conceptuel et opérationnel porté par `SYSTEME_MAD`, et non un produit ou une plateforme autonome à ce stade. | Charte ECOS, glossaire ECOS, périmètre ECOS, MADPROOF |

---

## ADR recommandées à créer

Aucune ADR prioritaire restante pour l’instant.

---

## Statuts reconnus

- `Proposé` : décision en discussion.
- `Accepté` : décision officielle.
- `Remplacé` : décision remplacée par une ADR plus récente.
- `Déprécié` : décision conservée pour historique, mais non recommandée.
- `Refusé` : décision étudiée mais non retenue.

---

## Structure recommandée d’une ADR

```text
YAML
Titre
Statut
Contexte
Décision
Raisons
Conséquences positives
Conséquences négatives ou coûts
Alternatives considérées
Liens avec les standards
Décision finale
```

---

## Règles pour agents IA

Avant de proposer une nouvelle ADR, un agent IA doit :

1. Lire cet index.
2. Vérifier qu’une ADR existante ne couvre pas déjà la décision.
3. Lire les standards liés.
4. Proposer une ADR claire, courte et reliée au besoin réel.
5. Ne pas remplacer une ADR acceptée sans expliquer la décision de remplacement.

---

## Principe directeur

Une ADR n’est pas un document décoratif.

Elle existe pour éviter de reprendre la même décision plusieurs fois ou d’oublier pourquoi une direction a été choisie.
