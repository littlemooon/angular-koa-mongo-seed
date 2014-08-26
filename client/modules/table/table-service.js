angular.module('app.table').factory('TableService', function($http) {

  return {
    get: function() {
      return $http.get('/api/items');
    },
    add: function(item) {
      return $http.post('/api/items', item);
    },
    update: function(item) {
      return $http.put('/api/items/' + item.id, item);
    },
    delete: function(item) {
      return $http.delete('/api/items/' + item.id);
    }
  };
});