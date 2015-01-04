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



    //Create New Measurements
    /*$scope.createStat = function(measurement){
        $http.post(dataUrl, measurement).success(function, (newMeasurement){
            $scope.measurements.push(newmeasurement);
    });
    }*/