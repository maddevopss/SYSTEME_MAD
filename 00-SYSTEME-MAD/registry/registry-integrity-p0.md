---
Projet: Système MAD
Document: Contrôle d’intégrité P0 du MAD Registry
Version: 1.0
Dernière révision: 2026-07-17
Statut: À valider
Auteur: MAD DevOps
---

# Contrôle d’intégrité P0 du MAD Registry

## Intention

Ce contrôle transforme le MAD Registry d’une déclaration de principe en mécanisme vérifiable. Il ne rend pas encore l’index exhaustif automatiquement : il établit d’abord une preuve reproductible de sa cohérence et expose la dette de migration restante.

## Portée

L’audit inspecte les familles d’objets canoniques actuellement identifiables par un identifiant stable dans les documents Markdown :

- `ADR-###`;
- `STD-###`;
- `PLAY-###`;
- `CHK-###`;
- `REG-###`.

Les dossiers officiels `00-SYSTEME-MAD/` à `13-RESSOURCES/` sont inspectés. `99-ARCHIVES/` est volontairement exclu afin qu’un objet archivé ne redevienne pas une source active par détection automatique.

## Erreurs bloquantes

Le contrôle échoue lorsque l’une des situations suivantes est détectée :

1. identifiant dupliqué dans `registry-index.yaml`;
2. identifiant canonique porté par plusieurs documents actifs;
3. chemin enregistré inexistant;
4. chemin du registre différent du document canonique détecté;
5. statut du registre différent du statut déclaré dans le document.

## Dette de migration exposée

Les situations suivantes sont signalées sans bloquer la première phase :

- objet détecté mais absent du registre;
- statut, version, propriétaire ou chronologie documentaire manquants;
- document ancien dont les métadonnées ne sont pas encore harmonisées.

Cette tolérance est temporaire. Le mode strict du script transforme ces écarts en échec dès que l’inventaire initial et l’harmonisation YAML sont terminés.

## Exécution locale

```bash
node 08-BOOTSTRAPS/audit-mad-registry.mjs
```

Mode strict :

```bash
node 08-BOOTSTRAPS/audit-mad-registry.mjs --strict
```

Le rapport est écrit dans :

```text
00-SYSTEME-MAD/registry/generated-integrity-report.md
```

## Intégration continue

Le workflow `.github/workflows/registry-integrity.yml` exécute le contrôle :

- sur les pull requests touchant la structure documentaire officielle;
- sur chaque mise à jour de `main`;
- manuellement avec `workflow_dispatch`.

Le rapport est publié dans le résumé du job et conservé comme artefact GitHub Actions.

## Séquence de fermeture du P0

1. établir le premier rapport reproductible;
2. corriger les erreurs bloquantes;
3. enregistrer les objets détectés par lots contrôlés;
4. harmoniser les métadonnées obligatoires;
5. activer le mode strict dans la CI;
6. déclarer le registre exhaustif pour les familles prises en charge.

## Limites assumées

- Le parseur de métadonnées couvre les champs YAML simples utilisés par le dépôt; il ne prétend pas être un parseur YAML général.
- Le titre et l’identifiant sont détectés à partir du nom du fichier ou du premier titre Markdown.
- Les relations entre objets demeurent hors du périmètre de REG-001.
- Aucun contenu documentaire n’est modifié automatiquement.

## Critères d’acceptation

- [ ] Le workflow s’exécute sur une pull request réelle.
- [ ] Aucun doublon actif n’est toléré.
- [ ] Aucun chemin canonique invalide n’est toléré.
- [ ] Aucune divergence de statut n’est tolérée.
- [ ] Le rapport identifie tous les objets non enregistrés détectables.
- [ ] La dette de métadonnées est mesurable.
- [ ] Le mode strict peut être activé sans refonte du script.
