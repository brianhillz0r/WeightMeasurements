var statsApp = angular.module('statsApp', [
    'ngRoute'
    ]);

statsApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/addstats', {
            templateUrl: 'views/enterdata.html',
            controller: 'ViewStatsController'
        }).
         when('/results', {
            templateUrl: 'views/results.html',
            controller: 'ViewStatsController'
        })
        .otherwise({
            redirectTo: '/'
        });

    }
]);