angular
  .module('app', [
    'ui.router',
    'app.common',
    'app.nested',
    'app.table',
    'app.tabs'
  ])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
 
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
  });