---
Projet: MADSuite / MAD DevOps
Document: Checklist — Security SaaS Lite MADSuite
Version: 1.1
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-SECURITY-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Security SaaS Lite MADSuite

## 1. Objectif

Cette checklist définit une base de sécurité pragmatique pour MADSuite : SaaS web, backend Node/Express, PostgreSQL, frontend React, agent desktop Electron et intégrations futures.

Elle vise une posture “SOC2 / ISO-lite” réaliste pour un studio solo ou petite équipe, sans prétendre remplacer un audit externe.

Document de référence interne :

```text
SYSTEME_MAD/13-RESSOURCES/research/05-compliance/fiche-madproof-recherche-cybersecurite.md
```

## 2. Principes MADPROOF

- Sécurité par défaut.
- Moindre privilège.
- Isolation multi-tenant.
- Logs utiles mais minimisés.
- Secrets hors code.
- Données sensibles protégées.
- Traçabilité des actions critiques.
- Simplicité avant complexité inutile.
- Aucune promesse de conformité certifiée sans audit.
- Aucune promesse de sécurité absolue.
- Roadmap sécurité séparée de la baseline MVP.

Règle centrale :

```text
Cette checklist est une baseline opérationnelle, pas une certification de sécurité.
```

## 3. Authentification

- [ ] Hash des mots de passe avec Argon2id, bcrypt bien paramétré ou équivalent robuste.
- [ ] Jamais de mot de passe en clair dans logs ou base.
- [ ] Rate limit sur login.
- [ ] Rate limit sur reset password.
- [ ] Protection contre brute force.
- [ ] Sessions expirables.
- [ ] Refresh tokens avec rotation.
- [ ] Révocation des refresh tokens.
- [ ] Révocation de toutes les sessions après changement de mot de passe critique.
- [ ] Journal d’audit pour login, logout, reset password.
- [ ] MFA requis pour superadmin ou comptes haut privilège en production sérieuse.
- [ ] MFA ou passkeys pour utilisateurs finaux en roadmap.
- [ ] Aucun secret dans localStorage si alternative plus sûre disponible.
- [ ] Vérification contre mots de passe compromis si auth interne et faisable sans exposer les secrets.

## 4. Roadmap passkeys / MFA avancée

- [ ] Passkeys/WebAuthn classés roadmap sécurité, pas exigence MVP bloquante.
- [ ] Évaluer passkeys d’abord pour comptes admin/superadmin.
- [ ] Garder un mécanisme de récupération de compte sécurisé.
- [ ] Documenter les limites et cas d’échec : appareil perdu, changement d’appareil, navigateur non supporté.
- [ ] Ne pas promettre “passwordless complet” tant que le flux n’est pas testé en production.
- [ ] Ne pas présenter MFA/passkeys comme garantie de sécurité absolue.

## 5. Autorisation et multi-tenant

- [ ] Organisation requise pour toute route métier.
- [ ] Isolation applicative par `organisation_id`.
- [ ] RLS PostgreSQL activé sur tables critiques.
- [ ] Tests org A / org B pour lecture.
- [ ] Tests org A / org B pour mutation.
- [ ] Aucun endpoint admin global accessible à un admin d’organisation.
- [ ] Superadmin séparé pour endpoints système.
- [ ] WebSocket isolé par room organisation.
- [ ] Aucun `io.emit` global pour données tenant.
- [ ] Les jobs/cron/outbox respectent l’organisation.
- [ ] Les logs système ne divulguent pas de données cross-tenant à un admin d’organisation.

## 6. Validation des entrées

- [ ] Validation Zod ou équivalent sur payloads API.
- [ ] Validation des paramètres URL.
- [ ] Validation pagination/tri/filtres.
- [ ] Protection contre injection SQL par requêtes paramétrées.
- [ ] Protection contre NoSQL injection si MongoDB futur.
- [ ] Taille maximale des payloads.
- [ ] Uploads limités et validés si ajoutés.
- [ ] Types MIME et extensions validés si upload.
- [ ] Erreurs de validation claires, sans fuite interne.

## 7. Sécurité API

