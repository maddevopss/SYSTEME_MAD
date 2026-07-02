---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Distribution mobile Android / iOS
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-DISTRIBUTION-MOBILE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Distribution mobile Android / iOS

## 1. Source brute

```text
docs/research/atrier/specifications_mobiles_android.md
```

## 2. Verdict

**MADPROOF-DISTRIBUTION-MOBILE : source utile comme base de cadrage mobile Android/iOS, mais non utilisable comme standard officiel complet sans vérification de versions, stores et architecture réelle.**

Le document couvre :

- architecture Android / iOS;
- frameworks natifs ou cross-platform;
- authentification;
- biométrie locale;
- notifications push;
- données offline;
- chiffrement local;
- UX adaptative;
- accessibilité;
- cycle de vie;
- performance batterie;
- publication stores.

## 3. Règle centrale

```text
Le mobile doit être traité comme une cible produit spécifique, pas comme une simple copie du Web.
```

Mais pour MADSuite :

```text
PWA-first reste la stratégie recommandée tant que le besoin natif n’est pas prouvé.
```

## 4. Éléments à conserver

| Élément | Décision |
|---|---|
| Respect des conventions Android/iOS | Conserver. |
| Tests sur petits et grands écrans | Conserver. |
| Safe area / insets | Conserver. |
| Mode sombre / clair | Conserver. |
| Accessibilité TalkBack / VoiceOver | Conserver. |
| État sauvegardé en arrière-plan | Conserver. |
| Batterie et tâches de fond limitées | Conserver. |
| Push avec permission contextualisée | Conserver. |
| Offline avec sync explicite | Conserver. |
| Stockage sécurisé pour secrets/tokens | Conserver. |
| Compte reviewer si app store | Conserver. |
| Suppression de compte si compte utilisateur | Conserver. |

## 5. À reformuler ou vérifier

| Claim / règle brute | Problème | Décision |
|---|---|---|
| Android 10 à Android 14+ comme cible fixe | Les exigences changent. | À vérifier par release. |
| iOS 15 à iOS 17+ comme cible fixe | Les exigences changent. | À vérifier par release. |
| FCM comme passerelle unifiée obligatoire | Option fréquente, pas obligation. | Reformuler. |
| Social login Google/Apple recommandé par défaut | Augmente complexité review/auth. | À éviter MVP si non nécessaire. |
| Apple exige toujours Sign in with Apple si Google est présent | Règle à vérifier selon guideline et exceptions. | Reformuler. |
| Play Integrity requis | Utile selon risque, pas toujours MVP. | Roadmap / à vérifier. |
| RGPD / privacy rules mélangés | Juridictions à distinguer. | Reformuler. |
| Chiffrement local via outils précis seulement | Outils dépendent stack. | Reformuler. |
| Room/CoreData/Realm/SQLite équivalents | Chaque solution a compromis. | À décider par architecture. |

## 6. Décisions MADSuite

| Sujet | Décision |
|---|---|
| Stratégie court terme | PWA-first. |
| App mobile native | Roadmap seulement si besoin natif clair. |
| Cross-platform | À évaluer si store mobile devient prioritaire. |
| Kotlin/Swift natif | À privilégier seulement si besoin natif fort. |
| React Native / Flutter | Option si équipe/stack justifie. |
| Login social | Éviter MVP. |
| Biométrie | Déverrouillage local optionnel, pas identité principale seule. |
| Push notifications | Opt-in, contextualisées, non culpabilisantes. |
| Offline | Utile, mais sync et conflits doivent être cadrés. |
| Localisation | Hors MVP cognitif; module terrain séparé. |
| Caméra/micro | Interdit MVP cognition. |
| Play/App Store | Ne pas viser tant que PWA répond au besoin. |

## 7. Baseline mobile recommandée

### 7.1 UX / accessibilité

- [ ] Layout responsive mobile.
- [ ] Safe areas respectées.
- [ ] Petits écrans testés.
- [ ] Grands écrans testés.
- [ ] Mode sombre/clair.
- [ ] Text scaling.
- [ ] TalkBack / VoiceOver.
- [ ] Contrastes suffisants.
- [ ] Cibles tactiles suffisantes.
- [ ] Pas de geste unique sans alternative.

### 7.2 Auth / sécurité

- [ ] Login principal simple et robuste.
- [ ] Tokens stockés dans stockage sécurisé.
- [ ] Logout clair.
- [ ] Session expirée gérée.
- [ ] Suppression de compte prévue si compte utilisateur.
- [ ] Biométrie seulement comme confort local.
- [ ] Aucun secret dans l’app.
- [ ] Aucun token en log.

### 7.3 Notifications

- [ ] Demande contextualisée.
- [ ] Refus respecté.
- [ ] Réglages de notifications.
- [ ] Pas de spam.
- [ ] Pas de formulation culpabilisante.
- [ ] Pas de notification sensible sur écran verrouillé sans choix.

### 7.4 Offline / sync

- [ ] Données disponibles hors ligne clairement indiquées.
- [ ] File d’attente d’actions si offline.
- [ ] Sync visible.
- [ ] Erreurs de conflit gérées.
- [ ] Données sensibles protégées.
- [ ] Effacement local possible.

### 7.5 Lifecycle / performance

- [ ] Sauvegarde état avant background.
- [ ] Reprise propre après kill OS.
- [ ] Tâches de fond minimisées.
- [ ] Batterie testée.
- [ ] Timeout réseau géré.
- [ ] Mode faible connectivité prévu.

## 8. Documents liés

| Document | Rôle |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-app-store-release.md` | Checklist publication stores. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-pwa-mobile.md` | Checklist PWA mobile. |
| `SYSTEME_MAD/03-STANDARDS/std-web-mobile.md` | Standard Web/PWA mobile. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Privacy. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Sécurité. |

## 9. Documents à créer plus tard

| Document | Action |
|---|---|
| `SYSTEME_MAD/03-STANDARDS/std-distribution-multiplateforme.md` | Consolider mobile + desktop + stores. |
| `SYSTEME_MAD/04-ADR/ADR-pwa-first-vs-native-mobile.md` | Verrouiller stratégie mobile. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-mobile-offline-sync.md` | Si offline mobile devient prioritaire. |

## 10. Claims interdits

Ne pas écrire :

- fonctionne parfaitement sur Android et iOS;
- compatibilité universelle;
- offline garanti;
- notifications garanties;
- sécurité mobile garantie;
- publication store garantie;
- biométrie = sécurité absolue;
- PWA équivaut toujours à natif;
- natif est toujours meilleur.

Formulation prudente :

```text
La cible mobile doit être validée selon les besoins réels, les capacités natives nécessaires, les contraintes stores et les coûts de maintenance.
```

## 11. TODO

- [ ] Créer `ADR-pwa-first-vs-native-mobile.md` si la stratégie mobile doit être verrouillée.
- [ ] Traiter `specifications_reseau_securite.md` pour compléter le bloc distribution/sécurité.
- [ ] Traiter ensuite les fichiers plateformes desktop si nécessaire.
- [ ] Garder `specifications_mobiles_android.md` dans `atrier` comme source brute.

## 12. Verdict final

`specifications_mobiles_android.md` est traité comme source brute analysée.

Il est utile pour cadrer une future app mobile, mais la priorité MADSuite reste PWA-first tant qu’un besoin natif clair n’est pas démontré.