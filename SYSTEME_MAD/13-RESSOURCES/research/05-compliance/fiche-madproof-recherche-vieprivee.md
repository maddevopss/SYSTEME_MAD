---
Projet: MADSuite / MAD DevOps
Document: Fiche MADPROOF — Recherche vie privée
Version: 1.0
Dernière révision: 2026-07-02
Statut: Classé / MADPROOF-COMPLIANCE-PRIVACY
Auteur: Marc-André Dufour / MAD DevOps
---

# Fiche MADPROOF — Recherche vie privée

## 1. Source brute

| Champ | Valeur |
|---|---|
| Fichier source | `docs/research/atrier/Recherche-vieprivee.md` |
| Type | Recherche compliance convertie depuis document externe |
| Domaine | Vie privée, consentement, Loi 25, PIPEDA, RGPD, CPRA, GPC, IA, transparence |
| Destination MADPROOF | `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/` |
| Statut source | Brute, non officielle |

## 2. Verdict global

**MADPROOF-COMPLIANCE-PRIVACY : source utile, mais plusieurs affirmations sont trop fortes, prospectives ou juridiquement risquées.**

Le document contient de bonnes orientations produit : transparence en couches, notices contextuelles, consentement granulaire, refus aussi simple que l’acceptation, minimisation, versionnage des politiques, gestion des transferts hors Québec, attention aux décisions automatisées et aux signaux globaux de confidentialité.

Cependant, il contient aussi des affirmations à remplacer ou à vérifier, notamment sur :

- la LPVPC/CPPA fédérale présentée comme en vigueur;
- l’obligation générale de `privacy.json`;
- l’usage de blockchain comme preuve quasi incontestable;
- des certifications supposées opérationnelles au Québec;
- des décisions ou sanctions non sourcées;
- des claims de conformité intégrale;
- des interprétations trop générales du RGPD, de l’AI Act, du CPRA et de la Loi 25.

## 3. Éléments à conserver

| Élément | Classification | Décision |
|---|---|---|
| Politique de vie privée en langage clair | MVP / Compliance | Conserver |
| Transparence en couches | MVP sous conditions | Conserver comme bonne pratique UX |
| Notices contextuelles just-in-time | MVP sous conditions | Conserver comme pattern produit |
| Consentement granulaire | MVP / Privacy by design | Conserver |
| Refus aussi accessible que l’acceptation | MVP / Anti-dark-pattern | Conserver |
| Versionnage de la politique | MVP / Gouvernance | Conserver |
| Registre interne des consentements | MVP sous conditions | Conserver sans blockchain obligatoire |
| Cartographie des données | MVP / Gouvernance | Conserver |
| Minimisation des données | MVP / Privacy by design | Conserver |
| Transparence sur décisions automatisées | MVP sous conditions / À vérifier | Conserver avec prudence juridique |
| Information sur transferts hors Québec | MVP sous conditions / Loi 25 | Conserver avec validation juridique |
| Paramètres privacy accessibles | MVP / UX | Conserver |
| Privacy by default | MVP / Loi 25 | Conserver pour services technologiques publics |

## 4. Claims à remplacer ou corriger

| Claim brut ou implicite | Problème MADPROOF | Décision |
|---|---|---|
| La LPVPC/CPPA remplace PIPEDA en 2026. | Inexact ou non confirmé par source officielle. | À remplacer : PIPEDA demeure la référence fédérale à vérifier. |
| Les politiques doivent impérativement proposer une troisième option gratuite dans tous les cas Pay or Okay. | Trop général; surtout contexte grandes plateformes/EDPB. | À reformuler avec périmètre UE/grandes plateformes. |
| L’AI Act impose d’expliquer toute IA dans la politique de vie privée. | Trop général; dépend du type de système, du rôle et du risque. | À vérifier / reformuler. |
| Les icônes normalisées remplacent les longues descriptions. | Trop fort; les icônes peuvent aider, pas remplacer seules. | À reformuler. |
| Les tests A/B prouvent la conformité. | Trop fort; tests peuvent documenter l’UX, pas garantir conformité. | À reformuler. |
| `privacy.json` devient une obligation. | Spéculatif/R&D. | R&D / veille. |
| La blockchain rend la preuve quasi incontestable. | Trop fort, inutile MVP, risque complexité. | À remplacer par registre versionné classique. |
| La CAI reconnaît plusieurs certifications opérationnelles en 2026. | À vérifier; ne pas affirmer sans source officielle. | À vérifier. |
| Politique certifiée = respect intégral de la loi. | Faux ou trop absolu; une certification n’élimine pas le risque. | À supprimer/reformuler. |
| Conformité Loi 25 garantie si checklist suivie. | Promesse juridique interdite. | Interdit. |

## 5. Formulations MADPROOF recommandées

| Sujet | Formulation prudente |
|---|---|
| Politique privacy | MADSuite doit fournir une information claire, accessible et tenue à jour sur les renseignements personnels traités. |
| Consentement | Les demandes de consentement doivent être contextualisées, granulaires et révocables lorsque applicable. |
| Notices just-in-time | Les informations importantes doivent apparaître au moment où une fonctionnalité sensible est activée. |
| Loi 25 | MADSuite doit être conçu selon une checklist interne inspirée des exigences applicables au Québec; une validation juridique demeure requise selon contexte. |
| PIPEDA | Les obligations fédérales doivent être vérifiées selon le type d’organisation, les activités et les provinces concernées. |
| Décisions automatisées | Si une décision est fondée exclusivement sur un traitement automatisé, l’information fournie à l’utilisateur doit être validée juridiquement. |
| IA | Les usages d’IA doivent être décrits en termes de finalité, données utilisées, limites et contrôle utilisateur. |
| GPC | Les signaux globaux de confidentialité doivent être suivis en veille et traités selon les juridictions visées. |
| Blockchain consentement | Un registre versionné, horodaté et auditables des consentements est préférable au MVP. |
| Certifications | Les certifications privacy peuvent être suivies en veille, mais ne doivent pas être présentées comme preuve automatique de conformité. |

