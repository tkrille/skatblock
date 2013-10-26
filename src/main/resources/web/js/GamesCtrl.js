'use strict';

angular.module('de.thomaskrille.skatzettel').

controller('GamesCtrl', ['$scope', '$log', 'gameResource', function($scope, $log, gameResource) {
    gameResource.query({}, {}, function(games) {
	$log.info(games);
	$scope.games = games;
    });
}]);