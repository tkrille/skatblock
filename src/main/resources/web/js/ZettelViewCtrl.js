'use strict';

angular.module('de.thomaskrille.skatblock').

controller('ZettelViewCtrl', ['$scope', '$log', '$routeParams', 'zettelResource', function($scope, $log, $routeParams, zettelResource) {
    zettelResource.get({id: $routeParams.id}, function(zettel) {
	$log.info(zettel);
	$scope.zettel = zettel;
    });
}]);