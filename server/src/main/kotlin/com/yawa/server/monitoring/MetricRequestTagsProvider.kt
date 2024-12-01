package com.yawa.server.monitoring

import com.yawa.server.constants.MetricTags
import com.yawa.server.utils.OperationNameProvider
import io.micrometer.common.KeyValue
import io.micrometer.common.KeyValues
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.server.observation.DefaultServerRequestObservationConvention
import org.springframework.http.server.observation.ServerRequestObservationContext
import org.springframework.stereotype.Component

@Component
class MetricRequestTagsProvider(
    @Autowired val operationNameProvider: OperationNameProvider,
) : DefaultServerRequestObservationConvention() {

    override fun getLowCardinalityKeyValues(context: ServerRequestObservationContext): KeyValues {
        return super.getLowCardinalityKeyValues(context).and(additionalTags(context))
    }

    protected fun additionalTags(context: ServerRequestObservationContext): KeyValues {
        var tags = KeyValues.empty()

        val request = context.carrier

        request.userPrincipal?.let {
            tags = tags.and(KeyValue.of(MetricTags.PRINCIPAL, it.name))
        }

        context.carrier.getHeader("user-agent")?.let {
            tags = tags.and(KeyValue.of(MetricTags.USER_AGENT, it))
        }

        operationNameProvider.getOperationName(request.method!!, request.requestURI!!).let {
            tags = tags.and(KeyValue.of(MetricTags.OPERATION, it))
        }

        return tags
    }
}
