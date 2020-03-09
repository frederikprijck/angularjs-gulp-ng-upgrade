(function() {
  'use strict';

  angular
    .module('thisDotNgUpgrade.core')
    .directive('root', root);

  /** @ngInject */
  function root() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/core/root/root.html',
      controller: RootController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RootController(toastr) {
      var vm = this;

      vm.classAnimation = '';

      this.showToastr = function () {
        toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
        vm.classAnimation = '';
      }
    }
  }

})();
