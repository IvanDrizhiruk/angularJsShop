(function() {
  'use strict';

  angular
    .module('striver')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
    };
  }

})();
