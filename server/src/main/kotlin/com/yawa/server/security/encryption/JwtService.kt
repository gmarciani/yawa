package com.yawa.server.security.encryption

import com.auth0.jwt.JWT
import com.auth0.jwt.exceptions.SignatureVerificationException
import com.auth0.jwt.exceptions.TokenExpiredException
import com.auth0.jwt.interfaces.DecodedJWT
import com.yawa.server.exceptions.BadTokenException
import com.yawa.server.security.authentication.SecurityJwtConfiguration
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.time.Instant

@Service
class JwtService(
    @Autowired val securityJwtConfiguration: SecurityJwtConfiguration
) {

    fun issue(attributes: Map<String, String>, expiration: Instant): String {
        val jwt = JWT.create()

        attributes.forEach { (attribute, value) -> jwt.withClaim(attribute, value) }
        jwt.withIssuer(securityJwtConfiguration.issuer)
        jwt.withExpiresAt(expiration)

        return jwt.sign(securityJwtConfiguration.signingAlgorithm)
    }

    fun decode(token: String): DecodedJWT {
        val verifier = JWT.require(securityJwtConfiguration.signingAlgorithm).build()
        return try {
            verifier.verify(token)
        } catch (ex: SignatureVerificationException) {
            throw BadTokenException("Refresh token cannot be verified: wrong signature")
        } catch (ex: TokenExpiredException) {
            throw BadTokenException("Refresh token cannot be verified: expired")
        }
    }
}