- [ ] Helmet activé.
- [ ] CORS strict en production.
- [ ] FRONTEND_URL obligatoire en production.
- [ ] Cookies sécurisés si cookies utilisés.
- [ ] CSRF évalué selon stratégie auth.
- [ ] Rate limit sur endpoints sensibles.
- [ ] Rate limit par organisation sur endpoints coûteux.
- [ ] Erreurs API sans fuite de stacktrace en production.
- [ ] Réponses 401/403 cohérentes.
- [ ] Endpoints IA ou coûteux limités par utilisateur et organisation.

## 8. Données sensibles

- [ ] Chiffrement en transit HTTPS/WSS.
- [ ] Chiffrement au repos par fournisseur DB/hébergement.
- [ ] Pas de données sensibles dans logs applicatifs.
- [ ] Masquage des tokens.
- [ ] Masquage des secrets.
- [ ] Données cognitives minimisées.
- [ ] Snapshots de reprise traités comme sensibles.
- [ ] Données de facturation protégées.
- [ ] Suppression/export utilisateur prévus.
- [ ] Données de test non-prod anonymisées ou synthétiques lorsque possible.
- [ ] Aucun export massif sans contrôle d’accès et audit.

## 9. Secrets

- [ ] Secrets uniquement via variables d’environnement ou secret manager.
- [ ] Aucun `.env` commité.
- [ ] Rotation documentée.
- [ ] Accès minimal aux secrets prod.
- [ ] Secrets différents dev/test/prod.
- [ ] Tokens API tiers limités en scope.
- [ ] Certificats/signing keys protégés.
- [ ] Scan de secrets dans CI ou pré-commit.
- [ ] Rotation immédiate après fuite ou exposition suspectée.
- [ ] Aucun secret affiché dans logs de build, logs serveur ou erreurs client.
- [ ] Secret manager externe classé roadmap production mature si les variables d’environnement deviennent insuffisantes.

## 10. Base de données

- [ ] Migrations versionnées.
- [ ] Backups activés.
- [ ] Procédure restore testée.
- [ ] RLS testée.
- [ ] Index sur champs tenant.
- [ ] Contraintes uniques tenant-aware.
- [ ] Pas de cascade destructive non contrôlée.
- [ ] Ledger append-only pour événements financiers si applicable.
- [ ] Audit log pour actions critiques.
- [ ] Accès DB production limité.
- [ ] Identifiants DB prod non partagés.
- [ ] Masquage ou anonymisation pour données copiées en dev/test.

## 11. Jobs, cron et outbox

- [ ] Jobs idempotents.
- [ ] Verrous distribués ou advisory locks.
- [ ] Outbox pour emails/notifications critiques.
- [ ] Retry avec backoff.
- [ ] Dead-letter ou statut d’échec.
- [ ] Logs sans fuite cross-tenant.
- [ ] Notifications scopées à l’organisation.
- [ ] Tests des scénarios cross-tenant.
- [ ] Aucun job global ne doit notifier tous les admins d’organisation par défaut.
- [ ] Les erreurs système sensibles restent réservées au superadmin ou aux logs internes.

## 12. Frontend

- [ ] Aucun secret frontend.
- [ ] Sanitization ou échappement du contenu utilisateur.
- [ ] Protection XSS.
- [ ] CSP production en roadmap.
- [ ] Gestion propre des erreurs.
- [ ] Routes protégées.
- [ ] Aucun affichage de données d’une autre org.
- [ ] Tests E2E auth/tenancy.
- [ ] Aucun détail d’erreur interne affiché publiquement.
- [ ] Aucun token ou donnée sensible dans les analytics.

## 13. Agent desktop Electron

- [ ] Context isolation activé.
- [ ] Node integration désactivé côté renderer.
- [ ] IPC whitelistée.
- [ ] Auto-update signé.
- [ ] Certificats non committés.
- [ ] Logs locaux sans tokens.
- [ ] Stockage local chiffré ou coffre OS si possible.
- [ ] Mode local-only disponible.
- [ ] Capture assistive désactivée par défaut.
- [ ] Aucune capture écran ni enregistrement brut des touches dans le MVP.
- [ ] Aucun mécanisme de surveillance silencieuse.
- [ ] Toute collecte locale doit être expliquée et désactivable lorsque possible.

