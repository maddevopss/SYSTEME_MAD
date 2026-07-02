---
Projet: MAD DevOps
Document: CHK-035 — Validation publication page publique MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-035 — Validation publication page publique MADSuite

## Objectif

Cette checklist valide qu’une page publique MADSuite peut être publiée ou testée sans créer de confusion produit, de promesse excessive ou de dérive MADPROOF.

Elle s’applique aux pages :

- landing page;
- prix;
- FAQ;
- démo;
- lancement;
- prévente;
- aide publique;
- campagne;
- page d’attente.

---

## Documents à consulter

Avant validation, lire :

- `SYSTEME_MAD/05-PLAY/play-038-publication-page-publique-madsuite.md`
- `SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md`
- `SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md`
- `SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md`

Templates utiles :

- `SYSTEME_MAD/07-TEMPLATES/template-landing-page-madsuite.md`
- `SYSTEME_MAD/07-TEMPLATES/template-faq-publique-madsuite.md`
- `SYSTEME_MAD/07-TEMPLATES/template-page-prix-madsuite.md`

Si un claim sensible est présent :

- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`
- `SYSTEME_MAD/03-STANDARDS/std-506.md`

---

## 1. Identification de la page

- [ ] Le type de page est identifié.
- [ ] L’audience cible est claire.
- [ ] L’objectif principal est clair.
- [ ] Le CTA principal est identifié.
- [ ] La page est rattachée à la Machine à clients.
- [ ] La page est cohérente avec le Revenue Core.

Notes :

```text
Type de page :
Audience :
Objectif :
CTA principal :
```

---

## 2. Message principal

- [ ] La page explique MADSuite en moins de 10 secondes.
- [ ] La page mentionne clients, temps, factures ou revenus.
- [ ] La page ne commence pas par une théorie cognitive.
- [ ] La page ne commence pas par une promesse IA.
- [ ] La page ne commence pas par du jargon technique.
- [ ] Le visiteur comprend quoi faire ensuite.

---

## 3. Cohérence Revenue Core

- [ ] Les promesses sont reliées à une fonction réelle ou prévue clairement.
- [ ] La page ne vend pas une fonction non disponible comme si elle existait déjà.
- [ ] La page ne bloque pas la première facture avec Stripe.
- [ ] La page ne promet pas une comptabilité complète.
- [ ] La page garde le focus sur clients, projets, temps, factures, estimés, paiements et revenus.

---

## 4. Claims MADPROOF

- [ ] Aucun claim ne présente MADSuite comme outil médical.
- [ ] Aucun claim ne dit que MADSuite traite le TDAH.
- [ ] Aucun claim ne dit que MADSuite détecte l’attention réelle.
- [ ] Aucun claim ne dit que MADSuite mesure la fatigue cognitive réelle.
- [ ] Aucun claim ne dit que MADSuite corrige le cerveau.
- [ ] Aucun claim ne dit que MADSuite sait ce qui se passe dans la tête de l’utilisateur.
- [ ] Aucun claim ne garantit une augmentation de revenus.
- [ ] Aucun claim ne remplace un comptable ou un professionnel.
- [ ] Les claims sensibles restants sont validés avec `CHK-032`.

---

## 5. Ton et langage

- [ ] Le ton est clair.
- [ ] Le ton est professionnel.
- [ ] Le ton est humain.
- [ ] Le ton n’est pas culpabilisant.
- [ ] Le texte évite le jargon DevOps.
- [ ] Le texte évite le jargon cloud.
- [ ] Le texte évite le jargon IA inutile.
- [ ] Le texte évite le jargon médical.
- [ ] Les phrases sont assez courtes pour une lecture rapide.

---

## 6. CTA

- [ ] Le CTA principal est visible.
- [ ] Le CTA principal mène vers une action réelle.
- [ ] Le CTA secondaire est utile.
- [ ] Les CTA ne promettent pas une valeur non livrable.
- [ ] Les CTA sont orientés action.
- [ ] Les CTA ne sont pas agressifs.

CTA recommandés :

- Créer ma première facture.
- Commencer simplement.
- Voir comment ça marche.
- Voir les prix.
- Demander l’accès de lancement.

---

## 7. FAQ et limites

- [ ] La page explique si MADSuite est une comptabilité complète lorsque pertinent.
- [ ] La page explique que Stripe n’est pas obligatoire lorsque pertinent.
- [ ] La page explique que MADSuite ne remplace pas un comptable lorsque pertinent.
- [ ] La page explique que MADSuite n’est pas un outil médical lorsque pertinent.
- [ ] La page explique que les revenus ne sont pas garantis lorsque pertinent.
- [ ] Les limites sont claires sans saboter la proposition de valeur.

---

## 8. Preuves et visuels

- [ ] Les captures ou maquettes ne contiennent pas de données client sensibles.
- [ ] Les exemples sont réalistes.
- [ ] Les preuves soutiennent la compréhension.
- [ ] Les preuves ne promettent pas plus que le produit.
- [ ] Les visuels montrent le Revenue Core si possible.

---

## 9. Formulaires et conversion

- [ ] Les formulaires demandent seulement les informations nécessaires.
- [ ] Le signup n’est pas inutilement long.
- [ ] L’utilisateur sait ce qui arrive après soumission.
- [ ] Les conditions de prix, essai ou lancement sont claires.
- [ ] Les frais externes sont distingués du prix MADSuite si applicable.

---

## 10. Accessibilité et lecture

- [ ] La page est lisible sur mobile.
- [ ] Les titres structurent bien la page.
- [ ] Les sections importantes sont faciles à scanner.
- [ ] Les boutons sont compréhensibles.
- [ ] Les messages d’erreur ou d’état sont simples si applicables.

---

## 11. Risques

- [ ] Le risque de dérive médicale est vérifié.
- [ ] Le risque de promesse trop forte est vérifié.
- [ ] Le risque de fonction non prête est vérifié.
- [ ] Le risque de jargon technique est vérifié.
- [ ] Le risque de confusion comptable est vérifié.
- [ ] Le risque de conversion trop agressive est vérifié.
- [ ] Le registre des risques est mis à jour si un nouveau risque apparaît.

---

## 12. Validation finale

- [ ] `PLAY-038` a été appliqué.
- [ ] `CHK-034` a été appliqué.
- [ ] `CHK-032` a été appliqué si un claim sensible est présent.
- [ ] Les corrections critiques sont terminées.
- [ ] La page peut être publiée ou testée selon le verdict.

---

## Verdict

- [ ] Prêt à publier.
- [ ] Prêt à tester.
- [ ] Corrections mineures requises.
- [ ] Non publiable.
- [ ] Risque critique.

---

## Notes de validation

```text
Date :
Validateur :
Page :
URL ou fichier :
Verdict :
Réserves :
Corrections requises :
```

---

## Phrase de contrôle

> Est-ce que cette page donne envie d’essayer MADSuite sans promettre plus que ce que le produit peut livrer?
