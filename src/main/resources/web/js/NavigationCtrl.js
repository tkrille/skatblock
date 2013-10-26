'use strict';

angular.module('de.thomaskrille.skatzettel').

controller('NavigationCtrl', ['$scope', '$log', function($scope, $log) {
    var collapsed = true;
    var selectedNavigationItem = "";
    
    $scope.$on('$routeChangeSuccess', function(event, current, previous) {
        var item = (((current.$$route || {}).meta || {}).navigation || {}).selectedNavigationItem || "";
        
        selectedNavigationItem = item;
    });

    $scope.navigation = {
        isCollapsed : function() {
            return collapsed;
        },
        toggleCollapsed : function() {
            collapsed = !collapsed;
        },
        getSelectedNavigationItem : function() {
            return selectedNavigationItem;
        }
    };
}]);