package com.yawa.server.notifications

import org.springframework.stereotype.Service
import org.thymeleaf.TemplateEngine
import org.thymeleaf.templatemode.TemplateMode
import org.thymeleaf.templateresolver.ClassLoaderTemplateResolver
import org.thymeleaf.templateresolver.ITemplateResolver


@Service
class MailTemplateService: TemplateEngine() {

    init {
        this.addTemplateResolver(htmlTemplateResolver())
    }

    private fun htmlTemplateResolver(): ITemplateResolver {
        val templateResolver = ClassLoaderTemplateResolver(ClassLoader.getSystemClassLoader())
        templateResolver.order = Integer.valueOf(1)
        templateResolver.prefix = "templates/mail/"
        templateResolver.suffix = ".html"
        templateResolver.templateMode = TemplateMode.HTML
        templateResolver.isCacheable = false
        templateResolver.characterEncoding = "UTF-8"
        templateResolver.checkExistence = true
        return templateResolver
    }
}
