statsApp.controller("ViewStatsController", function($scope){

    $scope.locations = [{
        "city": "detroit",
        "state": "mi"
    },{
        "city": "detroit",
        "state": "mi"
    },
    {"city": "detroit",
        "state": "mi"
    }];


});

statsApp.controller("appCtrl", function($scope){
    $scope.loadMoreTweets = function (){
        alert("loading");
    };
});



statsApp.directive('enter', [function () {
    
    return function(scope, element, attrs){
        element.bind("mouseenter", function(){
            scope.$apply("loadMoreTweets()");
        });
    };

}]);

myApp.factory("service", function(){
    var people = [{
        name: "asim"
    },
    {
        name: "tim"
    }];
    return people;
});