'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

    $scope.studys = [
    	{	name: 'Study 1' }, 
    	{	name: 'Study 2' },
    	{ 	name: 'Study 3' }
    ];

  }
]);
