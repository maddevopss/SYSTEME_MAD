---
Projet: SYSTEME_MAD
Document: Rapport de stabilisation du cœur — version 1 candidate
Version: 0.1
Dernière révision: 2026-07-19
Statut: À valider
Auteur: Marc-André Dufour
Assumée par: Marc-André Dufour
Langue source: Français
---

# Rapport de stabilisation du cœur — version 1 candidate

## 1. Objet

Ce rapport applique le contrat `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md` et la checklist `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md`.

Il ne crée aucune nouvelle définition du cœur. Il rassemble les preuves disponibles, distingue les réserves encore ouvertes et formule une décision candidate proportionnée à l’état réel du référentiel.

## 2. Vérification anti-doublon préalable

Les documents et campagnes voisins ont été examinés avant la création du présent rapport.

| Élément existant | Rôle constaté | Décision |
| --- | --- | --- |
| `00-SYSTEME-MAD/governance/rapport-integration-architecturale-2026-07-18.md` | Intègre l’IIM, le Canon, la continuité cognitive et les relations | Conserver comme preuve d’archéologie et d’intégration; ne pas le remplacer. |
| `00-SYSTEME-MAD/governance/inventaire-phase-1-reference-mad.md` | Inventorie et classe une partie du référentiel | Réutiliser comme preuve d’inventaire; ne pas recréer son contenu. |
| `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md` | Définit le périmètre et les garanties de stabilité | Utiliser comme norme de décision. |
| `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md` | Définit les contrôles de stabilisation | Utiliser comme grille d’évaluation. |
| PR #185 | Proposition IIM concurrente fermée comme doublon absorbé | Considérer le conflit documentaire résolu. |
| PR #184 | Cadre MADPROOF de continuité cognitive | Maintenir hors du cœur stable tant que le construit demeure à valider. |

Conclusion anti-doublon : aucun document existant ne porte exactement la responsabilité de consigner la décision de stabilité du cœur v1 candidate. Le présent rapport comble cette lacune sans reprendre la responsabilité des documents existants.

## 3. Périmètre évalué

L’évaluation couvre les responsabilités suivantes :

1. Constitution et ordre d’autorité;
2. fondations et non-négociables;
3. gouvernance documentaire et métadonnées;
4. cycle de construction des connaissances;
5. MADPROOF;
6. Canon et mémoire institutionnelle;
7. cartographie des relations;
8. protection du référentiel et contrôles documentaires.

Les domaines métier, les recherches non stabilisées, les produits, MADSuite et les implémentations expérimentales sont exclus de cette décision.

## 4. Propriétaires documentaires confirmés

| Responsabilité | Propriétaire principal |
| --- | --- |
| Constitution | `00-SYSTEME-MAD/governance/constitution.md` |
| Registre et autorité documentaire | `00-SYSTEME-MAD/registry/REG-001-mad-registry.md` |
| Métadonnées | `00-SYSTEME-MAD/yaml-standard.md` |
| Fondations | `01-FONDATIONS/` |
| Construction des connaissances | `01-FONDATIONS/cycle-construction-connaissances.md` |
| MADPROOF | `13-RESSOURCES/research/03-madproof/000-cadre-madproof.md` |
| Canon | `00-SYSTEME-MAD/governance/canon-memoire-institutionnelle-mad.md` |
| Relations entre briques | `00-SYSTEME-MAD/governance/cartographie-dependances-reference-mad.md` |
| Protection du référentiel | `00-SYSTEME-MAD/governance/mad-guardian.md` |
| Contrat de stabilité | `00-SYSTEME-MAD/governance/contrat-stabilite-coeur-systeme-mad.md` |
| Contrôle de stabilisation | `09-CHECKLISTS/chk-010-stabilite-coeur-systeme-mad.md` |

Aucun second propriétaire actif n’a été retenu pour ces responsabilités.

## 5. Évaluation synthétique selon CHK-010

### A. Constitution et autorité

**État : satisfait sous réserve.**

La Constitution définit déjà l’ordre d’autorité, la souveraineté des bâtisseurs, la construction des connaissances, la qualité, l’assomption et la primauté des fondations.

Réserve : son statut documentaire demeure `Proposition`. Son autorité réelle doit être alignée explicitement avec son statut avant une déclaration définitive de version stable.

### B. Propriété documentaire

**État : satisfait.**

Les principales responsabilités possèdent un propriétaire identifiable. La campagne d’intégration architecturale a privilégié l’absorption et l’enrichissement des propriétaires existants plutôt que la multiplication des documents.

La PR #185 a été fermée comme doublon absorbé, ce qui élimine une concurrence connue autour de l’Infrastructure Intellectuelle MAD.

### C. Fondations

**État : satisfait sous réserve.**

Les fondations sont séparées des produits et des implémentations. Le principe de primauté empêche une couche supérieure de redéfinir rétroactivement le cœur pour légitimer son existence.

