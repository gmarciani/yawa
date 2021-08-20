#!/usr/bin/env bash

MAX_REQUESTS=10800
SLEEP_SECONDS=1

function sendRequest() {
    local method=$1
    local endpoint=$2
    local token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.e3UwvG12weaHaVWZ2u-vuH1SkOb6Ee0NFMVJGtTgwio"
    curl -k --request $method $endpoint --header "Authorization: Bearer $token"
}

for ((request = 0 ; request < $MAX_REQUESTS ; request++ )); do
  echo "Request $request"
  sendRequest 'GET' 'https://localhost:8002/api/open/random'
  sleep $SLEEP_SECONDS
done