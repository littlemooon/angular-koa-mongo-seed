angular
  .module('app.tabs', [
    'ui.router',
    'app.common'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
 
    $stateProvider
      .state("tabs", {
        url: '/tabs',
        abstract: true,
        templateUrl: 'modules/tabs/tabs.html',
        controller: 'TabsCtrl'
      })
        .state("tabs.tab1", { 
          url: "", 
          templateUrl: 'modules/tabs/tab1/tab1.html',
          controller: 'Tab1Ctrl'
        })
        .state("tabs.tab2", { 
          url: '/tab2',
          templateUrl: 'modules/tabs/tab2/tab2.html',
          controller: 'Tab2Ctrl'
        });

    $urlRouterProvider.when("/tabs", "/tabs/tab1");
  });
