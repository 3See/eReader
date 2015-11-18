'use strict';

angular.module('mean').config(['$locationProvider', 
        function($locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }
]);


angular.element(document).ready(function() {

    //Then init the app
    angular.bootstrap(document, ['mean']);
});
