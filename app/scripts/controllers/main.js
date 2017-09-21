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

    // Function to return formated cost, if cost is unknown it returns 'ask for price.' if not it returns cost adding the word credits.

    this.returnCost = function(cost) {
      if(cost === 'unknown') {
        return 'ask for price.';
      }
      return cost + ' credits.';
    };

    // Function to navigate to ship details page

    this.selectShip = function(url) {
      const shipId = url.slice(31, url.length - 1); // Extracts the id of the starship url data.
      $location.path( '/ship/'+shipId );
    };
  }]);
