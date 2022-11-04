package com.syedee.graphqlbackend.controller;

import com.syedee.graphqlbackend.database.PostgresQueryService;
import com.syedee.graphqlbackend.helper.Crypto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.server.WebGraphQlInterceptor;
import org.springframework.graphql.server.WebGraphQlRequest;
import org.springframework.graphql.server.WebGraphQlResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.List;

import static com.syedee.graphqlbackend.controller.Helper.GRAPHQL_USER_CONTEXT_NAME;

@Component
class GraphqlHeaderInterceptor implements WebGraphQlInterceptor {

    private static final String AUTH_HEADER_PREFIX = "Basic ";

    private static final String AUTH_TOKEN_SEPARATOR = ":";

    @Autowired
    private PostgresQueryService postgresQueryService;

    @Override
    public Mono<WebGraphQlResponse> intercept(WebGraphQlRequest request, Chain chain) {
        var notIntrospectionQuery = request.getOperationName() == null ? true : !request.getOperationName().equalsIgnoreCase("IntrospectionQuery");
        var headerValues = request.getHeaders().get("Authorization");
        if (notIntrospectionQuery && headerValues.size() == 1) {
            var authHeader = headerValues.get(0);
            var authTokenEncoded  = authHeader.substring(AUTH_HEADER_PREFIX.length());
            var authTokenDecoded = Crypto.decodeBase64(authTokenEncoded);
            var tokenParts = authTokenDecoded.split(AUTH_TOKEN_SEPARATOR);
            if (tokenParts.length == 2) {
                var userName = tokenParts[0];
                var password = tokenParts[1];
                var user = postgresQueryService.findUser(userName);
                if (user != null && user.password.equals(password)) {
                    request.configureExecutionInput((executionInput, builder) ->
                            builder.graphQLContext(Collections.singletonMap(GRAPHQL_USER_CONTEXT_NAME, Helper.convertEntityToDto(user))).build());
                }

            }
        }
        return chain.next(request);
    }
}
