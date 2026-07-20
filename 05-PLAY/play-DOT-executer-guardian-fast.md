---
Projet: MAD DevOps
Document: PLAY-DOT — Exécuter le profil FAST de MAD Guardian
Version: 1.0
Dernière révision: 2026-07-20
Statut: Brouillon
Auteur: MAD DevOps
---

# PLAY-DOT — Exécuter le profil FAST de MAD Guardian

## Objet

Décrire l’exécution rapide et proportionnelle de MAD Guardian sur une pull request.

## Statut de l’identifiant

`DOT` est un identifiant temporaire en attente d’attribution dans le registre documentaire. Il est conservé dans ce lot afin d’éviter une rupture de liens.

## Procédure

1. Identifier les fichiers et domaines touchés.
2. Sélectionner uniquement les gates applicables.
3. Exécuter le lint, le build ciblé, les guards, les tests impactés et les contrats requis.
4. Effectuer le scan léger de secrets et la détection de tests orphelins.
5. Produire un résumé lisible des résultats.
6. Attribuer `PASS`, `FAIL` ou `NOT_REQUIRED` selon les preuves obtenues.
7. Conserver les références utiles sans recopier tous les journaux dans `SYSTEME_MAD`.

## Règles de prudence

- Un guard structurel n’est pas une preuve fonctionnelle.
- Une absence de preuve ne constitue pas une vulnérabilité confirmée.
- Un changement sensible doit être escaladé vers `CRITICAL` ou `FULL`.

## Références

- `00-SYSTEME-MAD/governance/mad-guardian.md`
- `03-STANDARDS/std-800-mad-guardian-quality-gates.md`
- `09-CHECKLISTS/chk-DOT-validation-mad-guardian.md`
