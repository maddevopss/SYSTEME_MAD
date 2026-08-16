---
Projet: MAD DevOps
Document: Index — Recherche MADSuite
Version: 1.5
Dernière révision: 2026-08-16
Statut: Officiel
Auteur: Marc-André Dufour
---

# Index — Recherche MADSuite

## Rôle du document

Ce dossier classe les documents de recherche consolidés liés à MADSuite, à l’assistance cognitive, à l’accessibilité cognitive, aux standards techniques, à la conformité et aux hypothèses R&D du produit.

Il vise à séparer clairement :

- les fondations prudentes;
- les hypothèses R&D;
- les synthèses et contrôles MADPROOF;
- les recherches techniques sur les standards Web;
- les recherches de conformité;
- les recherches liées aux modules métiers.

La zone brute ayant servi à l’import et au tri initial a été archivée sous `99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/`. Elle n’est pas une source officielle.

---

## Principe directeur

Une source de recherche ne devient pas automatiquement une vérité produit.

Toute affirmation utilisée dans MADSuite doit être classée selon son niveau de maturité, reliée à ses sources ou preuves disponibles et reformulée prudemment.

---

## Structure actuelle

```text
SYSTEME_MAD/13-RESSOURCES/research/
  README.md
  00-index-sources.md
  001-pilotage-routine-indicateurs-sources.md
  01-fondations-prudentes/
  02-rd-hypotheses/
  03-madproof/
  04-standards-web/
  05-compliance/
  06-modules-metiers/
```

Cette structure reflète l’arborescence réelle du dépôt au 2026-08-16.

Les imports bruts et archives historiques ne doivent pas être recréés ici lorsqu’ils sont déjà conservés dans `99-ARCHIVES/`.

---

## Rôle des zones

### `00-index-sources.md`

Index transversal des sources, notes et statuts de recherche.

### `001-pilotage-routine-indicateurs-sources.md`

Recherche consolidée sur les routines de pilotage, indicateurs et sources associées.

### `01-fondations-prudentes/`

Contient les concepts suffisamment solides pour inspirer la conception, avec formulations prudentes et limites explicites.

Exemples de thèmes :

- charge cognitive;
- fonctions exécutives;
- accessibilité cognitive;
- mémoire prospective;
- reprise après interruption;
- réduction de friction;
- soutien contextuel.

### `02-rd-hypotheses/`

Contient les idées prometteuses mais non validées comme effets produit.

Ces documents doivent rester clairement identifiés comme R&D ou hypothèses jusqu’à preuve suffisante.

### `03-madproof/`

Contient le cadre, les matrices, registres et synthèses utilisés pour distinguer claims admissibles, hypothèses, limites et éléments à reformuler ou retirer.

### `04-standards-web/`

Contient les recherches consolidées sur les standards Web, compatibilités, fallbacks, distribution et contraintes de plateforme.

Ces recherches éclairent les choix techniques sans remplacer les standards `STD-*` officiels du dépôt.

### `05-compliance/`

Contient les recherches de conformité, droit, fiscalité, sécurité ou obligations connexes.

Ces documents doivent conserver leurs dates, sources et limites. Ils ne remplacent pas un avis professionnel lorsque celui-ci est requis.

### `06-modules-metiers/`

Contient les recherches préparatoires ou comparatives liées aux domaines et modules métiers.

Une recherche de module ne constitue pas une preuve que le module est implémenté, vendu ou activé.

---

## Documents de référence

Parmi les documents structurants du corpus :

| Document | Zone | Rôle |
|---|---|---|
| `00-index-sources.md` | racine `research/` | Index transversal des sources et statuts. |
| `001-assistance-cognitive-tdah.md` | `01-fondations-prudentes/` | Fondation prudente pour l’assistance cognitive non médicale. |
| `001-mad-ariane-snapshot-reprise.md` | `02-rd-hypotheses/` | Hypothèse R&D du snapshot de reprise. |
| `002-jitai-context-aware-sans-camera.md` | `02-rd-hypotheses/` | Hypothèse R&D context-aware sans caméra. |
| `000-cadre-madproof.md` | `03-madproof/` | Cadre MADPROOF de gouvernance des claims. |
| `999-registre-claims-madproof.md` | `03-madproof/` | Registre des claims et de leur statut. |
| `compatibilite-web-apis-fallbacks.md` | `04-standards-web/` | Recherche de compatibilité et fallbacks Web. |

La présence d’un document dans cette table facilite la navigation; elle ne modifie pas son statut propre.

---

## Règles obligatoires

- Ne pas traiter une source importée ou archivée comme officielle avant validation.
- Ne pas faire de claims médicaux non validés.
- Ne pas présenter MADSuite comme une thérapie numérique validée.
- Séparer hypothèse R&D, décision produit et fonctionnalité démontrée.
- Relier les affirmations importantes à une source, une preuve ou une note MADPROOF.
- Archiver les documents remplacés au lieu de maintenir deux responsabilités concurrentes.
- Maintenir les sources légales, fiscales et réglementaires avec leur date de vérification.
- Ne pas déduire l’état actuel d’un produit ou d’un module à partir d’une recherche préparatoire.
- Conserver l’utilisateur en contrôle des fonctions cognitives, contextuelles et assistives.

---

## Archives et provenance

Les sources brutes traitées lors de la campagne `atrier` sont conservées pour provenance sous :

```text
99-ARCHIVES/recherche-brute-pre-madproof-2026-07-02/
```

Les sorties utiles de cette campagne ont été consolidées dans les zones actives ci-dessus.

L’archive brute peut être consultée pour comprendre la provenance, mais elle ne doit pas être citée comme source officielle lorsqu’un document MADPROOF consolidé existe.

---

## Entretien de l’index

Lorsqu’une nouvelle catégorie de recherche apparaît :

1. vérifier qu’aucune zone existante ne couvre déjà la responsabilité;
2. éviter de recréer une zone d’import permanente dans le corpus actif;
3. classer le document selon son rôle réel;
4. conserver le statut documentaire et le niveau de preuve;
5. mettre à jour cet index seulement lorsque la structure réelle change.

## Prochaine action recommandée

Maintenir la concordance entre cet index, `00-index-sources.md`, le registre MADPROOF et les dossiers réellement présents, puis traiter les recherches dont les statuts ou sources sont devenus périmés lors des passes qualité suivantes.
