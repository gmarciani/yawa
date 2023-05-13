# YAWA - OpenAPI

![YAWA Logo](resources/brand/yawa-logo.png)

### Updating the OpenAPI definition
Send POST request to YAWA server with Admin credentials at https://localhost:8002/manage/openapi.
Update the returned value with the below fields to configure security schemas:
```
"components": {
    "schemas": { ... },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  },
  "security": [
    {"bearerAuth":  []}
  ]
}
```
