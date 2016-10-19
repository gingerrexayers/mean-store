(function() {
  "use strict";

  angular.module('app')
    .controller('orderController', orderController);

  function orderController($scope, $location, productFactory, customerFactory, orderFactory) {
    $scope.index = function() {
      customerFactory.index(function(data){
        $scope.customers = data.data.data;
        $scope.form.customer = $scope.customers[0];
      });
      productFactory.index(function(data){
        $scope.products = data.data.data;
      });
      orderFactory.index(function(data){
        $scope.orders = data.data.data;
      });
    }
    $scope.index();

    $scope.create = function(){
      orderFactory.create($scope.form, function(data){
        $scope.index();
      });
    }

    $scope.update = function(id){
      orderFactory.show(id, function(data) {

      });
    }
  }
})();
