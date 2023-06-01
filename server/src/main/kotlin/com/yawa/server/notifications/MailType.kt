package com.yawa.server.notifications

import org.thymeleaf.TemplateEngine
import org.thymeleaf.context.Context

enum class MailType {
    USER_CREATION_PENDING {
        override fun subject(): String = "[YAWA] Pending: User Creation"
        override fun templateBody(): String = "user-creation-pending"
    },

    USER_CREATION_CONFIRMED {
        override fun subject(): String = "[YAWA] Confirmed: User Creation"
        override fun templateBody(): String = "user-creation-confirmed"
    },

    USER_DELETION_PENDING {
        override fun subject(): String = "[YAWA] Pending: User Deletion"
        override fun templateBody(): String = "user-deletion-pending"
    },

    USER_DELETION_CONFIRMED {
        override fun subject(): String = "[YAWA] Confirmed: User Deletion"
        override fun templateBody(): String = "user-deletion-confirmed"
    },

    PASSWORD_RESET_PENDING {
        override fun subject(): String = "[YAWA] Pending: Password Reset"
        override fun templateBody(): String = "password-reset-pending"
    },

    PASSWORD_RESET_CONFIRMED {
        override fun subject(): String = "[YAWA] Confirmed: Password Reset"
        override fun templateBody(): String = "password-reset-confirmed"
    };

    fun body(templateEngine: TemplateEngine, attributes: Map<String, String>): String {
        val context = Context().also {
            attributes.forEach { (k, v) -> it.setVariable(k, v) }
        }
        return templateEngine.process(templateBody(), context)
    }
    abstract fun subject(): String
    abstract fun templateBody(): String
}
