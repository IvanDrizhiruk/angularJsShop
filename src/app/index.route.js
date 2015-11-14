(function() {
  'use strict';

  angular
    .module('nikross')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/goods/:goodId', {
        templateUrl: 'app/good/good.html',
        controller: 'GoodController',
        controllerAs: 'goodView'
      })
      .when('/contactas', {
        templateUrl: 'app/contactas/contactas.html'
      })
      .when('/about', {
        templateUrl: 'app/about/about.html'
      })
      .when('/orders', {
        templateUrl: 'app/orders/orders.html'
      })
      .when('/example', {
        templateUrl: 'app/main/example/main.html',
        controller: 'MainExampleController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }

})();
