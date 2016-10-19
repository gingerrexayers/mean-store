(function(){
  "use strict";
  angular.module('app')
    .factory('customerFactory', customerFactory);

  function customerFactory($http) {
    var factory = {
      index: _index,
      create: _create,
      delete: _delete
    }

    function _index (callback) {
      $http.get('/customers').then(callback);
    }

    function _create (data, callback) {
      $http.post('/customers', data).then(callback);
    }

    function _delete (id, callback) {
      $http.delete('/customers/' + id).then(callback);
    }

    return factory;
  }
})();
