---
Projet: MAD DevOps
Document: Synthèse chaîne demandes entrantes MAD DevOps
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# Synthèse chaîne demandes entrantes MAD DevOps

## Objectif

Résumer toute la chaîne de traitement d’une demande entrante MAD DevOps, de la réception jusqu’à la décision finale.

Cette synthèse sert de carte rapide pour traiter une demande sans improviser, sans promettre trop tôt et sans laisser une demande traîner inutilement.

---

## Principe central

```text
Une demande entrante doit devenir une prochaine action claire, une opportunité, un report ou une fermeture propre.
```

---

## Chaîne complète

```text
Demande reçue
→ registre demandes entrantes
→ fiche de qualification
→ colonne de tri rapide
→ réponse adaptée
→ validation CHK-027
→ décision : opportunité / report / fermeture
→ validation CHK-021 ou CHK-028 selon le cas
→ pipeline ou registre mis à jour
```

---

## Étape 1 — Recevoir la demande

Chaque demande doit être notée dans :

```text
SYSTEME_MAD/10-ROADMAP/registre-demandes-entrantes.md
```

À noter minimalement :

- source;
- contact;
- besoin résumé;
- niveau de clarté;
- alignement;
- statut;
- prochaine action.

---

## Étape 2 — Qualifier

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-fiche-qualification-demande-entrante-mad-devops.md
```

La colonne de tri rapide doit clarifier :

```text
Clarté
Alignement
Type de besoin
Risque de mauvais cadrage
Niveau d’urgence
Prochaine action
Statut
```

---

## Étape 3 — Répondre

Utiliser :

```text
SYSTEME_MAD/07-TEMPLATES/template-reponse-demande-entrante-mad-devops.md
```

La réponse doit être adaptée au cas :

```text
Demande claire
Besoin flou mais pertinent
Demande trop large
Offre terrain possible
Non aligné
Suivi futur
```

Valider avec :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-027-validation-reponse-demande-entrante.md
```

---

## Étape 4 — Décider la sortie

| Cas | Sortie |
|---|---|
| Besoin réel, aligné, prochaine action claire | Opportunité |
| Besoin intéressant, mais pas mûr | Report |
| Besoin non aligné ou trop risqué | Fermeture |
| Besoin large mais pertinent | Cadrage ou clarification |
| Besoin clair et limité | Offre terrain possible |

---

## Étape 5 — Opportunité

Si la demande devient une opportunité, utiliser :

```text
SYSTEME_MAD/05-PLAY/play-033-convertir-demande-entrante-en-opportunite.md
SYSTEME_MAD/09-CHECKLISTS/chk-021-validation-opportunite-machine-a-clients.md
SYSTEME_MAD/10-ROADMAP/pipeline-commercial-cerveaumad.md
```

---

## Étape 6 — Report ou fermeture

Si la demande doit être reportée ou fermée, utiliser :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-028-validation-fermeture-demande-entrante.md
SYSTEME_MAD/10-ROADMAP/registre-demandes-entrantes.md
```

Exemples disponibles :

```text
SYSTEME_MAD/02-GUIDE/exemple-fermeture-demande-entrante.md
SYSTEME_MAD/02-GUIDE/exemple-report-demande-entrante.md
```

---

## Garde-fous

- Ne pas donner un prix trop tôt.
- Ne pas créer une opportunité automatiquement.
- Ne pas proposer une offre terrain si le besoin est trop flou.
- Ne pas garder une demande sans statut.
- Ne pas exposer la mécanique interne MAD DevOps.
- Fermer ou reporter proprement ce qui n’avance pas.

---

## Critère de réussite

Une demande entrante est bien traitée si :

1. elle est notée dans le registre;
2. elle est qualifiée;
3. elle reçoit une réponse adaptée;
4. elle est validée avec la bonne checklist;
5. elle mène à une opportunité, un report ou une fermeture claire.

---

## Statut

```text
Statut : Officiel
Usage : synthèse complète de la chaîne demandes entrantes
Cycle lié : demande entrante / qualification / réponse / opportunité / report / fermeture
```
