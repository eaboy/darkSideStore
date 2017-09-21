'use strict';

angular.module('darkSideStoreApp')

.constant('baseURL', 'https://swapi.co/api/') // Base URL of the API
.service('dataService', ['$resource', 'baseURL', function ($resource, baseURL) {
    
    // Function to retrieve data from API. Receives the resource as a parameter
    this.getData = function(resource) {
        return $resource(baseURL+resource+'/ ', null, {'query': {method:'GET', isArray:false}}); // Adding the '/ ' to force angular $resource to add the trailing slash becouse the api redirects to the url with trailing slash
    };

}]);