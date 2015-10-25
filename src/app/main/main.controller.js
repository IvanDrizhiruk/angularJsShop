(function() {
  'use strict';

  angular
    .module('striver')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, goods) {
    var vm = this;

    vm.allCategories = goods.allCategories;
    vm.goodsByCategory = goods.goodsByCategory;
    vm.navigateTo = navigateTo;

    function navigateTo(to, event) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('Navigating')
          .content('Imagine being taken to ' + to)
          .ariaLabel('Navigation demo')
          .ok('Go go go!')
          .targetEvent(event)
      );
    }
  }
})();
