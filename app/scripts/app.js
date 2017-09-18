'use strict';

/**
 * @ngdoc overview
 * @name darkSideStoreApp
 * @description
 * # darkSideStoreApp
 *
 * Main module of the application.
 */
angular
  .module('darkSideStoreApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
