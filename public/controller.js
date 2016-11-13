userProfileApp.controller('userProfileController', ['$scope', 'apiServices', function userProfileController($scope, apiServices){

$scope.Done = function(){

  if (!$scope.stepThreeInput){
    alert('To clear the input, please use the clear button.');
    $scope.stepThreeInput = $scope.inputReturn;
  }
else {
    apiServices.queryInput.get({ input : $scope.stepThreeInput }, function(rsp){
        $scope.inputReturn = rsp.data;
        //if error happens
    }, function(err){
       alert('there is an error in communication with api');
    })
  }
}

$scope.Clear = function(){
  $scope.inputReturn = null;
  $scope.stepThreeInput = null;
}
}]);
