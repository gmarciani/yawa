package com.yawa.config.mvc;

import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.commons.lang3.tuple.Pair;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;

import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.Map;

@Component
public class OperationNameProvider {

    private static final Map<Pair<String, String>, String> OPERATIONS = new HashMap<Pair<String, String>, String>(){{
        put(new ImmutablePair<>(HttpMethod.GET.name(), "/manage/prometheus"), "ManagePrometheus");
        put(new ImmutablePair<>(HttpMethod.GET.name(), "/api/open/random"), "GetRandomOutcome");
    }};

    private static final String UNKNOWN_OPERATION = "UnknownOperation";

    public String getOperationName(@NotNull String method, @NotNull String uri) {
        return OPERATIONS.getOrDefault(new ImmutablePair<>(method, uri), UNKNOWN_OPERATION);
    }
}