## 14. IA et prompts

- [ ] Filtrer les rôles interdits ou dangereux.
- [ ] Rate limit IA par organisation.
- [ ] Ne pas envoyer secrets ou données sensibles inutilement au LLM.
- [ ] Journaliser usage IA sans contenu sensible brut.
- [ ] Expliquer les limites des suggestions.
- [ ] Toujours permettre correction humaine.
- [ ] Pas de claim médical automatisé.
- [ ] Pas d’inférence d’état mental intime.
- [ ] Pas de scoring utilisateur à finalité punitive.

## 15. Authentification comportementale et biométrie comportementale

Décision MADPROOF : **Interdit MVP**.

- [ ] Ne pas utiliser dynamique de frappe, mouvements souris ou capteurs comme authentification continue.
- [ ] Ne pas utiliser ces signaux comme preuve d’identité, d’attention ou d’état mental.
- [ ] Ne pas intégrer de biométrie comportementale sans ADR, validation juridique et justification produit forte.
- [ ] Préférer contrôles explicites : MFA, sessions révocables, alertes, revalidation sur actions sensibles.

## 16. Observabilité

- [ ] Logs structurés.
- [ ] Corrélation request id.
- [ ] Alertes sur erreurs critiques.
- [ ] Health endpoint protégé si données système sensibles.
- [ ] Métriques sans données personnelles inutiles.
- [ ] Audit log distinct des logs techniques.
- [ ] Accès aux logs limité.
- [ ] Durée de rétention des logs documentée.

## 17. Incident response

- [ ] Procédure incident documentée.
- [ ] Responsable identifié.
- [ ] Registre d’incident.
- [ ] Severities définies.
- [ ] Plan de communication.
- [ ] Rotation de secrets après incident.
- [ ] Postmortem sans blâme.
- [ ] Procédure révocation sessions/tokens.
- [ ] Procédure désactivation intégration fournisseur compromise.
- [ ] Procédure notification privacy coordonnée avec `chk-loi25-madsuite.md`.

## 18. Release security gate

Avant prod :

- [ ] Tests backend passent.
- [ ] Tests RLS passent.
- [ ] Tests cross-tenant passent.
- [ ] Tests E2E auth passent.
- [ ] Scan secrets OK.
- [ ] Variables prod vérifiées.
- [ ] CORS prod vérifié.
- [ ] Superadmin endpoints vérifiés.
- [ ] Backups vérifiés.
- [ ] Rollback documenté.
- [ ] Aucun nouveau module sensible sans revue privacy/sécurité.
- [ ] Aucun claim public de sécurité absolue.

## 19. Roadmap / R&D / hors scope MVP

Ne doivent pas bloquer le MVP :

- certification SOC2 officielle;
- certification ISO officielle;
- passkeys pour tous les utilisateurs;
- secret manager enterprise complet;
- PAM/JIT enterprise;
- tokenisation avancée;
- masquage dynamique avancé;
- cryptographie homomorphe;
- enclaves confidentielles;
- migration post-quantique en production;
- SIEM enterprise complet;
- zero trust complet comme programme formel.

Ces sujets peuvent rester en R&D/roadmap, mais ne doivent pas devenir des promesses produit.

## 20. Claims interdits

Ne pas utiliser publiquement :

- “sécurité garantie”;
- “zéro risque”;
- “impossible à pirater”;
- “conforme SOC2” sans audit;
- “conforme ISO” sans certification;
- “passwordless complet” sans implémentation réelle;
- “protection totale contre le phishing”;
- “aucune fuite possible”.

Formulation prudente recommandée :

```text
MADSuite applique une baseline de sécurité documentée, testable et améliorable. Cette baseline ne remplace pas un audit externe ou une certification officielle.
```

## 21. Verdict MADPROOF

Cette checklist est **MADPROOF-SECURITY-COMPLIANCE** si elle reste une baseline opérationnelle honnête.

Elle ne doit pas être vendue comme certification, audit externe ou garantie absolue de sécurité.