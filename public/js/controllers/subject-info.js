'use strict';

angular.module('mean').controller('SubjectInfoController', ['$scope', 'Authentication', '$state', '$http', 'Current',
    function ($scope, Authentication, $state, $http, Current) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    //if (!Authentication.user) {
    //    $state.go('sign-in');
    //}

    //scope variables  

  //edit bool to handle ng-displays in html code
  $scope.editBool = false;
  
  $http.post('/subject/getfullsubject', Current.get_state())
  .success(function(data){
    console.log('Getting subject info');
    console.log(data);
    $scope.information = data;
  });


  //Toggle edit function used when starting to edit and when canceled editing
  $scope.toggleEdit = function(index) {
    //Fil the input boxes with the current data
    console.log('toggled edit display.');


    //Change the boolen value to toggle the html elements
    if ($scope.editBool === false) {
      $scope.editBool = true;
    } else {
      //Need to check if cancelling, if so revert back to old data

      //set edit bool to false to revert to uneditable data
      $scope.editBool = false;
    }
  };
    
  //Function that save the data when the save button is pressed in the editing mode
  $scope.saveEdit = function() {

    //

    //Change the boolen value to toggle the html elements
    $scope.editBool = false;
    $scope.$watch('update.$valid', function(newVal) {
        console.log($scope.information);
        $http.post('/subject/update', $scope.information);
      });
  };

  $scope.cancel = function () {
    $state.go('home');
  };



}]);
