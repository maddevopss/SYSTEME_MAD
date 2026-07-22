---
Projet: MADSuite
Document: PLAY-012 — Accès SSH au VPS OVHcloud
Version: 1.0
Dernière révision: 2026-07-22
Statut: Officiel
Auteur: Marc-André Dufour
---

# PLAY-012 — Configurer et utiliser l’accès SSH au VPS OVHcloud

## But

Conserver une marche à suivre claire, reproductible et sécuritaire pour accéder au VPS qui héberge MADSuite.

Cette procédure ne doit contenir aucune clé privée, aucun mot de passe ni aucun secret réel.

---

## Convention visuelle obligatoire

Toute commande destinée au serveur doit être précédée de la mention :

> **SSH — VPS OVH**

Toute commande destinée à l’ordinateur local doit être précédée de la mention :

> **LOCAL — Windows / Git Bash / PowerShell**

Cette distinction évite d’exécuter une commande au mauvais endroit.

---

## Informations à préparer

Avant de commencer, connaître :

- l’adresse IP ou le nom d’hôte du VPS;
- le nom de l’utilisateur distant;
- le port SSH, généralement `22`;
- l’emplacement local de la clé privée;
- le nom choisi pour l’alias SSH.

Exemple d’alias recommandé : `madsuite-vps`.

---

## 1. Vérifier le dossier SSH local

**LOCAL — Windows / Git Bash / PowerShell**

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Sous PowerShell, le dossier correspond généralement à :

```text
C:\Users\VOTRE_NOM\.ssh
```

---

## 2. Créer une clé dédiée au VPS

Ne pas réutiliser une clé privée partagée ou publiée.

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh-keygen -t ed25519 -a 100 -f ~/.ssh/madsuite_ovh -C "madsuite-vps"
```

Choisir une phrase secrète lorsque possible.

Fichiers créés :

```text
~/.ssh/madsuite_ovh
~/.ssh/madsuite_ovh.pub
```

Le fichier sans extension est privé et ne doit jamais être partagé.

---

## 3. Installer la clé publique sur le VPS

Méthode automatisée lorsque `ssh-copy-id` est disponible :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh-copy-id -i ~/.ssh/madsuite_ovh.pub UTILISATEUR@ADRESSE_DU_VPS
```

Méthode manuelle :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
cat ~/.ssh/madsuite_ovh.pub
```

Copier uniquement la ligne publique affichée.

**SSH — VPS OVH**

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

Ajouter la clé publique sur une ligne distincte.

---

## 4. Créer l’alias SSH local

Ouvrir le fichier `~/.ssh/config`.

**LOCAL — Windows / Git Bash / PowerShell**

```bash
nano ~/.ssh/config
```

Ajouter :

```sshconfig
Host madsuite-vps
    HostName ADRESSE_DU_VPS
    User UTILISATEUR
    Port 22
    IdentityFile ~/.ssh/madsuite_ovh
    IdentitiesOnly yes
    ServerAliveInterval 60
    ServerAliveCountMax 3
```

Protéger le fichier :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
chmod 600 ~/.ssh/config
```

Sous Windows, si `chmod` n’est pas appliqué par le système de fichiers, vérifier au minimum que la clé privée n’est accessible qu’au compte utilisateur concerné.

---

## 5. Tester la connexion

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh -v madsuite-vps
```

Une fois la connexion validée :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh madsuite-vps
```

---

## 6. Vérifications sur le VPS

**SSH — VPS OVH**

```bash
whoami
hostname
pwd
```

Vérifier que :

- l’utilisateur attendu est affiché;
- le nom du serveur correspond au VPS;
- le répertoire courant est connu avant toute modification.

---

## 7. Durcir la configuration SSH

Avant de désactiver l’authentification par mot de passe, ouvrir une deuxième session SSH et confirmer que la connexion par clé fonctionne.

Éditer la configuration :

**SSH — VPS OVH**

```bash
sudo nano /etc/ssh/sshd_config
```

Valeurs recommandées à valider selon le serveur :

```text
PubkeyAuthentication yes
PasswordAuthentication no
PermitRootLogin no
```

Valider la syntaxe avant le redémarrage :

**SSH — VPS OVH**

```bash
sudo sshd -t
```

Appliquer ensuite la configuration :

**SSH — VPS OVH**

```bash
sudo systemctl reload ssh
```

Sur certaines distributions, le service peut être nommé `sshd`.

Ne jamais fermer la session de secours avant d’avoir testé une nouvelle connexion.

---

## 8. Utilisation quotidienne

Connexion simple :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh madsuite-vps
```

Exécuter une commande distante sans ouvrir une session interactive :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh madsuite-vps "hostname && uptime"
```

Copier un fichier vers le VPS :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
scp ./fichier.txt madsuite-vps:~/
```

Copier un fichier depuis le VPS :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
scp madsuite-vps:~/fichier.txt ./
```

---

## 9. Diagnostic courant

Afficher la configuration résolue :

**LOCAL — Windows / Git Bash / PowerShell**

```bash
ssh -G madsuite-vps
```

Tester le port :

**LOCAL — PowerShell**

```powershell
Test-NetConnection ADRESSE_DU_VPS -Port 22
```

Voir les journaux SSH récents :

**SSH — VPS OVH**

```bash
sudo journalctl -u ssh --since "30 minutes ago"
```

Vérifier les permissions :

**SSH — VPS OVH**

```bash
ls -ld ~/.ssh
ls -l ~/.ssh/authorized_keys
```

---

## 10. Règles de sécurité

- Ne jamais publier la clé privée.
- Ne jamais inscrire l’adresse IP, un mot de passe ou un secret dans un dépôt public sans justification approuvée.
- Utiliser une clé distincte pour le VPS de production.
- Révoquer immédiatement une clé perdue ou compromise.
- Garder au moins une méthode de récupération approuvée par OVHcloud.
- Vérifier l’utilisateur et le répertoire courant avant une commande destructive.
- Préférer les commandes explicites aux raccourcis ambigus.

---

## 11. Révocation d’une clé

Identifier la ligne correspondante :

**SSH — VPS OVH**

```bash
nano ~/.ssh/authorized_keys
```

Supprimer uniquement la clé concernée, enregistrer, puis tester les accès restants.

Documenter la révocation si la clé donnait accès à la production.

---

## Critères de réussite

La configuration est réussie lorsque :

- `ssh madsuite-vps` ouvre une session avec le bon utilisateur;
- la clé privée reste uniquement sur l’ordinateur autorisé;
- la connexion par clé fonctionne avant toute désactivation du mot de passe;
- le fichier `~/.ssh/config` contient un alias clair;
- les commandes locales et distantes sont distinguées explicitement;
- une méthode de récupération demeure disponible.
