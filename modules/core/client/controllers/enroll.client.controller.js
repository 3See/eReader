'use strict';

angular.module('core').controller('EnrollController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    if(!Authentication.user) {
    	$state.go('sign-in');
    }

    $scope.submit = function () {
      $http.post('/api/client/enrollment', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };


    $scope.cancel = function () {
      $state.go($state.previous.state.name || 'home', $state.previous.params);
    };
  }
]);