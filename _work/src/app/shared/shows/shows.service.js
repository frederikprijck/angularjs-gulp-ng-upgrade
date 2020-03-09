(function() {
  "use strict";

  angular
    .module("thisDotNgUpgrade.shared")
    .service("showsService", showsService);

  /** @ngInject */
  function showsService($http) {
    var baseUrl = "http://localhost:4201";
    this.getAll = function() {
      return $http.get(baseUrl + "/api/shows").then(function(result) {
        return result.data;
      });
    };

    this.getAllFavorites = function() {
      return this.getAll().then(function(shows) {
        return shows.filter(function(show) {
          return show.isFavorite;
        });
      });
    };

    this.favoriteShow = function(id) {
      return $http.post(baseUrl + "/api/shows/" + id + "/favorite");
    };

    this.unfavoriteShow = function(id) {
      return $http.post(baseUrl + "/api/shows/" + id + "/unfavorite");
    };

    this.removeShow = function(id) {
      return $http.delete(baseUrl + "/api/shows/" + id);
    };
  }
})();
