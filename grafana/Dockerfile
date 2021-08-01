FROM grafana/grafana:5.4.3

EXPOSE 3000

# Steps to execute:
# 1. Set admin password
# 2. Create developer user
# 3. Create Data Source: Prometheus with the following settings:
#    1. Name: Prometheus
#    2. HTTP.URL: http://prometheus:9090
#    3. HTTP.Access: Server
#    4. Auth.SkipTlsVerify: true
#    5. Auth.HttpMethod: GET
# 4. Import Dashboard: https://grafana.com/grafana/dashboards/4701
#RUN grafana-cli --homepath "/usr/share/grafana" admin reset-admin-password $GRAFANA_ADMIN_PASSWORD