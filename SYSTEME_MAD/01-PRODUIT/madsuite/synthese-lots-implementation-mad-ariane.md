---
Projet: MAD DevOps
Document: Synthèse des lots d’implémentation — MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Synthèse des lots d’implémentation — MAD Ariane

## Objectif

Rassembler les lots nécessaires pour implémenter MAD Ariane de manière progressive, sécuritaire et conforme au cadre MADPROOF.

---

## Ordre recommandé

```text
Lot 1 — Fondation données
Lot 2 — Backend minimal
Lot 3 — Capture contexte applicatif
Lot 4 — Frontend UX
Lot 5 — Tests sécurité et produit
Lot 6 — Mesure produit minimale
```

---

## Vue d’ensemble

| Lot | Nom | Objectif | Statut documentaire |
|---|---|---|---|
| Lot 1 | Fondation données | Table, TTL, scope utilisateur/organisation. | Prêt |
| Lot 2 | Backend minimal | Routes, services, dismissal, préférence. | Prêt |
| Lot 3 | Capture contexte applicatif | Capturer route, module, entité, section, action métier. | Prêt |
| Lot 4 | Frontend UX | Carte non bloquante, Continuer, Ignorer, Désactiver. | Prêt |
| Lot 5 | Tests sécurité et produit | Sécurité, contenu, UX, validation produit. | Prêt |
| Lot 6 | Mesure produit minimale | Usage agrégé, non sensible, prudent. | Prêt |

---

## Chaîne fonctionnelle cible

```text
Contexte applicatif
→ ContextCapture
→ ResumeSnapshotService
→ resume_snapshots
→ API active
→ ResumeSnapshotCard
→ Action utilisateur
→ Mesure produit minimale
```

---

## Garde-fous permanents

MAD Ariane ne doit jamais :

- utiliser la caméra;
- utiliser le microphone;
- analyser la biométrie;
- détecter l’attention;
- inférer un état mental;
- produire un diagnostic;
- promettre un effet médical;
- surveiller hors application;
- comparer les utilisateurs entre eux.

---

## Critères MVP globaux

Le MVP MAD Ariane est acceptable lorsque :

```text
le snapshot est scopé par organisation et utilisateur,
les snapshots expirés ou ignorés sont exclus,
la carte UX est non bloquante,
l’utilisateur peut ignorer ou désactiver,
les données sensibles sont exclues,
les textes restent factuels,
les tests P0 passent,
et une validation produit est documentée.
```

---

## Prochaine décision

```text
Décision recommandée : conserver les lots comme plan d’implémentation officiel du MVP MAD Ariane.
Prochaine action : exécuter Lot 1 dans le code applicatif lorsque le repo backend est disponible.
```
