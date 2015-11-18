'use strict';

angular.module('mean.system').controller('breadcrumbController', ['$scope', 'Authentication', '$state', function($scope, Authentication, $state) {
    $scope.auth = Authentication;

    // if not authenticated, redirect to login page
    if(!Authentication.user) {
        $state.go('sign-in');
    }

    $scope.studies = ['study 1, study 2, study 3'];
    $scope.groups= ['group 1, group 2, group 3'];
    $scope.patients= ['patient 1, patient 2, patient 3'];
}]);
