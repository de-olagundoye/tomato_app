angular.module('TomatoApp').controller('TomatoesController', TomatoesController);

function TomatoesController($scope, $http){

  $scope.render = function() {
    $http.get("/tomatoes").then(function (response) {
      $scope.tomatoes = response.data.tomatoes;
    });
  };

  $scope.show = function(name) {
    $scope.tomatoes.forEach(function (tomatoes){
      if (tomatoes.name === name) {
        window.location.reload();
        console.log(name);
      }    
    })
  }
}