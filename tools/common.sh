#!/usr/bin/env bash
set -e

function info() {
    echo -e "\033[1;32m[INFO]\033[0m $1"
}

function warn() {
    echo -e "\033[1;33m[WARN]\033[0m $1"
}

function error() {
    echo -e "\033[1;31m[ERROR]\033[0m $1"
}

function debug() {
    echo -e "\033[1;34m[DEBUG]\033[0m $1"
}

function fail() {
    error "$1"
    exit 1
}
