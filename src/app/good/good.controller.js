(function() {
  'use strict';

  angular
    .module('striver')
    .controller('GoodController', GoodController);

  /** @ngInject */
  function GoodController( $routeParams, $location, goods) {
    var vm = this;

    vm.good = goods.getGood($routeParams.goodId);
    //console.log("ISD ==========", good);
    if(!vm.good) {
      $location.path("home");
      return;
    }
  }
})();
