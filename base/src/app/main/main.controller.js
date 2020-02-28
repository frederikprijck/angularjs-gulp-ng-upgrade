(function() {
  'use strict';

  angular
    .module('thisdotNgupgrade')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec) {
    var vm = this;

    vm.awesomeThings = [];
    vm.creationDate = 1582793820064;

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function getWebDevTec() {
      webDevTec.getTec().then(function(awesomeThings) {
        vm.awesomeThings = awesomeThings;
        angular.forEach(vm.awesomeThings, function(awesomeThing) {
          awesomeThing.rank = Math.random();
        });
      });
    }
  }
})();
