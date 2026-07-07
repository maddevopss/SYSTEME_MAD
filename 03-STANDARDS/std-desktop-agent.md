---
Projet: MADSuite / MAD DevOps
Document: Standard — Desktop agent MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-DESKTOP-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Standard — Desktop agent MADSuite

## 1. Objectif

Ce standard encadre tout agent desktop MADSuite ou MAD DevOps installé localement sur Windows, Linux, macOS ou ChromeOS/PWA installée.

Il vise à éviter la dérive vers la surveillance silencieuse, les permissions excessives ou les agents opaques.

## 2. Règle centrale

```text
Un agent desktop MADSuite doit être visible, contrôlable, explicable et désactivable.
```

Interdit :

```text
agent invisible + collecte passive + absence de contrôle utilisateur
```

## 3. Statut produit

| Sujet | Décision |
|---|---|
| Agent desktop | Module séparé du cœur Web/PWA. |
| Fonction principale | Support local explicite. |
| Surveillance silencieuse | Interdite. |
| Capture écran passive | Interdite MVP. |
| Keylogging | Interdit. |
| Tracking employeur caché | Interdit. |
| Consentement | Obligatoire. |
| Pause/arrêt visible | Obligatoire. |

## 4. Fonctions acceptables

Selon consentement et besoin réel :

- [ ] synchronisation locale contrôlée;
- [ ] timer local visible;
- [ ] statut réseau;
- [ ] notes rapides volontaires;
- [ ] notifications locales;
- [ ] reprise de session applicative;
- [ ] collecte d’événements applicatifs minimaux;
- [ ] intégration fichiers locale volontaire;
- [ ] connecteur matériel terrain explicite.

## 5. Fonctions interdites MVP

- [ ] capture écran silencieuse;
- [ ] enregistrement de frappe brute;
- [ ] keylogger;
- [ ] surveillance continue de fenêtres sans explication;
- [ ] scoring employé;
- [ ] dashboard patronal nominatif de productivité cognitive;
- [ ] localisation desktop cachée;
- [ ] micro/caméra pour cognition;
- [ ] démarrage caché non indiqué;
- [ ] collecte sans bouton pause/stop.

## 6. Consentement et contrôle

L’agent doit offrir :

- [ ] explication claire au premier démarrage;
- [ ] liste des données collectées;
- [ ] finalité de chaque collecte;
- [ ] bouton pause;
- [ ] bouton stop/quitter;
- [ ] statut visible dans tray/menu;
- [ ] accès aux paramètres;
- [ ] suppression locale si applicable;
- [ ] déconnexion compte;
- [ ] désinstallation propre.

## 7. Données locales

- [ ] stocker dans les dossiers OS appropriés;
- [ ] ne jamais écrire dans le dossier d’installation;
- [ ] minimiser les logs;
- [ ] éviter données sensibles en clair;
- [ ] chiffrer secrets via coffre OS;
- [ ] permettre purge cache/logs;
- [ ] documenter rétention.

## 8. Secrets

Les secrets doivent utiliser le coffre de la plateforme si possible :

| OS | Option recommandée |
|---|---|
| Windows | Credential Manager / DPAPI / stockage sécurisé framework |
| Linux | Secret Service / GNOME Keyring / KWallet |
| macOS | Keychain |
| ChromeOS/PWA | Storage Web contrôlé, sans secrets longs si possible |

Interdit :

- token en `.env` utilisateur;
- token dans logs;
- secret dans config JSON en clair;
- clé API client exposée inutilement.

## 9. Réseau

- [ ] HTTPS/WSS en production;
- [ ] timeouts;
- [ ] backoff avec jitter;
- [ ] mode offline clair;
- [ ] erreurs compréhensibles;
- [ ] aucune boucle de retry agressive;
- [ ] aucune exception HTTP globale;
- [ ] réseau local seulement si besoin documenté.

## 10. Distribution

- [ ] build signé si distribution directe;
- [ ] auto-update signé;
- [ ] versioning clair;
- [ ] changelog minimal;
- [ ] rollback ou désactivation possible;
- [ ] installateur testé;
- [ ] désinstallation testée;
- [ ] aucune promesse d’absence SmartScreen/store warning.

## 11. UX

- [ ] statut visible;
- [ ] icône tray/menu si agent en arrière-plan;
- [ ] feedback quand l’agent collecte quelque chose;
- [ ] pas de jargon;
- [ ] pas de dark patterns;
- [ ] pas de culpabilisation;
- [ ] pas de notification abusive;
- [ ] accessibilité clavier.

## 12. Sécurité / privacy

- [ ] privacy policy compatible;
- [ ] consentement fragmenté;
- [ ] logs auditables;
- [ ] accès organisationnel contrôlé;
- [ ] aucune donnée cross-tenant;
- [ ] aucune collecte excessive;
- [ ] aucun profilage externe;
- [ ] droit de suppression/export si applicable.

## 13. Gate avant release

- [ ] Fonction justifiée.
- [ ] Consentement validé.
- [ ] Pause/stop testés.
- [ ] Désinstallation testée.
- [ ] Secrets testés.
- [ ] Logs inspectés.
- [ ] Update testé.
- [ ] Offline testé.
- [ ] Claims MADPROOF validés.
- [ ] Checklist sécurité validée.
- [ ] Checklist privacy validée.

## 14. Claims interdits

Ne pas écrire :

- agent invisible;
- surveillance automatique;
- détecte tout;
- sait quand l’utilisateur travaille;
- mesure l’attention réelle;
- productivité garantie;
- sécurité locale garantie;
- aucune donnée sensible;
- installation sans alerte garantie;
- compatible tous OS.

Formulation recommandée :

```text
L’agent desktop ajoute des fonctions locales explicites et contrôlables, avec collecte minimale et consentement clair.
```

## 15. Verdict MADPROOF

Ce standard est **MADPROOF-DESKTOP-PRIVACY**.

Il doit bloquer toute dérive vers un agent opaque, silencieux ou interprété comme outil de surveillance.