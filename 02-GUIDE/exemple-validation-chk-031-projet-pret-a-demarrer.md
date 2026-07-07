---
Projet: MAD DevOps
Document: Exemple — Validation CHK-031 projet prêt à démarrer
Version: 1.0
Dernière révision: 2026-07-01
Statut: Exemple
Auteur: Marc-André Dufour
---

# Exemple — Validation CHK-031 projet prêt à démarrer

## Objectif

Montrer comment valider un projet client avec CHK-031 avant de passer du cadrage à l’exécution.

Cet exemple utilise la fiche projet client remplie :

```text
SYSTEME_MAD/02-GUIDE/exemple-fiche-projet-client-mad-devops.md
```

---

## Documents liés

- `SYSTEME_MAD/09-CHECKLISTS/chk-031-validation-projet-pret-a-demarrer.md`
- `SYSTEME_MAD/02-GUIDE/exemple-fiche-projet-client-mad-devops.md`
- `SYSTEME_MAD/02-GUIDE/synthese-chaine-projet-client-livraison.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-003-livraison-client.md`

---

## Projet évalué

| Élément | Valeur |
|---|---|
| Client | Client exemple — petite entreprise de services |
| Projet | Clarification du parcours de contact Web |
| Statut | En cours |
| Type de mandat | Amélioration ciblée site Web |
| Verdict CHK-031 | Projet prêt avec réserves |

---

## 1. Besoin et problème réel

- [x] Le problème principal est formulé clairement.
- [x] L’impact du problème est compris.
- [x] Le résultat souhaité est explicite.
- [x] Le critère de réussite observable est défini.
- [x] Le besoin n’est pas seulement une liste de fonctionnalités.

Résultat :

```text
Valide. Le projet part d’un problème clair : les demandes Web sont trop floues et ralentissent la qualification.
```

---

## 2. Périmètre et première version utile

- [x] La première version utile est définie.
- [x] Les éléments inclus sont listés.
- [x] Les éléments hors périmètre sont visibles.
- [x] Les demandes futures sont séparées du mandat actuel.
- [x] Le client comprend ce qui ne sera pas livré maintenant.

Résultat :

```text
Valide. Le mandat reste limité au parcours de contact et évite la dérive vers une refonte complète ou une automatisation avancée.
```

---

## 3. Livrables

- [x] Les livrables sont nommés.
- [x] Chaque livrable a un statut initial.
- [x] Les livrables sont compréhensibles par le client.
- [x] La validation attendue pour chaque livrable est claire.
- [x] La livraison finale peut être validée avec CHK-003.

Résultat :

```text
Valide. Les livrables sont visibles et la livraison finale est reliée à CHK-003.
```

---

## 4. Accès, contenus et dépendances

- [x] Les accès requis sont identifiés.
- [x] Les responsables des accès sont nommés.
- [x] Les dates cibles sont visibles.
- [x] L’impact d’un accès manquant est documenté.
- [x] Les dépendances client sont visibles.
- [x] Les dépendances techniques ou externes sont visibles.

Résultat :

```text
Valide avec réserve. Les accès sont identifiés, mais certains sont encore demandés ou requis.
```

---

## 5. Risques et blocages

- [x] Les risques principaux sont identifiés.
- [x] Les blocages potentiels sont visibles.
- [x] Une action de réduction est prévue pour chaque risque important.
- [x] Les accès bloquants ne sont pas ignorés.
- [x] Les limites connues sont communiquées.

Résultat :

```text
Valide avec réserve. Le risque principal est l’accès au site non reçu, mais il est visible et associé à une action.
```

---

## 6. Décisions et changements

- [x] Les décisions importantes sont documentées.
- [x] Les changements de périmètre potentiels sont classés.
- [x] Les demandes hors périmètre sont reportées, refusées ou à estimer.
- [x] Les impacts sur délai, coût ou qualité sont visibles si pertinents.

Résultat :

```text
Valide. Les demandes de CRM complet et de refonte complète sont sorties du mandat actuel.
```

---

## 7. Prochaine action

- [x] Une TODO active existe.
- [x] La prochaine action est claire.
- [x] Le responsable de la prochaine action est identifiable.
- [x] Le projet peut avancer sans réinterpréter tout le contexte.

Résultat :

```text
Valide. La prochaine action est de demander les accès au site et trois exemples de demandes reçues récemment.
```

---

## Résultat de validation

- [ ] Projet prêt à démarrer
- [x] Projet prêt avec réserves
- [ ] Projet à clarifier avant démarrage
- [ ] Projet bloqué par accès ou dépendance
- [ ] Projet à recadrer

---

## Décision finale

```text
Décision : projet prêt avec réserves.

Raison : le besoin, le périmètre, les livrables, les risques et la prochaine action sont clairs. Les accès et exemples client restent à recevoir avant certains ajustements directs.
```

---

## Prochaine action

```text
Demander au client les accès au site et trois exemples de demandes floues reçues récemment.
```

---

## Condition de passage à “Projet prêt à démarrer”

```text
Le projet passe de “prêt avec réserves” à “prêt à démarrer” lorsque les accès critiques ou les fichiers Web sont reçus, ou lorsque le mandat est limité à une recommandation sans modification directe du site.
```

---

## Statut

```text
Statut : Exemple
Usage : exemple rempli de validation CHK-031
Cycle lié : cadrage / projet actif / démarrage / livraison
```
