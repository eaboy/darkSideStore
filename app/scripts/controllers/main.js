'use strict';

/**
 * @ngdoc function
 * @name darkSideStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the darkSideStoreApp
 */
angular.module('darkSideStoreApp')
  .controller('MainCtrl', ['dataService', function (dataService) {

    const self = this;
    
    dataService.getData('starships').query(
      function(response) {
        self.ships = response.results;
        console.log(self.ships);
      }, function(error) {
        console.log('Error receiving data: '+error);
      }
    );
  }]);
