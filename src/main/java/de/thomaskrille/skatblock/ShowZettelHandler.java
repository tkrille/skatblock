package de.thomaskrille.skatblock;

import org.vertx.java.core.Handler;
import org.vertx.java.core.http.HttpServerRequest;

public class ShowZettelHandler implements Handler<HttpServerRequest> {

    @Override
    public void handle(HttpServerRequest request) {
        request.response().end();
    }

}
