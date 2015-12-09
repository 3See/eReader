'use strict';

angular.module('mean').controller('subjectSetupController', ['$scope', '$http', '$state', 'Authentication',
  function ($scope, $http, $state, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    //if(!Authentication.user) {
    //  $state.go('sign-in');
    //}

    var request = "SELECT * FROM subject LEFT JOIN studysubject ON studysubject.subjectID = subject.subjectID WHERE studyID IS NULL";
    $http.post('/subject/unassignedSearch')
    .success(function(data) {
      $scope.subjects = data;
      console.log(data);
    })
    .error(function(err) {
      console.log('UnassignedSearch Error : ' + err);
    });

    $http.post('/study/getStudy')
    .success(function(data) {
      $scope.studies = data;
      console.log(data);
    })
    .error(function(err) {
      console.log('GetStudy Error : ' + err);
    });

    $http.post('/reader/getunassignedReaders')
    .success(function(data) {
      $scope.readers = data;
      console.log(data);
    })
    .error(function(err){
      console.log('GetReaders Error : ' + err);
    });

    $scope.setGroups = function() {
      $http.post('/group/getGroups')
      .success(function(data) {
        $scope.groups = data;
        console.log(data);
      })
      .error(function(err) {
        console.log('GetStudy Error : ' + err);
      });
    };

    $scope.save = function() {
      if(
        $scope.info.subject !== undefined &&
        $scope.info.study !== undefined &&
        $scope.info.group !== undefined &&
        $scope.info.reader !== undefined &&
        $scope.info.areacode !== undefined &&
        $scope.info.phone !== undefined &&
        $scope.info.start !== undefined) 
      {
        $http.post('/subject/enroll', $scope.info)
        .success(function(data){
          console.log('Subject enrolled in study');
          alert("Subject enrolled in study");
          //location.reload(true);
          $state.go('home');
        })
        .catch(function(err) {
          console.log('Subject enroll error : ' + err);
        });
      }
    };
  }
]);
