'use strict';

/**
 * @ngdoc function
 * @name darkSideStoreApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the darkSideStoreApp
 */
angular.module('darkSideStoreApp')
  .controller('DetailsCtrl', ['dataService', '$routeParams', '$location', function (dataService, $routeParams, $location) {

    const self = this;
    const shipId = $routeParams.id;
    this.images = [
      { id: 0,
        image: 'images/death-star.jpg',
        shipId: 9
      },
      { id: 1,
        image: 'images/ef76-nebulon-b-escort-frigate.jpg',
        shipId: 23
      },
      { id: 2,
        image: 'images/executor.jpg',
        shipId: 15
      },
      { id: 3,
        image: 'images/imperial-shuttle.jpg',
        shipId: 22
      },
      { id: 4,
        image: 'images/millennium-falcon.jpg',
        shipId: 10
      },
      { id: 5,
        image: 'images/sentinel-class-landing-craft.jpg',
        shipId: 5
      },
      { id: 6,
        image: 'images/slave-1.jpg',
        shipId: 21
      },
      { id: 7,
        image: 'images/tie-advanced-x1.jpg',
        shipId: 13
      },
      { id: 8,
        image: 'images/x-wing.jpg',
        shipId: 12
      },
      { id: 9,
        image: 'images/y-wing.jpg',
        shipId: 11
      },
    ];

    this.images.forEach(function(element) {
      if(shipId == element.shipId){
        this.images[0].id = element.id;
        element.id = 0;
      }
    }, this);
    
    dataService.getData('starships/' + shipId).query(
      function(response) {
        self.ship = response;
      }, function(error) {
        console.log('Error receiving data: '+error);
      }
    );

    this.selectShip = function() {
      $location.path( '/ship/'+shipId+'/customize' );
    };
    
  }]);
