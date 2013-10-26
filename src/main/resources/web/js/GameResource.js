'use strict';

angular.module('de.thomaskrille.skatblock').factory('gameResource', [ '$log', '$resource', function($log, $resource) {
    var COUNT = 10;

    var gamesResource = $resource('api/games/:reference', {
        'count' : COUNT,
        reference : '@reference',
    });

    return gamesResource;
} ]);