'use strict';

angular.module('mean').controller('SubjectInfoController', ['$scope', 'Authentication', '$state', '$http',
    function ($scope, Authentication, $state, $http) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    //if (!Authentication.user) {
    //    $state.go('sign-in');
    //}

    //scope variables
  $scope.information = {addressID: '1', subjectID: '1', firstname: 'John', middlename: 'A', lastname:'Doe', group:'Group 1', readerID:'Reader 1', startDate:'01/02/03', endDate:'02/03/04', addressLine1:'123 S Main St', addressLine2:'234 N Apple Ave', city:'Gainesville', state:'FL', zip:'21601', areacode1: '813', phone1:'5551234', areacode2:'853', phone2:'5554321', r1firstname:'Jane', r1middleinitial: 'A', r1lastname:'Doe', relation1:'Spouse', contact_areacode1:'352', r1phone:'5555678', r2firstname:'Jack', r2middleinitial:'A', r2lastname:'Doe', relation2:'Sibling', contact_areacode2:'813', r2phone:'5553636'};
  
  //unused
  $scope.groups = [{name:'Group 1'}, {name:'Group 2'}, {name:'Group 3'}];
  $scope.readers = [{name:'R15'}, {name:'R17'}, {name:'R18'}];
  $scope.states = [{name:'FL'},{name:'CA'},{name:'NH'}];
  //edit bool to handle ng-displays in html code
  $scope.editBool = false;
  
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

  $scope.addDashes = function(f){
    f.value = f.value.slice(0,3)+"-"+f.value.slice(3,6);
  };

  $scope.cancel = function () {
    $state.go('home');
  };



}]);
