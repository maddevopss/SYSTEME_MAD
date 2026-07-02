---
Projet: MAD DevOps
Document: CHK-045 — Validation MVP Early Access MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-045 — Validation MVP Early Access MADSuite

## Objectif

Cette checklist valide que le MVP Early Access MADSuite est suffisamment utilisable pour accueillir de vrais utilisateurs.

Elle sert à vérifier que le parcours première facture fonctionne, que les revenus sont visibles et que le feedback peut être récupéré.

---

## Documents à consulter

```text
SYSTEME_MAD/10-ROADMAP/roadmap-mvp-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-developpeur-mvp-early-access-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/spec-revenue-core-madsuite.md
SYSTEME_MAD/01-PRODUIT/madsuite/registre-decisions-produit-madsuite.md
SYSTEME_MAD/00-SYSTEME-MAD/ai-context-madsuite-madproof.md
```

---

## 1. Authentification et organisation

- [ ] Un utilisateur peut créer un compte.
- [ ] Un utilisateur peut se connecter.
- [ ] Une organisation simple est créée ou associée.
- [ ] Les données sont rattachées à la bonne organisation.
- [ ] Les erreurs de connexion sont compréhensibles.

---

## 2. Clients

- [ ] Un utilisateur peut créer un client.
- [ ] Le nom du client est obligatoire.
- [ ] Les champs optionnels ne bloquent pas la création.
- [ ] Un utilisateur peut modifier un client.
- [ ] Un utilisateur peut voir la liste de ses clients.
- [ ] Les clients restent isolés par organisation.

---

## 3. Projets

- [ ] Un utilisateur peut créer un projet.
- [ ] Le projet peut être associé à un client.
- [ ] Le statut actif / archivé fonctionne si disponible.
- [ ] Le tarif horaire optionnel fonctionne si disponible.
- [ ] Un utilisateur peut voir la liste de ses projets.
- [ ] Les projets restent isolés par organisation.

---

## 4. Temps manuel

- [ ] Un utilisateur peut créer une entrée de temps manuelle.
- [ ] La date est enregistrée.
- [ ] La durée est enregistrée.
- [ ] Le client ou projet est associé.
- [ ] La description est enregistrée.
- [ ] Le statut facturable / non facturable est clair.
- [ ] Les entrées de temps restent isolées par organisation.

---

## 5. Factures

- [ ] Un utilisateur peut créer une facture.
- [ ] La facture peut être associée à un client.
- [ ] Une ligne de facture peut être ajoutée manuellement.
- [ ] Le total est calculé correctement.
- [ ] Les taxes simples fonctionnent si activées.
- [ ] Le statut brouillon / envoyée / payée est disponible ou clairement simulé.
- [ ] Les factures restent isolées par organisation.

---

## 6. PDF simple

- [ ] Un utilisateur peut prévisualiser ou générer un PDF simple.
- [ ] Le PDF affiche le client.
- [ ] Le PDF affiche les lignes.
- [ ] Le PDF affiche le total.
- [ ] Le PDF est lisible.
- [ ] Le PDF ne bloque pas le parcours première facture.

---

## 7. Dashboard revenus minimal

- [ ] Le total facturé est visible.
- [ ] Le total payé est visible si disponible.
- [ ] Le total dû est visible.
- [ ] Les factures récentes sont visibles.
- [ ] Un appel à l’action vers la création de facture est présent.
- [ ] Le dashboard aide à comprendre rapidement les revenus.

---

## 8. Feedback Early Access

- [ ] Un bouton ou lien feedback est visible.
- [ ] Le formulaire feedback est court.
- [ ] Le formulaire demande ce qui bloque.
- [ ] Le formulaire demande ce qui est utile.
- [ ] La permission de recontacter est claire si demandée.
- [ ] Le feedback peut être récupéré ou exporté.

---

## 9. Expérience utilisateur

- [ ] Les états vides indiquent quoi faire ensuite.
- [ ] Les boutons principaux sont clairs.
- [ ] Les erreurs sont lisibles.
- [ ] Le parcours ne dépend pas d’une configuration complexe.
- [ ] Le vocabulaire reste simple.
- [ ] L’utilisateur peut comprendre la prochaine action sans accompagnement constant.

---

## 10. Sécurité et isolation

- [ ] Les routes critiques exigent une authentification.
- [ ] Les données métier sont scopées par organisation.
- [ ] Un utilisateur ne peut pas voir les données d’une autre organisation.
- [ ] Un utilisateur ne peut pas modifier les données d’une autre organisation.
- [ ] Les entrées utilisateur sont validées.
- [ ] Les erreurs ne révèlent pas de données sensibles.

---

## 11. Garde-fous MADSuite / MADPROOF

- [ ] Le produit ne prétend pas diagnostiquer.
- [ ] Le produit ne prétend pas traiter le TDAH.
- [ ] Le produit ne prétend pas mesurer l’état mental réel.
- [ ] Le produit ne remplace pas un professionnel.
- [ ] Les formulations utilisent assistance cognitive non médicale, clarté opérationnelle, reprise du fil ou réduction de friction.
- [ ] Les fonctions IA, desktop et cognitive avancées ne bloquent pas le MVP.

---

## 12. Ce qui peut rester manuel

- [ ] Invitation Early Access.
- [ ] Sélection des premiers utilisateurs.
- [ ] Support utilisateur.
- [ ] Analyse mensuelle.
- [ ] Suivi partenaire.
- [ ] Envoi manuel du lien de paiement si nécessaire.
- [ ] Relances client.

---

## 13. Ce qui ne doit pas bloquer le MVP

- [ ] Stripe complet.
- [ ] IA avancée.
- [ ] Cognitive Engine complet.
- [ ] MAD Ariane complet.
- [ ] Agent desktop.
- [ ] Relances automatisées.
- [ ] Exports comptables avancés.
- [ ] Analytics avancés.

---

## 14. Critères de sortie

Le MVP est prêt pour Early Access si :

- [ ] un compte peut être créé;
- [ ] un client peut être créé;
- [ ] un projet peut être créé;
- [ ] du temps peut être enregistré;
- [ ] une facture peut être créée;
- [ ] un PDF simple peut être obtenu;
- [ ] les revenus ou montants dus sont visibles;
- [ ] un feedback peut être envoyé;
- [ ] aucune fuite inter-organisation n’est connue;
- [ ] le parcours peut être utilisé sans accompagnement constant.

---

## 15. Verdict

- [ ] MVP prêt pour Early Access.
- [ ] MVP prêt avec corrections mineures.
- [ ] MVP à compléter avant invitation utilisateurs.
- [ ] MVP non prêt.

Notes :

```text
Verdict :
Blocage principal :
Correction prioritaire :
Prochaine action :
```

---

## Phrase de contrôle

> Est-ce que le MVP permet à un vrai utilisateur de créer une première facture utile, voir ses revenus et donner du feedback?
