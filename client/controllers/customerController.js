(function() {
  "use strict";

  angular.module('app')
    .controller('customerController', customerController);

  function customerController($scope, $location, customerFactory) {
    $scope.index = function() {
      customerFactory.index(function(data){
        $scope.customers = data.data.data;
      });
    }
    $scope.index();

    $scope.create = function() {
      customerFactory.create($scope.form, function(data){
        $scope.customers.push(data.data.data);
      });
    }

    $scope.delete = function(id){
      customerFactory.delete(id, function(data){
        if (data.data.success) {
          $scope.index();
        }
      });
    }
  }
})();
