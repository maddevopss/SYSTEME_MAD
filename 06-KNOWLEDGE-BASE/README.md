---
Projet: MAD DevOps
Document: Index — Knowledge Base
Version: 1.2
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Knowledge Base

## Rôle du dossier

Ce dossier contient les connaissances réutilisables du Système MAD.

Il sert à conserver les définitions, références techniques, notes explicatives et bases de compréhension qui peuvent être utilisées par plusieurs documents, projets ou agents IA.

---

## Documents

| Fichier | Statut | Rôle |
|---|---|---|
| `glossaire-madsuite-madproof.md` | Officiel | Glossaire des termes MADSuite, MADPROOF, MAD Ariane et assistance cognitive. |
| `mad-guardian-glossaire.md` | Officiel | Glossaire des termes MAD Guardian, profils, gates, preuves et certification. |
| `madsuite-modele-menace-assistance-distante-v1.md` | À valider / MADPROOF sécurité | Baseline technique de menaces et garde-fous pour l’assistance distante. |

---

## Documents prioritaires

### MADSuite / MADPROOF

```text
SYSTEME_MAD/06-KNOWLEDGE-BASE/glossaire-madsuite-madproof.md
```

### Assistance distante

```text
SYSTEME_MAD/06-KNOWLEDGE-BASE/madsuite-modele-menace-assistance-distante-v1.md
```

Ce modèle de menace complète ADR-016. Il reste une baseline de conception `À valider`, pas une certification de sécurité.

---

## Règles d’usage

- Utiliser la Knowledge Base pour stabiliser les définitions et bases techniques réutilisables.
- Ne pas placer ici les décisions structurantes : utiliser `04-ADR/`.
- Ne pas placer ici les roadmaps : utiliser `10-ROADMAP/`.
- Ne pas placer ici les templates : utiliser `07-TEMPLATES/`.
- Ne pas placer ici les checklists : utiliser `09-CHECKLISTS/`.
- Relier les documents de recherche et produit aux définitions importantes lorsque nécessaire.
- Un modèle de menace documente les risques et contrôles attendus; il ne prouve pas qu’une implémentation satisfait ces contrôles.

---

## Liens utiles

- `SYSTEME_MAD/MANIFEST.md`
- `SYSTEME_MAD/02-GUIDE/05-madsuite.md`
- `SYSTEME_MAD/13-RESSOURCES/research/03-madproof/README.md`
- `SYSTEME_MAD/04-ADR/ADR-016-webrtc-for-remote-assistance.md`
