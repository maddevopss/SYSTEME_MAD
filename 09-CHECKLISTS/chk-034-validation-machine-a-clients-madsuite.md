---
Projet: MAD DevOps
Document: CHK-034 — Validation Machine à clients MADSuite
Version: 1.1
Dernière révision: 2026-07-18
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-034 — Validation Machine à clients MADSuite

## Objectif

Cette checklist valide que la Machine à clients MADSuite est claire, activable et alignée avec le Revenue Core.

Elle sert à vérifier la landing page, le message public, le signup, l’onboarding, l’activation, les preuves commerciales, les métriques et les garde-fous MADPROOF.

---

## Documents à consulter

Avant d’utiliser cette checklist, lire :

- `SYSTEME_MAD/02-GUIDE/madsuite/spec-machine-a-clients-madsuite.md`
- `SYSTEME_MAD/02-GUIDE/madsuite/spec-revenue-core-madsuite.md`
- `SYSTEME_MAD/02-GUIDE/madsuite/registre-decisions-produit-madsuite.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-033-validation-mvp-revenue-core-madsuite.md`
- `SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md`
- `SYSTEME_MAD/03-STANDARDS/std-505.md`
- `SYSTEME_MAD/03-STANDARDS/std-506.md`
- `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md`

---

## 1. Positionnement public

- [ ] La proposition de valeur est compréhensible en moins de 10 secondes.
- [ ] Le message principal parle de clients, temps, factures et revenus.
- [ ] Le message ne vend pas une architecture technique.
- [ ] Le message ne vend pas une théorie cognitive.
- [ ] Le message ne présente pas MADSuite comme outil médical.
- [ ] Le message évite le jargon DevOps, cloud, IA ou comptabilité avancée.
- [ ] La promesse reste concrète et vérifiable.

---

## 2. Hero landing page

- [ ] Le titre explique clairement le problème ou le résultat.
- [ ] Le sous-titre explique ce que MADSuite fait.
- [ ] Le CTA principal est visible.
- [ ] Le CTA principal mène vers inscription, essai ou première facture.
- [ ] Le CTA secondaire explique ou démontre le produit.
- [ ] Le hero ne contient pas de claim médical ou cognitif trop fort.

Formulation recommandée :

```text
Clients, temps, factures : gardez le fil sans vous éparpiller.
```

---

## 3. Problème client

- [ ] La page montre que le travail est souvent dispersé.
- [ ] La page montre que le temps travaillé peut rester non facturé.
- [ ] La page montre que les factures et paiements sont difficiles à suivre.
- [ ] La page évite de blâmer l’utilisateur.
- [ ] La page évite les formulations comme “vous êtes désorganisé”.
- [ ] Le problème est relié à une action produit claire.

---

## 4. Solution MADSuite

- [ ] La solution centralise clients, projets, temps, factures, estimés, paiements et revenus.
- [ ] La solution montre comment passer du travail à la facture.
- [ ] La solution explique comment voir les montants dus.
- [ ] La solution explique comment reprendre le fil de façon opérationnelle.
- [ ] La solution reste simple et non médicale.

---

## 5. Modules présentés

- [ ] Clients est présenté simplement.
- [ ] Projets est présenté simplement.
- [ ] Temps est présenté simplement.
- [ ] Factures est présenté simplement.
- [ ] Estimés est présenté simplement.
- [ ] Paiements est présenté simplement.
- [ ] Dashboard revenus est présenté simplement.
- [ ] Les modules avancés R&D ne prennent pas le dessus sur le Revenue Core.

---

## 6. Différenciation prudente

- [ ] La différenciation parle d’accessibilité cognitive avec prudence.
- [ ] La page ne prétend pas traiter le TDAH.
- [ ] La page ne prétend pas détecter l’attention réelle.
- [ ] La page ne prétend pas mesurer la fatigue cognitive réelle.
- [ ] La page ne dit pas que MADSuite corrige le cerveau ou la désorganisation.
- [ ] Toute formulation sensible est validée avec `CHK-032`.

Formulation prudente :

```text
MADSuite est conçu avec des principes d’accessibilité cognitive : moins d’écrans inutiles, des actions claires et des repères pour reprendre le fil.
```

---

## 7. Signup

- [ ] Le formulaire d’inscription est court.
- [ ] Les champs obligatoires sont limités au nécessaire.
- [ ] Le nom d’entreprise est optionnel ou simple à remplir.
- [ ] Stripe n’est pas obligatoire au signup.
- [ ] La configuration fiscale complète n’est pas obligatoire au signup.
- [ ] L’utilisateur comprend ce qui arrive après l’inscription.
- [ ] L’inscription fonctionne sur mobile.

---

## 8. Onboarding

- [ ] L’onboarding mène vers une première action concrète.
- [ ] L’onboarding ne cherche pas la configuration parfaite.
- [ ] L’utilisateur peut créer rapidement un client.
- [ ] L’utilisateur peut créer rapidement une facture.
- [ ] L’utilisateur peut générer une facture ou un PDF rapidement.
- [ ] Le chemin vers la première valeur est court.
- [ ] Les étapes sont visibles et compréhensibles.

Phrase de contrôle :

```text
On ne configure pas un ERP. On aide quelqu’un à facturer.
```

---

## 9. Activation 7 jours

