'use strict';

//Global authentication service 
angular.module('mean').factory('Current', [ function() {
	var states = {
		study: "study 1",
		group: "group 1",
		patient: "patient 1"
	};

	var Current = {};

	Current.get_state = function () {
		return states;
	};

	Current.set_study = function(study) {
		states.study = study;
	};
	Current.set_group = function(group) {
		states.group = group;
	};
	Current.set_patient = function(patient) {
		states.patient = patient;
	};

	return Current;
}]);
