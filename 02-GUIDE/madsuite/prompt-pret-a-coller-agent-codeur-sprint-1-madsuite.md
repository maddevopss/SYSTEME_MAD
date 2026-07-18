---
Projet: MAD DevOps
Document: Prompt prêt à coller — Sprint 1 MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: Prêt à utiliser
Auteur: Marc-André Dufour
---

# Prompt prêt à coller — Sprint 1 MADSuite

## Rôle

Ce document fournit un prompt court pour lancer une session de développement sur le Sprint 1 MADSuite.

---

## Prompt

```text
Tu travailles sur MADSuite.

Objectif unique : Sprint 1 — Parcours première facture.

Flux à livrer :

Auth simple → Organisation simple → Client → Projet → Temps manuel → Facture brouillon → Total clair → PDF simple.

Lis avant de modifier :

- SYSTEME_MAD/01-PRODUIT/madsuite/index-global-madsuite.md
- SYSTEME_MAD/10-ROADMAP/roadmap-mvp-early-access-madsuite.md
- SYSTEME_MAD/10-ROADMAP/tickets-sprint-1-parcours-premiere-facture-madsuite.md
- SYSTEME_MAD/01-PRODUIT/madsuite/prompt-agent-developpeur-sprint-1-premiere-facture-madsuite.md
- SYSTEME_MAD/09-CHECKLISTS/chk-046-validation-sprint-1-premiere-facture-madsuite.md

Ordre de travail :

1. Inspecter l’existant.
2. Auth simple.
3. Organisation simple.
4. Clients MVP.
5. Projets MVP.
6. Temps manuel.
7. Facture brouillon.
8. Statuts facture simples.
9. PDF simple.
10. Parcours bout en bout.
11. Sécurité minimale.

Ne pas faire maintenant :

- IA avancée;
- Cognitive Engine complet;
- MAD Ariane complet;
- agent desktop;
- Stripe complet;
- portail client avancé;
- relances automatisées;
- analytics avancés;
- refonte complète UI;
- refonte complète backend.

Règle de décision :

Si le changement ne rapproche pas l’utilisateur d’une première facture utilisable, reporte-le.

Contraintes :

- routes critiques authentifiées;
- données liées à l’organisation;
- isolation organisationnelle;
- validation des entrées;
- erreurs lisibles;
- formulaires simples;
- états vides orientés action;
- vocabulaire non technique.

À chaque étape, retourne :

- ticket traité;
- fichiers modifiés;
- résumé;
- tests à exécuter;
- risques;
- prochaine étape.

Définition de terminé :

Un utilisateur peut créer une première facture utilisable avec un total clair et un PDF simple, sans dépendre des modules reportés.
```

---

## Phrase de contrôle

> Est-ce que ce prompt garde le développement centré sur la première facture?
