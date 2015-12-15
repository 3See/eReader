'use strict';

angular.module('mean').controller('HomeController', ['$scope', '$state', '$http', 'Authentication',
	'Current', function ($scope, $state, $http, Authentication, Current) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    $scope.Current = Current;
    $scope.states = Current.get_state();
    
    $http.post('/study/getStudy', Current.get_state()).success(function(data) {
    	$scope.studies = data;
    	console.log(data);
    }).error(function(err) {
    	console.log('GetStudy Error : ' + err);
    });

}]); // end search