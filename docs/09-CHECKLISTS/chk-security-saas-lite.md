---
Projet: MADSuite / MAD DevOps
Document: Checklist — Security SaaS Lite MADSuite
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-SECURITY
Auteur: Marc-André Dufour / MAD DevOps
---

# Checklist — Security SaaS Lite MADSuite

## 1. Objectif

Cette checklist définit une base de sécurité pragmatique pour MADSuite : SaaS web, backend Node/Express, PostgreSQL, frontend React, agent desktop Electron et intégrations futures.

Elle vise une posture “SOC2 / ISO-lite” réaliste pour un studio solo ou petite équipe, sans prétendre remplacer un audit externe.

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

## 3. Authentification

- [ ] Hash des mots de passe avec Argon2id ou équivalent robuste.
- [ ] Jamais de mot de passe en clair dans logs ou base.
- [ ] Rate limit sur login.
- [ ] Protection contre brute force.
- [ ] Sessions expirables.
- [ ] Refresh tokens avec rotation.
- [ ] Révocation des refresh tokens.
- [ ] Journal d’audit pour login, logout, reset password.
- [ ] MFA ou passkeys en roadmap.
- [ ] Aucun secret dans localStorage si alternative plus sûre disponible.

## 4. Autorisation et multi-tenant

- [ ] Organisation requise pour toute route métier.
- [ ] Isolation applicative par `organisation_id`.
- [ ] RLS PostgreSQL activé sur tables critiques.
- [ ] Tests org A / org B pour lecture.
- [ ] Tests org A / org B pour mutation.
- [ ] Aucun endpoint admin global accessible à un admin d’organisation.
- [ ] Superadmin séparé pour endpoints système.
- [ ] WebSocket isolé par room organisation.
- [ ] Aucun `io.emit` global pour données tenant.

## 5. Validation des entrées

- [ ] Validation Zod ou équivalent sur payloads API.
- [ ] Validation des paramètres URL.
- [ ] Validation pagination/tri/filtres.
- [ ] Protection contre injection SQL par requêtes paramétrées.
- [ ] Protection contre NoSQL injection si MongoDB futur.
- [ ] Taille maximale des payloads.
- [ ] Uploads limités et validés si ajoutés.

## 6. Sécurité API

- [ ] Helmet activé.
- [ ] CORS strict en production.
- [ ] FRONTEND_URL obligatoire en production.
- [ ] Cookies sécurisés si cookies utilisés.
- [ ] CSRF évalué selon stratégie auth.
- [ ] Rate limit sur endpoints sensibles.
- [ ] Rate limit par organisation sur endpoints coûteux.
- [ ] Erreurs API sans fuite de stacktrace en production.
- [ ] Réponses 401/403 cohérentes.

## 7. Données sensibles

- [ ] Chiffrement en transit HTTPS/WSS.
- [ ] Chiffrement au repos par fournisseur DB/hébergement.
- [ ] Pas de données sensibles dans logs applicatifs.
- [ ] Masquage des tokens.
- [ ] Masquage des secrets.
- [ ] Données cognitives minimisées.
- [ ] Snapshots de reprise traités comme sensibles.
- [ ] Données de facturation protégées.
- [ ] Suppression/export utilisateur prévus.

## 8. Secrets

- [ ] Secrets uniquement via variables d’environnement ou secret manager.
- [ ] Aucun `.env` commité.
- [ ] Rotation documentée.
- [ ] Accès minimal aux secrets prod.
- [ ] Secrets différents dev/test/prod.
- [ ] Tokens API tiers limités en scope.
- [ ] Certificats/signing keys protégés.
- [ ] Scan de secrets dans CI ou pré-commit.

## 9. Base de données

- [ ] Migrations versionnées.
- [ ] Backups activés.
- [ ] Procédure restore testée.
- [ ] RLS testée.
- [ ] Index sur champs tenant.
- [ ] Contraintes uniques tenant-aware.
- [ ] Pas de cascade destructive non contrôlée.
- [ ] Ledger append-only pour événements financiers si applicable.
- [ ] Audit log pour actions critiques.

## 10. Jobs, cron et outbox

- [ ] Jobs idempotents.
- [ ] Verrous distribués ou advisory locks.
- [ ] Outbox pour emails/notifications critiques.
- [ ] Retry avec backoff.
- [ ] Dead-letter ou statut d’échec.
- [ ] Logs sans fuite cross-tenant.
- [ ] Notifications scopées à l’organisation.
- [ ] Tests des scénarios cross-tenant.

## 11. Frontend

- [ ] Aucun secret frontend.
- [ ] Sanitization ou échappement du contenu utilisateur.
- [ ] Protection XSS.
- [ ] CSP production en roadmap.
- [ ] Gestion propre des erreurs.
- [ ] Routes protégées.
- [ ] Aucun affichage de données d’une autre org.
- [ ] Tests E2E auth/tenancy.

## 12. Agent desktop Electron

- [ ] Context isolation activé.
- [ ] Node integration désactivé côté renderer.
- [ ] IPC whitelistée.
- [ ] Auto-update signé.
- [ ] Certificats non committés.
- [ ] Logs locaux sans tokens.
- [ ] Stockage local chiffré ou coffre OS si possible.
- [ ] Mode local-only disponible.
- [ ] Capture assistive désactivée par défaut.
- [ ] Aucune capture écran/keylogging MVP.

## 13. IA et prompts

- [ ] Filtrer les rôles interdits ou dangereux.
- [ ] Rate limit IA par organisation.
- [ ] Ne pas envoyer secrets ou données sensibles inutilement au LLM.
- [ ] Journaliser usage IA sans contenu sensible brut.
- [ ] Expliquer les limites des suggestions.
- [ ] Toujours permettre correction humaine.
- [ ] Pas de claim médical automatisé.

## 14. Observabilité

- [ ] Logs structurés.
- [ ] Corrélation request id.
- [ ] Alertes sur erreurs critiques.
- [ ] Health endpoint protégé si données système sensibles.
- [ ] Métriques sans données personnelles inutiles.
- [ ] Audit log distinct des logs techniques.

## 15. Incident response

- [ ] Procédure incident documentée.
- [ ] Responsable identifié.
- [ ] Registre d’incident.
- [ ] Severities définies.
- [ ] Plan de communication.
- [ ] Rotation de secrets après incident.
- [ ] Postmortem sans blâme.

## 16. Release security gate

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

## 17. Hors scope MVP

- Certification SOC2 officielle.
- Certification ISO officielle.
- Cryptographie homomorphe.
- Enclaves confidentielles.
- PQC en production.
- SIEM enterprise complet.

Ces sujets peuvent rester en R&D/roadmap, mais ne doivent pas bloquer le MVP.

## 18. Verdict MADPROOF

Cette checklist est **MADPROOF-SECURITY** si elle reste une baseline opérationnelle honnête. Elle ne doit pas être vendue comme certification ni garantie absolue de sécurité.