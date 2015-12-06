'use strict';

angular.module('mean').controller('Subject_Search-Controller', ['$scope', 'Authentication', '$state', '$http',
    function ($scope, Authentication, $state, $http) {
        var results;

        // populate results
        $scope.search = function() {
            $http.get('/subject/search', {
                params: {
                    sid: $scope.subject_id,
                    gid: $scope.gid,
                    fname: $scope.fname,
                    lname: $scope.lname
                }
            })
            .success(function(data) {
                results = data;
                console.log(data);
            })
            .error(function() {results = 'There was an error in the search';});
        }; // end search
}]);
