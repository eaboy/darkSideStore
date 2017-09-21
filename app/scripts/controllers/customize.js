'use strict';

/**
 * @ngdoc function
 * @name darkSideStoreApp.controller:CustomizeCtrl
 * @description
 * # CustomizeCtrl
 * Controller of the darkSideStoreApp
 */
angular.module('darkSideStoreApp')
  .controller('CustomizeCtrl', ['dataService', '$routeParams', function (dataService, $routeParams) {
    
    /* globals google */

    const self = this;
    const shipId = $routeParams.id;  
    this.customizations = {};
    this.today = new Date();
    this.customizations.date = this.today;
    this.customizations.passengers = 0;

    function randomLatLng(from,to) {
        return (Math.random() * (to - from) + from).toFixed(3) * 1;
    }

    const position = new google.maps.LatLng(randomLatLng(-90,90), randomLatLng(-180,180));

    const mapOptions = {
        zoom: 3,
        center: position,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    this.marker = new google.maps.Marker({
        position: position,
        map: this.map
    });

    dataService.getData('starships/' + shipId).query(
        function(response) {
            self.ship = response;
        }, function(error) {
            console.log('Error receiving data: '+error);
        }
    );
  }]);