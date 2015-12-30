weatherApp.controller('homeController',['$scope','$location','cityService',function($scope,$location,cityService){
    
    $scope.city=cityService.city;
    
    $scope.$watch('city',function(){
          cityService.city=$scope.city;
    });
    $scope.submit=function(){
      $location.path("/forecast");
    };
}]);



weatherApp.controller('forecastController',['$scope','$routeParams','cityService', 'weatherService', function($scope,$routeParams,cityService,weatherService){

    $scope.city=cityService.city;
    $scope.days=$routeParams.days||'2';

 
    
    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);    
    //console.log($scope.weatherResult);
    
    $scope.convertToCelsius=function(degK)
    {
        return Math.round(degK - 273.15);
    }
    $scope.convertDate=function(dt)
    {
        return new Date(dt * 1000);
    }
}]);