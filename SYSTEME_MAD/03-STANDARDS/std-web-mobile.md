---
Projet: MADSuite / MAD DevOps
Document: Standard — Web mobile et PWA baseline
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-ENGINEERING
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Web mobile et PWA baseline

## 1. Objectif

Ce standard définit la base technique MAD DevOps pour construire des interfaces web modernes, rapides, accessibles et adaptées au mobile.

Il s’applique à MADSuite, aux sites clients, aux portails web, aux PWA, aux prototypes mobiles web et aux applications web installables.

## 2. Position MADPROOF

Le web mobile doit suivre trois règles :

1. **Simple d’abord** : HTML sémantique, CSS robuste, JavaScript minimal.
2. **Progressive enhancement** : les APIs modernes enrichissent l’expérience, mais ne cassent pas l’usage si elles sont absentes.
3. **Accessibilité par défaut** : clavier, lecteur d’écran, motion réduite, focus visible et charge cognitive réduite.

## 3. HTML baseline

Obligatoire :

- [ ] HTML sémantique.
- [ ] Structure de titres cohérente.
- [ ] Zones `main`, `nav`, `header`, `footer` utilisées correctement.
- [ ] Labels explicites pour tous les champs.
- [ ] Boutons réels pour actions, liens pour navigation.
- [ ] Attributs `alt` utiles pour images informatives.
- [ ] Images décoratives ignorées correctement par les technologies d’assistance.
- [ ] Balise viewport mobile présente.
- [ ] `viewport-fit=cover` seulement si les safe areas sont gérées.

## 4. Images responsives

- [ ] Utiliser `srcset` et `sizes` pour images importantes.
- [ ] Utiliser `picture` si recadrage différent par format.
- [ ] Utiliser WebP ou AVIF lorsque pertinent.
- [ ] Garder un fallback compatible.
- [ ] Ajouter le chargement paresseux sur images hors écran.
- [ ] Ne pas lazy-loader l’image principale responsable du LCP.
- [ ] Définir dimensions ou ratio pour éviter les déplacements visuels.

## 5. CSS mobile moderne

À utiliser :

- [ ] Flexbox et Grid.
- [ ] Container queries pour composants réutilisables.
- [ ] Fonctions fluides comme `clamp`, `min` et `max`.
- [ ] Unités mobiles modernes comme `dvh`, `svh` et `lvh`.
- [ ] Variables safe-area pour appareils avec encoches ou barres système.
- [ ] Respect de `prefers-reduced-motion`.
- [ ] Respect de `prefers-color-scheme` si thème système.
- [ ] Focus visible fort avec `focus-visible` ou équivalent.
- [ ] Gestion tactile prudente.
- [ ] Gestion du scroll dans modales/listes internes.

À éviter :

- [ ] `100vh` non testé sur mobile.
- [ ] `hover` comme seul déclencheur.
- [ ] Animations obligatoires.
- [ ] Texte trop petit.
- [ ] Zones tactiles minuscules.
- [ ] Layout dépendant uniquement de pixels fixes.

## 6. JavaScript baseline

- [ ] JavaScript chargé en différé lorsque possible.
- [ ] Code splitting pour pages lourdes.
- [ ] Tree shaking actif.
- [ ] Aucun script tiers inutile.
- [ ] Aucun secret dans le frontend.
- [ ] Gestion claire des erreurs côté client.
- [ ] Détection de support avant API moderne.
- [ ] Fallback prévu pour chaque API optionnelle.

Règle obligatoire :

> Si une fonctionnalité dépend d’une API navigateur avancée, l’interface doit rester utilisable quand cette API n’est pas disponible.

## 7. PWA baseline

Une PWA MAD DevOps doit inclure :

- [ ] Manifest valide.
- [ ] Nom court et nom complet.
- [ ] Icônes 192x192 et 512x512.
- [ ] Icônes maskable si pertinent.
- [ ] Mode d’affichage standalone ou choix justifié.
- [ ] Couleurs de thème définies.
- [ ] Service worker.
- [ ] Fallback offline propre.
- [ ] Cache des assets essentiels.
- [ ] Stratégie de mise à jour documentée.

## 8. APIs Web avancées

Autorisées seulement avec fallback :

- Web Share API.
- Clipboard API.
- WebOTP.
- Wake Lock.
- Background Sync.
- Periodic Background Sync.
- File System Access API.
- Web Bluetooth.
- WebUSB.
- WebNFC.
- Contacts Picker.

Règle MADPROOF :

> Une API expérimentale ou partiellement supportée ne doit jamais être le seul chemin pour une action critique.

## 9. Performance mobile

Objectifs :

- [ ] LCP égal ou inférieur à 2,5 s sur expérience réelle.
- [ ] INP égal ou inférieur à 200 ms sur expérience réelle.
- [ ] CLS égal ou inférieur à 0,1.
- [ ] Bundle JavaScript surveillé.
- [ ] Images optimisées.
- [ ] Polices optimisées.
- [ ] Requêtes critiques minimisées.
- [ ] Cache HTTP configuré.
- [ ] Aucun script tiers non justifié.

## 10. Accessibilité minimale intégrée

- [ ] Navigation clavier complète.
- [ ] Focus visible.
- [ ] Contraste suffisant.
- [ ] Labels de formulaire.
- [ ] Erreurs claires.
- [ ] Pas d’information uniquement par couleur.
- [ ] Alternatives au drag-and-drop.
- [ ] Motion réduite respectée.
- [ ] Cibles tactiles confortables.
- [ ] Langage simple.

## 11. MADSuite spécifique

Pour MADSuite :

- [ ] Les formulaires de facture doivent être utilisables sur mobile.
- [ ] Les actions financières doivent avoir confirmation claire.
- [ ] Les états vides doivent guider vers l’action suivante.
- [ ] Les erreurs doivent expliquer la correction.
- [ ] Les timers doivent rester visibles sans voler l’attention.
- [ ] Les transitions ne doivent pas nuire au focus.
- [ ] Les modules cognitifs doivent respecter privacy by design.

## 12. Tests requis

- [ ] Test Chrome desktop.
- [ ] Test Chrome Android ou émulation fiable.
- [ ] Test Safari iOS si public mobile visé.
- [ ] Lighthouse.
- [ ] axe-core ou équivalent.
- [ ] Test clavier manuel.
- [ ] Test réseau lent.
- [ ] Test reduced motion.
- [ ] Test dark/light mode.

## 13. Non-objectifs

Ce standard ne force pas :

- une stack unique;
- Next.js obligatoire;
- Tailwind obligatoire;
- PWA obligatoire pour chaque site vitrine;
- usage d’API expérimentale;
- score Lighthouse parfait au détriment du produit.

## 14. Verdict MADPROOF

**MADPROOF-ENGINEERING : accepté.**

Le standard est utilisable comme baseline web/mobile MAD DevOps. Il doit être révisé lorsque les compatibilités navigateur ou exigences stores changent.