(function() {
  'use strict';

  angular
    .module('striver')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($location, goods) {
    var vm = this;

    vm.allCategories = goods.allCategories;
    vm.goodsByCategory = goods.goodsByCategory;
    vm.navigateTo = navigateTo;
    vm.viewTypes= {
      CUBE: 'cube',
      LINE: 'lines'
    };
    vm.viewType = vm.viewTypes.CUBE;

    function navigateTo(good) {
      $location.path("goods/" + good.id);
    }
  }
})();
