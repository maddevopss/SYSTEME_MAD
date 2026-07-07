---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche droit d’auteur et propriété intellectuelle
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-IP-COMPLIANCE
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche droit d’auteur et propriété intellectuelle

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-droitauteur.md` |
| Type | Recherche juridique convertie depuis document externe |
| Domaine | Droit d’auteur, licences, open source, brevets, marques, contrats, confidentialité |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-IP-COMPLIANCE : source utile comme inventaire juridique, mais non utilisable comme avis juridique ou plan de protection officiel tel quel.**

Le document contient plusieurs éléments pertinents pour MAD DevOps et MADSuite :

- droit d’auteur canadien sur le code;
- importance des contrats avec pigistes, collaborateurs et employés;
- renonciation aux droits moraux lorsque applicable;
- gestion des licences open source;
- politique de confidentialité avant collecte de données;
- dépôt de marques pour protéger l’identité commerciale;
- secret commercial et confidentialité;
- registre de développement horodaté;
- prudence sur brevets et divulgation publique.

Cependant, plusieurs parties mélangent des régimes France/Europe/États-Unis avec Canada/Québec. Ces sections peuvent être utiles en veille internationale, mais ne doivent pas guider directement la gouvernance MADSuite tant que le marché cible principal reste Québec/Canada.

## 3. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| Droit d’auteur sur le code source | MVP / gouvernance IP | Conserver |
| Registre Git et historique de développement | MVP / preuve interne | Conserver |
| Mentions de droit d’auteur dans code/docs/site | MVP sous conditions | Conserver |
| Contrats écrits avec pigistes | MVP critique | Conserver |
| Clauses de cession PI | MVP critique | Conserver |
| Renonciation aux droits moraux lorsque applicable | MVP critique | Conserver avec validation juridique |
| Clauses de confidentialité | MVP critique | Conserver |
| Registre open source / dépendances | MVP critique | Conserver |
| Vérification licences MIT/Apache/GPL/AGPL | MVP critique | Conserver |
| Marques MAD DevOps / MADSuite | Roadmap IP | Conserver comme action business |
| Recherche d’antériorité marque | Roadmap IP | Conserver |
| Brevets logiciels | R&D / avis professionnel | Conserver comme veille, pas promesse |
| Secret commercial | MVP / gouvernance | Conserver |
| Conditions d’utilisation SaaS | MVP avant lancement sérieux | Conserver |
| Politique de confidentialité | MVP avant collecte sérieuse | Conserver via checklist privacy |

## 4. Éléments à classer en veille non prioritaire

| Élément | Catégorie | Raison |
|---|---|---|
| Droit français / CPI | Veille internationale | Non prioritaire pour MADSuite Québec/Canada. |
| CNIL / RGPD détaillé | Veille / marchés UE | Déjà couvert par privacy; à activer si marché UE. |
| Fair use américain | Veille / marchés US | Ne pas confondre avec utilisation équitable canadienne. |
| Licences légales françaises | Veille | Peu utile pour MVP MADSuite. |
| PCT / brevet international détaillé | R&D IP | À gérer avec agent de brevets si stratégie confirmée. |
| Douanes / retenue contrefaçon | Veille | Non prioritaire MVP SaaS. |
| Actions judiciaires | Veille juridique | À confier à avocat si litige réel. |

## 5. Claims à reformuler ou bloquer

| Claim brut ou implicite | Problème MADPROOF | Décision |
|---|---|---|
| Le droit d’auteur protège automatiquement tout le logiciel et suffit à protéger MADSuite. | Trop simplifié; protège l’expression/code, pas nécessairement l’idée ou fonctionnalité. | À reformuler. |
| Un brevet est le seul outil qui protège une fonctionnalité technique. | Trop absolu; il existe aussi secret commercial, contrat, marque, avance produit. | À reformuler. |
| Les algorithmes MADSuite sont brevetables. | Non déterminé; dépend nouveauté, utilité, non-évidence et sujet brevetable. | À vérifier par agent. |
| Une licence open source fait perdre tout contrôle exclusif. | Trop large; dépend licence, stratégie et périmètre publié. | À reformuler. |
| Le dépôt de droit d’auteur règle la preuve de propriété. | Trop fort; l’enregistrement aide mais ne remplace pas contrats/preuves. | À reformuler. |
| Les coûts/délais de marque sont fixes. | Changent avec classes, objections, agents, pays. | À vérifier. |
| Les pigistes cèdent leurs droits parce qu’ils sont payés. | Faux/risqué. | À bloquer; exiger écrit. |
| Fair use = fair dealing. | Faux/risque. | À bloquer; distinguer Canada/US. |
| Toute source officielle est automatiquement applicable à MADSuite. | Trop large; juridiction et contexte comptent. | À reformuler. |

## 6. Formulations MADPROOF recommandées

| Sujet | Formulation prudente |
|---|---|
| Droit d’auteur | Le code, les textes et certains contenus originaux peuvent être protégés par droit d’auteur, mais cette protection ne remplace pas les contrats, la gestion des licences et les preuves de titularité. |
| Pigistes/collaborateurs | Tout travail externe doit être couvert par un contrat écrit précisant cession des droits, confidentialité, usage des livrables et renonciation aux droits moraux lorsque applicable. |
| Open source | Toute dépendance ou composant tiers doit être inventorié, sa licence vérifiée et ses obligations respectées avant distribution. |
| Brevets | Les idées techniques potentiellement brevetables doivent être traitées comme confidentielles jusqu’à avis professionnel. |
| Marques | Les noms MADSuite, MAD DevOps, logos et slogans stratégiques doivent être vérifiés avant usage public intensif ou dépôt. |
| Secret commercial | Les éléments non publiés doivent être protégés par contrôle d’accès, confidentialité et documentation interne. |
| Juridictions | Les règles France/UE/US sont de la veille; la gouvernance principale doit suivre Québec/Canada tant que le marché cible principal est local. |

## 7. Décisions MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Code MADSuite | Traiter comme actif IP central. |
| Documentation MADPROOF | Traiter comme actif confidentiel stratégique. |
| Slogans / formulations MADSuite | Ne pas publier sans décision marketing/IP. |
| Composants open source | Registre obligatoire. |
| Copyleft fort GPL/AGPL | Revue obligatoire avant intégration. |
| Dépendances npm critiques | Vérifier licence et provenance. |
| Pigistes / collaborateurs | Contrat écrit obligatoire avant contribution significative. |
| Contributions externes GitHub | CLA ou accord de contribution à envisager si projet ouvert. |
| Marques MADSuite / MAD DevOps | Recherche et dépôt à planifier. |
| Brevets | R&D seulement; avis d’agent requis avant divulgation si stratégie confirmée. |
| Open source de composants critiques | ADR obligatoire avant publication. |

## 8. Baseline IP recommandée

### 8.1 Gouvernance du code

- [ ] Dépôt privé pour le code propriétaire.
- [ ] Historique Git conservé.
- [ ] Commits liés aux tickets/décisions.
- [ ] Mentions de droit d’auteur dans fichiers clés si souhaité.
- [ ] Accès GitHub limité selon rôle.
- [ ] Départs collaborateurs : accès révoqué.
- [ ] Branches et releases taguées.

### 8.2 Contrats

- [ ] Contrat pigiste avant travail.
- [ ] Cession PI écrite.
- [ ] Confidentialité.
- [ ] Renonciation aux droits moraux lorsque applicable.
- [ ] Définition claire des livrables.
- [ ] Définition des composants préexistants.
- [ ] Définition des licences tierces utilisées.
- [ ] Clause d’usage portfolio si autorisée ou interdite.

### 8.3 Open source

- [ ] Inventaire des dépendances.
- [ ] Licence de chaque dépendance.
- [ ] Détection des licences copyleft fortes.
- [ ] Vérification des obligations d’attribution.
- [ ] Vérification des obligations de redistribution.
- [ ] Fichier NOTICE si nécessaire.
- [ ] Licence du projet clairement indiquée si dépôt public.
- [ ] Aucun copier-coller de code externe sans source et licence.

### 8.4 Contenus tiers

- [ ] Images avec licence vérifiée.
- [ ] Icônes avec licence vérifiée.
- [ ] Polices avec licence vérifiée.
- [ ] Musique/sons avec licence vérifiée.
- [ ] Templates avec licence vérifiée.
- [ ] Datasets avec licence vérifiée.
- [ ] Contenus IA vérifiés selon conditions d’usage.
- [ ] Attributions conservées.

### 8.5 Marques et identité

- [ ] Recherche de disponibilité du nom MADSuite.
- [ ] Recherche de disponibilité du logo.
- [ ] Recherche domaines et réseaux sociaux.
- [ ] Vérification conflit secteur logiciel/SaaS.
- [ ] Décision de dépôt marque au Canada.
- [ ] Surveillance simple des noms similaires.

### 8.6 Brevets / secret commercial

- [ ] Identifier les idées techniques sensibles.
- [ ] Éviter divulgation publique avant décision.
- [ ] Documenter dates d’invention et prototypes.
- [ ] Consulter agent de brevets si une revendication semble stratégique.
- [ ] Préférer secret commercial si brevet non souhaité.
- [ ] Limiter accès aux algorithmes ou méthodes non publiées.

## 9. Documents à créer ou mettre à jour

| Document | Action recommandée |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-open-source-licenses.md` | Vérifier alignement avec cette fiche. |
| `SYSTEME_MAD/09-CHECKLISTS/chk-ip-assets-madsuite.md` | À créer si on veut verrouiller la gouvernance PI. |
| `SYSTEME_MAD/04-ADR/ADR-open-source-strategy.md` | À créer si publication open source prévue. |
| `SYSTEME_MAD/04-ADR/ADR-ip-patent-vs-trade-secret.md` | À créer si stratégie brevet/secret à décider. |
| `SYSTEME_MAD/07-TEMPLATES/template-contrat-pigiste-ip.md` | À créer plus tard avec professionnel juridique. |

