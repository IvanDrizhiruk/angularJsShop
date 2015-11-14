(function() {
  'use strict';

  angular
    .module('nikross')
    .controller('GoodController', GoodController);

  /** @ngInject */
  function GoodController( $routeParams, $location, goods) {
    var vm = this;

    goods.getGood($routeParams.goodId).then(function (good) {
      vm.good = good;

      if(angular.isUndefined(vm.good)) {
        $location.path("home");
      }
    });
  }
})();
