'use strict';

angular.module('mean').controller('GroupInfoController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

  }
]);



