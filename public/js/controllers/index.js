'use strict';

angular.module('mean').controller('HomeController', ['$scope', '$state', '$http', 'Authentication',
	'Current', function ($scope, $state, $http, Authentication, Current) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    var results;
    
    $http.post('/study/getStudy').success(function(data) {
    	$scope.studies = data;
    	console.log(data);
    }).error(function(err) {
    	console.log('GetStudy Error : ' + err);
    });

    $scope.Current = Current;
    $scope.states = Current.get_state();


}]); // end search