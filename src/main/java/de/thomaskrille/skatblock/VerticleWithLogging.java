package de.thomaskrille.skatblock;

import org.vertx.java.core.logging.Logger;
import org.vertx.java.platform.Verticle;

public abstract class VerticleWithLogging extends Verticle {

    protected Logger log;

    @Override
    public void start() {
        super.start();

        log = container.logger();
    }
}
