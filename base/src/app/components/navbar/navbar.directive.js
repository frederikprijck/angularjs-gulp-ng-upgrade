(function() {
  'use strict';

  angular
    .module('thisdotNgupgrade')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
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
