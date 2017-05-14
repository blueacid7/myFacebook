'use strict';

app.config(function($routeProvider) {
  $routeProvider
      .when("/", {
        templateUrl : "track-list/track-list.html",
        controller  : 'trackListController',
        controllerAs: 'vm'
      })
      .otherwise({
        templateUrl : "track-list/track-list.html",
        controller  : 'trackListController',
        controllerAs: 'vm'
      });
});