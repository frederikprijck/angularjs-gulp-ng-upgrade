(function() {
  'use strict';

  angular
    .module('thisdotNgupgrade')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
