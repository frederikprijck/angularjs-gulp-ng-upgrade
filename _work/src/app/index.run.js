(function() {
  'use strict';

  angular
    .module('thisDotNgUpgrade')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
