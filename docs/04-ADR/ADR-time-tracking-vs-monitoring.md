---
Projet: MADSuite / MAD DevOps
Document: ADR — Time Tracking vs Time Monitoring
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel à valider
Auteur: Marc-André Dufour / MAD DevOps
---

# ADR — Time Tracking vs Time Monitoring

## 1. Statut

**Accepté comme garde-fou MADPROOF produit.**

Cette décision encadre toute fonctionnalité MADSuite liée au suivi du temps, à la capture d’activité, à l’agent desktop, aux résumés de journée, au focus, à la facturation et à la reprise de tâche.

## 2. Contexte

MADSuite vise à aider l’utilisateur à reconstruire son temps, facturer plus justement, réduire la friction de reprise et externaliser une partie de sa mémoire de travail.

Le risque est qu’un module de suivi du temps dérive vers de la surveillance passive : keylogging, captures d’écran, scoring de productivité, alertes d’inactivité, comparaison entre employés ou tableau de bord patronal intrusif.

Cette dérive serait incompatible avec :

- la charte éthique MADSuite;
- la vie privée mentale;
- le consentement progressif et révocable;
- la non-discrimination;
- la conception TDAH-friendly;
- la confiance nécessaire au produit;
- les obligations de conformité liées aux renseignements personnels.

## 3. Décision

MADSuite adopte officiellement la doctrine suivante :

> MADSuite ne surveille pas la personne. MADSuite aide la personne à reconstruire son temps, son fil de travail et sa facturation.

## 4. Définitions

### 4.1 Time Tracking actif

Suivi volontaire où l’utilisateur contrôle explicitement le début, la fin, la correction, la classification et l’usage du temps.

Exemples acceptés :

- démarrer un timer;
- arrêter un timer;
- ajouter une note;
- associer le temps à un client/projet;
- corriger une durée;
- transformer une entrée validée en ligne de facture.

### 4.2 Capture assistive semi-automatique

Aide locale et transparente permettant de suggérer du temps ou du contexte à l’utilisateur, sans usage automatique non validé.

Exemples acceptés sous conditions :

- détecter l’application active localement;
- suggérer : “Tu sembles avoir travaillé sur Projet X pendant 23 minutes, veux-tu l’ajouter?”;
- reconstruire un résumé de journée privé;
- générer un snapshot de reprise;
- proposer une micro-action après interruption.

Conditions obligatoires :

- consentement explicite;
- affichage clair de ce qui est collecté;
- validation humaine avant facturation;
- suppression et correction faciles;
- mode local-only disponible;
- aucun usage disciplinaire par défaut.

### 4.3 Time Monitoring passif

Surveillance automatique continue visant à mesurer, scorer, contrôler ou évaluer la personne.

Exemples interdits dans le MVP :

- keylogging;
- capture d’écran périodique;
- enregistrement du contenu frappé;
- score de productivité individuel imposé;
- classement productif/improductif imposé;
- alertes d’inactivité envoyées à un tiers;
- dashboard manager nominatif;
- surveillance silencieuse;
- comparaison entre employés.

## 5. Règles MADPROOF obligatoires

### 5.1 Consentement

Toute capture automatique doit être :

- désactivée par défaut;
- expliquée en langage clair;
- activée volontairement;
- révocable;
- segmentée par type de donnée;
- visible dans les paramètres.

### 5.2 Minimisation

MADSuite collecte le minimum requis pour produire une aide utile.

Exemple :

- **À privilégier** : nom de l’application active, durée approximative, projet suggéré.
- **À éviter** : contenu exact des documents, frappes clavier, captures visuelles.

### 5.3 Validation avant conséquence

Aucune donnée capturée automatiquement ne doit :

- devenir facturable sans validation humaine;
- être envoyée à un client sans confirmation;
- être utilisée pour évaluer un employé;
- déclencher une sanction;
- être considérée comme preuve définitive.

### 5.4 Langage non culpabilisant

MADSuite ne doit pas dire :

- “Tu as perdu du temps.”
- “Tu n’as pas été productif.”
- “Tu étais inactif trop longtemps.”
- “Tu dois te reprendre.”

Formulations recommandées :

- “Veux-tu classer cette période?”
- “On dirait que ton contexte a changé.”
- “Tu peux reprendre ici.”
- “Cette période peut rester non classée.”
- “Aucune action requise.”

## 6. Architecture recommandée

```text
Agent local
  -> événements minimisés
  -> classification locale
  -> suggestion utilisateur
  -> validation explicite
  -> synchronisation optionnelle
  -> facturation seulement après confirmation
```

## 7. Données permises par défaut

| Donnée | MVP | Condition |
|---|---:|---|
| Timer manuel | Oui | Contrôle utilisateur |
| Notes manuelles | Oui | Contrôle utilisateur |
| Client/projet/tâche | Oui | Contrôle utilisateur |
| Application active | Optionnel | Consentement explicite |
| Titre de fenêtre | Optionnel strict | Masquage possible, consentement explicite |
| URL complète | Non par défaut | Seulement si nécessaire et filtrée |
| Domaine web | Optionnel | Consentement + minimisation |
| Frappe clavier | Non | Interdit MVP |
| Capture d’écran | Non | Interdit MVP |
| Contenu document | Non | Interdit MVP |
| Score employé | Non | Interdit |

## 8. Impacts positifs attendus

- Meilleure confiance utilisateur.
- Réduction du risque légal et réputationnel.
- Alignement avec la charte éthique.
- Meilleure acceptabilité pour utilisateurs TDAH.
- Positionnement distinct des outils de surveillance.
- Meilleure compatibilité avec privacy by design.

## 9. Compromis acceptés

Cette décision limite certaines fonctions de monitoring vendues par des concurrents. MADSuite accepte ce compromis pour protéger la confiance, l’autonomie et la sécurité cognitive de l’utilisateur.

## 10. Non-objectifs

MADSuite ne vise pas à :

- remplacer un système RH;
- surveiller les employés;
- prouver juridiquement la productivité;
- contrôler l’attention;
- diagnostiquer ou traiter un trouble;
- inférer l’état mental intime.

## 11. TODO d’implémentation

- [ ] Ajouter un écran de consentement pour capture assistive.
- [ ] Ajouter un mode local-only.
- [ ] Ajouter un centre de transparence : “Ce qui a été capturé”.
- [ ] Ajouter une suppression rapide des données capturées.
- [ ] Ajouter validation avant facturation.
- [ ] Ajouter masquage des titres de fenêtres sensibles.
- [ ] Ajouter liste d’exclusion d’applications/domaines.
- [ ] Ajouter tests empêchant l’activation silencieuse.
- [ ] Ajouter mention dans la politique de confidentialité.

## 12. Références internes

- `docs/research/resume_atrier_time_monitoring_ethique.md`
- Charte éthique fondatrice MADSuite
- Cadre MADPROOF Privacy
- MAD Ariane — Fil d’Ariane Zéro-Effort

## 13. Verdict final

**MADPROOF : accepté.**

Le suivi du temps MADSuite doit rester une aide personnelle, transparente et contrôlée par l’utilisateur. Toute fonction de surveillance passive est exclue du MVP et doit faire l’objet d’une nouvelle ADR avant considération.