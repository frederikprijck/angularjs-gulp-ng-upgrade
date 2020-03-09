(function() {
  'use strict';

  angular
    .module('thisDotNgUpgrade.core')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      template: require('src/app/core/navbar/navbar.html'),
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {}
  }

})();
