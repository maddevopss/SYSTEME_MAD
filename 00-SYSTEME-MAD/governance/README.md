---
Projet: MADSuite
Document: Index de gouvernance MADSuite
Version: 1.2
Dernière révision: 2026-08-16
Statut: À valider
Auteur: Marc-André Dufour
---

# Gouvernance MADSuite

Ce dossier constitue le centre de commandement de gouvernance des dépôts MADSuite et héberge également les registres internes qui doivent rester traçables sans créer de nouvelle racine documentaire.

## Documents

- [Tableau de bord validé](./dashboard.md)
- [Dashboard généré automatiquement](./generated-dashboard.md)
- [Automatisation du dashboard](./automation.md)
- [MADSuite Engineering Health Score](./engineering-health-score.md)
- [Dette et risques](./debt-and-risks.md)
- [Roadmap de gouvernance](./roadmap.md)
- [Registre des dépôts surveillés](./repos.json)
- [Registre de provenance addon](./registre-provenance-addon-2026-08-13.md)
- [Protocole des essais addon locaux](./protocole-essais-addon-test-only.md)
- [Décisions institutionnelles historiques](./decisions/README.md)
- [Registre R&D — preuves, incertitudes et essais](./registre-rd-sred.md)

## Sources opérationnelles

- [Snapshot multi-repo](../../10-ROADMAP/audit-multirepo-madsuite-2026-07-09.md)
- [Contexte IA](../ai-context.md)
- [Décisions générales](../decisions.md)

## Règle

Les données de ce dossier doivent rester synthétiques, vérifiables et cohérentes avec les repos spécialisés. Les détails techniques restent dans les dépôts d’exécution; `SYSTEME_MAD` conserve la vue consolidée, les décisions de gouvernance et les registres de provenance nécessaires.

Le dashboard généré fournit un signal GitHub automatique. Le tableau de bord validé et le Engineering Health Score complet demeurent soumis à une revue humaine.

Les documents de R&D, sécurité ou décision historique conservent leur propre statut. Leur présence sous `governance/` ne les promeut pas automatiquement dans le cœur institutionnel stable.
