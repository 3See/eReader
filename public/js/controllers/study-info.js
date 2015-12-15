'use strict';

angular.module('mean').controller('StudyInfoController', ['$scope', 'Authentication', '$state', '$http', 'Current',
  function ($scope, Authentication, $state, $http, Current) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}
    $http.post('/group/getGroups', Current.get_state())
    .success(function(data) {
    	$scope.groups = data;
    	console.log(data);
    });

    $scope.Current = Current;

  }
]);
