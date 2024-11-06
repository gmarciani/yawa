@click.command(help="Request to say hello to the authenticated user.", cls=BaseCommand)
@click.pass_context
def get_authenticated_hello(ctx, endpoint, identity, access_token, verify_ssl, ca_file, debug):
    with build_client(**ctx.obj.get("CLIENT_CONFIG")) as api_client:
        try:
            response = SimpleGreetings(api_client).get()
            print_response(response)
        except yawac.ApiException as e:
            log.error("Request failed:\n%s" % e)
