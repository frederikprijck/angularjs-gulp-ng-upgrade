(function() {
  'use strict';

  angular
      .module('thisdotNgupgrade')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec($http) {
    this.getTec = function () {
      return $http.get('/data').then(function(result) {
        return result.data;
      });
    }
  }

})();
