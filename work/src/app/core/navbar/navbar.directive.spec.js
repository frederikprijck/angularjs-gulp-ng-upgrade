(function() {
  'use strict';

  describe('directive navbar', function() {
    var vm;
    var el;

    beforeEach(module('thisDotNgUpgrade'));
    beforeEach(inject(function($compile, $rootScope, $httpBackend) {

      $httpBackend.whenGET(/\.html/).respond(200, '');

      el = angular.element('<navbar></navbar>');
      var scope = $rootScope.$new();

      $compile(el)(scope);
      $rootScope.$digest();
      $httpBackend.flush();

      vm = el.isolateScope().vm;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    xit('should have navItems set', function() {
      expect(vm).toEqual(jasmine.any(Object));

      expect(vm.navItems).toEqual(jasmine.any(Array));
      expect(vm.navItems.length).toEqual(2);
    });
  });
})();
