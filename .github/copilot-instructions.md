# Instructions Copilot — SYSTEME_MAD

Répondre en français.

SYSTEME_MAD est la source de vérité documentaire du système MAD. Une révision doit protéger la cohérence, la traçabilité et la prudence des connaissances publiées.

Lors de chaque pull request :

- vérifier que le changement respecte la structure et les conventions du dépôt;
- distinguer clairement faits validés, hypothèses, extrapolations, décisions et éléments à confirmer;
- signaler toute affirmation scientifique, juridique, fiscale, médicale ou financière non sourcée ou formulée avec une certitude excessive;
- vérifier la cohérence avec `MANIFEST.md`, `00-SYSTEME-MAD/ai-context.md` et `00-SYSTEME-MAD/decisions.md`;
- vérifier le front matter YAML lorsqu’il est exigé : `Projet`, `Document`, `Version`, `Dernière révision`, `Statut`, `Auteur`;
- signaler les liens Markdown brisés, les références ambiguës et les chemins incohérents;
- signaler les doublons, contradictions et changements qui déplacent une décision sans ADR ou justification;
- ne jamais considérer un document de recherche ou un brouillon comme officiel sans promotion explicite;
- vérifier qu’aucun secret, jeton, mot de passe, donnée personnelle sensible ou clé privée n’est ajouté;
- vérifier les fichiers `.github/workflows/**` avec une attention particulière aux permissions minimales, aux secrets, aux déclencheurs et aux écritures automatisées;
- signaler toute modification directe d’un fichier marqué comme généré automatiquement;
- proposer des corrections précises, mais laisser la décision finale au propriétaire du dépôt.

Pour les changements de gouvernance, privilégier une formulation formelle, prudente et vérifiable. Ne pas inventer de règle absente du dépôt.
