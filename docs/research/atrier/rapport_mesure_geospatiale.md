# Rapport de Recherche : Technologies de Télédétection et Calcul de Précision Géospatial pour les Toitures et Terrains

Ce document regroupe l'état de l'art, les analyses de précision et les protocoles d'ingénierie pour le calcul à distance des dimensions de surfaces (terrains pour paysagistes, toits pour couvreurs) à l'aide de données géospatiales et de capteurs embarqués (GPS RTK, LiDAR, Photogrammétrie).

---

## 1. La limite du GPS Standard et la Révolution du GPS RTK (Real-Time Kinematic)

Pour un paysagiste ou un couvreur, utiliser le GPS natif d'un téléphone intelligent (précision de **3 à 5 mètres**) est une hérésie qui mène à des erreurs de soumission coûteuses (ex: commander 30% trop de tourbe ou de bardeaux d'asphalte).

### 📡 Technologie RTK (Real-Time Kinematic) et Précision Centimétrique
* **Le Concept :** Le positionnement cinématique en temps réel (RTK) utilise une station de base fixe (au sol) et un récepteur mobile (*rover*, ou un drone) pour corriger les erreurs de calcul atmosphériques des signaux GNSS en temps réel.
* **Les Chiffres :** Des études comparatives de positionnement démontrent que le RTK fait passer la précision horizontale de plusieurs mètres à **moins de 1 à 2 centimètres**. 
* **Application Métier :** Pour un paysagiste, un arpenteur ou un estimateur équipé d'une canne GPS RTK connectée en Bluetooth à l'application mobile (via des protocoles comme NTRIP), il suffit de marcher sur les coins du terrain pour obtenir un polygone parfait d'une précision chirurgicale, permettant de calculer l'aire ($A$) exacte instantanément.

---

## 2. Le Rendu des Toitures : Photogrammétrie vs LiDAR

Pour un couvreur, grimper sur un toit de pente 12/12 pour prendre des mesures au ruban à mesurer est dangereux et inefficace. L'industrie utilise aujourd'hui l'imagerie aérienne par drone couplée à deux grandes technologies.

### 📸 La Photogrammétrie (Structure from Motion - SfM)
* **Mécanisme :** Le drone prend une série de photos haute résolution (recouvrement de 80%). Un algorithme de type *Structure from Motion* aligne les pixels identiques sous différents angles pour recréer un nuage de points 3D et une orthophotographie matricielle.
* **Précision :** Selon les recherches en ingénierie géospatiale, la précision d'un modèle photogrammétrique bien calibré (avec des points de contrôle au sol ou un drone RTK) atteint **1 à 3 cm par pixel** (GSD - Ground Sample Distance).
* **Limites :** La photogrammétrie dépend entièrement de la lumière. Elle a de la misère à capter les détails dans les zones d'ombre portée intense ou sur les toits uniformément sombres et plats (absence de texture contrastée pour l'algorithme).

### 🚨 Le LiDAR (Light Detection and Ranging)
* **Mécanisme :** Le capteur LiDAR émet des milliers de pulsations laser par seconde et mesure le temps de retour du faisceau pour calculer la distance exacte (Time of Flight).
* **Précision :** Le LiDAR offre une précision absolue constante (souvent inférieure à **2 cm**) et génère un nuage de points 3D d'une densité extrême.
* **Avantage couvreur/paysagiste :** Contrairement à la photogrammétrie, le LiDAR passe à travers la végétation (arbres qui surplombent un toit ou un terrain). Le laser peut obtenir le "premier écho" (le dessus de l'arbre) et le "dernier écho" (le vrai sol ou le vrai toit en dessous), éliminant ainsi les obstructions visuelles.

---

## 3. Algorithmes Mathématiques de Calcul de Surface Interne

Une fois les coordonnées géospatiales collectées (par RTK ou par dessin sur un modèle 3D), la logique partagée de ton application doit calculer l'aire exacte.

### 📐 Calcul de l'Aire d'un Terrain (Polygone 2D) : Formule de l'Arpenteur (Shoelace Formula)
Pour un terrain plat cartographié par des coordonnées cartésiennes $(X, Y)$ converties depuis la projection UTM locale, on utilise le théorème de Green sous sa forme discrète :

$$A = rac{1}{2} \left| \sum_{i=1}^{n-1} (X_i Y_{i+1} - X_{i+1} Y_i) + (X_n Y_1 - X_1 Y_n) ight|$$

Cet algorithme est ultra-léger et s'exécute en $O(n)$ dans ta logique multiplateforme.

### 🏠 Calcul de l'Aire Réelle d'un Toit En Pentu (Correction Trigonométrique)
Un toit n'est jamais plat. Si ton application calcule l'aire uniquement à partir d'une vue du ciel en 2D (vue orthogonale), le couvreur va manquer de bardeaux à coup sûr. 
* **Algorithme de correction de pente :** Si la pente du toit (Pitch) est connue (ex: exprimée en degrés $	heta$ ou en ratio de type 8/12), l'aire réelle ($A_{réelle}$) se calcule en divisant l'aire plane projetée ($A_{2D}$) par le cosinus de l'angle de la pente :

$$A_{réelle} = rac{A_{2D}}{\cos(	heta)}$$

* **Exemple d'overhead :** Pour une pente de 45° (toit 12/12), $\cos(45^\circ) pprox 0.7071$. L'aire réelle est donc de $A_{2D} / 0.7071$, ce qui représente une augmentation de **41.4% de surface de bardeaux** par rapport à la simple mesure du terrain au sol!

---

## 4. Intégration des API de Données Satellitaires (Google Earth Engine & Bing Maps)

Si ton estimateur ne veut pas se déplacer avec un drone ou une canne RTK, l'application peut proposer la mesure à distance via des API de serveurs d'images.

* **Google Earth Engine API / Google Maps Tiles API :** Donne accès à des images satellites orthorectifiées. Dans les grandes villes, Google fournit des données d'imagerie oblique (45°) et des modèles 3D de bâtiments (Mesh) via les *3D Tiles*, ce qui permet d'extraire la géométrie des toits directement depuis l'application mobile ou de bureau.
* **Le Piège du Rejet / Erreur commerciale :** Les images satellites grand public souffrent de distorsion de parallaxe (l'image est prise avec un léger angle, ce qui fait paraître les murs des maisons inclinés). Ton application doit inclure un avertissement strict dans l'interface : *"Les mesures satellites sont des estimations. Pour une précision contractuelle, utilisez un relevé de terrain (RTK/Drone)"*.
