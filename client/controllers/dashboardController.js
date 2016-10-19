(function() {
  "use strict";

  angular.module('app')
    .controller('dashboardController', dashboardController);

  function dashboardController($scope, $location, customerFactory, productFactory, orderFactory) {
    orderFactory.index(function(data){
      console.log(data);
    });

    $scope.index = function() {
    }
  }
})();
