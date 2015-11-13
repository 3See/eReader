'use strict';

angular.module('mean.system').controller('SubjectSelectController', ['$scope', 'Authentication', '$state',
    function ($scope, Authentication, $state) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    //if (!Authentication.user) {
        //$state.go('sign-in');
    //}


}]);