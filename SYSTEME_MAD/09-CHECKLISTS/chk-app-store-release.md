---
Projet: MADSuite / MAD DevOps
Document: Checklist — Release App Store / Play Store
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-DISTRIBUTION-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Release App Store / Play Store

## 1. Objectif

Cette checklist sert à préparer une publication mobile ou desktop packagée liée à MADSuite / MAD DevOps.

Elle vise à réduire les risques de refus, de blocage d’import, de build incomplet ou de problème de review.

Elle ne garantit pas l’acceptation par Apple, Google ou un autre store.

Document de référence :

```text
SYSTEME_MAD/13-RESSOURCES/research/04-standards-web/fiche-madproof-distribution-anti-rejet.md
```

## 2. Règle centrale

```text
Réduire le risque de rejet, jamais promettre l’acceptation.
```

## 3. Préparation générale

- [ ] App testée sur appareil réel.
- [ ] Aucun crash connu bloquant.
- [ ] Aucun écran vide inattendu.
- [ ] Aucun bouton mort.
- [ ] Aucun texte Lorem Ipsum.
- [ ] Aucun écran “bientôt disponible” dans le parcours publié.
- [ ] Backend de production ou de review disponible.
- [ ] Variables d’environnement de release validées.
- [ ] Version et build number incrémentés.
- [ ] Logs sensibles désactivés.
- [ ] Mode maintenance désactivé.

## 4. Accès reviewer

Si l’app exige une connexion :

- [ ] Compte de test actif.
- [ ] Mot de passe valide.
- [ ] Organisation/données de test préparées.
- [ ] Permissions du compte suffisantes.
- [ ] Parcours principal accessible.
- [ ] Aucune validation courriel/téléphone bloquante.
- [ ] Instructions de review claires.
- [ ] Backend accessible pendant la période de review.
- [ ] Mode démo complet disponible si compte impossible.

## 5. Métadonnées

- [ ] Nom de l’app exact.
- [ ] Description fidèle aux fonctionnalités réelles.
- [ ] Aucun claim médical, fiscal, juridique ou sécurité non validé.
- [ ] Aucune promesse de productivité garantie.
- [ ] Aucune promesse de précision garantie.
- [ ] Captures cohérentes avec l’app actuelle.
- [ ] Politique de confidentialité fournie.
- [ ] URL support fournie.
- [ ] Coordonnées développeur à jour.
- [ ] Catégorie correcte.
- [ ] Classification d’âge vérifiée.

## 6. Assets graphiques

- [ ] Icône Android adaptative si Android.
- [ ] Icône iOS carrée opaque si iOS.
- [ ] Icône haute résolution pour store.
- [ ] Aucun coin arrondi manuel pour iOS.
- [ ] Logo dans zone sûre.
- [ ] Splash / launch screen natif configuré.
- [ ] Graphisme de présentation vérifié si Play Store.
- [ ] Captures téléphone préparées.
- [ ] Captures tablette préparées si compatible.
- [ ] Assets revérifiés dans la console avant soumission.

## 7. Permissions

Pour chaque permission sensible :

- [ ] Permission nécessaire au cœur de la fonctionnalité.
- [ ] Demande au moment utile, pas au démarrage sans contexte.
- [ ] Explication utilisateur avant prompt système.
- [ ] Fallback si refus.
- [ ] Description système claire.
- [ ] Permission absente si fonctionnalité non publiée.
- [ ] SDK tiers vérifiés pour permissions implicites.

Permissions à surveiller :

- localisation;
- caméra;
- microphone;
- photos/fichiers;
- notifications;
- contacts;
- calendrier;
- bluetooth;
- background location;
- SMS / appels.

## 8. Privacy

