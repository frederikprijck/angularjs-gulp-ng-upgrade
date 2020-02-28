(function() {
  'use strict';

  angular
    .module('thisDotNgUpgrade.core')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/core/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;

      this.$onInit = function () {
        vm.relativeDate = moment(vm.creationDate).fromNow();
      }
    }
  }

})();
