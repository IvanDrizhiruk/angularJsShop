(function() {
  'use strict';

  angular
    .module('striver')
    .controller('GoodController', GoodController);

  /** @ngInject */
  function GoodController( $routeParams, $location, goods) {
    var vm = this;

    goods.getGood($routeParams.goodId).then(function (good) {
      vm.good = good;

      if(undefined === vm.good) {
        $location.path("home");
      }
    });

  }
})();
