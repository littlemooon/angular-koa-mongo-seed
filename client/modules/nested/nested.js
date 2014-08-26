angular
  .module('app.nested', [
    'ui.router',
    'app.common'
  ])
  .config(function($stateProvider) {
 
    // next graph views
    $stateProvider
      .state('nested', {
        url: '/',
        views: {
          '': { 
            templateUrl: 'modules/nested/nested.html',
            controller: 'NestedCtrl'
          },
          'nested1@nested': { 
            templateUrl: 'modules/nested/nested1/nested1.html',
            controller: 'Nested1Ctrl'
          },
          'nested2@nested': { 
            templateUrl: 'modules/nested/nested2/nested2.html',
            controller: 'Nested2Ctrl'
          }
        }
      });
  });
