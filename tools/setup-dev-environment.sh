#!/usr/bin/env bash
set -ex

JAVA_VERSION="11.0.17-amzn"
GRADLE_VERSION="7.6"

# Install SDKMAN; see https://sdkman.io/install
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# Install Java and set as default version
sdk install java $JAVA_VERSION
sdk default java $JAVA_VERSION

# Install Gradle and set as default version
sdk install gradle $GRADLE_VERSION
sdk default gradle $GRADLE_VERSION


brew install docker docker-compose # Docker environment
brew install openapi-generator # OpenAPI generator
brew install mysql # MySQL client
brew install bash # Bash clients generated by OpenAPI require Bash >=5
brew install bash-completion # Bash completion used by generated clients
brew install jq # Required by some of our scripts

# Install Pre-Commit, which is required to contribute to the repository
brew install pre-commit
pre-commit install