'use strict';

angular.module('de.thomaskrille.skatblock').

controller('ZettelAddCtrl', [ '$scope', '$log', 'zettelResource', function($scope, $log, zettelResource) {

    $scope.addPlayer = function() {
        var player = $scope.playerToAdd.trim();
        
        if(player === "") {
            return;
        }
        
        $scope.zettel.players.push(player);
        $scope.playerToAdd = '';
        
        $log.info($scope.zettel.players);
    };
    
    $scope.removePlayer = function(player) {
        $log.info(player);
    }

    $scope.playerToAdd = '';

    $scope.zettel = {
        players : []
    }

} ]);