---
Projet: MADSuite / MAD DevOps
Document: CHK-032 — Validation d’un claim MADPROOF
Version: 2.0
Dernière révision: 2026-07-02
Statut: Officiel / MADPROOF-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# CHK-032 — Validation d’un claim MADPROOF

## 1. Objectif

Cette checklist sert à valider un claim lié à MADSuite, MAD DevOps, l’assistance cognitive, au TDAH, à la reprise de tâche, à la friction numérique, au flow, à la fatigue cognitive, à une fonctionnalité IA, à la conformité, à la sécurité, au fiscal, au juridique ou à une capacité technique.

Elle doit être utilisée avant d’ajouter, modifier ou publier un claim sensible.

Règle centrale :

```text
Pas MADPROOF = pas officiel.
```

## 2. Documents à consulter

- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/000-cadre-madproof.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/001-matrice-madproof-mvp-rd-clinique-interdit.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/999-registre-claims-madproof.md`
- `SYSTEME_MAD/07-TEMPLATES/template-claim-madproof.md`
- `SYSTEME_MAD/04-ADR/ADR-002-positionnement-non-medical-madsuite.md`
- `SYSTEME_MAD/04-ADR/ADR-003-gouvernance-madproof-claims-madsuite.md`
- `SYSTEME_MAD/04-ADR/ADR-time-tracking-vs-monitoring.md`

## 3. Identification du claim

- [ ] Le claim exact est écrit tel qu’il sera utilisé.
- [ ] Le claim brut est conservé sans correction initiale.
- [ ] La source est indiquée : fichier, URL, recherche, note, conversation ou document.
- [ ] Le contexte d’usage est identifié : produit, recherche, marketing, UX, IA, documentation, juridique, fiscal, sécurité ou technique.
- [ ] Le public cible est identifié : interne, utilisateur, client, agent IA ou public.
- [ ] Le document ou module concerné est indiqué.
- [ ] Le claim possède un identifiant ou sera ajouté au registre.

## 4. Classification officielle MADPROOF

Le claim doit être classé selon une catégorie officielle de la matrice.

| Catégorie | Validation requise |
|---|---|
| MVP | Risques maîtrisés et formulation prudente. |
| MVP sous conditions | Consentement, garde-fous ou limites explicites. |
| R&D | Ne doit pas devenir promesse produit ou marketing. |
| Clinique | Validation médicale/scientifique formelle requise avant usage public. |
| Interdit MVP | Exclu du MVP. Nouvelle ADR requise pour réouverture. |
| Interdit | À supprimer ou remplacer. |
| À vérifier | Source officielle ou validation externe requise. |
| À reformuler | Idée acceptable, wording à corriger. |

Validation :

- [ ] Une catégorie officielle est choisie.
- [ ] La catégorie est justifiée.
- [ ] Le niveau de preuve est indiqué : solide, plausible, fragile, non validé ou incompatible.
- [ ] Le risque principal est indiqué : scientifique, UX, éthique, marketing, légal, fiscal, sécurité, vie privée ou accessibilité.
- [ ] Le claim n’est pas classé officiel uniquement parce qu’il sonne bien.
- [ ] Une hypothèse R&D reste marquée comme hypothèse.
- [ ] Un claim fragile est marqué `À vérifier`, `À reformuler`, `Interdit MVP` ou `Interdit`.

## 5. Gate bloquant — Claims interdits ou dangereux

Le claim est bloqué si une case suivante est vraie et non résolue :

- [ ] Il prétend diagnostiquer une condition.
- [ ] Il prétend traiter le TDAH.
- [ ] Il promet une amélioration clinique.
- [ ] Il présente MADSuite comme une thérapie numérique validée.
- [ ] Il prétend lire l’état mental.
- [ ] Il prétend mesurer l’attention réelle.
- [ ] Il prétend détecter la fatigue cognitive réelle.
- [ ] Il transforme un signal d’usage en vérité psychologique.
- [ ] Il promet une sécurité absolue.
- [ ] Il promet une conformité légale garantie.
- [ ] Il promet une admissibilité fiscale ou un pourcentage d’aide sans validation.
- [ ] Il implique surveillance passive, keylogging, screenshot ou scoring employé.
- [ ] Il donne au système plus de pouvoir qu’à l’utilisateur.

Décision si bloquant :

- [ ] Supprimer.
- [ ] Reformuler.
- [ ] Classer Interdit MVP.
- [ ] Classer Clinique.
- [ ] Exiger source officielle ou validation professionnelle.

## 6. Prudence scientifique et produit

- [ ] Le claim ne dépasse pas ce qui peut être prouvé ou raisonnablement soutenu.
- [ ] Le claim ne transforme pas une hypothèse en certitude.
- [ ] Le claim ne généralise pas à tous les utilisateurs.
- [ ] Le claim distingue clairement observation d’usage, hypothèse produit et preuve validée.
- [ ] Le claim distingue aide, suggestion, automatisation et décision.
- [ ] Le claim ne remplace pas le jugement humain.
- [ ] Le claim ne crée pas de promesse de résultat.

## 7. Non-substitution médicale

- [ ] Le claim ne dit pas que MADSuite diagnostique le TDAH.
- [ ] Le claim ne dit pas que MADSuite traite le TDAH.
- [ ] Le claim ne présente pas MADSuite comme une thérapie numérique validée.
- [ ] Le claim ne promet pas de guérison, correction ou amélioration clinique.
- [ ] Le claim ne remplace pas un professionnel de la santé.
- [ ] Si le claim est médical ou clinique, il est classé `Clinique` ou `Interdit`.

## 8. Vie privée mentale et surveillance

- [ ] Le claim ne prétend pas lire l’état mental.
- [ ] Le claim ne prétend pas mesurer l’attention réelle.
- [ ] Le claim ne prétend pas détecter la fatigue cognitive réelle.
- [ ] Le claim ne prétend pas savoir ce que l’utilisateur pense.
- [ ] Le claim ne transforme pas un signal d’usage en vérité psychologique.
- [ ] Le claim respecte l’exclusion caméra/biométrie du MVP.
- [ ] Le claim respecte l’ADR Time Tracking vs Monitoring.
- [ ] Le claim ne rend pas acceptable une fonction de surveillance passive.

## 9. Données et intrusion

- [ ] Le claim peut être soutenu avec des données proportionnées.
- [ ] Les données nécessaires sont listées.
- [ ] Les données exclues sont respectées.
- [ ] Le claim n’exige pas de caméra dans le MVP.
- [ ] Le claim n’exige pas de microphone.
- [ ] Le claim n’exige pas de capture d’écran permanente.
- [ ] Le claim n’exige pas d’enregistrement brut du clavier.
- [ ] Le claim n’exige pas d’URL complète par défaut.
- [ ] Le claim n’exige pas de biométrie.
- [ ] Le claim peut être expliqué à l’utilisateur en langage clair.

## 10. Contrôle utilisateur

- [ ] L’utilisateur peut ignorer la recommandation liée au claim.
- [ ] L’utilisateur peut désactiver la fonction si applicable.
- [ ] L’utilisateur peut comprendre pourquoi une suggestion apparaît.
- [ ] L’utilisateur peut supprimer ou corriger les données liées si applicable.
- [ ] Le claim ne culpabilise pas l’utilisateur.
- [ ] Le claim ne crée pas de pression artificielle.
- [ ] Le claim ne donne pas trop de pouvoir au système.

## 11. Vérification renforcée par domaine

### 11.1 Santé / cognition / TDAH

- [ ] Source scientifique ou prudence R&D indiquée.
- [ ] Aucun claim clinique sans validation formelle.
- [ ] Les mots diagnostic, traitement, thérapie, symptôme, guérison, correction sont évités ou classés Clinique/Interdit.

### 11.2 Légal / conformité / vie privée

- [ ] Source officielle récente vérifiée.
- [ ] Juridiction indiquée : Québec, Canada, Europe, États-Unis ou autre.
- [ ] Le texte ne remplace pas un avis juridique.
- [ ] Les obligations sont formulées prudemment.

### 11.3 Fiscal / RS&DE / crédits

- [ ] Source officielle ou validation comptable requise.
- [ ] Aucune promesse d’admissibilité.
- [ ] Aucun pourcentage d’aide utilisé sans contexte, date et validation.
- [ ] Le claim reste interne sauf validation professionnelle.

### 11.4 Sécurité

- [ ] Aucune promesse de sécurité absolue.
- [ ] Aucune promesse de certification sans audit.
- [ ] Les contrôles sont présentés comme pratiques ou baseline, pas garanties.

### 11.5 Technique / plateformes / navigateurs / stores

- [ ] Support actuel vérifié si la compatibilité peut changer.
- [ ] Une API expérimentale ou partiellement supportée est marquée R&D ou MVP sous fallback.
- [ ] Aucune formulation “fonctionne partout” sans preuve.
- [ ] Les règles App Store, Play Store, OS et navigateurs sont vérifiées sur sources officielles si utilisées.

## 12. Formulation

- [ ] La formulation est simple, claire et non culpabilisante.
- [ ] La formulation est orientée action.
- [ ] La formulation évite les superlatifs invérifiables.
- [ ] La formulation évite le vocabulaire médical non validé.
- [ ] La formulation évite “détecte”, “mesure”, “sait”, “prouve”, “garantit” si non strictement démontré.
- [ ] Une formulation acceptée est inscrite dans le registre.
- [ ] Une formulation interdite est inscrite si le risque de dérive est élevé.

## 13. Décision

Choisir une seule décision principale :

- [ ] Intégrer — MVP.
- [ ] Intégrer — MVP sous conditions.
- [ ] Garder en R&D.
- [ ] Réserver au clinique.
- [ ] Vérifier avant usage.
- [ ] Reformuler avant usage.
- [ ] Classer Interdit MVP.
- [ ] Supprimer.

## 14. Mise à jour documentaire

- [ ] Le registre MADPROOF est mis à jour.
- [ ] Le template de fiche claim est utilisé si le claim est sensible.
- [ ] Le document source est mis à jour.
- [ ] Les documents liés sont référencés.
- [ ] Une ADR est créée si la décision modifie la gouvernance ou le positionnement.
- [ ] Aucun document concurrent n’est créé.
- [ ] Si le claim sort de `atrier`, un résumé MADPROOF est produit ou mis à jour.

## 15. Verdict final

- [ ] Validé — MVP.
- [ ] Validé — MVP sous conditions.
- [ ] À garder en R&D.
- [ ] Réservé clinique.
- [ ] À vérifier.
- [ ] À reformuler.
- [ ] Interdit MVP.
- [ ] Interdit / à supprimer.

## 16. Phrase de contrôle

> Est-ce que cette phrase redonne du pouvoir à l’utilisateur, ou est-ce qu’elle donne trop de pouvoir au système?

Si la phrase donne trop de pouvoir au système, elle doit être reformulée ou rejetée.