---
Projet: Système MAD
Document: Inventaire institutionnel des contrats P4.4 à P4.6
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
---

# Inventaire institutionnel des contrats P4.4 à P4.6

## 1. Objet

Le présent document poursuit la phase 1 d’inventaire institutionnel du MAD Registry.

Il vérifie les contrats :

- `registry-radar-p4-4.md`;
- `registry-health-p4-5.md`;
- `registry-health-trends-p4-6.md`.

Cette étape documente les rôles, sources, sorties, limites et ambiguïtés observées sans modifier les contrats, les générateurs, les formules ou les artefacts produits.

## 2. Chaîne fonctionnelle observée

```text
Sources canoniques du Registry
        ↓
P4.2 — mesures descriptives
        ↓
P4.3 — vue architecturale
        ↓
P4.4 — radar multidimensionnel
        ↓
P4.5 — diagnostic MAD Health
        ↓
P4.6 — historique et tendance du diagnostic
```

Chaque étape augmente le niveau d’interprétation. Cette progression exige donc des limites d’autorité de plus en plus explicites.

## 3. P4.4 — Radar MAD Registry

### 3.1 Rôle observé

P4.4 transforme six dimensions calculées en classifications descriptives :

- `Robuste`;
- `À surveiller`;
- `Fragile`.

Le contrat interdit une moyenne générale et conserve chaque axe séparément.

### 3.2 Sources et sorties

Sources déclarées :

- `registry-index.yaml`;
- `registry-traceability.yaml`.

Sorties :

- `generated-registry-radar.md`;
- `generated-registry-radar.json`.

### 3.3 Forces observées

- sources clairement identifiées;
- absence de modification ou d’inférence des relations;
- formules déterministes;
- absence de score global;
- limites d’interprétation annoncées;
- artefacts contrôlés par la CI.

### 3.4 Ambiguïtés à traiter

L’expression « lecture stratégique » peut être interprétée comme une évaluation stratégique de SYSTEME_MAD alors que le Radar décrit uniquement le périmètre enrôlé dans le Registry.

L’axe `Maturité canonique` combine plusieurs valeurs de statut (`Officiel`, `Accepté`, `Valide`, `Stable`) sans documenter dans ce contrat leur origine, leur équivalence ou leur appartenance au vocabulaire documentaire officiel.

Les seuils de 60 % et 80 % sont déclarés descriptifs, mais leur justification méthodologique n’est pas explicitée. Ils ne doivent donc pas devenir des seuils institutionnels, scientifiques ou de certification par simple répétition.

### 3.5 Correction future recommandée

Une PR atomique devrait :

- borner le Radar au périmètre canonique observé;
- qualifier le mot `stratégique`;
- préciser le caractère conventionnel des seuils;
- documenter l’origine des statuts retenus dans l’axe de maturité;
- rappeler que les sorties sont des projections dérivées sans autorité autonome.

Aucune formule ne devrait être modifiée dans cette correction documentaire.

## 4. P4.5 — MAD Health

### 4.1 Rôle observé

P4.5 produit un diagnostic synthétique à partir du plus faible axe P4.4 et des blocages structurels observés.

Les états sont :

- `Sain`;
- `Sous surveillance`;
- `Fragile`;
- `Critique`;
- `Indéterminé`.

### 4.2 Source et sorties

Source directe :

- `generated-registry-radar.json`.

Sorties :

- `generated-registry-health.md`;
- `generated-registry-health.json`.

### 4.3 Forces observées

- méthode conservatrice fondée sur l’axe minimal;
- absence de compensation entre dimensions;
- priorité donnée aux blocages structurels;
- confiance calculée séparément de l’état;
- absence déclarée de recommandation et de décision autonome;
- contrôle de synchronisation en CI.

### 4.4 Ambiguïtés à traiter

Le terme `santé` et l’état `Sain` peuvent être interprétés comme un verdict global sur le Registry ou SYSTEME_MAD. Le calcul porte pourtant uniquement sur les axes P4.4 et sur le périmètre enrôlé.

La source directe est un artefact généré. Le contrat indique correctement qu’il provient des sources canoniques, mais doit distinguer plus nettement source de calcul immédiate et autorité canonique d’origine.

La confiance mesure la disponibilité des axes et non la validité scientifique, documentaire ou institutionnelle du diagnostic. Cette distinction mérite d’être rendue impossible à manquer.

