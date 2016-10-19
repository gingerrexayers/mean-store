(function() {
  "use strict";

  angular.module('app')
    .controller('productController', productController);

  function productController($scope, $location, productFactory) {
    productFactory.index(function(data){
      $scope.products = data.data.data;
    });

    $scope.create = function() {
      productFactory.create($scope.form, function(data){
        $scope.products.push(data.data.data);
      });
    }
  }
})();
