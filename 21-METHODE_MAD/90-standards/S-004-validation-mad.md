---
id: S-004
title: Standard de validation MAD
status: Découverte
maturity: S-100
type: Standard
owner: MAD DevOps
created_at: 2026-07-12
updated_at: 2026-07-12
---

# S-004 — Standard de validation MAD

## Objectif

Définir comment transformer une affirmation sur le système en validation reproductible, observable et versionnée.

## Principe

Une validation MAD ne dit pas seulement qu’un test est vert. Elle précise :

- ce qui est affirmé;
- dans quel contexte;
- selon quels critères;
- avec quelles preuves;
- pendant combien de temps la preuve demeure valable.

## Niveaux de validation

### V0 — Exécution

Le projet s’installe, démarre, teste et build.

### V1 — Contrats

Les guards, schémas, politiques de sécurité et invariants techniques passent.

### V2 — Parcours

Un utilisateur complète une histoire métier cohérente de bout en bout.

### V3 — Résilience

Le parcours survit aux conditions perturbées prévues : expiration, concurrence, latence, perte réseau, dépendance indisponible ou reprise.

### V4 — Preuve

Les résultats sont accompagnés d’artefacts traçables : rapports, traces, captures, logs, commit, environnement et horodatage.

## Structure obligatoire d’une validation

```markdown
# V-XXX — Titre

## Affirmation

## Niveau

## Portée

## Prérequis

## Scénario

## Critères de réussite

## Critères d’échec

## Preuves attendues

## Résultat courant

## Limites

## Relations

## Historique
```

## Règles de rédaction

1. Une validation porte une affirmation principale.
2. Les critères sont observables et non interprétatifs.
3. Les prérequis nomment les dépendances et données nécessaires.
4. Le scénario peut être rejoué par une autre personne.
5. Les erreurs connues sont consignées au lieu d’être masquées.
6. Les preuves sensibles restent hors Git ou sont anonymisées.
7. Un test skipped ne constitue pas une réussite.
8. Un résultat local ne constitue pas automatiquement une preuve de production.
9. Toute modification importante du parcours invalide ou expire la validation précédente.
10. La validation référence les repos et contrôles réellement exécutés.

## Métadonnées minimales

Chaque validation doit préciser :

- `id`;
- `title`;
- `status`;
- `level`;
- `owner`;
- `created_at`;
- `updated_at`;
- `last_verified_at` lorsqu’elle a été exécutée;
- `expires_at` lorsque la durée de validité est limitée.

## Statuts

- `Planifiée` : scénario défini, jamais exécuté;
- `À valider` : implémentation disponible, preuve manquante;
- `Validée` : critères réussis et preuves disponibles;
- `Échouée` : au moins un critère bloquant est faux;
- `Expirée` : preuve trop ancienne ou contexte modifié;
- `Retirée` : affirmation ou capacité abandonnée.

## Preuves acceptables

Selon le niveau :

- sortie de commande complète;
- rapport JUnit ou Playwright;
- trace Playwright;
- capture ou vidéo;
- logs corrélés par identifiant de requête;
- résultat de workflow GitHub Actions;
- commit ou tag vérifié;
- rapport de migration;
- métrique ou requête de contrôle;
- validation manuelle explicitement signée et datée.

## Critères d’acceptation d’une nouvelle validation

- l’affirmation est-elle utile au produit ou à la gouvernance?
- le scénario est-il reproductible?
- les critères permettent-ils un verdict non ambigu?
- la preuve attendue respecte-t-elle la confidentialité?
- le niveau revendiqué correspond-il réellement à la portée?
- la validation apporte-t-elle une preuve distincte des tests existants?

## Limites

- une validation ne prouve que son contexte déclaré;
- l’accumulation de captures ne remplace pas des critères précis;
- une preuve V4 peut expirer rapidement dans un système en évolution;
- la validation ne doit pas devenir une cérémonie qui ralentit les petits changements sans risque.

## Journal du standard

### 2026-07-12 — Création

- niveaux V0 à V4 formalisés;
- structure obligatoire définie;
- statuts et règles de preuve établis;
- expiration des validations introduite.