package com.yawa.server.notifications

enum class MailType {
    USER_CREATION_PENDING {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Pending: User Creation"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                you can confirm your account by submitting the following token
                within ${attributes["expiration"]}:

                Resource: /ConfirmUserCreation
                Token: ${attributes["token"]}

                See you on YAWA
            """.trimIndent()
        }
    },

    USER_CREATION_CONFIRMED {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Confirmed: User Creation"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                user creation has been confirmed!

                See you on YAWA
            """.trimIndent()
        }
    },

    USER_DELETION_PENDING {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Pending: User Deletion"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                you can confirm the deletion of your account by submitting the following token
                within ${attributes["expiration"]}:

                Resource: /ConfirmUserDeletion
                Token: ${attributes["token"]}

                See you on YAWA
            """.trimIndent()
        }
    },

    USER_DELETION_CONFIRMED {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Confirmed: User Deletion"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                user deletion has been confirmed!

                Bye bye from YAWA
            """.trimIndent()
        }
    },

    PASSWORD_RESET_PENDING {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Pending: Password Reset"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                you can reset your password by submitting the following token
                within ${attributes["expiration"]}:

                Resource: /ResetPassword
                Token: ${attributes["token"]}

                See you on YAWA
            """.trimIndent()
        }
    },

    PASSWORD_RESET_CONFIRMED {
        override fun subject(attributes: Map<String, String>): String = "[YAWA] Confirmed: Password Reset"

        override fun body(attributes: Map<String, String>): String {
            return """
                Hello ${attributes["username"]},
                your password has been successfully reset.

                See you on YAWA
            """.trimIndent()
        }
    };

    abstract fun subject(attributes: Map<String, String>): String
    abstract fun body(attributes: Map<String, String>): String
}
