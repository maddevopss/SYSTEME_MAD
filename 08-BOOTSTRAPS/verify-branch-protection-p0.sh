#!/usr/bin/env bash
set -euo pipefail

# SYSTEME_MAD — P0 Branch protection verification script
#
# Objectif : produire une preuve lisible et collable dans SYSTEME_MAD#32 / CHK-048
# après exécution de 08-BOOTSTRAPS/apply-branch-protection-p0.sh.
#
# Prérequis :
# - GitHub CLI installé
# - gh auth login avec accès aux 3 repos P0
# - jq installé
#
# Note Windows/Git Bash : les endpoints `gh api` sont volontairement écrits
# sans slash initial (`repos/...` au lieu de `/repos/...`) pour éviter que MSYS
# les convertisse en chemins Windows comme `C:/Program Files/Git/repos/...`.

repos=(
  "bleeband/SYSTEME_MAD"
  "maddevopss/madsuite-backend"
  "maddevopss/madsuite-frontend"
)

expected_contexts_bleeband_SYSTEME_MAD=(
  "Docs quality smoke"
)

expected_contexts_maddevopss_madsuite_backend=(
  "Backend Guards"
  "Backend CI / Guard, lint, syntax, tests and security checks"
)

expected_contexts_maddevopss_madsuite_frontend=(
  "Frontend CI / Guard, lint, test and build"
)

slug() {
  echo "$1" | tr '/-' '__'
}

print_expected() {
  local repo_slug="$1"
  local var="expected_contexts_${repo_slug}[@]"
  printf '%s\n' "${!var}"
}

require_gh() {
  if ! command -v gh >/dev/null 2>&1; then
    echo "ERREUR: GitHub CLI 'gh' est introuvable." >&2
    exit 1
  fi

  gh auth status >/dev/null
}

require_jq() {
  if ! command -v jq >/dev/null 2>&1; then
    echo "ERREUR: jq est introuvable." >&2
    echo "Installe jq puis relance le script." >&2
    exit 1
  fi
}

verify_repo() {
  local repo="$1"
  local repo_slug
  repo_slug="$(slug "$repo")"

  echo
  echo "## ${repo}:main"

  local protection_json
  if ! protection_json="$(gh api "repos/${repo}/branches/main/protection")"; then
    echo "STATUS: FAIL"
    echo "Raison: impossible de lire la branch protection. Droits insuffisants ou protection absente."
    return 1
  fi

  local contexts
  contexts="$(jq -r '.required_status_checks.contexts[]?' <<<"$protection_json")"

  echo "Required status checks:"
  if [[ -n "$contexts" ]]; then
    sed 's/^/- /' <<<"$contexts"
  else
    echo "- AUCUN"
  fi

  local missing=0
  while IFS= read -r expected; do
    if ! grep -Fxq "$expected" <<<"$contexts"; then
      echo "Missing required check: ${expected}"
      missing=1
    fi
  done < <(print_expected "$repo_slug")

  local strict
  local enforce_admins
  local review_count
  local conversation_resolution
  local force_pushes
  local deletions

  strict="$(jq -r '.required_status_checks.strict' <<<"$protection_json")"
  enforce_admins="$(jq -r '.enforce_admins.enabled' <<<"$protection_json")"
  review_count="$(jq -r '.required_pull_request_reviews.required_approving_review_count // 0' <<<"$protection_json")"
  conversation_resolution="$(jq -r '.required_conversation_resolution.enabled // false' <<<"$protection_json")"
  force_pushes="$(jq -r '.allow_force_pushes.enabled // false' <<<"$protection_json")"
  deletions="$(jq -r '.allow_deletions.enabled // false' <<<"$protection_json")"

  echo "strict: ${strict}"
  echo "enforce_admins: ${enforce_admins}"
  echo "required_approving_review_count: ${review_count}"
  echo "required_conversation_resolution: ${conversation_resolution}"
  echo "allow_force_pushes: ${force_pushes}"
  echo "allow_deletions: ${deletions}"

  if [[ "$strict" != "true" ]]; then missing=1; fi
  if [[ "$enforce_admins" != "true" ]]; then missing=1; fi
  if [[ "$review_count" -lt 1 ]]; then missing=1; fi
  if [[ "$conversation_resolution" != "true" ]]; then missing=1; fi
  if [[ "$force_pushes" != "false" ]]; then missing=1; fi
  if [[ "$deletions" != "false" ]]; then missing=1; fi

  if [[ "$missing" -eq 0 ]]; then
    echo "STATUS: PASS"
    return 0
  fi

  echo "STATUS: FAIL"
  return 1
}

main() {
  require_gh
  require_jq

  echo "# Branch protection P0 — verification report"
  echo
  echo "Date: $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  echo "Command: bash 08-BOOTSTRAPS/verify-branch-protection-p0.sh"

  local failures=0
  for repo in "${repos[@]}"; do
    if ! verify_repo "$repo"; then
      failures=$((failures + 1))
    fi
  done

  echo
  if [[ "$failures" -eq 0 ]]; then
    echo "GLOBAL STATUS: PASS"
    echo "Les protections P0 sont actives sur les 3 repos minimum."
    exit 0
  fi

  echo "GLOBAL STATUS: FAIL"
  echo "Nombre de repos en échec: ${failures}"
  exit 1
}

main "$@"