- [ ] Politique de confidentialité à jour.
- [ ] Données collectées alignées avec la politique.
- [ ] Finalités claires.
- [ ] Suppression de compte prévue si compte utilisateur.
- [ ] Retrait du consentement prévu lorsque nécessaire.
- [ ] Aucun SDK tiers non documenté.
- [ ] Aucun tracking publicitaire dans MVP sauf décision explicite.
- [ ] Données sensibles minimisées.
- [ ] Localisation absente du MVP cognitif.
- [ ] Caméra/micro absents du MVP cognitif.

## 9. Authentification

- [ ] Login propre fonctionnel.
- [ ] Reset password fonctionnel si présent.
- [ ] Session expirée gérée proprement.
- [ ] Logout fonctionnel.
- [ ] Suppression de compte ou demande de suppression prévue si requis.
- [ ] Login social évité si non nécessaire.
- [ ] Si login tiers utilisé, exigences Apple/Google revérifiées.
- [ ] Aucun token affiché dans logs.

## 10. Android

- [ ] `android:exported` défini pour composants avec intent filters.
- [ ] `targetSdk` conforme aux exigences courantes.
- [ ] Permissions déclarées minimales.
- [ ] Background services justifiés si présents.
- [ ] Backup strategy décidée.
- [ ] Signature release configurée.
- [ ] Play App Signing vérifié si Play Store.
- [ ] Bundle `.aab` généré si requis.
- [ ] Tests sur appareil réel Android.

## 11. iOS

- [ ] `Info.plist` usage descriptions présentes pour APIs sensibles.
- [ ] Launch screen configuré.
- [ ] Capabilities/entitlements minimaux.
- [ ] Build signé correctement.
- [ ] Bundle identifier correct.
- [ ] App Transport Security vérifié.
- [ ] Tests sur appareil réel iOS si possible.
- [ ] Notes de review complètes.

## 12. Fonctionnalités sensibles MADSuite

- [ ] Aucun claim médical.
- [ ] Aucun claim de traitement TDAH.
- [ ] Aucun claim de lecture d’état mental.
- [ ] Aucun tracking silencieux.
- [ ] Aucun scoring punitif.
- [ ] Aucun dashboard employeur nominatif de productivité cognitive.
- [ ] Localisation seulement dans module terrain séparé.
- [ ] Mesure terrain présentée comme estimation qualifiée.

## 13. Paiements et abonnements

Si paiements natifs ou abonnements :

- [ ] Règles store revérifiées.
- [ ] Prix affichés clairement.
- [ ] Renouvellement expliqué.
- [ ] Annulation expliquée.
- [ ] Conditions accessibles.
- [ ] Fonctionnalités payantes visibles en review.
- [ ] Aucune fonctionnalité payante inaccessible au reviewer sans explication.

## 14. Notes de review

Inclure :

- [ ] identifiants de test;
- [ ] parcours à tester;
- [ ] fonctionnalités non évidentes;
- [ ] permissions utilisées et pourquoi;
- [ ] compte ou organisation de test;
- [ ] limitations connues non bloquantes;
- [ ] contacts support.

## 15. Gate final

Avant soumission :

- [ ] Checklist privacy validée.
- [ ] Checklist sécurité validée.
- [ ] Checklist open source validée.
- [ ] Claims MADPROOF validés.
- [ ] App testée sur appareil réel.
- [ ] Compte reviewer testé.
- [ ] Assets vérifiés dans la console.
- [ ] Build uploadé sans erreur.
- [ ] Notes de review complétées.

## 16. Claims interdits

Ne pas écrire :

- acceptation garantie;
- aucun risque de rejet;
- conforme App Store garanti;
- conforme Play Store garanti;
- publication automatique;
- approuvé d’avance;
- dimensions valides pour toujours.

Formulation recommandée :

```text
Cette checklist aide à préparer une soumission et à réduire les risques de refus, sans garantir l’approbation par un store.
```

## 17. Verdict MADPROOF

Cette checklist est **MADPROOF-DISTRIBUTION-COMPLIANCE** si elle reste utilisée comme outil interne de préparation release.

Elle ne doit pas être présentée comme certification ou garantie d’approbation.