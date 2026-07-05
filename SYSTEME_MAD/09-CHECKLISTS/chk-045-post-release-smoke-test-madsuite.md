---
Projet: MADSuite
Document: CHK-045 — Post-release smoke test MADSuite
Version: 1.0
Dernière révision: 2026-07-05
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-045 — Post-release smoke test MADSuite

## Rôle du document

Cette checklist valide rapidement qu’une release MADSuite Web/API fonctionne après déploiement.

Elle ne remplace pas les tests automatisés. Elle sert à confirmer que la production est utilisable après une release.

---

## Préconditions

- [ ] La release a été déployée.
- [ ] Les URLs production/staging sont connues.
- [ ] Un compte de test non client réel est disponible.
- [ ] Les logs/Sentry sont accessibles.
- [ ] Les changements inclus dans la release sont connus.

---

## Identification release

| Champ | Valeur |
|---|---|
| Date / heure | |
| Environnement | production / staging |
| Frontend commit | |
| Backend commit | |
| Migration appliquée | oui / non |
| Responsable validation | |

---

## Smoke frontend

- [ ] Page publique charge.
- [ ] Login affiche correctement.
- [ ] Authentification réussit avec compte test.
- [ ] Dashboard charge.
- [ ] Navigation principale fonctionne.
- [ ] Aucun écran blanc.
- [ ] Aucun scroll horizontal mobile évident.
- [ ] Logout fonctionne.

---

## Smoke métier

- [ ] Liste clients charge.
- [ ] Création ou ouverture client test fonctionne.
- [ ] Liste projets charge.
- [ ] Création ou ouverture projet test fonctionne.
- [ ] Timesheet charge.
- [ ] Timer ou entrée de temps test fonctionne si applicable.
- [ ] Liste factures charge.
- [ ] Ouverture facture test fonctionne.
- [ ] Liste estimés charge si module actif.
- [ ] Settings charge.

---

## Smoke API / backend

- [ ] Endpoint santé backend accessible selon permissions prévues.
- [ ] Les routes protégées refusent les accès anonymes.
- [ ] Les routes organisationnelles répondent pour l’organisation test.
- [ ] Les routes platform restent réservées super-admin.
- [ ] Aucune erreur 500 répétée dans les logs.
- [ ] Aucune erreur de migration visible.

---

## Smoke billing / payments si touché

- [ ] Stripe webhook actif si concerné.
- [ ] Portal ou checkout test accessible si concerné.
- [ ] Statut facture cohérent.
- [ ] Ledger ou événements financiers cohérents si concernés.

---

## Smoke MADPROOF

- [ ] Aucun texte visible ne fait de claim médical fort.
- [ ] Aucun texte visible ne promet de traiter ou diagnostiquer.
- [ ] Les suggestions restent présentées comme aide fonctionnelle.
- [ ] Les données sensibles ne sont pas affichées dans les logs ou l’UI.
- [ ] Les modules cognitifs restent non médicaux et contrôlables.

---

## Résultat

| Résultat | Action |
|---|---|
| Tout passe | Release confirmée |
| Échec mineur | Issue créée et surveillance accrue |
| Échec critique | Rollback ou correction immédiate |
| Échec sécurité / données | Stop release, investigation immédiate |

---

## Incidents observés

| Incident | Sévérité | Issue | Action |
|---|---|---|---|
| | | | |

---

## Décision finale

- [ ] Release confirmée.
- [ ] Release confirmée avec suivi.
- [ ] Rollback requis.
- [ ] Correction immédiate requise.

Notes :

```text

```
