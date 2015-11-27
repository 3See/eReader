'use strict';

angular.module('mean').controller('HomeController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
        $http.get('temp');
    }

    $scope.studies = [
    	{	name: 'Study 1' }, 
    	{	name: 'Study 2' },
    	{ 	name: 'Study 3' }
    ];

  }
]);
