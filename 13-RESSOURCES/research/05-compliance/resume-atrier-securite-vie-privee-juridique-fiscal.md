---
Projet: MADSuite / MAD DevOps
Document: Résumé MADPROOF — Cybersécurité, vie privée, droit d’auteur et fiscalité
Version: 1.0
Dernière révision: 2026-07-02
Statut: À valider / MADPROOF-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Résumé MADPROOF — Cybersécurité, vie privée, droit d’auteur et fiscalité

## 1. Sources analysées

Fichiers sources :

- `docs/research/atrier/Recherche-cybersecurite.md`
- `docs/research/atrier/Recherche-vieprivee.md`
- `docs/research/atrier/Recherche-droitauteur.md`
- `docs/research/atrier/Recherche-fiscale.md`
- `docs/research/atrier/specifications_reseau_securite.md`

## 2. Verdict MADPROOF

**Classification : MADPROOF-COMPLIANCE utile, mais validation professionnelle requise.**

Ce bloc est stratégique pour MADSuite et MAD DevOps, mais il touche des domaines sensibles : cybersécurité, conformité, fiscalité, propriété intellectuelle et vie privée. Les informations doivent être utilisées comme checklist interne et base de discussion avec comptable, avocat, spécialiste fiscal ou conseiller en sécurité.

À ne pas faire :

- Présenter ces documents comme conseils juridiques ou fiscaux.
- Promettre des taux de crédit ou subvention sans validation à jour.
- Affirmer qu’un projet est admissible RS&DE/CDAE sans analyse officielle.
- Vendre de la surveillance employé sans cadre légal clair.

## 3. Cybersécurité — points solides à conserver

### 3.1 Authentification

À conserver :

- Favoriser passkeys/WebAuthn comme cible future.
- Garder email/password sécurisé pour MVP si plus simple.
- MFA ou step-up authentication pour actions sensibles.
- Protection contre MFA fatigue.
- Sessions courtes + refresh tokens avec rotation.
- Journal d’audit des actions sensibles.

MADSuite actuel :

- Continuer de durcir JWT/refresh token.
- Ne pas stocker tokens dans logs.
- Préparer une stratégie passkeys, mais ne pas bloquer le MVP.

### 3.2 Secrets et bases de données

À conserver :

- Aucun secret long terme dans le code, les logs ou les fichiers non chiffrés.
- Rotation des secrets.
- Rôles DB minimaux.
- Audit logs.
- Chiffrement au repos et en transit.
- Séparation prod/test/dev.
- RLS / isolation multi-tenant comme fondation forte.

À reformuler :

- Les enclaves, homomorphic encryption et PQC sont R&D/enterprise, pas requis pour MVP.
- Zero Trust doit devenir des contrôles concrets : moindre privilège, réseau restreint, rotation, logs, isolation.

## 4. Vie privée — points solides à conserver

### 4.1 Loi 25 / Québec

MADSuite doit intégrer :

- Politique de confidentialité claire et simple.
- Responsable de la protection des renseignements personnels identifié.
- Gouvernance des renseignements personnels.
- Évaluation des facteurs relatifs à la vie privée pour modules impliquant données sensibles.
- Registre des incidents de confidentialité.
- Consentement clair pour localisation, profilage ou décisions automatisées.
- Paramètres de confidentialité élevés par défaut pour services technologiques.

### 4.2 Privacy UX

À conserver :

- Avis contextuels “just-in-time”.
- Transparence par couches : résumé simple + détails + document légal.
- Consentement fragmenté, progressif et révocable.
- Preuve de consentement avec version de politique.
- Minimisation : collecter seulement ce qui est nécessaire.

À éviter :

- Blockchain comme preuve de consentement par défaut. C’est trop lourd et peut créer des problèmes d’effacement.
- “privacy.json” comme standard mature universel. Garder comme veille R&D.
- Toute collecte biométrique ou caméra dans le MVP.

## 5. Droit d’auteur / propriété intellectuelle

À conserver :

