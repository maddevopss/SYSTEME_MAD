\# 🔒 Spécifications Techniques : Cybersécurité Réseau et Conformité
Légale (Loi 25, ATS, UGC)

\*\*Projet :\*\* MAD DevOps / Architecture Globale 2026

\-\--

\## 1. Isolation Réseau Stricte par Système d\'Exploitation

Les communications avec tes API Express/Prisma, tes bases
PostgreSQL/MongoDB ou tes serveurs de corrections différentielles GPS
(NTRIP) doivent suivre des politiques d\'isolation extrêmes.

\### 🍏 Apple App Transport Security (ATS)

Par défaut, iOS bloque tout le trafic non chiffré. L\'application doit
communiquer uniquement via des canaux chiffrés en \*\*TLS 1.3\*\*
utilisant le Forward Secrecy.

\* Les certificats auto-signés d\'environnements de développement locaux
sont rejetés automatiquement lors de la soumission sur l\'App Store, à
moins de déclarer une exception explicite et ultra-ciblée dans ton
fichier \`Info.plist\` sous la clé \`NSAppTransportSecurity\` (à
n\'utiliser que pour les IP privées de test).

\### 🤖 Android Cleartext Traffic Restriction

Depuis Android 9, le système lève une exception de sécurité immédiate si
une application tente d\'effectuer une requête HTTP classique. Si ton
application mobile doit communiquer en local sur le chantier avec une
antenne GPS RTK via une adresse IP brute du réseau Wi-Fi local (ex:
\`http://192.168.1.1\`), tu \*\*dois\*\* configurer et déclarer un
fichier XML de configuration de sécurité réseau :

\`\`\`xml

\<network-security-config\>

\<domain-config cleartextTrafficPermitted=\"true\"\>

\<domain includeSubdomains=\"true\"\>192.168.1.1\</domain\>

\</domain-config\>

\</network-security-config\>

## **2. Conformité Légale Fondamentale : Loi 25 (Québec) & RGPD (Europe)**

MADSuite manipule des informations hautement sensibles (coordonnées GPS
continues de travailleurs, historiques de trajets, signatures de
contrats, heures travaillées).

- **Privacy by Design (Loi 25) :** La collecte de positions
  géographiques en arrière-plan ne doit jamais se faire par défaut.
  L\'application doit présenter un panneau d\'explication clair à
  l\'utilisateur avant le premier démarrage du module. Un bouton
  permettant la suppression immédiate et permanente de la cache locale
  et des données serveurs doit être inclus dans les paramètres de
  l\'interface.

- **Chiffrement de Bout en Bout :** Toutes les données géospatiales en
  transit doivent transiter par des protocoles HTTPS/WSS chiffrés, et
  être stockées au repos (*Encryption at Rest*) dans PostgreSQL/MongoDB
  à l\'aide de clés matérielles tournantes.

## **3. Le Top 1 des Refus Anti-Rejet : Le Contenu Généré par l\'Utilisateur (UGC)**

Si ton application offre un module de communication permettant aux
couvreurs, paysagistes ou estimateurs de s\'échanger des notes de
chantiers, des photos de toits par drones ou des commentaires de délais,
Apple et Google appliquent la politique de tolérance zéro contre le
harcèlement et le contenu inapproprié.

### **🛠️ Architecture Obligatoire pour le module UGC**

Pour franchir la validation humaine des stores sans te faire revirer de
bord, ton interface et ton backend doivent implémenter 3 fonctionnalités
d\'administration natives :

1.  **Bouton de Signalement (Report) :** Présent sur chaque image ou
    texte partagé pour permettre aux utilisateurs de dénoncer un contenu
    abusif en un clic.

2.  **Option de Blocage (Block User) :** Possibilité de bloquer
    instantanément un utilisateur problématique pour ne plus jamais voir
    ses publications dans l\'application.

3.  **Panneau d\'Administration en Tâche de Fond :** Ton API backend
    Express doit intégrer un panneau d\'accès permettant à
    l\'administrateur (toi ou le client entreprise) de modérer,
    d\'approuver ou de supprimer le contenu signalé en moins de 24
    heures.
