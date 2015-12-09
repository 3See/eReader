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


    
    $http.post('/study/getStudy')
    .success(function(data) {
      //$scope.studies = data;
//      var json = mapDOM(data, true);
      $scope.studies = data;
      console.log(data);
//      console.log('the above is the json result');
      //console.log(data);
    })
    .error(function(err) {
      console.log('GetStudy Error : ' + err);
    });

}]); // end search
    