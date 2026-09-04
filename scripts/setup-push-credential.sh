#!/usr/bin/env bash
#
# setup-push-credential.sh — durably persist a GitHub push credential for this repo.
#
# WHY: the workspace env var $GITHUB_TOKEN went dead (401). Rather than paste a token
# inline on every push, we store a working token once in git's credential store
# (~/.git-credentials) and let git's `store` helper supply it automatically for every
# future `git push`/`git fetch` to github.com — no inline token, survives across sessions.
#
# USAGE:
#   GIT_PUSH_TOKEN=github_pat_xxx ./scripts/setup-push-credential.sh
#   # or:
#   ./scripts/setup-push-credential.sh github_pat_xxx
#
# TOKEN REQUIREMENTS: a fine-grained PAT for zudin2007/Disertasi with
#   Repository permissions -> Contents: Read and write.
#
# The token is NEVER printed and NEVER committed. It is written only to
# ~/.git-credentials (chmod 600), which is outside the repo and gitignored.
#
set -euo pipefail

TOKEN="${GIT_PUSH_TOKEN:-${1:-}}"
if [ -z "$TOKEN" ]; then
  echo "ERROR: no token. Pass via GIT_PUSH_TOKEN env or first arg." >&2
  echo "  GIT_PUSH_TOKEN=github_pat_xxx $0" >&2
  exit 2
fi

CRED_FILE="${HOME}/.git-credentials"

# 1) Turn on the durable 'store' credential helper globally.
git config --global credential.helper store
git config --global credential.useHttpPath false

# 2) Write/refresh the github.com entry (mode 600), preserving any other hosts.
umask 077
tmp="$(mktemp)"
if [ -f "$CRED_FILE" ]; then
  grep -v '@github.com$' "$CRED_FILE" > "$tmp" || true
fi
printf 'https://x-access-token:%s@github.com\n' "$TOKEN" >> "$tmp"
mv "$tmp" "$CRED_FILE"
chmod 600 "$CRED_FILE"

# 3) Verify write auth without mutating the remote.
echo "Verifying push auth (dry-run) ..."
if git -C "$(git rev-parse --show-toplevel)" push --dry-run origin HEAD:main >/dev/null 2>&1; then
  echo "OK: credential persisted in $CRED_FILE and push auth verified."
else
  echo "WARN: credential written but push dry-run failed — token may lack Contents:write or be revoked." >&2
  exit 1
fi
