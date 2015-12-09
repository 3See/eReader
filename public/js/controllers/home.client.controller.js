'use strict';

angular.module('mean').controller('HomeController', ['$scope', '$state', '$http', 'Current',
	function ($scope, $state, $http, Current) {
		$scope.Current = Current;
		$scope.states = Current.get_state();

		$scope.newStudy = "";
	}
]);