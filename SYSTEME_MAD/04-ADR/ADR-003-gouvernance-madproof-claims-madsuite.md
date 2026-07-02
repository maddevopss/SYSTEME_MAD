---
Projet: MAD DevOps
Document: ADR-003 — Gouvernance MADPROOF des claims MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-003 — Gouvernance MADPROOF des claims MADSuite

## Statut

Accepté.

---

## Contexte

MADSuite utilise des concepts liés à l’assistance cognitive, à la reprise de tâche, à la réduction de friction, au TDAH, à l’accessibilité cognitive et à l’organisation du travail numérique.

Ces concepts sont utiles pour guider le produit, mais ils peuvent rapidement générer des formulations trop fortes si aucune gouvernance claire n’est appliquée.

Les risques principaux sont :

- transformer une hypothèse R&D en promesse produit;
- présenter MADSuite comme un outil médical;
- prétendre détecter ou mesurer un état mental;
- utiliser des claims marketing impossibles à prouver;
- mélanger recherche, produit, communication et décisions officielles;
- créer des documents concurrents sans source de vérité.

Le Système MAD contient déjà une structure officielle, un manifeste, un standard documentaire, des checklists et une ADR de positionnement non médical. Il faut maintenant stabiliser la gouvernance spécifique des claims MADPROOF.

---

## Décision

Tout claim lié à MADSuite, à la cognition, au TDAH, à l’attention, au flow, à la friction, à la fatigue cognitive, à la reprise de tâche ou à une fonctionnalité IA doit être évalué avec le cadre MADPROOF avant d’être utilisé comme référence produit ou communication publique.

La source opérationnelle des claims est :

```text
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md
```

Le cadre de validation est :

```text
SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md
```

La checklist de validation dédiée est :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Le playbook d’ajout ou de correction d’un claim est :

```text
SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md
```

Le template réutilisable est :

```text
SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md
```

---

## Règles de gouvernance

1. Aucun claim cognitif ou TDAH ne doit être officialisé sans statut MADPROOF.
2. Aucun claim R&D ne doit être utilisé comme promesse produit sans validation.
3. Tout claim médical, clinique ou psychologique doit être supprimé ou reformulé.
4. Les claims publics doivent être plus prudents que les hypothèses internes.
5. Les documents produit doivent renvoyer vers le registre lorsqu’ils utilisent un claim sensible.
6. Les agents IA doivent vérifier le registre avant de rédiger une formulation cognitive ou MADSuite.
7. Toute nouvelle fonctionnalité IA cognitive doit indiquer ses limites, ses données utilisées et ses données exclues.

---

## Raisons

### 1. Préserver la crédibilité de MADSuite

Un produit crédible ne doit pas promettre plus que ce qu’il peut démontrer.

### 2. Protéger l’utilisateur

L’utilisateur doit rester en contrôle et ne doit pas être enfermé dans une interprétation algorithmique de son comportement.

### 3. Éviter la dérive médicale

MADSuite est une assistance cognitive non médicale. La gouvernance des claims protège cette frontière.

### 4. Aider les agents IA

Un registre explicite évite que les agents IA réinventent des formulations dangereuses ou contradictoires.

### 5. Stabiliser la documentation

Les claims sensibles doivent avoir une source de vérité claire et maintenable.

---

## Conséquences positives

- Moins de claims contradictoires.
- Moins de formulations médicales involontaires.
- Meilleure cohérence entre produit, recherche et communication.
- Meilleure auditabilité de MADSuite.
- Meilleure sécurité pour l’usage des agents IA.
- Meilleure capacité à transformer une idée R&D en fonctionnalité validable.

---

## Coûts et contraintes

- Toute nouvelle formulation cognitive demande une validation minimale.
- Certains textes marketing devront être reformulés.
- Les documents R&D devront séparer hypothèses, preuves, limites et implications produit.
- Le registre devra être maintenu régulièrement.

---

## Alternatives considérées

### Ne pas créer de gouvernance spécifique

Rejeté.

Le risque de dérive est trop élevé étant donné la nature cognitive et neurodivergente du positionnement MADSuite.

### Garder les claims uniquement dans les documents de recherche

Rejeté.

Les claims doivent être utilisables par le produit, le marketing et les agents IA. Un registre opérationnel est nécessaire.

### Interdire tous les claims cognitifs

Rejeté.

Cela rendrait MADSuite trop générique et ferait perdre sa différenciation. La bonne approche est de garder les claims prudents, explicables et validables.

---

## Liens avec les standards

- `STD-006 — Qualité documentaire du Système MAD`
- `ADR-002 — Positionnement non médical de MADSuite`
- `CHK-016 — Validation MADPROOF cognitif MADSuite`
- `CHK-032 — Validation d’un claim MADPROOF`

---

## Décision finale

Le registre MADPROOF devient la source opérationnelle des claims cognitifs MADSuite.

Tout claim sensible doit être classé, formulé prudemment et validé avant usage produit ou communication publique.
