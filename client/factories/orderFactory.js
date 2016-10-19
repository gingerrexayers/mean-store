(function(){
  "use strict";
  angular.module('app')
    .factory('orderFactory', orderFactory);

  function orderFactory($http) {
    var orders = [];
    var factory = {
      index: _index,
      create: _create
    }

    function _index (callback) {
      $http.get('/orders').then(callback);
    }

    function _create (data, callback) {
      $http.post('/orders', data).then(callback);
    }

    return factory;
  }
})();
