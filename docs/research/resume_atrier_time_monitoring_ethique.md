---
Projet: MADSuite / MAD DevOps
Document: Résumé MADPROOF — Time tracking, time monitoring et éthique produit
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-PRODUCT-ETHICS
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé MADPROOF — Time tracking, time monitoring et éthique produit

## 1. Source analysée

Fichier source : `docs/research/atrier/Recherche-timemonitoring.md`

Le document distingue le time tracking actif, où l’utilisateur démarre volontairement un suivi, du time monitoring passif, où un logiciel observe automatiquement l’activité numérique.

## 2. Verdict MADPROOF

**Classification : MADPROOF-PRODUCT-ETHICS — très pertinent, mais zone rouge si mal cadré.**

Ce bloc est central pour MADSuite parce que le produit inclut déjà du suivi du temps, de l’activité, du focus et potentiellement de la capture automatique. Il faut absolument distinguer :

- aide personnelle;
- facturation;
- mémoire de travail;
- analytics agrégés;
- surveillance employeur.

MADSuite doit se placer du côté :

> assistant personnel, volontaire, transparent, utile à l’utilisateur d’abord.

Et non :

> logiciel de surveillance passive, productivité punitive, score employé ou flicage.

## 3. Distinctions produit obligatoires

### 3.1 Time tracking actif

Acceptable pour MADSuite MVP :

- L’utilisateur démarre/arrête un timer.
- Il assigne à un client/projet/tâche.
- Il corrige son temps.
- Il décide ce qui devient facturable.
- Il peut exporter vers facture.

### 3.2 Capture semi-automatique assistive

Acceptable si privacy-first :

- Détection locale de fenêtre/app active.
- Suggestion : “Tu sembles avoir travaillé sur Projet X pendant 23 min, veux-tu l’ajouter?”
- Aucun envoi brut sans consentement.
- L’utilisateur valide avant facturation.
- Les données sont modifiables et supprimables.

### 3.3 Time monitoring passif / surveillance

À éviter dans MADSuite cœur :

- Captures d’écran régulières.
- Keylogging.
- Score de productivité individuel.
- Classement “productif/improductif” imposé.
- Alerts manager sur inactivité.
- Surveillance silencieuse.

## 4. Position MADSuite recommandée

MADSuite doit adopter une doctrine claire :

```text
On ne surveille pas la personne.
On aide la personne à reconstruire son temps, sa facture et son fil de travail.
```

Principes :

- Consentement explicite.
- Contrôle utilisateur.
- Données locales par défaut.
- Validation avant utilisation commerciale.
- Pas de capture d’écran MVP.
- Pas de keylogging.
- Pas de scoring employé.
- Pas de dashboard manager intrusif.

## 5. Liens avec TDAH / cognition

Le suivi du temps peut aider les personnes TDAH si :

- il externalise le temps;
- il réduit la mémoire de travail requise;
- il évite la culpabilisation;
- il propose des corrections douces;
- il accepte l’imprécision humaine;
- il permet “Start Now, Sort Later”.

Mais il peut nuire si :

- il augmente la honte;
- il impose une surveillance constante;
- il transforme l’aide en jugement;
- il punit l’inactivité ou les pauses;
- il expose trop de données à un tiers.

## 6. Fonctionnalités recommandées

### MVP

- Timer manuel.
- Notes rapides.
- Correction de temps.
- Facturation depuis temps validé.
- “Start Now, Sort Later”.
- Résumé de journée local/privé.

### Version assistive

- Suggestion locale d’activité.
- Détection interruption/reprise.
- Snapshot de reprise.
- Regroupement par contexte.
- Validation humaine avant ajout.

### À exclure MVP

- Screenshots.
- Keylogging.
- Surveillance silencieuse.
- Score de productivité imposé.
- Comparaison entre employés.
- Dashboard patronal nominatif.

## 7. TODO technique et éthique

- [ ] Créer `docs/04-ADR/ADR-time-tracking-vs-monitoring.md`.
- [ ] Ajouter une règle officielle : pas de keylogging, pas de screenshots MVP.
- [ ] Ajouter consentement explicite pour toute capture automatique.
- [ ] Ajouter un mode local-only pour le desktop agent.
- [ ] Ajouter suppression/édition facile des entrées capturées.
- [ ] Ajouter “validation avant facturation”.
- [ ] Ajouter logs de transparence : ce qui a été capturé, quand, pourquoi.
- [ ] Ajouter langage UX non culpabilisant.
- [ ] Ajouter avertissement légal pour tout usage employeur.
- [ ] Ajouter politique client : MADSuite n’est pas un outil de surveillance RH.

## 8. Claims à reformuler

| Claim | Problème | Formulation recommandée |
|---|---|---|
| “Augmente productivité de X%” | Données à vérifier et contexte variable | Peut aider à révéler du temps non facturé ou des frictions; impact à mesurer. |
| “Capture automatique = efficacité” | Peut nuire à autonomie/confiance | Capture assistive volontaire, transparente et corrigeable. |
| “Time monitoring” | Terme associé à surveillance | Utiliser “reconstruction assistée du temps” pour MADSuite. |
| “Productif/improductif” | Jugement dangereux | Utiliser “client/projet/contexte/non classé”. |

## 9. Statut final

Ce bloc est fondamental pour éviter une dérive de MADSuite vers un outil de surveillance. Il doit devenir une décision d’architecture et d’éthique produit.

**Décision : intégrer au cœur MADSuite comme doctrine anti-flicage et design assistif.**