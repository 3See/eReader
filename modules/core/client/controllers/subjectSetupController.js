'use strict';

angular.module('core').controller('subjectSetupController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

    $scope.subjectID = '105';
    $scope.phone = '813-555-1234';
    $scope.ReaderID = '10005';
    $scope.startdate = '01/01/1990';
    $scope.enddate = '01/01/2020';

    $scope.ingestions = [
      {
        num: '01',
        date: '01/01/2010 8:06pm'
      },
      {
        num: '02',
        date: '01/02/2010 8:31pm'
      },
      {
        num: '03',
        date: '01/03/2010 8:45pm'
      },
      {
        num: '04',
        date: '01/04/2010 8:12pm'
      },
      {
        num: '05',
        date: '01/05/2010 8:23pm'
      },

      {
        num: '06',
        date: ''
      },
      {
        num: '07',
        date: ''
      }

    ];
    

    $scope.readers = [
      '10001',
      '10002',
      '10003',
      '10004',
      '10005',
      '10006'
    ];
  }
]);