## 10. Claims prêts pour registre si nécessaire

```markdown
| C-IP-001 | Le droit d’auteur protège entièrement MADSuite. | À reformuler | Trop large | Le droit d’auteur peut protéger le code et les contenus originaux, mais ne protège pas automatiquement les idées, méthodes ou positionnement produit. | Protège tout MADSuite. | Juridique / IP | Reformuler |
| C-IP-002 | Les pigistes cèdent leurs droits lorsqu’ils sont payés. | Interdit | Faux/risqué | Tout travail externe doit être couvert par un contrat écrit de cession ou licence des droits. | Paiement = droits acquis. | Juridique / contrats | Supprimer |
| C-IP-003 | Les algorithmes MADSuite sont brevetables. | À vérifier | Non déterminé | Une stratégie brevet doit être évaluée par un agent de brevets avant divulgation publique. | Brevetable garanti. | Juridique / brevet | Vérifier |
| C-IP-004 | Une licence open source fait perdre tout contrôle. | À reformuler | Trop large | Les effets d’une licence open source dépendent de la licence, du composant publié et de la stratégie de distribution. | Perte totale de contrôle. | Open source | Reformuler |
```

## 11. TODO

- [ ] Vérifier `chk-open-source-licenses.md`.
- [ ] Créer `chk-ip-assets-madsuite.md` si gouvernance PI dédiée souhaitée.
- [ ] Créer une ADR sur stratégie open source si un composant est publié.
- [ ] Créer une ADR brevet vs secret commercial si les modules MAD Ariane/Kai deviennent stratégiques.
- [ ] Garder `Recherche-droitauteur.md` dans `atrier` comme source brute, non officielle.
- [ ] Revenir ensuite au bloc géospatial / terrain.

## 12. Verdict final

`Recherche-droitauteur.md` est **traité comme source brute analysée**.

Il doit servir à renforcer la gouvernance IP, contrats, licences et contenus tiers de MAD DevOps, sans devenir un avis juridique ou une promesse de protection automatique.