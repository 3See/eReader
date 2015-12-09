'use strict';

angular.module('mean').controller('HomeController', ['Authentication','AppState','$scope', '$state', '$http',
  function ($scope, AppState, $state, $http) {
    // This provides Authentication context.
    $scope.AppState = AppState;

    $scope.studies = [
      { name: 'Study 1' }, 
      { name: 'Study 2' },
      { name: 'Study 3' }
    ];

  }
]);
