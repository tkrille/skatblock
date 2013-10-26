'use strict';

angular.module('de.thomaskrille.skatblock').

config([ '$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/games.html',
        meta : {
            navigation : {
                selectedNavigationItem : 'games',
            },
        },
        controller: 'GamesCtrl',
    });
    $routeProvider.when('/games', {
        templateUrl : 'views/games.html',
        meta : {
            navigation : {
                selectedNavigationItem : 'games',
            },
        },
        controller: 'GamesCtrl',
    });
    
    $routeProvider.when('/games/add', {
        templateUrl : 'views/game_add.html',
        meta : {
            navigation : {
                selectedNavigationItem : 'addGame',
            },
        },
        controller: 'GameAddCtrl',
    });
    
    $routeProvider.when('/games/:reference', {
        templateUrl : 'views/game_view.html',
        meta : {
            navigation : {
                selectedNavigationItem : 'games',
            },
        },
        controller: 'GameViewCtrl',
    });

    $routeProvider.otherwise({
        redirectTo : '/'
    });
} ]);
