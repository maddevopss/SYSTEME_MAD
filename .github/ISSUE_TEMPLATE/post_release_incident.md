---
name: Post-release incident
description: Documenter un incident après release MADSuite
title: "[Incident] "
labels: [incident, release, madsuite]
---

## Résumé

Décrire l’incident en une ou deux phrases.

## Environnement

- [ ] Production
- [ ] Staging
- [ ] Local

## Sévérité

- [ ] Critique
- [ ] Haute
- [ ] Moyenne
- [ ] Basse

## Impact observé

Décrire l’impact utilisateur ou opérationnel.

## Surface touchée

- [ ] Frontend
- [ ] Backend
- [ ] Auth
- [ ] Billing / payments
- [ ] Données organisationnelles
- [ ] Intégrations
- [ ] Documentation
- [ ] Autre

## Détection

Comment l’incident a été détecté ?

- [ ] Smoke test CHK-045
- [ ] Logs / monitoring
- [ ] Retour utilisateur
- [ ] Test manuel
- [ ] Autre

## Timeline

| Heure | Événement |
|---|---|
| | |

## Action immédiate

- [ ] Surveillance
- [ ] Hotfix
- [ ] Rollback
- [ ] Désactivation temporaire
- [ ] Investigation

## Validation après correction

- [ ] Smoke frontend
- [ ] Smoke métier
- [ ] Smoke API/backend
- [ ] Logs vérifiés
- [ ] Issue de prévention créée si nécessaire

## Notes

Ne pas publier d’information sensible, de données client réelles ou de logs non nettoyés.
