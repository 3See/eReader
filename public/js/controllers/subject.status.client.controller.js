'use strict';

angular.module('mean').controller('SubjectStatusController', ['$scope', '$state', '$http', 'Authentication',
  function ($scope, $state, $http, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

    $scope.subjects = [];
    var stats = [];

    $http.post('/subject/getstatus')
    .success(function(data) {
        data.forEach(function(element, index, array) {
        	if(element.studyGroupName === null || element.readerID === null) {
	            element[element.size] = 'Incomplete';
	        }
	        else {
	        	element[element.size] = 'Complete';
	        }
        });
        $scope.subjects = data;
        
     // console.log(data);
    })
    .error(function(err) {
      //console.log('GetStatus Error : ' + err);
    });
  }
]);