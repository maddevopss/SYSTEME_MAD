---
Projet: MAD DevOps
Document: CHK-002 — Validation documentaire
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-002 — Validation documentaire

## Objectif

Cette checklist sert à valider un document avant de le considérer prêt à être conservé, fusionné ou marqué `Officiel` dans le Système MAD.

Elle peut être utilisée par Marc-André Dufour, un collaborateur ou un agent IA.

---

## 1. Identification

- [ ] Le document possède un en-tête YAML.
- [ ] Le champ `Projet` est présent.
- [ ] Le champ `Document` est présent et explicite.
- [ ] Le champ `Version` est présent.
- [ ] Le champ `Dernière révision` est présent.
- [ ] Le champ `Statut` est présent.
- [ ] Le champ `Auteur` est présent.

---

## 2. Statut

- [ ] Le statut correspond à l’état réel du document.
- [ ] Un document non validé n’est pas marqué `Officiel`.
- [ ] Un document remplacé est marqué `Déprécié` ou déplacé dans `99-ARCHIVES/`.
- [ ] Un brouillon important est clairement identifié comme `Brouillon` ou `À valider`.

---

## 3. Emplacement

- [ ] Le document est placé dans le bon dossier du Système MAD.
- [ ] Le document ne crée pas une source concurrente à un document existant.
- [ ] Les documents historiques sont déplacés dans `99-ARCHIVES/`.
- [ ] Les scripts d’initialisation sont dans `08-BOOTSTRAPS/`.
- [ ] Les checklists sont dans `09-CHECKLISTS/`.
- [ ] Les décisions structurantes sont dans `04-ADR/`.

---

## 4. Rôle du document

- [ ] Le document indique clairement pourquoi il existe.
- [ ] Le public cible est identifiable.
- [ ] Le document répond à une responsabilité principale.
- [ ] Le document ne mélange pas inutilement stratégie, règles, recherche, backlog et template.

---

## 5. Cohérence avec MAD DevOps

- [ ] Le ton est professionnel, humain et accessible.
- [ ] Le document évite le jargon inutile.
- [ ] Le document privilégie la crédibilité avant le marketing.
- [ ] Le document ne promet pas ce qui ne peut pas être livré.
- [ ] Le document respecte les fondations et non-négociables MAD DevOps.

---

## 6. Cohérence avec MADSuite

À valider seulement si le document concerne MADSuite.

- [ ] MADSuite n’est pas présenté comme un outil médical.
- [ ] MADSuite n’est pas présenté comme une thérapie numérique validée.
- [ ] Les formulations liées au TDAH sont prudentes.
- [ ] Les bénéfices cognitifs sont formulés comme hypothèses produit ou assistance non médicale.
- [ ] L’utilisateur demeure en contrôle.
- [ ] Les fonctions cognitives sont décrites comme volontaires, transparentes, désactivables et non médicalisées.

---

## 7. Qualité du contenu

- [ ] Les titres sont clairs.
- [ ] Les phrases sont lisibles.
- [ ] Les listes sont utiles et non décoratives.
- [ ] Les décisions sont expliquées.
- [ ] Les règles sont applicables.
- [ ] Les exemples sont concrets lorsque nécessaires.
- [ ] Le document ne répète pas inutilement une information déjà officielle ailleurs.

---

## 8. Qualité pour agents IA

- [ ] Le document peut être compris sans contexte caché.
- [ ] Les règles importantes sont explicites.
- [ ] Les sources officielles sont identifiables.
- [ ] Les documents associés sont mentionnés lorsque pertinent.
- [ ] Le document ne force pas l’agent à deviner son statut ou son usage.

---

## 9. Avant commit

- [ ] Le nom du fichier est clair.
- [ ] Le fichier est au format Markdown lorsque possible.
- [ ] L’encodage est lisible en UTF-8.
- [ ] Aucun secret, clé API ou information sensible n’est présent.
- [ ] Le document respecte `STD-006 — Qualité documentaire du Système MAD`.
- [ ] Une ADR a été créée si la modification change une règle structurante.

---

## Verdict

- [ ] Validé sans réserve.
- [ ] Validé avec corrections mineures.
- [ ] À retravailler.
- [ ] À archiver.
- [ ] À fusionner avec un document existant.

---

## Note finale

Une bonne documentation doit rendre la prochaine action plus simple.

Si un document ajoute de la confusion, il doit être clarifié, fusionné ou archivé.
