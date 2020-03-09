(function() {
    'use strict';
  
    angular
      .module('thisDotNgUpgrade')
      .controller('FavoriteShowsController', FavoriteShowsController);
  
    /** @ngInject */
    function FavoriteShowsController($scope, showsService, toastr) {
      var vm = this;

      vm.getData = function() {
        return showsService.getAllFavorites().then(function(shows) {
          $scope.shows = shows;
        });
      };

      vm.getData();

      $scope.unfavoriteShow = function(id) {
        showsService.unfavoriteShow(id).then(function() { 
          toastr.info('Unfavorite Succesfull');
          return vm.getData();
        });
      };

      $scope.removeShow = function(id) {
        showsService.removeShow(id).then(function() { return vm.getData() });
      };
    }
  })();
  