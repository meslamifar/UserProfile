userProfileApp.factory('apiServices', ['$resource', function($resource){
return{
  queryInput: $resource('http://localhost:8080/api/userprofile/:input', {}, { get : { method: 'GET', params: { input : ''}, verifyCache: true}})
    }
  }
]);
