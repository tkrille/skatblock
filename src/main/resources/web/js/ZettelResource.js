'use strict';

angular.module('de.thomaskrille.skatblock').factory('zettelResource', [ '$log', '$resource', function($log, $resource) {
    var COUNT = 10;

    var zettelResource = $resource('api/zettel/:id', {
    });

    return zettelResource;
} ]);