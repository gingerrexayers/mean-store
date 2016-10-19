(function(){
  "use strict";
  angular.module('app')
    .factory('productFactory', productFactory);

  function productFactory($http) {
    var factory = {
      index: _index,
      create: _create,
    }

    function _index (callback) {
      $http.get('/products').then(callback);
    }

    function _show (id, callback) {
      $http.get('/products/' + id).then(callback);
    }

    function _create (data, callback) {
      $http.post('/products', data).then(callback);
    }

    return factory;
  }
})();
