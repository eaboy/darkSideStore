'use strict';

angular.module('darkSideStoreApp')

.constant('baseURL', 'https://swapi.co/api/')
.service('dataService', ['$resource', 'baseURL', function ($resource, baseURL) {
    
    // Función que pasa la petición GET al rest
    this.getData = function(resource) {
        return $resource(baseURL+resource, null, {'query': {method:'GET', isArray:false}});
    };

}]);