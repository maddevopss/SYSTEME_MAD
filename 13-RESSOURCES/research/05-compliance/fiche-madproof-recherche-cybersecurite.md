---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche cybersécurité
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-SECURITY-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche cybersécurité

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-cybersecurite.md` |
| Type | Recherche sécurité convertie depuis document externe |
| Domaine | Authentification, passkeys, MFA, secrets, bases de données, chiffrement, zero trust, PQC |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-SECURITY-COMPLIANCE : source utile, mais à séparer entre baseline MVP, roadmap sécurité et R&D enterprise.**

Le document contient de bonnes fondations : passkeys/WebAuthn, MFA résistant au phishing, protection contre MFA fatigue/AiTM, gestion moderne des mots de passe, suppression des secrets en clair, rotation des secrets, journalisation, chiffrement, masquage/tokenisation, contrôles d’accès et références NIST/OWASP/CIS.

Cependant, plusieurs éléments sont trop avancés pour le MVP MADSuite ou trop absolus dans leur formulation : authentification comportementale continue, biométrie comportementale, homomorphic encryption, confidential computing/enclaves, DAM/UEBA enterprise, zero trust complet, identité décentralisée et migration post-quantique. Ces sujets doivent rester en roadmap, R&D ou veille, sauf besoin client précis.

## 3. Éléments à conserver comme baseline MADSuite

| Élément | Classification | Décision |
|---|---|---|
| HTTPS partout | MVP / Baseline sécurité | Conserver |
| Aucun secret dans le frontend | MVP / Baseline sécurité | Conserver |
| Aucun secret dans les logs | MVP / Baseline sécurité | Conserver |
| Hash de mots de passe robuste | MVP / Baseline sécurité | Conserver |
| Longueur et unicité plutôt que complexité arbitraire | MVP / Auth | Conserver |
| Vérification contre mots de passe compromis | MVP sous conditions | Conserver si auth interne |
| MFA pour comptes sensibles/admin | MVP sous conditions | Conserver |
| Rate limiting login et reset | MVP | Conserver |
| Détection brute force / lockout prudent | MVP | Conserver |
| Rotation des refresh tokens | MVP | Conserver |
| Gestion centralisée des secrets | MVP / Ops | Conserver |
| Rotation des secrets critiques | MVP sous conditions | Conserver |
| RLS / isolation multi-tenant | MVP critique | Conserver |
| Chiffrement en transit et au repos | MVP | Conserver |
| Audit logs pour actions sensibles | MVP | Conserver |
| Revue OWASP ASVS adaptée | MVP sous conditions | Conserver |

## 4. Éléments roadmap sécurité

| Élément | Classification | Décision |
|---|---|---|
| Passkeys / WebAuthn | Roadmap sécurité / MVP futur | Pertinent, non bloquant MVP actuel |
| Phishing-resistant MFA | Roadmap sécurité | Prioriser pour admins et comptes sensibles |
| Device/session risk scoring léger | Roadmap / À vérifier | Seulement non intrusif, explicable |
| PAM/JIT admin access | Roadmap ops | Pertinent plus tard si équipe/clients enterprise |
| Workload identity federation | Roadmap DevOps | Pertinent si infra cloud mature |
| Secret manager externe | Roadmap ops | À prioriser dès déploiement production mature |
| Database activity auditing avancé | Roadmap | Baseline logs d’abord, DAM enterprise plus tard |
| Tokenisation données sensibles | Roadmap / cas spécifique | Utile pour données paiement/PII selon besoin |
| Data masking environnements non-prod | Roadmap | Très utile si jeux de données réels |

## 5. Éléments R&D / Enterprise / Non MVP

| Élément | Catégorie | Raison |
|---|---|---|
| Authentification continue comportementale | Interdit MVP / R&D privacy | Trop intrusive; risque biométrie comportementale et surveillance passive. |
| Keystroke dynamics / mouse dynamics pour auth | Interdit MVP | Contradiction privacy MADSuite; assimilable à surveillance comportementale. |
| Biométrie comportementale | Interdit MVP | Donnée très sensible; validation juridique et éthique requise. |
| Identité décentralisée / Verifiable Credentials | R&D | Utile en veille, non nécessaire MVP. |
| Homomorphic encryption | R&D | Trop complexe/coûteux pour besoin actuel. |
| Confidential computing / enclaves DB | Enterprise / R&D | Cas ultra-sensible; non baseline MADSuite. |
| DAM/UEBA commercial | Enterprise | Utile grande entreprise, trop lourd MVP. |
| Zero Trust complet | Roadmap / principe | À traduire en contrôles concrets, pas slogan. |
| Post-quantum crypto | Veille stratégique | Standards existent, mais migration produit à planifier selon dépendances. |

## 6. Claims à reformuler ou bloquer

| Claim brut ou implicite | Problème MADPROOF | Reformulation recommandée |
|---|---|---|
| “Élimine le vol de credentials.” | Trop absolu. | Réduit fortement certains risques de phishing/vol de secrets partagés. |
| “Plus aucun mot de passe statique.” | Trop absolu pour MVP. | Éliminer les secrets statiques lorsque possible; documenter les exceptions. |
| “Sécurité garantie par passkeys/MFA.” | Promesse interdite. | Passkeys/MFA améliorent la posture de sécurité, sans éliminer tous les risques. |
| “Zero Trust complet.” | Buzzword trop large. | Appliquer des contrôles concrets : moindre privilège, vérification continue, segmentation, audit. |
| “Chiffrement homomorphe adopté en production de masse.” | Trop fort/variable. | R&D ou cas sectoriels spécialisés; non baseline. |
| “PQC doit être migré maintenant partout.” | Trop général. | Suivre les standards NIST et planifier la migration selon dépendances et durée de vie des données. |
| “Authentification continue par comportement.” | Intrusif pour MADSuite. | Exclure du MVP; préférer MFA explicite et signaux de session non sensibles. |
| “AAL3 pour FIDO2 dans tous les cas.” | Dépend du type d’authentificateur et de l’implémentation. | Évaluer le niveau d’assurance selon contexte et configuration. |

## 7. Décisions MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Auth classique avec mot de passe | Acceptable MVP si hash robuste, rate limit, reset sécurisé et sessions propres. |
| Passkeys | Roadmap sécurité souhaitable. |
| MFA admin | Recommandé pour production sérieuse. |
| MFA client final | Optionnel au départ, roadmap. |
| Authentification comportementale passive | Interdit MVP. |
| Collecte de dynamique clavier/souris pour sécurité | Interdit MVP. |
| Secrets dans `.env` local | Acceptable dev, jamais commit, rotation si fuite. |
| Secret manager externe | Roadmap production mature. |
| RLS multi-tenant | Critique et déjà aligné MADSuite. |
| Audit logs | Critique pour actions sensibles. |
| Chiffrement application-level | À évaluer seulement pour champs ultra-sensibles. |
| PQC | Veille, pas exigence MVP. |

## 8. Baseline sécurité recommandée MADSuite

### 8.1 Authentification

- [ ] Hash des mots de passe avec algorithme adapté et paramètres actuels.
- [ ] Rate limiting sur login, reset password et endpoints sensibles.
- [ ] Reset password avec token à usage unique, expiration courte et audit.
- [ ] Refresh tokens rotatifs et révocables.
- [ ] Sessions utilisateur consultables/révocables.
- [ ] MFA pour admin ou superadmin.
- [ ] Aucun secret exposé dans frontend ou logs.

### 8.2 Données et base

- [ ] RLS ou guard organisationnel pour toutes les données multi-tenant.
- [ ] Tests anti cross-tenant.
- [ ] Backups documentés.
- [ ] Données sensibles minimisées.
- [ ] Logs sans contenu client inutile.
- [ ] Audit logs pour factures, paiements, rôles, exports et actions admin.

### 8.3 Secrets et infrastructure

- [ ] Secrets non commités.
- [ ] Variables d’environnement séparées par environnement.
- [ ] Rotation après incident ou exposition.
- [ ] Accès production limité.
- [ ] CI/CD sans affichage de secrets.
- [ ] Clés API avec permissions minimales.

### 8.4 Monitoring et incidents

- [ ] Logs structurés.
- [ ] Alertes sur erreurs critiques.
- [ ] Journalisation des accès admin.
- [ ] Procédure incident sécurité.
- [ ] Procédure rotation secrets.
- [ ] Procédure révocation sessions/tokens.

## 9. Documents à créer ou mettre à jour

| Document | Action recommandée |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-security-saas-lite.md` | Vérifier alignement avec cette fiche. |
| `SYSTEME_MAD/04-ADR/ADR-auth-passkeys-roadmap.md` | À créer si passkeys deviennent priorité. |
| `SYSTEME_MAD/04-ADR/ADR-no-behavioral-auth-mvp.md` | À créer si besoin de verrouiller l’exclusion. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-secrets-management.md` | Optionnel si la checklist sécurité devient trop longue. |

## 10. Claims prêts pour registre si nécessaire

```markdown
| C-SEC-001 | MADSuite garantit la sécurité des données. | Interdit | Non prouvé | MADSuite applique une baseline de sécurité documentée, testable et améliorable. | Sécurité garantie. | Sécurité / marketing | Supprimer claim absolu |
| C-SEC-002 | Les passkeys éliminent le vol d’identifiants. | À reformuler | Solide mais trop absolu | Les passkeys réduisent fortement les risques liés aux secrets partagés et au phishing, selon l’implémentation. | Élimine tout vol d’identifiants. | Sécurité | Reformuler |
| C-SEC-003 | L’authentification comportementale continue sécurise les sessions. | Interdit MVP | Intrusif | Le MVP doit privilégier des contrôles explicites comme MFA, sessions révocables et alertes, sans biométrie comportementale. | Surveillance comportementale continue. | Privacy / sécurité | Exclure MVP |
| C-SEC-004 | Le chiffrement post-quantique est requis maintenant pour MADSuite. | À vérifier / veille | Dépend du contexte | Les standards post-quantiques doivent être suivis en veille; la migration dépend des fournisseurs, protocoles et durées de conservation. | PQC obligatoire maintenant. | Cryptographie / architecture | Veille |
```

## 11. TODO

- [ ] Vérifier `chk-security-saas-lite.md` et l’aligner avec cette fiche.
- [ ] Ajouter un gate anti-authentification comportementale si absent.
- [ ] Ajouter passkeys/WebAuthn comme roadmap, pas exigence MVP.
- [ ] Passer ensuite à `Recherche-fiscale.md`.
- [ ] Garder `Recherche-cybersecurite.md` dans `atrier` comme source brute, non officielle.

## 12. Verdict final

`Recherche-cybersecurite.md` est **traité comme source brute analysée**.

Les fondations sécurité doivent être intégrées dans les checklists opérationnelles, mais les claims absolus et les technologies enterprise/R&D ne doivent pas devenir des promesses produit.