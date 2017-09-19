'use strict';

angular.module('darkSideStoreApp')

.constant('baseURL', 'https://swapi.co/api/')
.service('dataService', ['$resource', 'baseURL', function ($resource, baseURL) {
    
    // Función que pasa la petición GET al rest
    this.getData = function(resource) {
        return $resource(baseURL+resource+'/ ', null, {'query': {method:'GET', isArray:false}}); // Adding the '/ ' to force angular $resource to add the trailing slash becouse the api redirects to the url with trailing slash
    };

}]);