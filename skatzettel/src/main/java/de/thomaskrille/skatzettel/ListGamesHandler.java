package de.thomaskrille.skatzettel;

import org.vertx.java.core.Handler;
import org.vertx.java.core.Vertx;
import org.vertx.java.core.eventbus.Message;
import org.vertx.java.core.http.HttpServerRequest;
import org.vertx.java.core.json.JsonArray;
import org.vertx.java.core.json.JsonObject;
import org.vertx.java.core.logging.Logger;
import org.vertx.java.platform.Container;

public class ListGamesHandler implements Handler<HttpServerRequest> {

    private final Vertx vertx;
    private final Logger log;

    public ListGamesHandler(Vertx vertx, Container container) {
	super();
	this.vertx = vertx;
	this.log = container.logger();
    }

    @Override
    public void handle(final HttpServerRequest request) {
	JsonObject query = new JsonObject()
		.putString("action", "find")
		.putString("collection", "games")
		.putObject("matcher", new JsonObject());


	vertx.eventBus().send("vertx.mongopersistor", query, new Handler<Message<JsonObject>>() {
	    @Override
	    public void handle(Message<JsonObject> msg) {
		JsonObject reply = msg.body();

		log.debug(reply);

		if (reply.getString("status").equalsIgnoreCase("ok")) {
		    request.response().putHeader("Content-Type", "application/json");
		    request.response().end(reply.getArray("results", new JsonArray()).encode());
		} else {
		    request.response().putHeader("Content-Type", "text/plain");
		    request.response().end(reply.getString("message", "an unknown error happened while using mongodb"));
		}
	    }
	});

    }

}
