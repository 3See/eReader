'use strict';

angular.module('mean').controller('HomeController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    var results;
    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

/*    $scope.studies = [
      { name: 'Study 1' }, 
      { name: 'Study 2' },
      { name: 'Study 3' }
    ];
  */  
    
    $http.get('/study/getStudy', {
      params: {
        customerID: 1,
      }
    })
    .success(function(data) {
      $scope.studies = data;
      console.log(data);
    })
    .error(function() {results = 'There was an error in the search';}
    );
}]); // end search
    

//app/routes
//  study.js

//app/controller
//  study.js


        //var results;

        // populate results
        