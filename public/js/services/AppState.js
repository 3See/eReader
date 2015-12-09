'use strict';

//Global authentication service
angular.module('mean').factory('AppState', [
        function () { // AppState main
            var AppState;
            AppState.current_study = "Study1";
            AppState.current_group = "";
            AppState.current_patient = "";

            return AppState;
}

]);
