(function() {
  'use strict';

  angular
    .module('striver')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
