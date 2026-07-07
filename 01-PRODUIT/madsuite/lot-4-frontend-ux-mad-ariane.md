---
Projet: MAD DevOps
Document: Lot 4 — Frontend UX MAD Ariane
Version: 1.0
Dernière révision: 2026-07-01
Statut: Brouillon contrôlé
Auteur: Marc-André Dufour
---

# Lot 4 — Frontend UX MAD Ariane

## Objectif

Définir l’interface minimale de MAD Ariane pour afficher un snapshot de reprise de manière non bloquante, compréhensible et contrôlable.

Ce lot couvre la carte UX, les actions utilisateur, les états d’affichage et les règles de contenu.

---

## Principe UX

```text
Aider sans bloquer.
Expliquer sans infantiliser.
Proposer sans forcer.
Permettre de fermer ou désactiver.
```

---

## Portée du lot

| ID | Priorité | Tâche | Résultat attendu |
|---|---|---|---|
| MAD-ARIANE-014 | P0 | Créer `ResumeSnapshotCard`. | Une carte non bloquante s’affiche si un snapshot actif existe. |
| MAD-ARIANE-015 | P0 | Ajouter la phrase d’explication. | L’utilisateur comprend pourquoi la carte apparaît. |
| MAD-ARIANE-016 | P0 | Ajouter Continuer, Ignorer, Désactiver. | Les trois actions fonctionnent. |
| MAD-ARIANE-017 | P0 | Masquer les détails sensibles par défaut. | Le snapshot reste générique si nécessaire. |
| MAD-ARIANE-018 | P1 | Ajouter un état vide discret. | Rien ne s’affiche si aucun snapshot pertinent n’existe. |

---

## Composant principal

Nom recommandé :

```text
ResumeSnapshotCard
```

Responsabilités :

- afficher le snapshot actif;
- expliquer pourquoi la carte apparaît;
- proposer une prochaine action optionnelle;
- permettre Ignorer;
- permettre Désactiver;
- ne jamais bloquer le flux de travail.

---

## Contenu recommandé

```text
Reprendre le fil
Vous revenez après une interruption. Voici le dernier contexte applicatif détecté.

Vous étiez dans : [module]
Contexte : [type d’entité ou contexte générique]
Dernière action : [résumé court]
Prochaine action possible : [action optionnelle]

[Continuer] [Ignorer] [Désactiver]
```

---

## Règles de contenu

| Élément | Règle |
|---|---|
| Titre | Court, neutre, non médical. |
| Explication | Dire pourquoi la carte apparaît. |
| Module | Affichable. |
| Contexte | Générique par défaut. |
| Client ou personne nommée | Masqué si non nécessaire. |
| Montant, note privée, secret | Exclu. |
| Prochaine action | Toujours optionnelle. |
| Ton | Calme, simple, non culpabilisant. |

---

## Actions utilisateur

### Continuer

Effet attendu :

- naviguer vers le contexte applicatif si possible;
- ne pas forcer une modification;
- ne pas marquer comme réussite clinique ou cognitive.

### Ignorer

Effet attendu :

- appeler la route de dismissal;
- masquer la carte;
- ne plus reproposer ce snapshot actif.

### Désactiver

Effet attendu :

- désactiver la fonction pour l’utilisateur courant;
- masquer la carte;
- permettre la réactivation dans les préférences.

---

## États UX

| État | Comportement |
|---|---|
| Snapshot actif | Afficher la carte. |
| Aucun snapshot | Ne rien afficher. |
| Snapshot expiré | Ne rien afficher. |
| Snapshot ignoré | Ne rien afficher. |
| Fonction désactivée | Ne rien afficher. |
| Erreur API | Ne pas bloquer, journaliser discrètement. |
| Chargement | Éviter un loader intrusif. |

---

## Accessibilité

La carte doit :

- être lisible au clavier;
- avoir des boutons explicites;
- rester courte;
- ne pas clignoter;
- ne pas voler le focus sans raison;
- permettre la fermeture rapidement;
- être compréhensible sans jargon.

---

## Exemples interdits

```text
Vous semblez déconcentré.
Votre attention a baissé.
Vous devez reprendre cette tâche.
Votre état cognitif indique une interruption.
```

---

## Tests P0 requis

| Test | Résultat attendu |
|---|---|
| Snapshot actif | La carte s’affiche. |
| Aucun snapshot | Rien ne s’affiche. |
| Ignorer | La carte disparaît et appelle dismissal. |
| Désactiver | La carte disparaît et la préférence est mise à jour. |
| Continuer | L’utilisateur est dirigé vers le contexte si possible. |
| Détails sensibles | Les détails non nécessaires ne sont pas affichés. |
| Texte interdit | Aucun wording mentaliste ou médical. |
| Non bloquant | L’utilisateur peut continuer sans cliquer. |

---

## Hors portée

Ce lot ne doit pas inclure :

- backend complet;
- capture automatique complexe;
- télémétrie avancée;
- IA générative;
- détection d’attention;
- diagnostic;
- caméra;
- microphone;
- biométrie.

---

## Définition de terminé

Le Lot 4 est terminé lorsque :

```text
la carte peut afficher un snapshot actif,
les actions Continuer/Ignorer/Désactiver fonctionnent,
le texte reste prudent,
les détails sensibles sont masqués,
l’UX reste non bloquante,
et les tests P0 passent.
```
