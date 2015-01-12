statsApp.constant("dataUrl", "http://localhost:5500/measurements");
statsApp.controller("ViewStatsController", function($scope, $http, dataUrl){
   
    $scope.data = {};
    $http.get(dataUrl).success(function(data){
        $scope.data.measurements = data;
    }).error(function(error){
        $scope.data.error = error;
    });
    

    $scope.create = function(measurement){
        $http.post(dataUrl, measurement).success(function(measurement){
            $scope.measurements.push(measurement);
    });
    };
});

statsApp.controller('LoginCtrl', ['$scope', function ($scope) {
    
}])

// Create a controller for the login



    //Create New Measurements
    /*$scope.createStat = function(measurement){
        $http.post(dataUrl, measurement).success(function, (newMeasurement){
            $scope.measurements.push(newmeasurement);
    });
    }*/