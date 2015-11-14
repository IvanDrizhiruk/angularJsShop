(function() {
  'use strict';

  angular
    .module('nikross')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
