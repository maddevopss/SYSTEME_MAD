---
Projet: MAD DevOps
Document: Doctrine de langage et de traçabilité MAD
Version: 0.1
Dernière révision: 2026-07-17
Statut: Proposition
Auteur: Marc-André Dufour
---

# Doctrine de langage et de traçabilité MAD

## Objet

Cette doctrine propose deux règles transversales pour SYSTEME_MAD :

1. le français est la langue de l’architecture;
2. chaque décision structurante doit pouvoir être retrouvée, comprise et justifiée.

Ces règles ne sont pas décoratives. Elles participent directement à la qualité de conception, à la transmission et à la continuité du projet.

## Principe de langage

> SYSTEME_MAD pense en français.

Les concepts métier, architecturaux, scientifiques et institutionnels sont nommés en français afin de favoriser une compréhension claire, durable et cohérente.

Les termes anglais sont réservés :

- aux standards techniques reconnus;
- aux noms propres de technologies;
- aux cas où aucun équivalent français clair et stable n’existe.

Exemples recommandés :

- moteur plutôt que *engine*;
- graphe de connaissances plutôt que *knowledge graph*;
- registre plutôt que *registry*;
- chaîne de traitement plutôt que *pipeline* lorsque le contexte n’exige pas le terme technique;
- feuille de route plutôt que *roadmap*;
- capacité plutôt que *feature*;
- noyau plutôt que *core*;
- référentiel plutôt que *repository* lorsqu’il s’agit d’un corpus conceptuel.

## Principe de conception

> Nommer correctement, c’est déjà concevoir.

Un terme officiel doit décrire clairement sa mission et éviter de créer un chevauchement avec un concept existant.

Tout nouveau terme architectural devrait :

- avoir une définition unique;
- être ajouté au lexique officiel;
- préciser son lien avec les concepts existants;
- être utilisé de manière cohérente dans les documents et les PR.

## Principe de traçabilité

> Chaque décision importante doit pouvoir être retrouvée, comprise et justifiée, même plusieurs années plus tard.

Une décision structurante doit conserver :

- le problème initial;
- le contexte;
- les options examinées;
- les critères utilisés;
- la décision retenue;
- les compromis acceptés;
- les conséquences prévues;
- les documents, PR et fondations concernés;
- la date et le statut de révision.

## Livre des décisions

La Chancellerie MAD devrait maintenir un Livre des décisions contenant les choix structurants du projet.

Références proposées :

```text
DEC-001 — Adoption des Trois Piliers
DEC-002 — Création de MADPROOF
DEC-003 — Adoption du Fil d’Ariane
DEC-004 — Infrastructure intellectuelle
DEC-005 — Conservatoire MAD
```

La numérotation réelle devra être établie à partir de l’inventaire historique du dépôt. Les exemples ci-dessus ne doivent pas être considérés comme des identifiants officiels avant cet inventaire.

## Principe de la première pierre

> Avant d’ajouter une nouvelle composante, nous devons être capables d’expliquer en une phrase pourquoi elle doit exister.

Une composante dont la mission ne peut pas être formulée clairement n’est pas encore suffisamment mûre pour entrer dans l’architecture.

## Modèle de description des PR

Toute PR structurante devrait contenir les sections suivantes :

### Résumé

Ce qui change.

### Pourquoi

Le problème ou le besoin traité.

### Solution proposée

La réponse apportée.

### Impact architectural

- institutions concernées;
- fondations concernées;
- capacités ou produits touchés;
- effets sur la gouvernance;
- compatibilité avec l’existant.

### Traçabilité

- décision ou proposition d’origine;
- documents complétés;
- PR antérieures liées;
- travaux préparés.

### Validation

- documentation mise à jour;
- terminologie conforme;
- impact architectural évalué;
- statut et niveau de confiance explicites;
- absence de promotion prématurée.

## Règles de prudence

1. Un nom institutionnel ne valide pas automatiquement une composante.
2. Une proposition discutée demeure une proposition tant qu’elle n’est pas intégrée et approuvée.
3. La traduction ne doit jamais déformer un standard technique.
4. La préférence pour le français ne doit pas nuire à l’interopérabilité ni à la précision.
5. Le Livre des décisions conserve aussi les décisions remplacées et leurs raisons.

## Impact architectural

- donne une identité linguistique cohérente à SYSTEME_MAD;
- facilite l’accueil de nouveaux contributeurs francophones;
- renforce la Chancellerie et le Fil d’Ariane;
- transforme les PR en jalons compréhensibles de l’histoire du projet;
- ne modifie aucun comportement applicatif.