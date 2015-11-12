'use strict';

angular.module('core').controller('sidebarCtrl', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

    console.log('connected');

    $scope.ID = '105';

    $scope.studys = [
      'Study 1',
      'Study 2',
      'Study 3'
    ];
    
    $scope.groups = [
      'Group 1',
      'Group 2',
      'Control'
    ];

  }
]);