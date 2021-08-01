FROM ubuntu:20.04

EXPOSE 8000

ENV DEBIAN_FRONTEND noninteractive
ENV JAVA_VERSION 11.0.12.7.1
ENV GRADLE_VERSION 7.1.1
ENV SDKMAN_DIR /usr/local/sdkman
ENV YAWA_DIR /usr/src/yawa
ENV LOG_DIR /var/yawa/logs

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo vim curl wget less lsof zip unzip default-mysql-client

RUN curl -s "https://get.sdkman.io" | bash
RUN source "$SDKMAN_DIR/bin/sdkman-init.sh" && \
    sdk install java $JAVA_VERSION-amzn && \
    sdk install gradle $GRADLE_VERSION

ENV PATH "$PATH:$SDKMAN_DIR/candidates/java/current/bin"
ENV PATH "$PATH:$SDKMAN_DIR/candidates/gradle/current/bin"

RUN mkdir -p $LOG_DIR

WORKDIR $YAWA_DIR

COPY . .

RUN gradle build

CMD gradle bootRun