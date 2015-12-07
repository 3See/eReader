'use strict';

angular.module('mean').controller('Subject_Search-Controller', ['$scope', 'Authentication', '$state', '$http',
    function ($scope, Authentication, $state, $http) {

        // populate results
        $scope.search = function() {
            console.log($scope.lname);
            $http.get('/subject/search', {
                params: {
                    sid: $scope.subject_id,
                    fname: $scope.fname,
                    lname: $scope.lname
                }
            })
            .success(function(data) {
                console.log(data);
                $scope.results = data;
            })
            .error(function(err) {
                $scope.results = 'There was an error in the search';
            });
        }; // end search
}]);
