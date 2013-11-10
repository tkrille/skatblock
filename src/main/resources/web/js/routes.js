'use strict';

angular.module('de.thomaskrille.skatblock').

config([ '$routeProvider', function($routeProvider) {
    var listZettel = {
	templateUrl : 'views/zettel/list.html',
	meta : {
	    navigation : {
		selectedNavigationItem : 'zettel',
	    },
	},
	controller : 'ZettelListCtrl',
    }
    $routeProvider.when('/', listZettel);
    $routeProvider.when('/zettel', listZettel);

    $routeProvider.when('/zettel/neu', {
	templateUrl : 'views/zettel/add.html',
	meta : {
	    navigation : {
		selectedNavigationItem : 'addZettel',
	    },
	},
	controller : 'ZettelAddCtrl',
    });

    $routeProvider.when('/zettel/:id', {
	templateUrl : 'views/zettel/view.html',
	meta : {
	    navigation : {
		selectedNavigationItem : 'zettel',
	    },
	},
	controller : 'ZettelViewCtrl',
    });

    $routeProvider.otherwise({
	redirectTo : '/'
    });
} ]);
