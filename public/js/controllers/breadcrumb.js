'use strict';

angular.module('mean').controller('breadcrumbController', ['$scope', '$state', 'Authentication',
	'Current', function($scope, $state, Authentication, Current) {
    Current.populate();
    $scope.state = Current.get_state();
    var state_lists = Current.get_state_lists();
    $scope.studies = state_lists.study_list;
    $scope.groups = state_lists.group_list;
    $scope.patients = state_lists.patient_list;
    
    // initialize temp state vars to perminent state vars
    $scope.usr_study = $scope.state.study;
    $scope.usr_group = $scope.state.group;
    $scope.usr_patient = $scope.state.patient;


    if ($scope.state.study.id == null) {
    	$state.go('home');
    }


}]);