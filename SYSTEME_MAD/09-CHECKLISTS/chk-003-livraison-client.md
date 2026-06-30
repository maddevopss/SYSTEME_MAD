---
Projet: MAD DevOps
Document: CHK-003 — Livraison client
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-003 — Livraison client

## Objectif

Cette checklist sert à valider une livraison client, une mise en production ou une démonstration importante.

Elle transforme les standards qualité, sécurité et DevOps en vérifications concrètes avant livraison.

---

## 1. Besoin et périmètre

- [ ] Le besoin initial est compris.
- [ ] Le périmètre livré correspond à ce qui était prévu.
- [ ] Les écarts ou changements sont documentés.
- [ ] Les limites connues sont identifiées.
- [ ] Le client ou l’utilisateur sait ce qui est livré.

---

## 2. Fonctionnement principal

- [ ] Le parcours principal a été testé.
- [ ] Les actions critiques fonctionnent.
- [ ] Les cas d’erreur prévisibles sont gérés.
- [ ] Les messages visibles sont compréhensibles.
- [ ] Aucune donnée de démonstration ou test inutile n’est visible.

---

## 3. Tests et qualité

- [ ] Les tests pertinents ont été exécutés.
- [ ] Les comportements critiques sont couverts ou validés manuellement.
- [ ] Les anomalies bloquantes sont corrigées.
- [ ] Les anomalies connues restantes sont documentées.
- [ ] La Definition of Done applicable est respectée.

---

## 4. Sécurité

- [ ] Les accès sont vérifiés.
- [ ] Les permissions sont cohérentes.
- [ ] Les données sensibles ne sont pas exposées inutilement.
- [ ] Aucun secret n’est présent dans le dépôt ou les logs.
- [ ] Les actions sensibles sont protégées.
- [ ] Les règles multi-tenant sont respectées si applicable.

---

## 5. Configuration et environnements

- [ ] Le bon environnement est ciblé.
- [ ] Les variables d’environnement sont configurées.
- [ ] Les URLs frontend/backend sont correctes.
- [ ] Les services externes requis sont configurés.
- [ ] Les clés de test et production ne sont pas mélangées.
- [ ] La base de données ciblée est la bonne.

---

## 6. Données et migrations

- [ ] Les migrations nécessaires sont identifiées.
- [ ] Les migrations ont été appliquées dans le bon ordre.
- [ ] Les données critiques sont préservées.
- [ ] Les données temporaires sont retirées.
- [ ] Une stratégie de reprise existe si une migration pose problème.

---

## 7. UX et communication

- [ ] L’interface est compréhensible.
- [ ] Les écrans importants sont accessibles.
- [ ] Les libellés sont clairs.
- [ ] Les erreurs utilisateur sont formulées proprement.
- [ ] Le client sait comment utiliser la livraison.
- [ ] Les changements importants sont expliqués.

---

## 8. Documentation

- [ ] Le README ou guide pertinent est à jour.
- [ ] Les instructions d’installation ou de démarrage sont à jour.
- [ ] Les changements d’architecture sont documentés.
- [ ] Les nouvelles variables ou configurations sont documentées.
- [ ] Une ADR a été créée si une décision structurante a été prise.

---

## 9. Déploiement

- [ ] Le déploiement est volontaire et compris.
- [ ] Les validations avant déploiement sont faites.
- [ ] Le déploiement est traçable.
- [ ] Une vérification après déploiement est prévue.
- [ ] Une action de reprise ou retour arrière existe si nécessaire.

---

## 10. Vérification après livraison

- [ ] L’application démarre correctement.
- [ ] La page ou route principale répond.
- [ ] Le parcours critique fonctionne.
- [ ] Les logs récents ne montrent pas d’erreur évidente.
- [ ] Les intégrations importantes répondent.
- [ ] Le client ou l’utilisateur reçoit les informations nécessaires.

---

## Verdict

- [ ] Livraison approuvée.
- [ ] Livraison approuvée avec réserves mineures.
- [ ] Livraison bloquée.
- [ ] Livraison reportée.

---

## Références

- `STD-201` — Authentification
- `STD-202` — Autorisation
- `STD-204` — Protection des données
- `STD-301` — Stratégie de tests
- `STD-303` — Definition of Done
- `STD-305` — Validation avant livraison
- `STD-401` — Environnements
- `STD-403` — Déploiement
- `STD-404` — Observabilité
- `STD-405` — Reprise et retour arrière

---

## Note finale

Une livraison client n’est pas seulement un transfert de fichiers ou de code.

C’est un transfert de confiance.
