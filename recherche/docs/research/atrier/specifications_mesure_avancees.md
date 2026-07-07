# Spécifications Avancées (Passe 2) : Protocoles NMEA, NTRIP, Algorithmes 3D Multi-Versants & Calcul d'Ombrage

Ce document pousse la recherche géospatiale pour les secteurs de la toiture et du paysagisme au niveau d'ingénierie brute. Il détaille la communication avec le matériel de précision, le traitement des trames de données et la trigonométrie avancée des structures complexes.

---

## 1. Communication Matérielle : Protocoles NMEA-0183 & NTRIP

Pour qu'une application multiplateforme puisse utiliser une canne RTK externe (comme un Emlid Reach ou un Bad Elf) en Bluetooth ou Wi-Fi, elle doit être capable de parser les flux de données brutes du protocole standard de l'industrie.

### 📡 Parsing des Trames NMEA-0183
Les récepteurs GNSS envoient un flux continu de chaînes de texte ASCII appelées trames NMEA. Pour valider la précision centimétrique avant d'enregistrer un point de terrain, la logique de l'application doit parser la trame **$GNGGA** (ou **$GPGGA**) :

`$GNGGA,123456.00,4531.23456,N,07335.67890,W,4,12,0.85,32.12,M,-34.0,M,,*67`

L'application doit analyser chirurgicalement les composants clés de cette chaîne :
* **Qualité du Positionnement (Position 6) :** La valeur numérique est le paramètre le plus critique pour l'anti-rejet des fausses mesures :
  * `1` = GPS standard (Fixation non précise, rejet obligatoire).
  * `2` = DGPS (Précision différentielle, ~1 mètre).
  * `4` = **RTK Fix** (Précision centimétrique verrouillée, seule valeur acceptée pour une mesure contractuelle).
  * `5` = **RTK Float** (Le calcul est en cours, précision décimétrique, avertir l'utilisateur d'attendre).
* **Nombre de Satellites (Position 7) :** Doit être idéalement supérieur à `8` pour garantir la stabilité de la solution RTK.
* **HDOP / PDOP (Position 8) :** Dilution de la précision horizontale. Une valeur $> 1.5$ doit déclencher une alerte visuelle dans l'application.

### 🌐 Le Client NTRIP Intégré
Pour obtenir la correction différentielle en temps réel, l'application mobile doit agir comme un client **NTRIP** (Networked Transport of RTCM via Internet Protocol).
* **Mécanisme :** L'app ouvre un socket TCP persistant vers un serveur de correction (un "Caster" NTRIP public ou privé, comme les réseaux du gouvernement ou de compagnies d'arpentage).
* **Flux de données :** L'application envoie sa position approximative au serveur via une trame NMEA `$GNGGA`, et le serveur lui renvoie en boucle des paquets de correction au format binaire **RTCM3**. L'application retransmet instantanément ces paquets via Bluetooth à la canne GPS pour qu'elle puisse verrouiller son état en **RTK Fix**.

---

## 2. Géométrie 3D Avancée : Algorithmes Multi-Versants pour Toitures Complexes

Un toit résidentiel ou commercial est rarement un simple rectangle à deux versants. Les architectures modernes incluent des hanches (hips), des vallées (valleys), des lucarnes (dormers) et des mansardes.

### 📐 Calcul de Surface par Normales de Surfaces (Vecteurs 3D)
Lorsque l'estimateur dessine ou importe un modèle 3D de toit (généré par photogrammétrie ou LiDAR), la formule de correction de pente simple 2D ne suffit plus si les versants ont des orientations et des inclinaisons différentes.
* **La Méthode :** Chaque facette du toit doit être traitée comme un polygone 3D défini par une liste de sommets $P_i(X_i, Y_i, Z_i)$.
* **Calcul du Vecteur Normal :** Pour chaque facette triangulée, l'application calcule le produit vectoriel de deux de ses arêtes ($ec{AB} 	imes ec{AC}$) pour obtenir le vecteur normal $ec{N}(N_x, N_y, N_z)$.
* **Calcul de l'Aire Réelle :** L'aire réelle tridimensionnelle de la facette se calcule en projetant la géométrie. Si l'aire plane 2D projetée au sol est connue ($A_{2D}$), l'aire réelle s'obtiennent par la formule du produit scalaire avec le vecteur unitaire vertical $ec{Z}(0, 0, 1)$ :

$$A_{réelle} = rac{A_{2D}}{\cos(\phi)} = rac{A_{2D}}{rac{|N_z|}{\|ec{N}\|}}$$

Où $\cos(\phi)$ représente l'angle d'inclinaison exact de cette facette spécifique par rapport à l'horizon. La somme des aires de toutes les facettes individuelles donne la surface totale de la toiture.

---

## 3. Algorithmes d'Analyse d'Ombrage et de Végétalisation pour Paysagistes

Pour un paysagiste d'envergure, concevoir un aménagement nécessite de connaître l'exposition au soleil du terrain pour choisir les bonnes plantes (zones d'ombre, de mi-ombre ou de plein soleil).

### ☀️ Algorithme de Position Solaire (PSA)
L'application doit intégrer les formules astronomiques standard (NREL Solar Position Algorithm) pour calculer l'azimut ($lpha$) et l'élévation ($\in$) du soleil à une coordonnée GPS donnée, à n'importe quelle heure de l'année.

### 🌳 Lancer de Rayons (Raycasting) sur Nuage de Points LiDAR
Si le paysagiste a fait un relevé du terrain à l'aide d'un drone équipé d'un capteur LiDAR, l'application dispose d'un modèle numérique de surface (MNS) incluant les bâtiments voisins et les arbres existants.
* **Calcul de l'ensoleillement :** Pour chaque mètre carré du terrain, l'application projette un vecteur (un rayon) en direction du soleil pour différentes heures de la journée (ex: de 8h à 18h, au solstice d'été et d'hiver).
* **Détection d'Intersection :** Si le rayon intersecte un point du nuage LiDAR (un toit de maison voisine, une clôture, ou la talle de feuilles d'un arbre), la zone est marquée comme "ombragée" pour cette heure spécifique.
* **Résultat Métier :** L'application génère une carte thermique (Heatmap) d'ensoleillement cumulé (ex: exprimé en kWh/m² ou en heures de soleil direct par jour). Le paysagiste sait instantanément où poser de la tourbe pour zone ombragée ou où planter des végétaux de plein soleil.
