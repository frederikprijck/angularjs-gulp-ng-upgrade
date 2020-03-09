(function() {
  'use strict';

  angular
    .module('thisDotNgUpgrade')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/all-shows'
      })
      .when('/all-shows', {
        template: require('src/app/all-shows/all-shows.html'),
        controller: 'AllShowsController'
      })
      .when('/favorite-shows', {
        template: require('src/app/favorite-shows/favorite-shows.html'),
        controller: 'FavoriteShowsController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
