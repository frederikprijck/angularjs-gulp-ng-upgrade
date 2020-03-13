(function() {
  'use strict';

  describe('directive navbar', function() {
    var vm;
    var el;

    beforeEach(angular.mock.module('thisDotNgUpgrade'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<navbar></navbar>');
      var scope = $rootScope.$new();

      $compile(el)(scope);
      $rootScope.$digest();

      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have navItems set', function() {
      expect(vm).toEqual(jasmine.any(Object));

      expect(vm.navItems).toEqual(jasmine.any(Array));
      expect(vm.navItems.length).toEqual(2);
    });
  });
})();