## 6. Décisions MADSuite spécifiques

| Sujet | Décision |
|---|---|
| Politique privacy publique | Requise avant production publique sérieuse. |
| Privacy dashboard | Recommandé dans MADSuite. |
| Consentement par module | Recommandé, surtout pour desktop agent, PWA, MAD Ariane et IA. |
| Consentement fragmenté/progressif/révocable | Aligné avec la charte éthique. |
| Collecte locale par défaut | Fondation MADSuite. |
| Caméra/micro pour cognition | Interdit MVP. |
| Profilage externe | Interdit. |
| Inférence d’état mental | Interdit en wording public; signaux d’usage seulement. |
| Registre de consentement | MVP sous conditions. |
| Blockchain consentement | Non MVP / R&D non prioritaire. |
| privacy.json / agents IA | R&D / veille. |
| GPC | À vérifier selon marchés; utile à suivre. |
| CPRA/États-Unis | À vérifier seulement si marché US ciblé. |
| RGPD/UE | À vérifier seulement si marché UE ciblé. |

## 7. Garde-fous à intégrer

### 7.1 Garde-fou anti-conformité absolue

Ne jamais écrire :

- conforme à 100 %;
- conformité garantie;
- certifié conforme sans preuve;
- légalement blindé;
- preuve incontestable;
- respecte toutes les lois;
- aucune responsabilité.

### 7.2 Garde-fou vie privée mentale

Pour MADSuite cognitive :

- ne pas utiliser des données sensibles pour lire l’état mental;
- ne pas présenter les signaux d’usage comme vérité psychologique;
- ne pas profiler l’utilisateur à des fins externes;
- expliquer chaque collecte sensible au moment opportun;
- offrir contrôle, désactivation et suppression lorsque possible.

### 7.3 Garde-fou produit

Toute nouvelle collecte doit répondre à quatre questions :

1. Pourquoi cette donnée est-elle nécessaire?
2. Peut-on obtenir le même bénéfice avec moins de données?
3. L’utilisateur comprend-il ce qui se passe?
4. L’utilisateur peut-il refuser ou désactiver sans perdre l’usage principal?

## 8. Documents à créer ou mettre à jour

| Document | Action recommandée |
|---|---|
| `SYSTEME_MAD/09-CHECKLISTS/chk-loi25-madsuite.md` | Vérifier qu’elle couvre notices contextuelles, consentement module, registre, transferts, décisions automatisées. |
| `SYSTEME_MAD/03-STANDARDS/std-privacy-by-design.md` | À créer si le standard privacy n’existe pas. |
| `SYSTEME_MAD/04-ADR/ADR-privacy-dashboard-consentement-fragmente.md` | À créer si décision produit confirmée. |
| `SYSTEME_MAD/13-RESSOURCES/research/05-compliance/registre-claims-compliance-a-verifier.md` | Optionnel si beaucoup de claims juridiques à suivre. |
| Politique de confidentialité publique MADSuite | À rédiger plus tard avec validation juridique. |

## 9. Claims prêts pour registre si nécessaire

```markdown
| C-PRIV-001 | MADSuite est conforme à la Loi 25. | Interdit | Non validé | MADSuite est conçu selon une checklist interne inspirée des exigences applicables en matière de protection des renseignements personnels; validation juridique requise. | Conforme Loi 25 garanti. | Juridique / conformité | Supprimer claim absolu |
| C-PRIV-002 | La LPVPC remplace PIPEDA en 2026. | À remplacer | Inexact/non confirmé | Les obligations fédérales doivent être vérifiées; PIPEDA demeure une référence fédérale officielle à la date de vérification. | CPPA en vigueur automatiquement. | Juridique / actualité | Remplacer |
| C-PRIV-003 | Un registre blockchain rend le consentement incontestable. | À reformuler | Fragile | Un registre versionné et horodaté peut aider à documenter les consentements. | Preuve incontestable. | Juridique / preuve | Reformuler |
| C-PRIV-004 | MADSuite lit ou déduit l’état mental. | Interdit | Incompatible | MADSuite peut traiter certains signaux d’usage explicables pour soutenir l’organisation, sans prétendre connaître l’état mental. | Lit l’état mental. | Vie privée mentale | Supprimer |
```

## 10. TODO

- [ ] Vérifier `chk-loi25-madsuite.md` et l’aligner avec cette fiche.
- [ ] Créer ou vérifier un standard privacy by design global.
- [ ] Ajouter les claims compliance critiques au registre MADPROOF si réutilisés publiquement.
- [ ] Passer ensuite à `Recherche-cybersecurite.md`.
- [ ] Garder `Recherche-vieprivee.md` dans `atrier` comme source brute, non officielle.

## 11. Verdict final

`Recherche-vieprivee.md` est **traité comme source brute analysée**.

Il doit inspirer la gouvernance privacy MADSuite, mais ne doit pas être utilisé tel quel pour affirmer une conformité juridique, fédérale, provinciale, européenne ou américaine.