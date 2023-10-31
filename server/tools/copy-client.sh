#!/usr/bin/env bash
set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR=$(readlink -f "$SCRIPT_DIR/../..")
GENERATED_CLIENT_DIR="$PROJECT_DIR/server/build/generated/clients/typescript"
FRONTEND_CLIENT_DIR="$PROJECT_DIR/frontend/src/app/modules/clients/yawa"

rm -rf $FRONTEND_CLIENT_DIR
cp -R $GENERATED_CLIENT_DIR $FRONTEND_CLIENT_DIR
