---
Projet: MADSuite / MAD DevOps
Document: Standard — Distribution multiplateforme
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-DISTRIBUTION-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Distribution multiplateforme

## 1. Objectif

Ce standard consolide les règles MADPROOF pour préparer une distribution Web, PWA, mobile, desktop ou store de MADSuite / MAD DevOps.

Il regroupe les décisions issues des fiches :

```text
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-anti-rejet.md
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-mobile.md
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-reseau-securite.md
SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md
SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md
SYSTEME_MAD/03-STANDARDS/std-web-mobile.md
```

## 2. Règle centrale

```text
Une cible de distribution doit être choisie selon le besoin produit réel, pas selon l’attrait technique.
```

Règle MADPROOF :

```text
Une checklist réduit les risques; elle ne garantit jamais l’approbation, la compatibilité ou l’absence de rejet.
```

## 3. Stratégie MADSuite

| Sujet | Décision |
|---|---|
| Court terme | PWA-first. |
| Mobile natif | Roadmap seulement si besoin natif clair. |
| Desktop | À traiter séparément selon agent local / Electron / Tauri. |
| Store mobile | À éviter tant que la PWA suffit. |
| Distribution client entreprise | Possible via Web/PWA d’abord. |
| Claims d’acceptation store | Interdits. |
| Compatibilité universelle | Interdite. |

## 4. Choix de cible

Avant de viser une cible, répondre :

- [ ] Quelle capacité manque au Web/PWA ?
- [ ] Cette capacité est-elle critique pour la valeur produit ?
- [ ] Cette capacité exige-t-elle API native, store ou background task ?
- [ ] Le coût de maintenance est-il acceptable ?
- [ ] Les permissions sensibles sont-elles nécessaires ?
- [ ] Les règles store sont-elles compatibles avec le produit ?
- [ ] Une version Web/PWA suffit-elle pour vendre et valider ?

## 5. Baseline Web / PWA

- [ ] HTTPS.
- [ ] Responsive mobile.
- [ ] Safe areas mobiles.
- [ ] Manifest PWA.
- [ ] Service worker contrôlé.
- [ ] Fallback offline si annoncé.
- [ ] Aucun claim “offline garanti”.
- [ ] Accessibilité testée.
- [ ] Performance raisonnable.
- [ ] Privacy policy accessible.
- [ ] Aucun tracking silencieux.

## 6. Baseline mobile native / store

- [ ] Besoin natif documenté.
- [ ] Compte reviewer si login.
- [ ] Notes de review prêtes.
- [ ] Icônes conformes à la cible.
- [ ] Captures réelles.
- [ ] Aucun placeholder.
- [ ] Permissions minimales.
- [ ] Descriptions de permissions claires.
- [ ] Suppression de compte prévue si compte utilisateur.
- [ ] Auth testée.
- [ ] Push opt-in seulement.
- [ ] Offline/sync cadré si annoncé.
- [ ] App testée sur appareil réel.

## 7. Baseline réseau / sécurité

- [ ] API production en HTTPS.
- [ ] WebSocket production en WSS.
- [ ] Aucun endpoint debug exposé.
- [ ] Aucun secret dans le client.
- [ ] Logs sans secrets ni données sensibles inutiles.
- [ ] Timeouts réseau gérés.
- [ ] Erreurs réseau compréhensibles.
- [ ] CORS/origins contrôlés.
- [ ] Certificats valides.
- [ ] Exceptions réseau local limitées et documentées.

## 8. Permissions sensibles

Toute permission sensible doit respecter :

- [ ] finalité claire;
- [ ] demande au moment utile;
- [ ] explication avant prompt système;
- [ ] fallback en cas de refus;
- [ ] absence de demande si fonction non publiée;
- [ ] absence de redemande agressive;
- [ ] traçabilité dans la checklist release.

Permissions à surveiller :

- localisation;
- caméra;
- microphone;
- photos/fichiers;
- notifications;
- calendrier;
- contacts;
- bluetooth;
- background tasks;
- SMS / appels.

## 9. Données sensibles MADSuite

Traiter avec prudence :

- données clients;
- factures;
- temps travaillé;
- notes de tâche;
- données cognitives ou de focus;
- données de localisation;
- mesures terrain;
- fichiers joints;
- exports PDF/CSV/GeoJSON;
- données de compte.

## 10. UGC / contenu utilisateur

Si contenu partagé entre utilisateurs :

- [ ] signalement;
- [ ] blocage si interaction sociale;
- [ ] suppression/masquage;
- [ ] journal de modération;
- [ ] responsable de modération;
- [ ] règles d’usage;
- [ ] notes de review si store.

Si le contenu est uniquement interne à une organisation :

- [ ] accès organisationnel contrôlé;
- [ ] pas de publication publique;
- [ ] export contrôlé;
- [ ] logs modérés.

## 11. Distribution desktop

À traiter dans une passe séparée.

Baseline à prévoir :

- signature de code;
- auto-update sécurisé;
- sandbox si possible;
- stockage local sécurisé;
- logs locaux sans secrets;
- désinstallation propre;
- permissions OS minimales;
- compatibilité Windows/macOS/Linux selon cible réelle.

## 12. Claims interdits

Ne pas écrire :

- accepté par Apple garanti;
- accepté par Google garanti;
- aucun risque de rejet;
- compatible partout;
- fonctionne sur tous les appareils;
- sécurité garantie;
- confidentialité totale;
- offline garanti;
- notifications garanties;
- PWA équivaut toujours à natif;
- natif est toujours meilleur.

Formulation recommandée :

```text
La distribution est préparée selon une baseline MADPROOF visant à réduire les risques techniques, privacy, sécurité et review, sans garantir l’approbation d’une plateforme.
```

## 13. Gate avant release

- [ ] Claims MADPROOF validés.
- [ ] Checklist release adaptée à la cible.
- [ ] Privacy policy à jour.
- [ ] Sécurité baseline validée.
- [ ] Accessibilité minimale validée.
- [ ] Tests appareil/navigateur faits.
- [ ] Données de test prêtes.
- [ ] Compte reviewer prêt si store.
- [ ] Permissions justifiées.
- [ ] Assets vérifiés.
- [ ] Rollback ou désactivation possible.

## 14. Documents liés

| Document | Rôle |
|---|---|
| `chk-app-store-release.md` | Gate store mobile. |
| `chk-pwa-mobile.md` | Gate PWA. |
| `chk-security-saas-lite.md` | Gate sécurité SaaS. |
| `chk-loi25-madsuite.md` | Gate privacy. |
| `chk-open-source-licenses.md` | Gate dépendances. |
| `std-web-mobile.md` | Standard Web/PWA. |

## 15. Verdict MADPROOF

Ce standard est **MADPROOF-DISTRIBUTION-COMPLIANCE**.

Il doit rester un outil interne de cadrage. Il ne constitue pas une certification, une garantie d’acceptation store, ni une preuve de conformité juridique.