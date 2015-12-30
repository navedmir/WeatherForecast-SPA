//Service

weatherApp.service('cityService',function(){

    this.city='Mumbai,IN';
});

weatherApp.service('weatherService',['$resource',function($resource){
    
    this.GetWeather=function(city,days){
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=2de143494c0b295cca9337e1e96b00e0", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    return weatherAPI.get({ q: city, cnt: days }); 
    };

}]);
