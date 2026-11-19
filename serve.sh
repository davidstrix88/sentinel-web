#!/usr/bin/env bash
# Aperçu local du site Sentinel Web
set -euo pipefail
cd "$(dirname "$0")"
PORT="${1:-8088}"
echo "Sentinel Web → http://127.0.0.1:${PORT}"
exec python3 -m http.server "$PORT"