- Le droit d’auteur protège automatiquement les œuvres originales.
- Les licences open source doivent être respectées.
- Chaque dépendance doit être suivie : licence, version, usage.
- Les contenus clients, templates, images et textes doivent avoir une chaîne de droits claire.
- Les éléments générés par IA doivent être traités avec prudence.

Actions MAD DevOps :

- Ajouter un registre des licences OSS.
- Ajouter une clause contractuelle sur contenus fournis par le client.
- Ajouter une politique interne pour contenus IA : pas de copie de sources protégées, vérification humaine, traçabilité.
- Prévoir attribution Creative Commons si utilisée.

## 6. Fiscalité / crédits / subventions

À conserver comme pistes :

- RS&DE peut être pertinente si le projet comporte incertitude technologique et démarche systématique.
- Le time tracking MADSuite peut aider à documenter les efforts R&D.
- Les taxes TPS/TVQ perçues doivent être séparées mentalement et opérationnellement des revenus.
- Le module facturation pourrait intégrer un “Tax Sandbox” pour aider travailleurs autonomes à réserver les taxes.
- Les dépenses de développement, SaaS, hébergement, outils et bureau à domicile doivent être suivies proprement.

À vérifier avant utilisation :

- Taux exacts RS&DE et Québec.
- Conditions CDAE et seuils d’employés.
- Déduction innovation / patent box / IDCI.
- Programmes d’Investissement Québec disponibles en 2026.
- Applicabilité à entreprise individuelle vs société incorporée.

Important :

> Ces éléments ne sont pas des conseils fiscaux. Toute décision doit être validée avec comptable ou fiscaliste.

## 7. Intégration produit MADSuite

### 7.1 Modules à ajouter

- Tableau “taxes à réserver”.
- Export comptable TPS/TVQ.
- Champ `tax_reserved_amount` ou calcul équivalent.
- Tags de dépenses : dev, R&D, logiciel, hébergement, matériel, bureau.
- Rapport R&D : temps, hypothèses, essais, résultats, échecs, preuves.
- Versioning de politique de confidentialité.
- Journal de consentement.
- Registre d’incidents interne.

### 7.2 Modèle de données à envisager

```text
privacy_policy_versions
user_consents
security_audit_logs
incident_register
rd_activity_logs
tax_reserve_snapshots
license_registry
```

## 8. TODO conformité

- [ ] Créer `docs/09-CHECKLISTS/chk-loi25-madsuite.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-security-saas-lite.md`.
- [ ] Créer `docs/09-CHECKLISTS/chk-open-source-licenses.md`.
- [ ] Créer `docs/06-operations-internes/registre-rd-sred.md`.
- [ ] Ajouter un template de politique de confidentialité MADSuite.
- [ ] Ajouter versioning de politique + consentements.
- [ ] Ajouter une note : pas de caméra/biométrie MVP.
- [ ] Ajouter un registre des dépendances open source.
- [ ] Ajouter export fiscal simple pour taxes et dépenses.
- [ ] Demander validation comptable avant claims RS&DE/CDAE.

## 9. Claims à reformuler

| Claim | Problème | Formulation recommandée |
|---|---|---|
| “Le gouvernement paie une immense partie” | Trop vendeur et risqué | Certains programmes peuvent réduire le coût admissible; validation requise. |
| “Match parfait RS&DE” | L’admissibilité dépend des faits | MADSuite peut générer des activités potentiellement admissibles si incertitude technologique documentée. |
| “Jusqu’à 69%” | Très dépendant structure/dépenses/plafonds | Ne pas utiliser sans calcul fiscal personnalisé. |
| “Blockchain = preuve quasi incontestable” | Trop lourd et incompatible droit à l’effacement | Préférer hash/version horodatée dans audit log contrôlé. |
| “No password obligatoire” | Peut nuire à l’adoption | Passkeys comme cible future, email/password sécurisé en MVP. |

## 10. Statut final

Ce bloc est très utile pour professionnaliser MADSuite et MAD DevOps. Il doit être converti en checklists et registres opérationnels, pas utilisé comme texte commercial brut.

**Décision : intégrer comme conformité interne, avec validation professionnelle avant tout claim légal, fiscal ou sécurité.**