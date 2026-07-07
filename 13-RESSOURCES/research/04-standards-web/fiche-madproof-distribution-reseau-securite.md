---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Distribution réseau, sécurité et UGC
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-DISTRIBUTION-SECURITY
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Distribution réseau, sécurité et UGC

## 1. Source brute

```text
docs/research/atrier/specifications_reseau_securite.md
```

## 2. Verdict

**MADPROOF-DISTRIBUTION-SECURITY : source utile pour compléter la distribution mobile/terrain, mais plusieurs formulations sont trop absolues ou trop enterprise pour le MVP.**

Le fichier couvre :

- Apple App Transport Security;
- restriction cleartext Android;
- communications API;
- cas réseau local pour matériel terrain;
- Loi 25 / privacy by design;
- données géospatiales sensibles;
- chiffrement transit/repos;
- contenu généré par utilisateur;
- signalement, blocage et modération.

## 3. Règle centrale

```text
La sécurité réseau doit être stricte par défaut, mais les exceptions doivent être explicites, minimales, documentées et testées.
```

Pour MADSuite :

```text
Aucun module sensible ne doit être publié sans gate privacy, sécurité et release.
```

## 4. À conserver

| Élément | Décision |
|---|---|
| HTTPS/WSS pour API production | Baseline obligatoire. |
| Aucune communication HTTP en production publique | Baseline obligatoire. |
| Exceptions réseau local limitées | MVP sous conditions. |
| ATS iOS à respecter | Baseline iOS. |
| Android network security config si exception claire | Baseline Android si nécessaire. |
| Localisation background désactivée par défaut | Baseline privacy. |
| Explication claire avant module localisation | Baseline privacy. |
| Suppression/export des données sensibles | Baseline privacy. |
| Chiffrement au repos selon risque | Baseline sécurité à calibrer. |
| UGC avec report/block/modération | Baseline si UGC publié. |

## 5. À reformuler ou vérifier

| Formulation brute | Problème | Décision |
|---|---|---|
| Politiques d’isolation extrêmes. | Trop vague / sensationnaliste. | Reformuler en contrôles précis. |
| TLS 1.3 obligatoire partout. | TLS moderne requis, mais versions/ciphers dépendent plateforme et fournisseurs. | Reformuler. |
| Certificats auto-signés rejetés automatiquement. | Risque réel, mais dépend build/config/contexte. | Reformuler. |
| Android lève toujours une exception immédiate en HTTP. | Cleartext bloqué par défaut selon cible/config, mais nuancer. | Reformuler. |
| Chiffrement de bout en bout pour toutes données géospatiales. | E2E a un sens précis; pas toujours requis ou compatible features. | Remplacer par chiffrement transit/repos adapté. |
| Clés matérielles tournantes obligatoires. | Enterprise/managed cloud, pas MVP universel. | Roadmap / à vérifier. |
| Tolérance zéro store pour UGC. | Politiques strictes, mais formulation trop absolue. | Reformuler. |
| Modération en moins de 24h obligatoire. | Peut être exigence de politique interne; à vérifier selon store/usage. | Reformuler. |

## 6. Baseline réseau production

Pour MADSuite et modules associés :

- [ ] API publique servie uniquement en HTTPS.
- [ ] WebSocket public en WSS.
- [ ] Aucun secret dans l’application cliente.
- [ ] Aucun endpoint de debug en production.
- [ ] CORS / origins contrôlés.
- [ ] Cookies et tokens configurés selon contexte.
- [ ] Timeouts réseau gérés.
- [ ] Erreurs réseau claires côté UX.
- [ ] Certificats valides.
- [ ] Monitoring erreurs réseau.

## 7. Exceptions réseau local

Une exception HTTP locale peut être envisagée seulement pour un cas matériel contrôlé, par exemple :

- matériel RTK local;
- appareil chantier sans TLS;
- réseau Wi-Fi local isolé;
- environnement de diagnostic.

Conditions :

- [ ] exception limitée à une adresse ou domaine précis;
- [ ] absente des builds publics si non nécessaire;
- [ ] documentée dans une ADR ou note technique;
- [ ] visible dans les tests release;
- [ ] sans transmission de secrets sensibles;
- [ ] désactivable si possible;
- [ ] jamais globale pour tout trafic.