Réserve : toutes les fondations candidates ne possèdent pas nécessairement encore le même niveau de maturité ou d’autorité. La version stable doit porter sur le cadre de gouvernance du cœur, sans promouvoir automatiquement chaque fondation candidate.

### D. MADPROOF

**État : satisfait.**

Le cadre MADPROOF fournit une responsabilité documentaire dédiée. La continuité cognitive est maintenue dans une couche de recherche `À valider`, avec séparation entre concepts scientifiques établis, hypothèse d’intégration MAD et implémentations candidates.

Aucune validation scientifique générale de la continuité cognitive n’est incluse dans la présente décision.

### E. Canon et mémoire institutionnelle

**État : satisfait.**

Le Canon possède un propriétaire documentaire distinct du registre, des archives et de l’IIM. Les règles anti-doublon, de remplacement et de conservation de l’histoire sont documentées.

### F. Qualité automatisée

**État : à confirmer par les contrôles de la PR.**

Le dépôt possède des validations pour les entêtes YAML, les liens Markdown et la gouvernance des PR. Le présent rapport doit passer ces contrôles sans exception générale ni modification manuelle du dashboard généré.

Les résultats de CI de cette PR constitueront la preuve finale pour cette section.

### G. Dette et propositions ouvertes

**État : satisfait sous réserve.**

Les propositions non stabilisées demeurent identifiables et séparées du cœur :

- continuité cognitive comme construit d’intégration MAD;
- dimensions et mesures candidates associées;
- recherches métier non encore validées par MADPROOF;
- implémentations produit et expérimentations MADSuite;
- fondations candidates dont le statut n’est pas encore officiel.

Ces éléments ne bloquent pas la stabilité du cadre de gouvernance, à condition qu’ils ne soient pas présentés comme faisant partie de la version stable.

### H. Décision de version

**État : candidate.**

La décision demeure à valider par un bâtisseur après passage des contrôles et revue des réserves.

## 6. Réserves à fermer

### Réserve R1 — Statut de la Constitution

La Constitution joue un rôle d’autorité central tout en portant le statut `Proposition`.

Action recommandée : effectuer une PR dédiée de promotion ou préciser explicitement que son autorité demeure candidate. Ne pas modifier son statut silencieusement dans la présente campagne.

### Réserve R2 — Statut du contrat et de la checklist

Le contrat de stabilité et CHK-010 sont eux-mêmes au statut `Proposition`.

Action recommandée : les éprouver avec la présente campagne avant toute promotion. Cette campagne constitue leur première application formelle.

### Réserve R3 — Preuves automatisées

La réussite des contrôles de CI doit être consignée avant la décision finale.

Action recommandée : ajouter au dossier de décision la référence au résultat des contrôles de la PR.

### Réserve R4 — Portée de la version

La version candidate ne doit pas être interprétée comme une validation de toutes les connaissances, recherches et fondations candidates du dépôt.

Action recommandée : nommer la version comme stabilité du **cadre central de gouvernance et de construction des connaissances**, et non comme validation universelle de SYSTEME_MAD.

## 7. Décision candidate

### Résultat proposé : STABLE SOUS RÉSERVE

Le cœur de SYSTEME_MAD possède désormais :

- un ordre d’autorité documenté;
- des propriétaires documentaires identifiables;
- un cycle de construction des connaissances;
- un cadre MADPROOF distinct;
- un Canon et une mémoire institutionnelle;
- une cartographie des relations;
- des règles anti-doublon et de remplacement;
- des contrôles documentaires automatisés;
- un contrat et une checklist de stabilité.

Les réserves restantes concernent principalement l’alignement des statuts documentaires avec l’autorité réelle et la consignation des preuves finales de CI. Elles ne constituent pas, à ce stade, un conflit fondamental connu dans l’architecture du cœur.

## 8. Conditions de promotion vers STABLE

La décision peut passer de `STABLE SOUS RÉSERVE` à `STABLE` lorsque :

1. les contrôles de cette PR sont tous réussis;
2. le statut de la Constitution est décidé explicitement;
3. le contrat de stabilité et CHK-010 ont été revus après cette première application;
4. le périmètre exact de la version stable est publié;
5. la décision finale est assumée explicitement par un bâtisseur.

## 9. Suites recommandées

1. fermer les réserves R1 à R4 par des PR dédiées si une modification documentaire est requise;
2. publier une déclaration de stabilité courte après leur fermeture;
3. créer ensuite une étiquette de version uniquement si le dépôt possède une convention de versionnement institutionnel applicable;
4. rouvrir l’expansion des domaines sans modifier le cœur sauf justification structurante;
5. poursuivre la continuité cognitive dans MADPROOF, hors de la portée stable.

## 10. Principe directeur

> La stabilité du cœur ne signifie pas que tout est terminé. Elle signifie que le système sait désormais distinguer ce qui fonde, ce qui évolue, ce qui demeure à prouver et qui porte la responsabilité de chaque décision.
