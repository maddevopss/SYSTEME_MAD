---
Projet: Système MAD / MADSuite
Document: Standard — Design tokens et hiérarchie visuelle
Version: 1.0
Dernière révision: 2026-08-06
Statut: À valider / MADPROOF-ENGINEERING-RD
Auteur: MAD DevOps
---

# Standard — Design tokens et hiérarchie visuelle

## 1. Objectif

Définir une base commune pour les couleurs, espacements, typographies, rayons, ombres, tailles d’interaction et états visuels des interfaces MAD.

Ce document guide la conception et la revue. Il ne force pas une bibliothèque CSS, un framework ou une architecture frontend précise.

## 2. Décision MADPROOF

Les valeurs visuelles doivent être centralisées dans des tokens nommés et réutilisables. Les composants consomment les tokens; les pages composent les composants; les exceptions sont limitées et documentées.

Une valeur isolée ne devient pas une règle simplement parce qu’elle apparaît dans une maquette ou un fichier CSS.

## 3. Hiérarchie obligatoire

Respecter cette séparation :

1. **Tokens** : valeurs primitives ou sémantiques.
2. **Composants** : boutons, champs, cartes, tableaux, alertes et contrôles.
3. **Compositions** : sections, formulaires, grilles et parcours.
4. **Pages/modules** : assemblage métier.
5. **Exceptions** : cas justifié, localisé et documenté.

Interdit : recopier une valeur globale dans plusieurs composants lorsque le token approprié existe.

## 4. Familles minimales de tokens

### 4.1 Couleurs

Prévoir des tokens sémantiques pour :

- arrière-plan principal et secondaire;
- surface, surface élevée et bordure;
- texte principal, secondaire et désactivé;
- action primaire et secondaire;
- succès, avertissement, erreur et information;
- focus;
- états hover, pressed, selected et disabled.

Les états critiques ne doivent jamais être transmis par la couleur seule. Ajouter un libellé, une icône, une forme ou un message approprié.

### 4.2 Typographie

Définir au minimum :

- famille;
- taille;
- graisse;
- hauteur de ligne;
- espacement de lettres lorsque nécessaire;
- styles de titre, corps, aide, étiquette et erreur.

La hiérarchie doit rester lisible sans dépendre uniquement de la taille ou de la couleur.

### 4.3 Espacement et mise en page

Centraliser :

- échelle d’espacement;
- largeur maximale de contenu;
- gouttières;
- tailles de grille;
- points de rupture réellement utilisés;
- espacements de sections et de groupes de champs.

Les valeurs fluides ou responsives doivent être testées sur les largeurs réellement supportées.

### 4.4 Interaction

Définir des tokens ou règles communes pour :

- hauteur et zone interactive;
- rayon;
- bordure;
- ombre;
- transition;
- durée;
- focus visible;
- état de chargement;
- état désactivé;
- réduction de mouvement.

Aucune action critique ne doit dépendre d’une animation.

## 5. Nommage

Préférer les noms sémantiques :

- `color.text.primary`
- `color.surface.default`
- `color.action.primary`
- `color.feedback.error`
- `space.3`
- `radius.control`
- `focus.ring`
- `motion.duration.short`

Éviter les noms liés à une page ou à une couleur brute lorsque l’intention est sémantique :

- `dashboard-blue`
- `card-gray-2`
- `margin-client-page`

Les tokens primitifs peuvent exister, mais les composants doivent privilégier les tokens sémantiques.

## 6. Contraste, thèmes et états

Chaque token de couleur utilisé dans l’interface doit être vérifié dans les combinaisons et thèmes supportés.

La revue doit couvrir au minimum :

- clair et sombre si les deux sont offerts;
- texte, icônes et contrôles;
- hover, focus, pressed et disabled;
- erreur, succès et avertissement;
- tableaux, cartes, modales et formulaires;
- petit écran et zoom navigateur.

Un token non vérifié ne doit pas être présenté comme accessible.

## 7. Responsivité

Les tokens et composants doivent permettre :

- une lecture mobile sans défilement horizontal inutile;
- des grilles qui se replient proprement;
- des formulaires utilisables au tactile;
- des tableaux avec stratégie mobile explicite;
- des titres et actions qui ne se chevauchent pas;
- des espacements cohérents entre modules.

Les points de rupture sont des décisions de conception, pas une collection automatique de valeurs.

## 8. Exceptions

Toute exception doit indiquer :

- le composant ou module concerné;
- la raison;
- le risque;
- la durée prévue;
- la validation attendue;
- le ticket ou document de suivi lorsque pertinent.

Les styles inline ne doivent pas servir à contourner le système de tokens sauf nécessité démontrée.

## 9. Tests et preuves

Avant d’adopter un token ou un groupe de tokens :

- [ ] vérifier les usages clair/sombre applicables;
- [ ] vérifier les états interactifs;
- [ ] vérifier clavier et focus;
- [ ] vérifier zoom et petit écran;
- [ ] vérifier reduced motion;
- [ ] vérifier les composants qui consomment le token;
- [ ] documenter toute exception;
- [ ] joindre une preuve visuelle ou un test ciblé lorsque le changement est important.

Ce standard ne remplace pas la checklist d’accessibilité WCAG du Système MAD.

## 10. Gate de revue

Une PR visuelle est bloquée si elle :

- introduit plusieurs valeurs équivalentes non nommées;
- supprime le focus visible;
- utilise uniquement la couleur pour un état critique;
- ajoute du CSS dupliqué évitable;
- crée une divergence non documentée entre modules;
- casse l’usage mobile ou le zoom;
- rend une action critique dépendante d’une animation;
- modifie la logique métier ou un contrat API sans périmètre explicite.

## 11. Non-objectifs

Ce standard ne :

- certifie pas l’accessibilité d’une interface;
- ne garantit pas une expérience uniforme sur tous les appareils;
- ne choisit pas une technologie CSS;
- ne remplace pas les tests utilisateurs;
- ne valide pas des claims marketing ou commerciaux;
- ne modifie pas les contrats API ou la logique métier.

## 12. Verdict MADPROOF

**MADPROOF-ENGINEERING-RD : admissible sous conditions.**

Le standard peut guider les futurs modules après adaptation au design system réellement utilisé et validation par revue frontend/accessibilité.

