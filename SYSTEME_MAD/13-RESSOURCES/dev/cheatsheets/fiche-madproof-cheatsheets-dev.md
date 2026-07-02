---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Aide-mémoires de développement
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-DEV-GOVERNANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Aide-mémoires de développement

## 1. Sources brutes

```text
docs/research/atrier/commandes_node_prisma_tsx.md
docs/research/atrier/gemini-code-1783002804829.md
```

## 2. Verdict

**MADPROOF-DEV-GOVERNANCE : les sources sont utiles comme aide-mémoire interne, mais elles ne doivent pas être publiées comme procédures officielles de production.**

Elles contiennent des rappels sur :

- Node.js;
- npm;
- React / Vite;
- TypeScript / tsx;
- Express;
- validation de données;
- authentification;
- logs;
- tests;
- Redis / files d’attente;
- PostgreSQL;
- MongoDB;
- Prisma;
- Git;
- Rust;
- Java;
- commandes génériques de développement.

## 3. Règle centrale

```text
Un aide-mémoire accélère le développement; il ne remplace jamais un playbook de production.
```

Toute commande touchant une base, Git, des secrets, la production ou des données client doit être sortie de l’aide-mémoire et placée dans un playbook contrôlé.

## 4. À conserver

| Élément | Décision |
|---|---|
| Commandes de démarrage projet | Conserver comme référence dev. |
| Commandes de build local | Conserver. |
| Commandes de test | Conserver. |
| Commandes d’inspection DB | Conserver avec prudence. |
| Commandes Prisma dev | Conserver avec avertissement. |
| Commandes Git courantes | Conserver avec règles anti-secret. |
| Notes sur logs | Conserver. |
| Notes sur validation/sécurité | Conserver. |
| Rust / Java | Référence secondaire. |

## 5. À corriger ou exclure

| Sujet | Risque | Décision |
|---|---|---|
| Port MongoDB `27107` | Probable erreur de frappe. | Remplacer par note de vérification; port courant généralement `27017`. |
| Commandes backup/restore | Risque destructif si mauvaise cible. | Playbook dédié. |
| Commandes production | Risque opérationnel. | Playbook dédié. |
| Secrets / tokens / `.env` | Risque de fuite. | Interdit dans aide-mémoire. |
| Claims de performance | Non mesurés. | Reformuler. |
| Commandes de reset/force | Risque Git majeur. | Exclure. |
| Scripts de migration prod | Risque données. | Playbook dédié. |

## 6. Classification MADPROOF

| Type de contenu | Classification |
|---|---|
| Commande locale non destructive | Aide-mémoire dev |
| Commande de build/test | Aide-mémoire dev |
| Commande DB lecture/inspection | Dev sous conditions |
| Commande DB écriture/migration | Playbook contrôlé |
| Commande backup/restore | Playbook contrôlé |
| Commande Git destructive | Interdit aide-mémoire |
| Commande production | Playbook contrôlé |
| Commande avec secret | Interdit |

## 7. Décisions MADSuite

| Sujet | Décision |
|---|---|
| Aide-mémoire dev | Autorisé. |
| Procédure production | Séparée. |
| Commandes destructives | Exclues de l’aide-mémoire. |
| Secrets dans docs | Interdits. |
| Migration DB prod | Playbook obligatoire. |
| Backup/restore DB | Playbook obligatoire. |
| Git force/reset | Exclu sauf playbook incident. |

## 8. Documents à créer si nécessaire

| Document | Action |
|---|---|
| `SYSTEME_MAD/13-RESSOURCES/dev/cheatsheets/README.md` | Indexer les aide-mémoires dev. |
| `SYSTEME_MAD/05-PLAY/play-db-backup-restore.md` | À créer seulement si nécessaire. |
| `SYSTEME_MAD/05-PLAY/play-prisma-migrations-prod.md` | À créer avant prod sérieuse. |
| `SYSTEME_MAD/05-PLAY/play-git-incident-recovery.md` | À créer pour situations Git risquées. |

## 9. Claims interdits

Ne pas écrire :

- commande sûre dans tous les contextes;
- procédure production prête;
- aucun risque;
- migration sans impact;
- restauration automatique;
- performance garantie;
- sécurité garantie;
- exécuter sans relire.

Formulation recommandée :

```text
Cette commande est une référence de développement. Vérifier l’environnement et l’impact avant exécution.
```

## 10. Verdict final

Le bloc cheatsheets dev est classé comme **MADPROOF-DEV-GOVERNANCE**.

Il doit rester interne, prudent et séparé des playbooks de production.