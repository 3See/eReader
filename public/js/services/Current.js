'use strict';

//Global authentication service 
angular.module('mean').factory('Current', ['$http', function($http) {
	var states = {
		uid: 2,
		study: {id: null, name: null},
		group: {id: null, name: null},
		patient: {id: null, firstname: null, lastname: null}
	};

	var uid = 2;

	var state_lists = {
		study_list: {},
		group_list: {},
		patient_list: {}
	};

	var Current = {};

	Current.get_state = function () {
		return states;
	};

	Current.get_state_lists = function () {
		return state_lists;
	};

	Current.populate = function () {
		if(states.study === null) {
			states.study = {
				id: '%',
				name: '%'
			};
		}

		if(states.group === null) {
			states.group = {
				id: '%',
				name: '%'
			};
		}

		if(states.patient === null) {
			states.patient = {
				id: '%',
				firstname: '%',
				lastname: '%'
			};
		}

		var query_input_pkg = {
			states: states,
			uid: uid
		};

		console.log(query_input_pkg);
		$http.post('/current/populate', query_input_pkg)
		.success(function(data) {
    		state_lists.study_list = data.study_list;
    		state_lists.group_list = data.group_list;
    		state_lists.patient_list = data.patient_list;

    		console.log("Populate list data **********************");
    		console.log(data);
    	})
    	.error(function(err) {
    		console.log('Populate Error : ' + err); 
    	});
	};

	// Set functions
	Current.set_study = function(sid, sname) {
		console.log('Setting current study');
		states.study.id = sid;
		states.study.name = sname;

		states.group = null;
		states.patient = null;

		Current.populate();
	};
	Current.set_group = function(gid, gname) {
		console.log('Setting current group');
		states.group.id = gid;
		states.group.name = gname;

		states.patient = null;

		Current.populate();
	};
	Current.set_patient = function(pid, fname, lname) {
		console.log('Setting current patient');
		states.patient.id = pid;
		states.patient.firstname = fname;
		states.patient.lastname = lname;

		Current.populate();
	};

	return Current;
}]);
