'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.auth = Authentication;
    if(!Authentication.user) {
        $http.get('/signin');
    }
}]);
