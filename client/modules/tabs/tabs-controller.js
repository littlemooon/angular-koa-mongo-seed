angular.module('app.tabs').controller('TabsCtrl', function($scope){

  // DATA
  
  $scope.tabs = tabs;
});

// OBJECTS

var tabs = [
  { name: "Tab 1", route:".tab1" },
  { name: "Tab 2", route:".tab2" }
];