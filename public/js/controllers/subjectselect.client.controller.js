'use strict';

angular.module('mean').controller('SubjectSelectController', ['$scope', 'Authentication', '$state', '$http',
    function ($scope, Authentication, $state, $http) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    //if (!Authentication.user) {
        //$state.go('sign-in');
    //}


}]);