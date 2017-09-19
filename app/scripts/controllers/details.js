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
    this.images = [
      { id: 0,
        image: 'images/death-star.jpg'
      },
      { id: 1,
        image: 'images/ef76-nebulon-b-escort-frigate.jpg'
      },
      { id: 2,
        image: 'images/executor.jpg'
      },
      { id: 3,
        image: 'images/imperial-shuttle.jpg'
      },
      { id: 4,
        image: 'images/millennium-falcon.jpg'
      },
      { id: 5,
        image: 'images/sentinel-class-landing-craft.jpg'
      },
      { id: 6,
        image: 'images/slave-1.jpg'
      },
      { id: 7,
        image: 'images/tie-advanced-x1.jpg'
      },
      { id: 8,
        image: 'images/x-wing.jpg'
      },
      { id: 9,
        image: 'images/y-wing.jpg'
      },
    ];
    
    dataService.getData('starships/' + shipId).query(
      function(response) {
        self.ship = response;
      }, function(error) {
        console.log('Error receiving data: '+error);
      }
    );
    
  }]);
