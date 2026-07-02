---
Projet: MADSuite / MAD DevOps
Document: README — Dossier atrier
Version: 1.0
Dernière révision: 2026-07-02
Statut: Officiel / Zone brute non officielle
Auteur: Marc-André Dufour / MAD DevOps
---

# README — Dossier `docs/research/atrier`

## 1. Rôle du dossier

Ce dossier est une zone brute de dépôt, de conversion et de tri.

Il sert à recevoir des documents non encore validés, notamment :

- recherches copiées;
- documents Word convertis en Markdown;
- notes générées par IA;
- brouillons;
- sources techniques;
- documents à nettoyer;
- idées à analyser;
- contenus à contre-vérifier.

## 2. Statut documentaire

Les fichiers dans ce dossier ne sont pas officiels.

Ils ne doivent pas être utilisés directement comme :

- promesse produit;
- documentation publique;
- claim marketing;
- preuve scientifique;
- conseil fiscal;
- conseil juridique;
- garantie de sécurité;
- standard MAD DevOps;
- décision produit officielle.

## 3. Règle centrale

```text
atrier = brut / non officiel / à vérifier
```

Un fichier ne sort de ce dossier qu’après analyse MADPROOF.

Règle permanente :

```text
Pas MADPROOF = pas officiel.
```

## 4. Pipeline obligatoire

Tout fichier traité doit suivre ce pipeline :

```text
Document brut
  -> lecture
  -> extraction des claims
  -> classification MADPROOF
  -> vérification des sources si nécessaire
  -> reformulation prudente
  -> suppression des claims dangereux
  -> résumé propre
  -> rangement dans SYSTEME_MAD/...
  -> mise à jour de la TODO
```

## 5. Outils MADPROOF à utiliser

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md` | Classer MVP / R&D / Clinique / Interdit. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-032-validation-claim-madproof.md` | Valider ou bloquer un claim sensible. |
| `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md` | Documenter un claim important. |
| `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md` | Suivre les claims acceptés, reformulés ou interdits. |
| `SYSTEME_MAD/05-PLAY/play-037-ajouter-ou-corriger-claim-madproof.md` | Procédure complète de correction d’un claim. |
| `SYSTEME_MAD/10-ROADMAP/todo-atrier-integration.md` | Suivi du tri et des prochaines actions. |

## 6. Classement de sortie

Quand un fichier est traité, il doit être résumé et rangé dans le bon dossier.

| Type de contenu | Destination recommandée |
|---|---|
| Cognition, TDAH, MAD Ariane, claims produit | `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/` |
| Web, HTML, CSS, JavaScript, PWA, accessibilité | `SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/` |
| Sécurité, vie privée, conformité, droit, fiscalité | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/` |
| GPS, géospatial, terrain, mesure, offline maps | `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/` |
| Standard officiel | `SYSTEME_MAD/03-STANDARDS/` |
| ADR officielle | `SYSTEME_MAD/04-ADR/` |
| Checklist officielle | `SYSTEME_MAD/09-CHECKLISTS/` |
| Roadmap ou TODO | `SYSTEME_MAD/10-ROADMAP/` |
| Template | `SYSTEME_MAD/07-TEMPLATES/` |

## 7. Claims à surveiller particulièrement

Tout claim est sensible s’il touche :

- TDAH;
- cognition;
- fatigue;
- flow;
- attention;
- état mental;
- diagnostic;
- traitement;
- thérapie;
- caméra;
- biométrie;
- surveillance;
- productivité employé;
- conformité légale;
- fiscalité;
- sécurité;
- performance;
- compatibilité navigateur ou store.

Ces claims doivent passer par CHK-032 avant intégration.

## 8. Formulations interdites par défaut

À ne pas intégrer sans reformulation ou suppression :

- “MADSuite traite le TDAH.”
- “MADSuite détecte l’état mental.”
- “MADSuite mesure la fatigue cognitive.”
- “MADSuite sait quand l’utilisateur décroche.”
- “La caméra permet de lire l’attention.”
- “Sécurité garantie.”
- “Conforme à 100 %.”
- “Admissible aux crédits d’impôt.”
- “Fonctionne partout.”
- “Rejet App Store impossible.”
- “Mesure GPS précise garantie.”

## 9. Règles de nettoyage Markdown

Lorsqu’un document est converti depuis Word ou une source externe :

- [ ] ajouter ou normaliser le YAML si le fichier est conservé;
- [ ] corriger les titres;
- [ ] corriger les tableaux brisés;
- [ ] corriger les blocs Markdown échappés;
- [ ] retirer les phrases conversationnelles;
- [ ] séparer les faits, hypothèses, opinions et recommandations;
- [ ] marquer les claims à vérifier;
- [ ] éviter de conserver les doublons;
- [ ] ne pas laisser un fichier nettoyé dans `atrier` s’il devient officiel.

## 10. Ce qui peut rester dans `atrier`

Peuvent rester ici :

- documents non lus;
- documents convertis mais non analysés;
- sources brutes;
- fichiers à vérifier;
- notes temporaires;
- brouillons non officialisés.

Ne doivent pas rester ici une fois terminés :

- standards;
- checklists;
- ADR;
- résumés MADPROOF propres;
- décisions produit;
- documents destinés à publication;
- templates officiels;
- roadmaps officielles.

## 11. Verdict

`docs/research/atrier` est une zone de quarantaine documentaire.

Son rôle est essentiel, mais son contenu n’a aucune autorité officielle tant qu’il n’a pas été traité par MADPROOF et déplacé dans `SYSTEME_MAD/...`.