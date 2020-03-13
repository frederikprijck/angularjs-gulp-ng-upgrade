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
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      vm.navItems = [
        { text: 'All Shows', url: '#/all-shows'},
        { text: 'Favorite Shows', url: '#/favorite-shows'}
      ]
    }
  }

})();
