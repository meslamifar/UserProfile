angular.module('userprofileCtrModule',[]).controller('userprofileCtr', ['$scope', '$q', '$timeout', 'userprofileSvc',  function userProfileController($scope, $q, $timeout, userprofileSvc){

  $scope.InputReturn = null;
  $scope.ViewModel = {};
  $scope.UserName = null;
  $scope.SavingStatus = null;


  $scope.Done = function(){

  if (!$scope.StepThreeInput){
    alert('To clear the input, please use the clear button.');
    $scope.StepThreeInput = $scope.InputReturn;
  }
else {
    userprofileSvc.queryInput.get({ input : $scope.StepThreeInput }, function(rsp){
        $scope.InputReturn = rsp.data;
        if (!$scope.ViewModel["submissions"])
          $scope.ViewModel["submissions"] = [{ "question": $scope.InputReturn, "answer": null}];
        else {
          $scope.ViewModel["submissions"].push({ "question": $scope.InputReturn, "answer": null});
        }
        //if error happens
    }, function(err){
       alert('there is an error in communication with api');
    })
  }
}
$scope.Clear = function(){
  $scope.ViewModel = {};
  $scope.StepThreeInput = null;
  $scope.InputReturn = null;
  $scope.SavingStatus = null;
}

$scope.Save = function(){
  if (!$scope.ViewModel.username){
    alert('Please enter user name before saving.');
  }
  else {
    $scope.SavingStatus = "Saving ...";
    if ($scope.ViewModel._id){
      updateUserProfile().then(function(rsp){
          changeSavingStatus(rsp.OK);
        }, function(err){
          changeSavingStatus(false);
        });
    }
    else{
      createUserProfile().then(function(rsp){
          changeSavingStatus(rsp.OK);
        }, function(err){
          changeSavingStatus(false);
        });;
      }
    }
  };


$scope.GetAllSubmissions = function(){
  userprofileSvc.queryUserProfile.get({userprofileId : $scope.ViewModel.username}, function(rsp){
      if (!rsp.data){
        alert("Please register before submission using the Save button.");
        return;
      }
      resetViewModelAndSignIn();
      $scope.ViewModel = rsp.data;
      $scope.ViewModel.CityWeatherDescription = {};
      if (rsp.data.city) {
        userprofileSvc.queryAPIOpenWeather.get({city: rsp.data.city}, function(rsp){
          $scope.ViewModel.CityWeatherDescription.Coord = rsp.coord;
          $scope.ViewModel.CityWeatherDescription.Main = rsp.main;
        }, function(err){
        alert(err)
      })
    }
  }, function(err){
      alert(err);
  })
}

function resetViewModelAndSignIn(){
  $scope.InputReturn = null;
  $scope.StepThreeInput = null;
  $scope.ViewModel = {};

}

function createUserProfile(){
  var deferred = $q.defer();
  userprofileSvc.queryUserProfile.create({
      userprofileId: $scope.ViewModel.username,
      submissions: $scope.ViewModel.submissions,
      city: $scope.ViewModel.city
  },function(rsp){
      resetViewModelAndSignIn();
      $scope.ViewModel = rsp.data;
      deferred.resolve(rsp);
    }, function(err){
      deferred.reject(err);
    });
    return deferred.promise;
}

updateUserProfile = function(){
  var deferred = $q.defer();

  userprofileSvc.queryUserProfile.update({ userprofileId: $scope.ViewModel.username}, {
      userprofileId: $scope.ViewModel.username,
      submissions: $scope.ViewModel.submissions,
      city: $scope.ViewModel.city
  },function(rsp){
      resetViewModelAndSignIn();
      $scope.ViewModel = rsp.data;
      deferred.resolve(rsp);
    }, function(err){
      deferred.reject(err);
    });
    return deferred.promise;
}

function changeSavingStatus(status){
  if (status)
    $scope.SavingStatus = 'Changes have been made successfully.';
  else
    $scope.SavingStatus = 'There is an issue in saving your changes.';

    $timeout(function(){ $scope.SavingStatus = null; }, 2000);

}

}]);
