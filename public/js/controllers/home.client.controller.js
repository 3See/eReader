'use strict';

angular.module('mean.system').controller('HomeController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
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
