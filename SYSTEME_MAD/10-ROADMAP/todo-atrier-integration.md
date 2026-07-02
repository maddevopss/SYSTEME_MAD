---
Projet: MADSuite / MAD DevOps
Document: TODO — Intégration consolidée du dossier atrier
Version: 2.0
Dernière révision: 2026-07-02
Statut: Brouillon opérationnel
Auteur: Marc-André Dufour / MAD DevOps
---

# TODO — Intégration consolidée du dossier `atrier`

## 1. Résumé exécutif

Le dossier `docs/research/atrier` contient maintenant des fichiers Markdown exploitables issus des anciens documents Word/Google Docs.

La passe actuelle a produit six résumés, maintenant déplacés hors de `docs/research` vers les dossiers triés `SYSTEME_MAD/13-RESSOURCES/research/...`.

## 2. Classement stratégique

| Axe | Décision | Priorité |
|---|---|---|
| MADSuite Spec V2 cognitive | Conserver comme R&D interne, durcir les claims | P1 |
| Web mobile / HTML / CSS / JS | Transformer en standards MAD DevOps | P1 |
| Accessibilité web | Transformer en checklist WCAG 2.2 / COGA | P1 |
| Time tracking / monitoring | Transformer en ADR éthique anti-surveillance | P1 |
| Vie privée / Loi 25 | Transformer en checklist conformité MADSuite | P1 |
| Cybersécurité SaaS | Transformer en checklist security baseline | P1 |
| Fiscalité / RS&DE / CDAE | Garder comme pistes, validation comptable requise | P2 |
| Droit d’auteur / licences | Transformer en registre OSS + politique contenu IA | P2 |
| GPS / géospatial | Module métier futur séparé | P2/P3 |

## 3. Actions immédiates P1

### 3.1 Créer les standards Web MAD DevOps

- [ ] Créer `docs/03-STANDARDS/std-web-mobile.md`.
- [ ] Créer `docs/03-STANDARDS/std-accessibilite-web.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-pwa-mobile.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-web-accessibilite-wcag22.md`.
- [ ] Ajouter Lighthouse et axe-core comme outils QA.
- [ ] Ajouter test clavier manuel dans la checklist release.
- [ ] Ajouter règle : chaque API Web avancée doit avoir fallback.

### 3.2 Créer l’ADR Time Tracking vs Monitoring

- [ ] Créer `docs/04-ADR/ADR-time-tracking-vs-monitoring.md`.
- [ ] Définir la doctrine : assistance personnelle, pas surveillance RH.
- [ ] Interdire keylogging et screenshots dans le MVP.
- [ ] Exiger consentement explicite pour toute capture automatique.
- [ ] Ajouter validation humaine avant facturation.
- [ ] Ajouter suppression/édition facile des temps capturés.
- [ ] Ajouter langage UX non culpabilisant.

### 3.3 Durcir MADSuite Spec V2

- [ ] Relier `resume-atrier-madsuite-spec-v2.md` à la charte éthique fondatrice.
- [ ] Remplacer “confidentialité absolue” par “traitement local par défaut”.
- [ ] Remplacer “détection état utilisateur” par “classification de patterns d’interaction”.
- [ ] Ajouter matrice : MVP / R&D / Clinique / Interdit.
- [ ] Connecter ce document au module MAD Ariane.

### 3.4 Créer checklists conformité et sécurité

- [ ] Créer `docs/09-CHECKLISTS/chk-loi25-madsuite.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-security-saas-lite.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-open-source-licenses.md`.
- [ ] Ajouter versioning des politiques de confidentialité.
- [ ] Ajouter journal des consentements.
- [ ] Ajouter registre des incidents de confidentialité.
- [ ] Ajouter registre des dépendances open source.

## 4. Actions P2

### 4.1 Fiscalité et RS&DE

- [ ] Créer `docs/06-operations-internes/registre-rd-sred.md`.
- [ ] Ajouter template de journal R&D : hypothèse, incertitude, essai, résultat, échec.
- [ ] Ajouter suivi temps R&D par projet.
- [ ] Ajouter export simple pour comptable.
- [ ] Valider RS&DE/CDAE avec comptable avant claim.
- [ ] Ne jamais promettre “le gouvernement paie X%” dans une offre sans validation.

### 4.2 Droit d’auteur / propriété intellectuelle

- [ ] Créer un registre OSS : dépendance, licence, version, usage.
- [ ] Ajouter clause client : le client garantit les droits sur les contenus fournis.
- [ ] Ajouter politique de contenu IA : pas de copie protégée, vérification humaine.
- [ ] Ajouter attribution Creative Commons si applicable.

### 4.3 Géospatial

- [ ] Créer `SYSTEME_MAD/13-RESSOURCES/research/06-modules-metiers/geospatial/`.
- [ ] Déplacer les docs GPS/géospatial hors du cœur MADSuite.
- [ ] Créer spec `geo-core.md`.
- [ ] Ajouter modèle `measurement_confidence`.
- [ ] Ajouter règles : satellite = estimation; RTK Fix = mesure terrain potentiellement contractuelle.
- [ ] Ajouter tests projection et formule de l’arpenteur.

## 5. Nettoyage documentaire

- [ ] Ajouter YAML standard aux fichiers `.md` conservés dans `atrier` ou les déplacer.
- [ ] Corriger les blocs Markdown échappés issus de conversion Word.
- [ ] Retirer les phrases conversationnelles comme “Chef ?” dans docs officielles.
- [ ] Remplacer les formulations trop fortes : “obligatoire”, “complet”, “partout”, “rejet immédiat”.
- [ ] Séparer fait vérifié, bonne pratique, hypothèse produit, idée R&D.
- [ ] Ajouter sources officielles à chaque claim légal/fiscal/sécurité.

## 6. Décisions à prendre

- [ ] Est-ce que MADSuite vise PWA installable en priorité ? Recommandé : oui.
- [ ] Est-ce que le desktop agent capture automatiquement l’app active ? Recommandé : oui, local et validé par l’utilisateur.
- [ ] Est-ce qu’on exclut screenshots/keylogging du MVP ? Recommandé : oui, explicitement.
- [ ] Est-ce que le géospatial devient un module futur séparé ? Recommandé : oui.
- [ ] Est-ce que les documents fiscalité/droit deviennent des checklists internes seulement ? Recommandé : oui.

## 7. Priorité recommandée pour la prochaine passe

1. Nettoyer l’architecture en évitant le double système `docs/` et `SYSTEME_MAD/`.
2. Déplacer les ADR/checklists/standards créés récemment vers les dossiers `SYSTEME_MAD/` correspondants si nécessaire.
3. Nettoyer et déplacer progressivement les fichiers `docs/research/atrier` vers dossiers définitifs.
4. Garder `docs/research/atrier` comme bac brut uniquement.

## 8. Note finale

Le dossier `atrier` n’est plus seulement un bac de recherche. Il contient maintenant de quoi renforcer trois dimensions du projet :

1. **Produit MADSuite** : cognition, temps, fil d’Ariane, time tracking éthique.
2. **Studio MAD DevOps** : standards web, accessibilité, sécurité, conformité.
3. **Modules futurs** : géospatial, GPS, terrain, toiture, paysagement.

La prochaine étape est de continuer le tri jusqu’à ce que `docs/research/atrier` ne contienne que les documents non traités.