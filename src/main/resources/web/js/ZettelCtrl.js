'use strict';

angular.module('de.thomaskrille.skatblock').

controller('ZettelCtrl', ['$scope', '$log', 'zettelResource', function($scope, $log, zettelResource) {
    zettelResource.query({}, {}, function(zettel) {
	$log.info(zettel);
	$scope.zettel = zettel;
    });
}]);