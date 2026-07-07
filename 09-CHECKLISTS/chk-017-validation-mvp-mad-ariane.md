---
Projet: MAD DevOps
Document: CHK-017 — Validation MVP MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Officiel
Auteur: Marc-André Dufour
---

# CHK-017 — Validation MVP MAD Ariane

## Objectif

Valider que le MVP MAD Ariane respecte les exigences produit, techniques, sécurité, UX, mesure minimale et MADPROOF avant implémentation ou livraison.

Cette checklist doit être utilisée avant de considérer MAD Ariane comme prêt pour un MVP contrôlé.

---

## Documents à vérifier

| Document | Statut attendu |
|---|---|
| `mvp-mad-ariane-snapshot-reprise.md` | Présent |
| `spec-technique-mad-ariane-snapshot-reprise.md` | Présent |
| `tests-produit-mad-ariane.md` | Présent |
| `validation-simulee-mad-ariane-2026-07-01.md` | Présent |
| `backlog-implementation-mad-ariane.md` | Présent |
| `lot-1-fondation-donnees-mad-ariane.md` | Présent |
| `lot-2-backend-minimal-mad-ariane.md` | Présent |
| `lot-3-capture-contexte-applicatif-mad-ariane.md` | Présent |
| `lot-4-frontend-ux-mad-ariane.md` | Présent |
| `lot-5-tests-securite-produit-mad-ariane.md` | Présent |
| `lot-6-mesure-produit-minimale-mad-ariane.md` | Présent |
| `synthese-lots-implementation-mad-ariane.md` | Présent |

---

## 1. Validation produit

| Point | Statut |
|---|---|
| Le problème utilisateur est clairement défini. | `[OK / À corriger]` |
| Le snapshot vise le fil opérationnel, pas l’état mental. | `[OK / À corriger]` |
| La prochaine action est optionnelle. | `[OK / À corriger]` |
| Le module peut être ignoré. | `[OK / À corriger]` |
| Le module peut être désactivé. | `[OK / À corriger]` |
| La validation simulée a été documentée. | `[OK / À corriger]` |
| Les limites du MVP sont explicites. | `[OK / À corriger]` |

---

## 2. Validation données

| Point | Statut |
|---|---|
| `resume_snapshots` est le modèle cible. | `[OK / À corriger]` |
| `organisation_id` est obligatoire. | `[OK / À corriger]` |
| `user_id` est obligatoire. | `[OK / À corriger]` |
| `expires_at` est obligatoire. | `[OK / À corriger]` |
| TTL maximum 24 h défini. | `[OK / À corriger]` |
| Snapshots expirés exclus. | `[OK / À corriger]` |
| Snapshots ignorés exclus. | `[OK / À corriger]` |
| Données sensibles exclues. | `[OK / À corriger]` |

---

## 3. Validation backend

| Point | Statut |
|---|---|
| Routes backend définies. | `[OK / À corriger]` |
| Organisation imposée côté serveur. | `[OK / À corriger]` |
| Utilisateur imposé côté serveur. | `[OK / À corriger]` |
| Lecture active filtre TTL. | `[OK / À corriger]` |
| Lecture active filtre dismissed. | `[OK / À corriger]` |
| Dismiss respecte le scope utilisateur/organisation. | `[OK / À corriger]` |
| Préférence activation/désactivation prévue. | `[OK / À corriger]` |

---

## 4. Validation capture contexte

| Point | Statut |
|---|---|
| Capture limitée au contexte applicatif. | `[OK / À corriger]` |
| Route/module/entité/section définis. | `[OK / À corriger]` |
| Formulaire incomplet traité prudemment. | `[OK / À corriger]` |
| Dernière action métier résumée factuellement. | `[OK / À corriger]` |
| Aucun signal hors application requis. | `[OK / À corriger]` |
| Préférence désactivée respectée. | `[OK / À corriger]` |

---

## 5. Validation UX

| Point | Statut |
|---|---|
| Carte non bloquante. | `[OK / À corriger]` |
| Phrase d’explication présente. | `[OK / À corriger]` |
| Bouton Continuer prévu. | `[OK / À corriger]` |
| Bouton Ignorer prévu. | `[OK / À corriger]` |
| Bouton Désactiver prévu. | `[OK / À corriger]` |
| Détails sensibles masqués. | `[OK / À corriger]` |
| Texte non culpabilisant. | `[OK / À corriger]` |
| Accessibilité clavier prévue. | `[OK / À corriger]` |

---

## 6. Validation sécurité

| Point | Statut |
|---|---|
| Aucun accès cross-tenant possible. | `[OK / À corriger]` |
| Aucun accès cross-user possible. | `[OK / À corriger]` |
| Organisation client ignorée ou rejetée. | `[OK / À corriger]` |
| User client ignoré ou rejeté. | `[OK / À corriger]` |
| Secrets/tokens exclus. | `[OK / À corriger]` |
| Notes privées exclues. | `[OK / À corriger]` |
| Contenu hors application exclu. | `[OK / À corriger]` |

---

## 7. Validation MADPROOF

| Point | Statut |
|---|---|
| Aucun claim médical. | `[OK / À corriger]` |
| Aucune promesse clinique. | `[OK / À corriger]` |
| Aucune détection d’attention. | `[OK / À corriger]` |
| Aucune inférence d’état mental. | `[OK / À corriger]` |
| Aucune caméra. | `[OK / À corriger]` |
| Aucun micro. | `[OK / À corriger]` |
| Aucune biométrie. | `[OK / À corriger]` |
| Formulations prudentes validées. | `[OK / À corriger]` |

---

## 8. Validation mesure produit

| Point | Statut |
|---|---|
| Mesures limitées à l’usage produit. | `[OK / À corriger]` |
| Événements agrégés seulement. | `[OK / À corriger]` |
| Aucun contenu du snapshot dans la mesure. | `[OK / À corriger]` |
| Aucun score cognitif. | `[OK / À corriger]` |
| Aucun score attentionnel. | `[OK / À corriger]` |
| Interprétations prudentes. | `[OK / À corriger]` |

---

## Décision finale

```text
Décision : [Approuvé MVP / À corriger / Suspendu]
Raison : [Résumé]
Corrections requises : [Liste]
Prochaine action : [Lot ou tâche]
```

---

## Critère d’approbation

MAD Ariane peut être considéré comme MVP contrôlé seulement si :

```text
tous les points P0 sont OK,
les garde-fous MADPROOF sont respectés,
la sécurité multi-tenant est validée,
l’utilisateur garde le contrôle,
et aucune donnée intrusive n’est collectée.
```
