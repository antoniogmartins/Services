package br.com.martins.framework.services.common;

import br.com.martins.framework.factory.*;
import io.restassured.response.Response;

public abstract class BaseService {

    protected Response get(String endpoint) {

        return RequestFactory
                .authenticatedRequest()
                .get(endpoint);

    }

    protected Response post(String endpoint, Object body) {

        return RequestFactory
                .authenticatedRequest()
                .body(body)
                .post(endpoint);

    }

    protected Response put(String endpoint, Object body) {

        return RequestFactory
                .authenticatedRequest()
                .body(body)
                .put(endpoint);

    }

    protected Response patch(String endpoint, Object body) {

        return RequestFactory
                .authenticatedRequest()
                .body(body)
                .patch(endpoint);

    }

    protected Response delete(String endpoint) {

        return RequestFactory
                .authenticatedRequest()
                .delete(endpoint);

    }

}