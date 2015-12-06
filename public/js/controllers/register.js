'use strict';

angular.module('mean').controller('RegisterController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // if(!Authentication.user) {
    // 	$state.go('sign-in');
    // }

    $scope.submit = function () {
      $scope.$watch('register.$valid', function(newVal) {
        console.log($scope.information);
        $http.post('/subject/register', $scope.information);
      });
    };


    $scope.cancel = function () {
      $state.go('home');
    };
  }
]);
