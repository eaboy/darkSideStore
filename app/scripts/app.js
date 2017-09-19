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
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/ship/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('imgName', function(){
    return {
      link: function(scope, element, attrs){
        const imageName = attrs.imgName.toLowerCase().split(' ').join('-');
        attrs.$set('src', 'images/'+imageName+'.jpg');
      }
    };
  });
