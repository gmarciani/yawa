FROM ubuntu:20.04

ENV DEBIAN_FRONTEND noninteractive
ENV JAVA_VERSION 11.0.12.7.1
ENV GRADLE_VERSION 7.1.1
ENV SDKMAN_DIR /usr/local/sdkman
ENV YAWA_DIR /usr/src/yawa
ENV LOG_DIR /var/yawa/logs
ENV LOG_LEVEL=info
ENV DEBUG_ENABLED true
ENV SERVER_PORT 8000
ENV DEBUG_PORT 8001
ENV PROMTAIL_PORT 9080
ENV STACK dev
ENV REGION local
ENV CONFIG_FILE=resources/config/app.yaml

EXPOSE $SERVER_PORT
EXPOSE $DEBUG_PORT
EXPOSE $PROMTAIL_PORT

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN apt-get update && \
    apt-get install -y sudo systemctl vim curl wget less lsof zip unzip default-mysql-client

RUN curl -s "https://get.sdkman.io" | bash
RUN source "$SDKMAN_DIR/bin/sdkman-init.sh" && \
    sdk install java "$JAVA_VERSION-amzn" && \
    sdk install gradle "$GRADLE_VERSION"

ENV PATH "$PATH:$SDKMAN_DIR/candidates/java/current/bin"
ENV PATH "$PATH:$SDKMAN_DIR/candidates/gradle/current/bin"

RUN mkdir -p $LOG_DIR

WORKDIR $YAWA_DIR

COPY . .

# Promtail
RUN mkdir -p /opt/promptail
RUN curl -fSL -o /opt/promptail/promtail.gz "https://github.com/grafana/loki/releases/download/v1.6.1/promtail-linux-amd64.zip"
RUN unzip /opt/promptail/promtail.gz -d /opt/promptail
RUN rm /opt/promptail/promtail.gz
RUN chmod a+x /opt/promptail/promtail-linux-amd64
RUN useradd --system promtail
RUN cp $YAWA_DIR/tools/promtail/promtail.service /etc/systemd/system/promtail.service
RUN systemctl enable promtail.service
RUN systemctl start promtail
RUN systemctl status promtail

# Yawa Server
RUN gradle build

CMD gradle bootRun \
    -Pstack=$STACK \
    -Pregion=$REGION \
    -PdebugEnabled=$DEBUG_ENABLED \
    -PdebugPort=$DEBUG_PORT