package de.thomaskrille.skatblock;

import org.vertx.java.core.http.RouteMatcher;
import org.vertx.java.core.logging.Logger;
import org.vertx.mods.web.WebServerBase;

public class WebServer extends WebServerBase {

    private Logger log;

    @Override
    public void start() {
        super.start();

        log = container.logger();
    }

    @Override
    protected RouteMatcher routeMatcher() {
        return new RouteMatcher()
                .get("/api/zettel", new ListZettelHandler(vertx, container))
                .get("/api/zettel/:reference", new ShowZettelHandler())
                .noMatch(staticHandler());
    }

}