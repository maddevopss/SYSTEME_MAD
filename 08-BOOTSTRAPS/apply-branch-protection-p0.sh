#!/usr/bin/env bash
set -euo pipefail

# SYSTEME_MAD — P0 Branch protection apply script
#
# Prérequis :
# - GitHub CLI installé : https://cli.github.com/
# - `gh auth login` effectué avec un compte/token admin sur les repos ciblés
# - Exécuter depuis Git Bash, WSL, macOS/Linux ou tout shell bash compatible
#
# Repos ciblés P0 :
# - bleeband/SYSTEME_MAD
# - maddevopss/madsuite-backend
# - maddevopss/madsuite-frontend

require_gh() {
  if ! command -v gh >/dev/null 2>&1; then
    echo "ERREUR: GitHub CLI 'gh' est introuvable." >&2
    echo "Installe gh puis relance le script." >&2
    exit 1
  fi

  gh auth status >/dev/null
}

apply_protection() {
  local repo="$1"
  local json_file="$2"

  echo "==> Application branch protection: ${repo}:main"
  gh api \
    --method PUT \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "/repos/${repo}/branches/main/protection" \
    --input "${json_file}"
}

verify_protection() {
  local repo="$1"

  echo
  echo "==> Vérification: ${repo}:main"
  gh api "/repos/${repo}/branches/main/protection" \
    --jq '{required_status_checks: .required_status_checks.contexts, enforce_admins: .enforce_admins.enabled, required_pull_request_reviews: .required_pull_request_reviews.required_approving_review_count, required_conversation_resolution: .required_conversation_resolution.enabled, allow_force_pushes: .allow_force_pushes.enabled, allow_deletions: .allow_deletions.enabled}'
}

main() {
  require_gh

  tmpdir="$(mktemp -d)"
  trap 'rm -rf "${tmpdir}"' EXIT

  cat > "${tmpdir}/systeme-mad.json" <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["Docs quality smoke"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": false,
  "required_conversation_resolution": true,
  "lock_branch": false,
  "allow_fork_syncing": false
}
JSON

  cat > "${tmpdir}/backend.json" <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": [
      "Backend Guards",
      "Backend CI / Guard, lint, syntax, tests and security checks"
    ]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": false,
  "required_conversation_resolution": true,
  "lock_branch": false,
  "allow_fork_syncing": false
}
JSON

  cat > "${tmpdir}/frontend.json" <<'JSON'
{
  "required_status_checks": {
    "strict": true,
    "contexts": ["Frontend CI / Guard, lint, test and build"]
  },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": false,
  "required_conversation_resolution": true,
  "lock_branch": false,
  "allow_fork_syncing": false
}
JSON

  apply_protection "bleeband/SYSTEME_MAD" "${tmpdir}/systeme-mad.json"
  apply_protection "maddevopss/madsuite-backend" "${tmpdir}/backend.json"
  apply_protection "maddevopss/madsuite-frontend" "${tmpdir}/frontend.json"

  verify_protection "bleeband/SYSTEME_MAD"
  verify_protection "maddevopss/madsuite-backend"
  verify_protection "maddevopss/madsuite-frontend"

  echo
  echo "OK — Branch protection P0 appliquée et vérifiée via API."
  echo "Étape suivante : reporter la sortie dans SYSTEME_MAD#32 et CHK-048."
}

main "$@"
