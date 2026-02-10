#!/usr/bin/env bash
set -euo pipefail

BASE_URL="http://localhost:3000/api"

echo "RGB -> Hex"
curl -s "${BASE_URL}/rgb-to-hex?r=64&g=128&b=192" | jq .

echo "Hex -> RGB"
curl -s "${BASE_URL}/hex-to-rgb?hex=%23ff8800" | jq .
