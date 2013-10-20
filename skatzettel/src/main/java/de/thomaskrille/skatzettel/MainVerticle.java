package de.thomaskrille.skatzettel;

import org.vertx.java.core.AsyncResult;
import org.vertx.java.core.Future;
import org.vertx.java.core.Handler;
import org.vertx.java.core.json.JsonObject;

public class MainVerticle extends VerticleWithLogging {

    private JsonObject config;

    @Override
    public void start(final Future<Void> startedResult) {
	start();
	
	config = container.config();

	log.debug(config);

	container.deployModule("io.vertx~mod-mongo-persistor~2.0.0-final", config.getObject("mongo-persistor", new JsonObject()), 1, new Handler<AsyncResult<String>>() {
	    @Override
	    public void handle(AsyncResult<String> deploymentResult) {
		if (deploymentResult.succeeded()) {
		    startedResult.setResult(null);
		} else {
		    startedResult.setFailure(deploymentResult.cause());
		}
	    }
	});

	container.deployVerticle("de.thomaskrille.skatzettel.WebServer",
		config.getObject("de.thomaskrille.skatzettel.WebServer", new JsonObject()), 1,
		new Handler<AsyncResult<String>>() {

		    @Override
		    public void handle(AsyncResult<String> deploymentResult) {
			if (deploymentResult.succeeded()) {
			    startedResult.setResult(null);
			} else {
			    startedResult.setFailure(deploymentResult.cause());
			}
		    }
		});
    }
}
