'use strict';

angular.module('mean').controller('HeaderController', ['$scope', '$state', 'Authentication', function ($scope, Authentication, $state) {
    $scope.auth = Authentication;

}]);
