'use strict';

/**
 * @ngdoc function
 * @name darkSideStoreApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the darkSideStoreApp
 */
angular.module('darkSideStoreApp')
  .controller('DetailsCtrl', ['dataService', '$routeParams', function (dataService, $routeParams) {

    const self = this;
    const shipId = $routeParams.id;
    
    dataService.getData('starships/' + shipId).query(
      function(response) {
        self.ship = response;
      }, function(error) {
        console.log('Error receiving data: '+error);
      }
    );
    
  }]);
