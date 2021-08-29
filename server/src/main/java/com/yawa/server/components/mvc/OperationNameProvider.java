package com.yawa.server.components.mvc;

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
        put(new ImmutablePair<>(HttpMethod.GET.name(), "/api/open/random"), "GetRandomOutcome");
    }};

    public String getOperationName(@NotNull String method, @NotNull String uri) {
        return OPERATIONS.getOrDefault(new ImmutablePair<>(method, uri), getDefaultOperationName(method, uri));
    }

    private String getDefaultOperationName(@NotNull String method, @NotNull String uri) {
        return String.format("%s:%s", method, uri);
    }
}
