angular.module('TomatoApp').controller('TomatoesController', TomatoesController);

function TomatoesController($scope, $http) {
    $http.get('db/tomatoes.json').success(function(response) {
        $scope.tomatoes = response;
    });
    $scope.orderProp = 'name';

    $scope.show = function (id) {
      $scope.tomatoes.forEach(function (tomato){
        if (tomato.id === id) {
          $scope.thisTomato = tomato
      }
    })
  }
  $scope.limit= 1;
};