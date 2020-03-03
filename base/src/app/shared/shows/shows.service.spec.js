(function() {
  'use strict';

  describe('service webDevTec', function() {
    var showsService;

    beforeEach(module('thisDotNgUpgrade.shared'));
    beforeEach(inject(function(_showsService_) {
      showsService = _showsService_;
    }));

    it('should be registered', function() {
      expect(showsService).not.toEqual(null);
    });

    describe('getAll function', function() {
      it('should exist', function() {
        expect(showsService.getAll).not.toEqual(null);
      });

      it('should return a list of shows', function() {
        var data = showsService.getAll();
        expect(data).toEqual(jasmine.any(Array));
        expect(data[0]).toEqual(jasmine.any(Object));
        expect(data.length > 5).toBeTruthy();
      });
    });
  });
})();
