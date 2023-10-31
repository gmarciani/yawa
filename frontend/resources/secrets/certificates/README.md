# YAWA - Server

## Certificates
Create a Certificate Authority (CA) on KeyChain, following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2686/mac) enabling SAN extension.
Create a Certificate Signing Request (CSR), following [this guide](https://support.apple.com/en-gb/guide/keychain-access/kyca2793/mac).
Create the server certificate, by KeyChain > Certificate Assistant > Create a Certificate For Someone Else > Select the above CA and CSR.
Export the server certificate from KeyChain in P12 format.
Export the CA certificate from KeyChain in CER format.
Convert the CA certificate from CER to PEM format: `openssl x509 -inform der -in gmarciani-root-ca.cer -out gmarciani-root-ca.pem`
Check the content of the P12 keystore: `openssl pkcs12 -info -in yawa.p12 -nodes`
Check the returned certificate from the server: `openssl s_client -connect localhost:8002 -CAfile gmarciani-root-ca.pem`
Copy the CA certificate to the Ops module at `ops/src/yawa_ops/config/gmarciani-root-ca.pem` to make it trust the root CA
