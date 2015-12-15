'use strict';

angular.module('mean').controller('RegisterController', ['$scope', 'Authentication', '$state', '$http',
  function ($scope, Authentication, $state, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // if(!Authentication.user) {
    // 	$state.go('sign-in');
    // }

    $scope.submit = function () {
      console.log($scope.information);
      if(
        $scope.information.firstname !== undefined &&
        $scope.information.middlename !== undefined &&
        $scope.information.lastname !== undefined &&
        $scope.information.gender !== undefined &&
        $scope.information.streetaddress1 !== undefined &&
        $scope.information.city !== undefined &&
        $scope.information.state !== undefined &&
        $scope.information.zipcode !== undefined &&
        $scope.information.areacode1 !== undefined &&
        $scope.information.phone1 !== undefined &&
        $scope.information.email !== undefined &&
        $scope.information.relation1 !== undefined &&
        $scope.information.r1firstname !== undefined &&
        $scope.information.r1lastname !== undefined &&
        $scope.information.contact_areacode1 !== undefined &&
        $scope.information.r1phone !== undefined &&
        $scope.information.relation2 !== undefined &&
        $scope.information.r2firstname !== undefined &&
        $scope.information.r2lastname !== undefined &&
        $scope.information.contact_areacode2 !== undefined &&
        $scope.information.r2phone !== undefined &&
        $scope.information.height !== undefined &&
        $scope.information.weight !== undefined &&
        $scope.information.age !== undefined
      ){
        $http.post('/subject/register', $scope.information)
        .success(function(){
            //alert('Subject Registered');
        })
        .catch(function(err){
            console.log(err);
            alert('Subject already registered, cannot register again');
            break;
        });
        alert('Subject Registered');
      }
    };


    $scope.cancel = function () {
      $state.go('home');
    };
  }
]);