- [ ] Jour 0 : l’utilisateur peut créer son compte et poser une première action.
- [ ] Jour 1 : l’utilisateur peut créer ou compléter une première facture.
- [ ] Jour 2 : l’utilisateur comprend le lien temps travaillé → facture.
- [ ] Jour 3 : l’utilisateur voit les montants dus ou le dashboard revenus.
- [ ] Jour 4 : l’utilisateur peut créer un estimé.
- [ ] Jour 5 : l’utilisateur peut suivre ou marquer un paiement.
- [ ] Jour 6 : l’utilisateur peut reprendre une tâche ou un élément incomplet.
- [ ] Jour 7 : l’utilisateur voit une option claire pour continuer ou convertir.

---

## 10. Conversion

- [ ] La conversion est proposée après une valeur concrète.
- [ ] La conversion ne bloque pas la première facture.
- [ ] Les limites d’essai ou de plan sont compréhensibles.
- [ ] Le prix est présenté clairement si disponible.
- [ ] Le CTA de conversion est visible mais non agressif.
- [ ] La conversion est liée à un bénéfice réel : facture, paiement, revenus, relance ou usage régulier.

---

## 11. Preuves commerciales

- [ ] Une capture ou maquette du dashboard revenus existe.
- [ ] Un exemple de facture PDF existe ou est prévu.
- [ ] Un exemple client → projet → temps → facture existe.
- [ ] Une mini-démo courte existe ou est prévue.
- [ ] Une FAQ existe ou est prévue.
- [ ] Un témoignage ou une preuve client peut être ajouté sans exagération.
- [ ] Les preuves ne contiennent pas de données client sensibles.

---

## 12. FAQ

- [ ] La FAQ explique si MADSuite est une comptabilité complète.
- [ ] La FAQ explique si Stripe est obligatoire.
- [ ] La FAQ explique si MADSuite remplace un comptable.
- [ ] La FAQ explique que MADSuite n’est pas un outil médical.
- [ ] La FAQ explique comment commencer sans tout configurer.
- [ ] La FAQ répond avec un langage simple.

Réponse non médicale standard :

```text
Non. MADSuite est un outil de gestion et d’assistance cognitive non médicale. Il ne pose aucun diagnostic et ne remplace aucun professionnel.
```

---

## 13. Claims autorisés

- [ ] MADSuite aide à gérer clients, temps et factures au même endroit.
- [ ] MADSuite aide à transformer le temps travaillé en factures claires.
- [ ] MADSuite aide à voir les montants dus.
- [ ] MADSuite aide à garder le fil du travail facturable.
- [ ] MADSuite est conçu avec des principes d’accessibilité cognitive.
- [ ] Tous les claims sensibles sont inscrits ou validés avec MADPROOF si nécessaire.

---

## 14. Claims interdits

- [ ] La page ne dit pas que MADSuite traite le TDAH.
- [ ] La page ne dit pas que MADSuite mesure l’attention.
- [ ] La page ne dit pas que MADSuite détecte la fatigue cognitive.
- [ ] La page ne dit pas que MADSuite corrige le cerveau.
- [ ] La page ne promet pas plus de revenus garantis.
- [ ] La page ne remplace pas un comptable ou un professionnel.
- [ ] La page ne donne pas l’impression que MADSuite sait ce qui se passe dans la tête de l’utilisateur.

---

## 15. Métriques Machine à clients

- [ ] Visiteurs landing peut être mesuré.
- [ ] CTA click peut être mesuré.
- [ ] Signup started peut être mesuré.
- [ ] Signup completed peut être mesuré.
- [ ] First client created peut être mesuré.
- [ ] First invoice created peut être mesuré.
- [ ] First PDF generated peut être mesuré.
- [ ] First invoice sent peut être mesuré.
- [ ] First payment tracked peut être mesuré.
- [ ] Trial to paid peut être mesuré.
- [ ] Churn reason peut être capturé ou documenté.

---

## 16. Cohérence avec Revenue Core

- [ ] La landing promet uniquement ce que le Revenue Core peut livrer.
- [ ] Le signup mène vers une action Revenue Core.
- [ ] L’onboarding mène vers la première facture.
- [ ] Les preuves montrent clients, temps, factures ou revenus.
- [ ] Les métriques d’activation correspondent au Revenue Core.
- [ ] La Machine à clients ne vend pas des modules non prêts comme s’ils étaient disponibles.

---

## 17. UX et accessibilité

- [ ] Les textes sont courts.
- [ ] Les CTA sont faciles à comprendre.
- [ ] Les sections sont lisibles sur mobile.
- [ ] Le parcours ne surcharge pas l’utilisateur.
- [ ] Les messages ne culpabilisent pas.
- [ ] Les visuels soutiennent la compréhension.
- [ ] Les formulaires sont simples.

---

## 18. Risques

- [ ] Le risque de dérive médicale est vérifié.
- [ ] Le risque de promesse trop forte est vérifié.
- [ ] Le risque de jargon technique est vérifié.
- [ ] Le risque de signup trop long est vérifié.
- [ ] Le risque de vendre une fonction non prête est vérifié.
- [ ] Le risque de brouiller le message avec trop d’IA est vérifié.
- [ ] Le registre des risques est mis à jour si un nouveau risque apparaît.

---

## Verdict

- [ ] Validé pour publication.
- [ ] Validé avec réserves mineures.
- [ ] Non validé — corrections requises.
- [ ] Non validé — risque critique.

---

## Notes de validation

```text
Date :
Validateur :
Version testée :
Surface validée : landing / signup / onboarding / activation / conversion
Réserves :
Décision :
```

---

## Phrase de contrôle

> Est-ce qu’un visiteur comprend rapidement que MADSuite l’aide à gérer clients, temps, factures et revenus sans se perdre?
