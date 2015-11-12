'use strict';

angular.module('core').controller('SubjectInfoController', ['$scope', 'Authentication', '$state',
    function ($scope, Authentication, $state) {

    // This provides Authentication context.
    $scope.authentication = Authentication;

    if (!Authentication.user) {
        $state.go('sign-in');
    }

    //scope variables
  $scope.info = {fullName: 'John Doe', group:'Group 1', patientID:'123456789', readerID:'123456789', startDate:'01/02/03', endDate:'02/03/04', address1:'123 S Main St', city1:'Gainesville', state1:'FL', zip1:'21601', address2:'5050 W University Ave. PO Box 90909', city2:'Gainesville', state2:'FL', zip2:'32607', phone1:'813-555-1234', phone2:'813-555-4321', emergencyContact1:{name:'Jane Doe', relationship:'Wife', phone:'352-555-5678'}, emergencyContact2:{name:'Jack Doe', relationship:'Brother', phone:'813-555-3636'}};
  $scope.groups = [{name:'Group 1'}, {name:'Group 2'}, {name:'Group 3'}];
  $scope.readers = [{name:'R15'}, {name:'R17'}, {name:'R18'}];
  $scope.states = [{name:'FL'},{name:'CA'},{name:'NH'}];
  $scope.editBool = false;
  $scope.tempGroup = $scope.groups[0].name;
  $scope.tempReader = $scope.readers[0].name;

  $scope.tempState1 = $scope.states[0].name;
  $scope.tempState2 = $scope.states[0].name;
  
  //Toggle edit function used when starting to edit and when canceled editing
  $scope.toggleEdit = function(index) {
    //Fil the input boxes with the current data
    console.log('toggled edit display.');
    $scope.fullName = $scope.info.fullName;
    $scope.groupsDrop = $scope.groups[0];
    $scope.readersDrop = $scope.readers[0];
    $scope.startDate = $scope.info.startDate;
    $scope.endDate = $scope.info.endDate;

    $scope.address1 = $scope.info.address1;
    $scope.city1 = $scope.info.city1;
    $scope.statesDrop1 = $scope.states[0];
    $scope.zip1 = $scope.info.zip1;

    $scope.address2 = $scope.info.address2;
    $scope.city2 = $scope.info.city2;
    $scope.statesDrop2 = $scope.states[0];
    $scope.zip2 = $scope.info.zip2;
    
    $scope.phone1 = $scope.info.phone1;    
    $scope.phone2 = $scope.info.phone2;

    $scope.emergencyContact1Name = $scope.info.emergencyContact1.name;    
    $scope.emergencyContact2Name = $scope.info.emergencyContact2.name; 
    $scope.emergencyContact1Relationship = $scope.info.emergencyContact1.relationship;
    $scope.emergencyContact2Relationship = $scope.info.emergencyContact2.relationship;
    $scope.emergencyContact1Phone = $scope.info.emergencyContact1.phone;
    $scope.emergencyContact2Phone = $scope.info.emergencyContact2.phone;


    //Change the boolen value to toggle the html elements
    if ($scope.editBool === false) {
      $scope.editBool = true;
    } else {
      $scope.editBool = false;
    }
  };

  //Function needed to keep track of the group drop down list
  $scope.changeGroup = function(newObj, oldObj){
   console.log(newObj.name);
   $scope.tempGroup = newObj.name;
  };
  //Function needed to keep track of the reader drop down list
  $scope.changeReader = function(newObj, oldObj){
   console.log(newObj.name);
   $scope.tempReader = newObj.name;
  };

  //Function needed to keep track of the state1 drop down list
  $scope.changeState1 = function(newObj, oldObj){
   console.log(newObj.name);
   $scope.tempState1 = newObj.name;
  };

  //Function needed to keep track of the state2 drop down list
  $scope.changeState2 = function(newObj, oldObj){
   console.log(newObj.name);
   $scope.tempState2 = newObj.name;
  };
    
  //Function that save the data when the save button is pressed in the editing mode
  $scope.saveEdit = function() {
    $scope.info.fullName = $scope.fullName;
    $scope.info.group = $scope.tempGroup;
    $scope.info.readerID = $scope.tempReader;

    $scope.info.startDate = $scope.startDate;
    $scope.info.endDate = $scope.endDate;

    $scope.info.address1 = $scope.address1;
    $scope.info.city1 = $scope.city1;
    $scope.info.state1 = $scope.tempState1;
    $scope.info.zip1 = $scope.zip1;

    $scope.info.address2 = $scope.address2;
    $scope.info.city2 = $scope.city2;
    $scope.info.state2 = $scope.tempState2;
    $scope.info.zip2 = $scope.zip2;
    
    $scope.info.phone1 = $scope.phone1;    
    $scope.info.phone2 = $scope.phone2;

    $scope.info.emergencyContact1.name = $scope.emergencyContact1Name;    
    $scope.info.emergencyContact2.name = $scope.emergencyContact2Name; 
    $scope.info.emergencyContact1.relationship = $scope.emergencyContact1Relationship;
    $scope.info.emergencyContact2.relationship = $scope.emergencyContact2Relationship;
    $scope.info.emergencyContact1.phone = $scope.emergencyContact1Phone;
    $scope.info.emergencyContact2.phone = $scope.emergencyContact2Phone;

    //Change the boolen value to toggle the html elements
    $scope.editBool = false;
  };


}]);