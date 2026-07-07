# Réorganisation officielle du dépôt Système MAD
# À lancer depuis la racine du repo

$Root = Get-Location
$Target = Join-Path $Root "SYSTEME_MAD"

$Dirs = @(
  "00-SYSTEME-MAD",
  "01-FONDATIONS",
  "02-GUIDE",
  "03-STANDARDS",
  "04-ADR",
  "05-PLAY",
  "06-KNOWLEDGE-BASE",
  "07-TEMPLATES",
  "08-BOOTSTRAPS",
  "09-CHECKLISTS",
  "10-ROADMAP",
  "11-ACADEMY",
  "12-INNOVATION",
  "13-RESSOURCES",
  "13-RESSOURCES/brand",
  "13-RESSOURCES/assets",
  "13-RESSOURCES/legal",
  "13-RESSOURCES/research",
  "99-ARCHIVES"
)

foreach ($dir in $Dirs) {
  New-Item -ItemType Directory -Force -Path (Join-Path $Target $dir) | Out-Null
}

$Moves = @{
  "docs/00-gouvernance/00-systeme-mad.md" = "SYSTEME_MAD/00-SYSTEME-MAD/00-systeme-mad.md"
  "docs/00-gouvernance/mad-system.md" = "SYSTEME_MAD/00-SYSTEME-MAD/mad-system.md"

  "docs/00-gouvernance/00-foundations-v1.md" = "SYSTEME_MAD/01-FONDATIONS/00-foundations-v1.md"
  "docs/00-gouvernance/00-foundations-prop*" = "SYSTEME_MAD/01-FONDATIONS/"
  "docs/00-gouvernance/foundations-fusion-no*" = "SYSTEME_MAD/01-FONDATIONS/"
  "docs/00-gouvernance/non-negociable.md" = "SYSTEME_MAD/01-FONDATIONS/non-negociable.md"
  "docs/00-gouvernance/mad-001.md" = "SYSTEME_MAD/01-FONDATIONS/mad-001.md"

  "docs/01-identite/*" = "SYSTEME_MAD/02-GUIDE/"
  "docs/03-communication/*" = "SYSTEME_MAD/02-GUIDE/"
  "docs/04-processus-client/*" = "SYSTEME_MAD/02-GUIDE/"
  "docs/06-operations-internes/06-realite.md" = "SYSTEME_MAD/02-GUIDE/06-realite.md"
  "docs/06-operations-internes/09-ia.md" = "SYSTEME_MAD/02-GUIDE/09-ia.md"
  "docs/06-operations-internes/11-documentation.md" = "SYSTEME_MAD/02-GUIDE/11-documentation.md"
  "docs/06-operations-internes/15-innovation.md" = "SYSTEME_MAD/02-GUIDE/15-innovation.md"

  "docs/07-technique/standards/*" = "SYSTEME_MAD/03-STANDARDS/"
  "docs/07-technique/001-git.md" = "SYSTEME_MAD/06-KNOWLEDGE-BASE/001-git.md"
  "docs/07-technique/002-nodejs.md" = "SYSTEME_MAD/06-KNOWLEDGE-BASE/002-nodejs.md"

  "docs/06-operations-internes/plays/*" = "SYSTEME_MAD/05-PLAY/"
  "docs/06-operations-internes/chk-001.md" = "SYSTEME_MAD/09-CHECKLISTS/chk-001.md"
  "docs/06-operations-internes/backlog.md" = "SYSTEME_MAD/10-ROADMAP/backlog.md"
  "docs/06-operations-internes/progression.md" = "SYSTEME_MAD/10-ROADMAP/progression.md"
  "docs/06-operations-internes/roadmap.md" = "SYSTEME_MAD/10-ROADMAP/roadmap.md"

  "docs/08-templates/*" = "SYSTEME_MAD/07-TEMPLATES/"
  "docs/09-archives/boot-*.md" = "SYSTEME_MAD/08-BOOTSTRAPS/"
  "docs/09-archives/*" = "SYSTEME_MAD/99-ARCHIVES/"

  "brand/*" = "SYSTEME_MAD/13-RESSOURCES/brand/"
  "research/*" = "SYSTEME_MAD/13-RESSOURCES/research/"
  "legal/*" = "SYSTEME_MAD/13-RESSOURCES/legal/"
}

foreach ($source in $Moves.Keys) {
  $destination = $Moves[$source]
  $matches = Get-ChildItem -Path $source -ErrorAction SilentlyContinue

  foreach ($item in $matches) {
    if (Test-Path $item.FullName) {
      New-Item -ItemType Directory -Force -Path (Split-Path $destination) | Out-Null

      if ($destination.EndsWith("/")) {
        Move-Item -Force -Path $item.FullName -Destination $destination
      } else {
        Move-Item -Force -Path $item.FullName -Destination $destination
      }
    }
  }
}

# Créer ADR-001 si absent
$AdrPath = Join-Path $Target "04-ADR/ADR-001-architecture-depot-systeme-mad.md"

if (!(Test-Path $AdrPath)) {
@"
---
Projet: Système MAD
Document: ADR-001 — Architecture officielle du dépôt Système MAD
Version: 1.0
Dernière révision: 2026-06-30
Statut: Accepté
Auteur: Marc-André Dufour
---

# ADR-001 — Architecture officielle du dépôt Système MAD

Le dépôt du Système MAD est organisé par fonction plutôt que par thème documentaire.

Voir `SYSTEME_MAD/04-ADR/ADR-001-architecture-depot-systeme-mad.md` pour la décision officielle.
"@ | Set-Content -Encoding UTF8 $AdrPath
}

Write-Host ""
Write-Host "Réorganisation terminée." -ForegroundColor Green
Write-Host "Prochaine étape : vérifier avec git status."
