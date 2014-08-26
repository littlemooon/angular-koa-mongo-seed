angular.module('app').controller('AppCtrl', function($scope, $state){

  // DATA

  $scope.pages = pages;

  // VIEW FUNCTIONS

  $scope.isActive = function(route) {
    return $state.is(route);
  };
});

// OBJECTS

var pages = [
  { name: "Table", route:"table" },
  { name: "Nested", route:"nested" },
  { name: "Tabs", route:"tabs.tab1" }
];