## 8. Privacy localisation / terrain

Pour toute donnée géospatiale :

- [ ] localisation désactivée par défaut;
- [ ] consentement explicite;
- [ ] finalité claire;
- [ ] mode manuel si possible;
- [ ] suppression/export;
- [ ] rétention limitée;
- [ ] pas de tracking silencieux;
- [ ] pas d’inférence cognitive;
- [ ] pas de profilage externe;
- [ ] accès organisationnel contrôlé.

Document à consulter :

```text
SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md
```

## 9. Chiffrement et stockage

Baseline recommandée :

- [ ] chiffrement en transit HTTPS/WSS;
- [ ] chiffrement au repos via fournisseur cloud ou base gérée;
- [ ] secrets hors code;
- [ ] rotation secrets après incident;
- [ ] accès production limité;
- [ ] logs sans traces géographiques complètes inutiles;
- [ ] exports géographiques protégés;
- [ ] backups protégés.

À ne pas promettre sans architecture réelle :

- chiffrement de bout en bout;
- clés matérielles tournantes;
- zero knowledge;
- aucune fuite possible;
- confidentialité totale.

## 10. UGC / contenu utilisateur

Si MADSuite ou un module client publie du contenu partagé entre utilisateurs :

- [ ] bouton signaler;
- [ ] blocage utilisateur si interaction sociale;
- [ ] suppression ou masquage de contenu;
- [ ] journal de modération;
- [ ] responsable de modération identifié;
- [ ] règles d’usage accessibles;
- [ ] mécanisme de retrait rapide pour contenu problématique;
- [ ] gestion des photos/documents sensibles;
- [ ] notes de review expliquant la modération si store.

Si l’app ne contient pas d’UGC public ou social :

- [ ] documenter que le contenu reste organisationnel/interne;
- [ ] limiter le partage externe;
- [ ] éviter les fonctionnalités sociales inutiles.

## 11. Décisions MADSuite

| Sujet | Décision |
|---|---|
| API production | HTTPS/WSS seulement. |
| HTTP local | Exception seulement pour module terrain/matériel. |
| Localisation | Module terrain séparé seulement. |
| Données géospatiales | Sensibles. |
| UGC public/social | Hors MVP. |
| Notes/documents internes | Autorisés sous accès organisationnel contrôlé. |
| E2E | Non promis par défaut. |
| Clés matérielles tournantes | Roadmap/enterprise, pas claim MVP. |

## 12. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Sécurité SaaS baseline. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Privacy / Loi 25. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md` | Release stores. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-geospatial-location-privacy.md` | Localisation terrain. |
| `SYSTEME_MAD/03-STANDARDS/std-geospatial-measurement.md` | Mesure terrain. |

## 13. Documents à créer plus tard

| Document | Action |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-distribution-multiplateforme.md` | Consolider distribution mobile/desktop/réseau. |
| `SYSTEME_MAD/04-ADR/ADR-local-network-exceptions.md` | Si module RTK/local HTTP confirmé. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-ugc-moderation.md` | Si contenu utilisateur partagé devient produit. |

## 14. Claims interdits

Ne pas écrire :

- isolation réseau extrême;
- TLS 1.3 garanti partout;
- chiffrement de bout en bout garanti;
- confidentialité totale;
- aucune fuite possible;
- conformité Loi 25 garantie;
- conforme RGPD garanti;
- modération parfaite;
- aucun risque de rejet store.

Formulation prudente :

```text
MADSuite applique une baseline réseau et privacy stricte par défaut, avec des exceptions limitées et documentées lorsque le contexte technique l’exige.
```

## 15. TODO

- [ ] Créer `std-distribution-multiplateforme.md` pour consolider le bloc distribution.
- [ ] Créer `ADR-local-network-exceptions.md` seulement si module terrain avec matériel local confirmé.
- [ ] Créer `chk-ugc-moderation.md` seulement si UGC réel publié.
- [ ] Garder `specifications_reseau_securite.md` dans `atrier` comme source brute.

## 16. Verdict final

`specifications_reseau_securite.md` est traité comme source brute analysée.

Il complète le bloc distribution, mais les promesses de sécurité, conformité ou store doivent rester prudentes, vérifiables et non absolues.