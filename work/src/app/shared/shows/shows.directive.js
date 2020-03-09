(function() {
    'use strict';

    angular
      .module('thisDotNgUpgrade.shared')
      .directive('shows', shows);

    /** @ngInject */
    function shows() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/shared/shows/shows.html',
        scope: {
            shows: '=',
            onFavorite: '&',
            onUnfavorite: '&',
            onRemove: '&'
        },
        controller: ShowsController
      };

      return directive;

      /** @ngInject */
      function ShowsController($scope) {

        $scope.favoriteShow = function(show) {
          $scope.onFavorite(show);
        };

        $scope.unfavoriteShow = function(show) {
          $scope.onUnfavorite(show);
        };

        $scope.removeShow = function(show) {
          $scope.onRemove(show);
        };
      }
    }

  })();
