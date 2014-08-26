angular
  .module('app.table', [
    'ui.router',
    'app.common'
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('table', {
        url: '/table',
        templateUrl: 'modules/table/table.html',
        controller: 'TableCtrl'
      });
  });