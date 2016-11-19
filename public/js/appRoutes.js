
angular.module('appRoutes',[])
  .config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider ){
  $routeProvider
    .when('/userprofile',{
      templateUrl: 'views/userprofile.html',
      controller: 'userprofileCtr'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
} ]);