### 4.5 Correction future recommandée

Une PR atomique devrait :

- qualifier MAD Health comme diagnostic opérationnel du périmètre enrôlé;
- préciser que `Sain` ne signifie ni exhaustif, ni certifié, ni institutionnellement validé;
- distinguer source dérivée immédiate et sources canoniques d’origine;
- renforcer la distinction entre confiance de calcul et confiance dans la qualité du système;
- rappeler que les sorties ne possèdent aucune autorité autonome.

Aucun seuil, état ou calcul ne devrait être modifié dans cette correction documentaire.

## 5. P4.6 — Tendances MAD Health

### 5.1 Rôle observé

P4.6 conserve des snapshots du diagnostic P4.5 et compare le diagnostic courant au snapshot précédent.

Elle classe l’évolution comme :

- `Amélioration`;
- `Stable`;
- `Régression`;
- `Base initiale`.

### 5.2 Sources et sorties

Sources déclarées :

- `generated-registry-health.json` pour l’état courant;
- `registry-health-history.json` pour l’historique.

Sorties :

- `registry-health-history.json`;
- `generated-registry-health-trends.md`;
- `generated-registry-health-trends.json`.

### 5.3 Forces observées

- aucun snapshot implicite en mode `--check`;
- historique append-only sauf correction humaine explicite;
- absence de prédiction;
- distinction entre tendance et état courant;
- données temporelles explicites;
- contrôle CI documenté.

### 5.4 Ambiguïtés à traiter

Le fichier `registry-health-history.json` est qualifié d’« historique canonique » alors qu’il conserve des snapshots d’un diagnostic dérivé. Cette canonicité peut désigner l’historique de référence des snapshots sans donner aux diagnostics une autorité canonique sur le système lui-même. Cette nuance doit être explicite.

Une tendance positive ou négative dépend du périmètre enrôlé, des règles P4.4 et P4.5 et de la comparabilité des snapshots. Un changement de population canonique peut modifier la tendance sans représenter une amélioration ou une régression intrinsèque du dépôt.

La règle `Stable : variation comprise entre -0 et 0 point` semble équivaloir à une variation exactement nulle. Ce constat doit être vérifié contre le générateur avant toute correction; aucune modification logique n’est proposée dans le présent inventaire.

### 5.5 Correction future recommandée

Une PR documentaire atomique devrait :

- qualifier la canonicité de l’historique comme registre de référence des snapshots P4.5;
- préciser les conditions de comparabilité entre snapshots;
- rappeler qu’une tendance ne décrit pas automatiquement l’évolution globale de SYSTEME_MAD;
- distinguer correction humaine de l’historique et réécriture silencieuse;
- maintenir l’absence de prédiction et de recommandation.

La règle de stabilité doit être vérifiée séparément dans le générateur avant toute éventuelle correction fonctionnelle.

## 6. Tableau de synthèse

| Phase | Nature | Source immédiate | Sortie principale | Risque institutionnel principal |
|---|---|---|---|---|
| P4.4 | Classification multidimensionnelle | Sources canoniques | Radar Markdown et JSON | Confusion entre lecture du Registry et stratégie globale |
| P4.5 | Diagnostic synthétique conservateur | Radar généré | MAD Health Markdown et JSON | Confusion entre état calculé et verdict global |
| P4.6 | Mémoire temporelle | Diagnostic courant et historique | Tendances Markdown et JSON | Confusion entre tendance dérivée et évolution intrinsèque |

## 7. Garde-fous

Les prochaines corrections doivent respecter les contraintes suivantes :

1. ne modifier aucune formule pendant une clarification documentaire;
2. ne promouvoir aucun contrat au statut `Officiel`;
3. ne transformer aucun artefact généré en autorité canonique autonome;
4. toujours nommer le périmètre enrôlé;
5. distinguer mesure, classification, diagnostic, tendance et décision;
6. vérifier le générateur avant toute correction de règle opérationnelle;
7. conserver chaque correction dans une PR indépendante.

## 8. Conclusion

P4.4, P4.5 et P4.6 forment une chaîne cohérente et prudente sur le plan technique. Les principaux écarts observés sont des risques de surinterprétation documentaire plutôt que des contradictions fonctionnelles confirmées.

Trois corrections documentaires atomiques sont justifiées après validation du présent inventaire. Une vérification technique distincte de la règle de stabilité P4.6 est également nécessaire avant toute modification de comportement.