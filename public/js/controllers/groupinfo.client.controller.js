'use strict';

angular.module('mean').controller('GroupInfoController', ['$scope', 'Authentication', '$state', '$http', 'Current',
  function ($scope, Authentication, $state, $http, Current) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

    $http.post('/subject/getSubjects', Current.get_state())
    .success(function(data) {
    	$scope.patients = data;
    	console.log(data);
    })
    .error(function(err) {
    	console.log('GetSubjects Error : ' + err);
    });

    $scope.Current = Current;
  }
]);



