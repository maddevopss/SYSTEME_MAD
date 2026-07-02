---
Projet: MAD DevOps
Document: PLAY-038 — Publication d’une page publique MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-038 — Publication d’une page publique MADSuite

## Objectif

Ce playbook décrit la procédure à suivre avant de publier une page publique MADSuite.

Il s’applique aux pages de landing, prix, FAQ, démo, prévente, lancement, aide publique ou toute autre surface visible par des visiteurs, prospects ou clients.

---

## Résultat attendu

À la fin du playbook, la page publique doit être :

- claire;
- compréhensible rapidement;
- alignée avec le Revenue Core;
- cohérente avec la Machine à clients;
- conforme au positionnement non médical;
- validée contre les claims interdits;
- prête à publier ou à tester.

---

## Documents à lire avant de commencer

```text
SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-machine-a-clients-madsuite.md
SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-machine-a-clients-madsuite.md
SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md
```

Templates utiles :

```text
SYSTEME_MAD/07-TEMPLATES/template-landing-page-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-faq-publique-madsuite.md
SYSTEME_MAD/07-TEMPLATES/template-page-prix-madsuite.md
```

Si la page contient un claim cognitif ou sensible, lire aussi :

```text
SYSTEME_MAD/03-STANDARDS/std-506.md
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
SYSTEME_MAD/06-KNOWLEDGE-BASE/glossaire-madsuite-madproof.md
```

---

## Étape 1 — Identifier le type de page

Déterminer la surface à publier :

- landing page;
- page Prix;
- FAQ publique;
- page Démo;
- page de lancement;
- page d’attente;
- page d’aide;
- page campagne;
- autre page publique.

Noter l’objectif principal :

```text
Type de page :
Objectif principal :
Audience :
CTA principal :
```

---

## Étape 2 — Vérifier le message principal

La page doit expliquer rapidement :

- ce que MADSuite fait;
- pour qui;
- quel problème concret est résolu;
- quelle action faire ensuite.

Formulation de référence :

```text
Gérez vos clients, votre temps et vos factures sans vous éparpiller.
```

La page doit rester centrée sur :

- clients;
- projets;
- temps;
- factures;
- estimés;
- paiements;
- revenus;
- reprise du fil opérationnel.

---

## Étape 3 — Choisir le bon template

Utiliser le template correspondant :

| Page | Template recommandé |
|---|---|
| Landing | `template-landing-page-madsuite.md` |
| FAQ | `template-faq-publique-madsuite.md` |
| Prix | `template-page-prix-madsuite.md` |
| Claim sensible | `template-claim-madproof.md` |

Si aucun template ne correspond, créer une page simple en reprenant la structure :

1. problème;
2. solution;
3. bénéfices;
4. preuve;
5. FAQ;
6. CTA.

---

## Étape 4 — Vérifier la cohérence Revenue Core

La page ne doit pas promettre plus que ce que le Revenue Core peut soutenir.

Vérifier que les promesses publiques sont reliées à au moins un élément réel :

- création client;
- création projet;
- suivi du temps;
- facture;
- PDF;
- estimé;
- paiement;
- dashboard revenus;
- montant dû;
- temps non facturé.

Si une fonction est prévue mais non disponible, l’indiquer clairement comme :

```text
Prévu
À venir
En test
Disponible en accès de lancement
```

Ne jamais présenter une fonction prévue comme disponible.

---

## Étape 5 — Vérifier les claims interdits

Chercher et supprimer ou reformuler toute phrase qui dit ou suggère :

- MADSuite traite le TDAH;
- MADSuite détecte l’attention;
- MADSuite mesure la fatigue cognitive réelle;
- MADSuite corrige le cerveau;
- MADSuite sait ce qui se passe dans la tête;
- MADSuite garantit plus de revenus;
- MADSuite remplace un comptable;
- MADSuite automatise toute l’entreprise sans effort.

Reformuler vers :

- gestion simple;
- accessibilité cognitive;
- actions claires;
- repères pour reprendre le fil;
- visibilité sur le travail facturable;
- réduction des frictions numériques.

---

## Étape 6 — Vérifier le ton

La page doit être :

- simple;
- directe;
- professionnelle;
- humaine;
- non culpabilisante;
- orientée action.

Éviter :

- jargon DevOps;
- jargon cloud;
- jargon IA;
- jargon médical;
- ton culpabilisant;
- promesses magiques;
- formulations floues.

Exemples à préférer :

```text
Il reste du temps non facturé.
```

au lieu de :

```text
Vous avez oublié de facturer votre temps.
```

---

## Étape 7 — Vérifier les CTA

Chaque page doit avoir un CTA principal clair.

CTA recommandés :

- Créer ma première facture;
- Commencer simplement;
- Voir comment ça marche;
- Voir les prix;
- Demander l’accès de lancement;
- Créer un client;
- Générer ma facture.

Le CTA doit mener vers une action réelle ou un parcours clair.

---

## Étape 8 — Vérifier la FAQ et les limites

La page doit répondre aux objections principales lorsque pertinent :

- Est-ce une comptabilité complète?
- Est-ce que Stripe est obligatoire?
- Est-ce que MADSuite remplace un comptable?
- Est-ce que MADSuite est un outil médical?
- Puis-je commencer sans tout configurer?
- Est-ce que MADSuite garantit plus de revenus?

Les limites doivent être claires sans affaiblir inutilement la page.

---

## Étape 9 — Vérifier les risques

Consulter :

```text
SYSTEME_MAD/10-ROADMAP/registre-risques-madsuite-madproof.md
```

Vérifier surtout :

- dérive médicale;
- promesse trop forte;
- jargon technique;
- fonction non prête vendue comme disponible;
- signup trop long;
- confusion IA;
- confusion comptabilité complète;
- promesse de revenus garantis.

Si un nouveau risque apparaît, l’ajouter au registre des risques.

---

## Étape 10 — Validation finale

Passer la checklist :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-034-validation-machine-a-clients-madsuite.md
```

Si un claim cognitif est présent, passer aussi :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md
```

Verdict possible :

- prêt à publier;
- prêt à tester;
- corrections mineures requises;
- non publiable;
- risque critique.

---

## Format de sortie attendu

Après l’application du playbook, produire :

```markdown
# Validation page publique MADSuite

## Page évaluée

- Type :
- Objectif :
- CTA principal :

## Résultat

- Prêt à publier / Prêt à tester / Corrections requises / Non publiable

## Corrections appliquées

- ...

## Claims sensibles trouvés

- ...

## Claims corrigés

- ...

## Risques restants

- ...

## Checklist utilisée

- CHK-034 : Oui / Non
- CHK-032 : Oui / Non / Non applicable

## Prochaine action

- ...
```

---

## Phrase de contrôle

> Est-ce que cette page donne envie d’essayer MADSuite sans promettre plus que ce que le produit peut livrer?
