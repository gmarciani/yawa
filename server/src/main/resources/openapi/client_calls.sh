#!/usr/bin/env bash
set -e

CURRENT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

YAWAC="$CURRENT_DIR/../../../../build/generated/clients/bash/yawac"

export YAWA_ENDPOINT="https://localhost:8002"
export YAWA_USERNAME="mgiacomo"
export YAWA_PASSWORD="password"

$YAWAC getRandomOutcome
token=$($YAWAC login username==$YAWA_USERNAME password==$YAWA_PASSWORD | jq -r '.token')
$YAWAC login getAuthenticatedHello Authorization:"Bearer $token"
