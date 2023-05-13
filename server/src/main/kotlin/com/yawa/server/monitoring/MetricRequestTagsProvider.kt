package com.yawa.server.monitoring

import com.yawa.server.utils.OperationNameProvider
import com.yawa.server.constants.MetricTags
import io.micrometer.core.instrument.Tag
import io.micrometer.core.instrument.Tags
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsContributor
import org.springframework.stereotype.Component

import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@Component
class MetricRequestTagsProvider(
    @Autowired val operationNameProvider: OperationNameProvider
): WebMvcTagsContributor {

    override fun getTags(
        request: HttpServletRequest?,
        response: HttpServletResponse?,
        handler: Any?,
        exception: Throwable?
    ): MutableIterable<Tag>? {
        val tags = Tags.empty()
        if (request != null) {
            tags.and(MetricTags.OPERATION,
                    operationNameProvider.getOperationName(request.method!!, request.requestURI!!))
        }
        return tags
    }

    override fun getLongRequestTags(request: HttpServletRequest?, handler: Any?): MutableIterable<Tag>? = null
}
