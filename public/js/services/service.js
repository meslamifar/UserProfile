angular.module('userprofileSvcModule',[]).factory('userprofileSvc', ['$resource', function($resource){
return{
  queryInput: $resource('http://localhost:8080/api/input/:input', {},
      { get : { method: 'GET', params: { input : ''}, verifyCache: true},
        create : { method: 'POST', params: {}, verifyCache: true}
      }),
  queryUserProfile:
    $resource('http://localhost:8080/api/userprofile/:userprofileId', {},
      { get : { method: 'GET', params: { userprofileId : ''}, verifyCache: true},
        create: {method: 'POST', params: {}, verifyCache: true},
        update: {method: 'PUT', params: { userprofileId : ''}, verifyCache: true}
      }),
    queryAPIOpenWeather:
      $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&appid=ada8d6c72b16f2a88e6cd7b01377fd17', {},
      {
        get : { method: 'GET', params: { city : ''}, verifyCache: true}
      })
    }
  }
]);
