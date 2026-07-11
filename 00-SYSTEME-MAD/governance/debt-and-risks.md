---
Projet: MADSuite
Document: Registre de dette et risques MADSuite
Version: 1.0
Dernière révision: 2026-07-11
Statut: À valider
Auteur: Marc-André Dufour
---

# Dette et risques MADSuite

## Dette active

| Priorité | Sujet | Dépôt | Mode | Statut |
| --- | --- | --- | --- | --- |
| P2 | Vérifier `@stripe/stripe-js` et `socket.io-client` | `madsuite-frontend` | Local requis | Ouvert |
| P2 | Réduire les warnings React `act(...)` et les logs console de tests | `madsuite-frontend` | Local ou GitHub | À planifier |
| P2 | Réduire le chunk Vite `Reports` supérieur à 500 kB | `madsuite-frontend` | Local requis | À planifier |
| P2 | Auditer les warnings et listeners non bloquants | `desktop-agent` | Local requis | À planifier |
| P3 | Nettoyer les branches locales temporaires | `madsuite` | Local requis | En attente |

## Risques surveillés

- dérive entre le repo agrégateur et les repos spécialisés;
- tests intermittents masquant une régression réelle;
- lockfiles modifiés manuellement sans npm;
- documentation de gouvernance devenue obsolète;
- réintroduction de secrets dans les canaux inter-processus ou inter-onglets.

## Risques bloquants

Aucun risque P0 connu au 2026-07-11.

## Règles de traitement

- un risque P0 ouvre immédiatement une issue dédiée;
- une dette locale doit être marquée explicitement;
- une dette sans propriétaire ou critère d’acceptation doit être reformulée;
- les risques résolus restent traçables dans le snapshot multi-repo.
