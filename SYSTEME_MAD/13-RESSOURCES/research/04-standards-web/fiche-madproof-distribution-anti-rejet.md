---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Distribution et anti-rejet stores
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-DISTRIBUTION-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Distribution et anti-rejet stores

## 1. Source brute

```text
docs/research/atrier/specifications_anti_rejet.md
```

## 2. Verdict

**MADPROOF-DISTRIBUTION-COMPLIANCE : utile comme base de checklist release, mais ne garantit jamais l’acceptation par Apple, Google ou un autre store.**

Le fichier contient de bonnes pratiques pour :

- icônes Android et iOS;
- launch screens;
- assets de boutiques;
- captures d’écran;
- comptes de test reviewer;
- permissions sensibles;
- login tiers;
- métadonnées;
- AndroidManifest;
- Info.plist.

## 3. Règle centrale

```text
Une checklist anti-rejet réduit les risques de refus.
Elle ne garantit jamais l’approbation d’un store.
```

## 4. À conserver

| Élément | Décision |
|---|---|
| Icônes adaptatives Android | Conserver. |
| Icône iOS opaque et carrée | Conserver. |
| Splash / launch screen natif | Conserver. |
| Captures fidèles à l’interface réelle | Conserver. |
| Compte de test reviewer ou mode démo | Critique. |
| Backend disponible pendant review | Critique. |
| Aucun placeholder en release | Critique. |
| Permissions sensibles justifiées | Critique. |
| Descriptions Info.plist | Critique iOS. |
| `android:exported` | Critique Android. |
| Privacy policy accessible | Critique. |
| Notes de review détaillées | Recommandé. |

## 5. À reformuler

| Formulation risquée | Reformulation MADPROOF |
|---|---|
| Rejeté à 100 %. | Très haut risque de refus. |
| Toujours obligatoire. | À vérifier selon plateforme, version, contexte et règles courantes. |
| Immédiatement rejeté. | Peut bloquer l’import, l’installation ou la review selon le cas. |
| Dimensions permanentes. | Dimensions à revérifier avant chaque release. |
| Acceptation garantie. | Réduction du risque seulement. |

## 6. Décisions MADSuite

| Sujet | Décision |
|---|---|
| MVP web/PWA | Prioritaire. |
| Store mobile natif | Roadmap. |
| Login social | À éviter au départ si non nécessaire. |
| Compte reviewer | Obligatoire si publication avec login. |
| Publicité / SDK tiers | À éviter MVP. |
| Permissions sensibles | Demander seulement au moment utile. |
| Localisation | Hors MVP cognitif. |
| Caméra / micro cognition | Interdit MVP. |
| Placeholders | Interdits en release publique. |

## 7. Sources officielles à vérifier avant release

Avant soumission, vérifier les sources officielles courantes :

- Apple App Review Guidelines;
- Apple Human Interface Guidelines;
- App Store Connect Help;
- Android Developers;
- Google Play Console Help;
- Google Play policies;
- documentation des permissions utilisées.

## 8. Documents à créer

| Document | Action |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md` | À créer. |
| `SYSTEME_MAD/03-STANDARDS/std-distribution-multiplateforme.md` | À créer plus tard. |

## 9. Claims interdits

Ne pas utiliser :

- acceptation garantie;
- aucun risque de rejet;
- conforme App Store garanti;
- conforme Play Store garanti;
- dimensions valides pour toujours;
- publication automatique sans review.

Formulation prudente :

```text
Cette checklist aide à réduire les risques de refus lors d’une soumission, sans garantir l’approbation par un store.
```

## 10. TODO

- [ ] Créer `chk-app-store-release.md`.
- [ ] Traiter ensuite `specifications_mobiles_android.md`.
- [ ] Traiter ensuite `specifications_reseau_securite.md`.
- [ ] Garder `specifications_anti_rejet.md` dans `atrier` comme source brute.

## 11. Verdict final

`specifications_anti_rejet.md` est traité comme source brute analysée. Il doit servir à produire une checklist release prudente, pas une promesse d’acceptation.