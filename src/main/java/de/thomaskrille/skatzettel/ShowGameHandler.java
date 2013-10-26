package de.thomaskrille.skatzettel;

import org.vertx.java.core.Handler;
import org.vertx.java.core.http.HttpServerRequest;

public class ShowGameHandler implements Handler<HttpServerRequest> {

    @Override
    public void handle(HttpServerRequest request) {
	request.response().end();
    }

}
