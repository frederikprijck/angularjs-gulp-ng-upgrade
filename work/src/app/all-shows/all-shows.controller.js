(function() {
    'use strict';
  
    angular
      .module('thisDotNgUpgrade')
      .controller('AllShowsController', AllShowsController);
  
    /** @ngInject */
    function AllShowsController($scope, showsService, toastr) {
      var vm = this;

      vm.getData = function() {
        return showsService.getAll().then(function(shows) {
          $scope.shows = shows;
        });
      }

      vm.getData();

      $scope.favoriteShow = function(id) {
        showsService.favoriteShow(id).then(function() { 
          toastr.info('Favorite Succesfull');
          return vm.getData();
        });
      };

      $scope.unfavoriteShow = function(id) {
        showsService.unfavoriteShow(id).then(function() { 
          toastr.info('Unfavorite Succesfull');
          return vm.getData();
        });
      };

      $scope.removeShow = function(id) {
        showsService.removeShow(id).then(function() { 
          toastr.info('Show succesfully removed');
          return vm.getData();
        });
      };

      
    }
  })();
  