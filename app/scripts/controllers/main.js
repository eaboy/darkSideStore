'use strict';

/**
 * @ngdoc function
 * @name darkSideStoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the darkSideStoreApp
 */
angular.module('darkSideStoreApp')
  .controller('MainCtrl', ['dataService', '$location', function (dataService, $location) {

    const self = this;
    
    dataService.getData('starships').query(
      function(response) {
        self.ships = response.results;
      }, function(error) {
        console.log('Error receiving data: '+error);
      }
    );

    this.returnCost = function(cost) {
      if(cost === 'unknown') {
        return 'ask for price.';
      }
      return cost + ' credits';
    };

    this.selectShip = function(url) {
      const shipId = url.slice(31, url.length - 1);
      $location.path( '/ship/'+shipId );
    }
  }]);
