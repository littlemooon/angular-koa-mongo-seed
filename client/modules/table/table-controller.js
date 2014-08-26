angular.module('app.table').controller('TableCtrl', function($scope, TableService){

  // DATA

  TableService.get().
    success(function(data) {
      $scope.items =  data;
    });

  $scope.newItem = {};
  $scope.tabs = tabs;
  $scope.edit = false;

  // IO FUNCTIONS

  $scope.addItem = function(item) {
    // create item
    TableService.add(item).success(function (id) {

      // add to scope
      item.id = id;
      $scope.items.unshift(item);
    });

    // reset new item
    $scope.newItem = {};
  };
  $scope.updateItem = function(item) {
    TableService.update(item);
  };
  $scope.deleteItem = function(item) {
    // delete item
    TableService.delete(item);

    // remove from scope
    var index = $scope.items.indexOf(item);
    if (index > -1) $scope.items.splice(index, 1);
  };
  
  // VIEW FUNCTIONS

  $scope.doEdit = function() {
    $scope.edit = !$scope.edit;
  };
  $scope.isEdit = function(edit) {
    return $scope.edit === edit;
  };
});