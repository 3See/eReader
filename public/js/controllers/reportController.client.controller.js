'use strict';

angular.module('mean').controller('reportController', ['$scope', '$state', '$http', 'Authentication',
  function ($scope, $state, $http, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}
    var f_result = [];
    var dataOne = [];
    var dataTwo = [];

    $http.post('/subject/getreports')
    .success(function(data) {
      //$scope.studies = data;
//      var json = mapDOM(data, true);
        //console.log("DATAONE : " + data);
        $scope.subjects = data;
      console.log(data);
    })
    .error(function(err) {
      console.log('GetStudy Error : ' + err);
    });

    
    

}]);



