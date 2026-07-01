---
Projet: MAD DevOps
Document: CHK-010 — Validation du bloc projet client et livraison
Version: 1.0
Dernière révision: 2026-06-30
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-010 — Validation du bloc projet client et livraison

## Objectif

Valider que le bloc **Projet client et livraison** permet de passer d’un mandat accepté à une livraison claire, vérifiée et suivie.

Cette checklist sert à éviter qu’un projet accepté devienne flou, dispersé ou livré sans validation suffisante.

---

## Principe

```text
Démarrer clair.
Exécuter dans le périmètre.
Livrer vérifié.
Fermer avec apprentissage.
```

---

## Documents du bloc

| Document | Rôle attendu | Présent |
|---|---|---|
| `starter-kit-projet-mad-devops.md` | Créer une base projet propre. | [ ] |
| `play-011-demarrage-projet-client.md` | Démarrer un projet client. | [ ] |
| `play-012-revue-avant-production.md` | Vérifier avant mise en production ou livraison. | [ ] |
| `template-fiche-projet-client-mad-devops.md` | Suivre le mandat actif. | [ ] |
| `template-suivis-client-mad-devops.md` | Communiquer pendant et après la livraison. | [ ] |
| `chk-003-livraison-client.md` | Valider une livraison client. | [ ] |
| `chk-005-qualite-parcours-client.md` | Vérifier la qualité du parcours complet. | [ ] |
| `template-journal-bord-hebdomadaire-mad-devops.md` | Conserver les apprentissages utiles. | [ ] |
| `template-registre-ameliorations-systeme-mad-devops.md` | Transformer les frictions en améliorations. | [ ] |

---

# 1. Démarrage du projet

- [ ] Le projet démarre avec une base claire.
- [ ] Le problème à résoudre est visible.
- [ ] La première version utile est définie.
- [ ] Le périmètre accepté est visible.
- [ ] Le hors périmètre est visible.
- [ ] Les risques initiaux sont visibles.
- [ ] La prochaine action est claire.

---

# 2. Accès et dépendances

- [ ] Les accès requis sont identifiés.
- [ ] Les responsables sont nommés.
- [ ] Les dates cibles sont visibles.
- [ ] Les impacts sont compris si un accès manque.
- [ ] Aucun accès bloquant n’est ignoré.

---

# 3. Exécution

- [ ] Le projet reste aligné avec le périmètre accepté.
- [ ] Les décisions importantes sont documentées.
- [ ] Les changements de périmètre sont visibles.
- [ ] Les blocages sont documentés.
- [ ] Le client sait ce qui est attendu de lui.

---

# 4. Validation avant livraison

- [ ] Le livrable correspond au besoin accepté.
- [ ] Les éléments critiques sont vérifiés.
- [ ] Les limites connues sont documentées.
- [ ] Les instructions utiles sont prêtes.
- [ ] La note de livraison est claire.

---

# 5. Livraison

- [ ] Le client sait ce qui est livré.
- [ ] Le client sait quoi valider.
- [ ] Les accès ou instructions sont fournis.
- [ ] Les limites connues sont nommées.
- [ ] La prochaine étape est indiquée.

---

# 6. Suivi après livraison

- [ ] La réception client est confirmée ou suivie.
- [ ] Les corrections sont distinguées des nouvelles demandes.
- [ ] Les nouvelles demandes sont classées en phase future si nécessaire.
- [ ] Le projet peut être fermé proprement.
- [ ] Une suite peut être proposée sans pression inutile.

---

# 7. Apprentissage système

- [ ] Les irritants importants sont notés.
- [ ] Les causes utiles sont identifiées.
- [ ] Une amélioration système peut être proposée.
- [ ] Le registre des améliorations peut recevoir l’entrée.
- [ ] L’apprentissage ne devient pas une charge administrative.

---

# 8. Indexation

- [ ] Le starter kit est listé dans `SYSTEME_MAD/07-TEMPLATES/README.md`.
- [ ] Les playbooks projet sont listés dans `SYSTEME_MAD/05-PLAY/README.md`.
- [ ] Les templates de suivi sont listés dans `SYSTEME_MAD/07-TEMPLATES/README.md`.
- [ ] Les checklists de livraison sont listées dans `SYSTEME_MAD/09-CHECKLISTS/README.md`.
- [ ] Cette checklist est listée dans `SYSTEME_MAD/09-CHECKLISTS/README.md`.
- [ ] Le cockpit fondateur pointe vers les documents projet et livraison.

---

# 9. Verdict

## Bloc validé

- [ ] Le bloc permet de démarrer un mandat proprement.
- [ ] Le bloc permet de suivre un projet actif.
- [ ] Le bloc protège le périmètre accepté.
- [ ] Le bloc permet de livrer clairement.
- [ ] Le bloc permet d’apprendre sans alourdir.

## À ajuster

- [ ] Le démarrage projet est flou.
- [ ] Les accès requis ne sont pas assez visibles.
- [ ] La livraison manque de garde-fous.
- [ ] Le suivi après livraison est incomplet.
- [ ] Une friction récurrente n’est pas capturée.

---

## Critère de réussite

Le bloc **Projet client et livraison** est validé s’il permet de répondre rapidement :

```text
Quel mandat est accepté ?
Quel périmètre doit être respecté ?
Qu’est-ce qui bloque ?
Qu’est-ce qui est prêt à livrer ?
Qu’est-ce que le client doit valider ?
Quelle est la prochaine étape ?
Qu’est-ce qu’on apprend pour améliorer le système ?
```
