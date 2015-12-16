'use strict';

angular.module('mean').controller('breadcrumbController', ['$scope', '$state', 'Authentication',
	'Current', function($scope, $state, Authentication, Current) {
    Current.populate(set_scope);

    function set_scope () {

        $scope.state = Current.get_state();
        var state_lists = Current.get_state_lists();
        $scope.studys = state_lists.study_list;
        $scope.grps = state_lists.group_list;
        $scope.patnts = state_lists.patient_list;

        if ($scope.state.study.id == null) {
            $state.go('home');
        }
    }

    $scope.study_change = function(study) {
        console.log("Study_change");
        var temp = study.split(":");
        var studyID = temp[1].split(",")[0];
        var studyName = temp[2].split("\"")[1];
        Current.set_study(studyID, studyName, set_scope);
    };

    $scope.group_change = function(group) {
        console.log("Group_change");
        var temp = group.split(":");
        var groupID = temp[1].split(",")[0];
        var groupName = temp[2].split("\"")[1];
        Current.set_group(groupID, groupName, set_scope);
    };

    $scope.patient_change = function(patient) {
        console.log("Patient_change");
        var temp = patient.split(":");
        console.log(temp);
        var patientID = temp[1].split(",")[0];
        var firstname = temp[2].split("\"")[1];
        var lastname = temp[3].split("\"")[1];
        console.log(firstname + " : " + lastname);
        Current.set_patient(patientID, firstname, lastname, set_scope);
    };

}]);