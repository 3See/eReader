'use strict';

angular.module('core').controller('reportController', ['$scope', 'Authentication', '$state',
  function ($scope, Authentication, $state) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // If auth not set goto login
    if(!Authentication.user) {
      $state.go('sign-in');
    }

    $scope.study_name = 'Study 1';

	$scope.ingestions = [
      'Ingestion 1',
      'Ingestion 2',
      'Ingestion 3',
      'Ingestion 4',
      'Ingestion 5',
      'Ingestion 6'
    ];

    $scope.subjects = [
    	{
    		id : '007',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : 'xxx',
    		ingestion2 : 'yyy',
    		ingestion3 : 'zzz',
    		ingestion4 : 'xxx',
    		ingestion5 : 'yyy',
    		ingestion6 : 'zzz'
    	},
    	{
    		id : '007',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : 'xxx',
    		ingestion2 : 'yyy',
    		ingestion3 : '',
    		ingestion4 : 'xxx',
    		ingestion5 : 'yyy',
    		ingestion6 : 'zzz'
    	},
    	{
    		id : '007',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : '',
    		ingestion2 : 'yyy',
    		ingestion3 : 'zzz',
    		ingestion4 : 'xxx',
    		ingestion5 : 'yyy',
    		ingestion6 : 'zzz'
    	},
    	{
    		id : '007',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : 'xxx',
    		ingestion2 : 'yyy',
    		ingestion3 : 'zzz',
    		ingestion4 : 'xxx',
    		ingestion5 : 'yyy',
    		ingestion6 : ''
    	},
    	{
    		id : '007',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : 'xxx',
    		ingestion2 : '',
    		ingestion3 : 'zzz',
    		ingestion4 : 'xxx',
    		ingestion5 : '',
    		ingestion6 : 'zzz'
    	},
    	{
    		id : '105',
    		study_id : '01',
    		group_id : '04',
    		phone_number : '813-555-1234',
    		reader_id : '10005',
    		start_date : 'Jun 07, 2012',
    		end_date : 'Oct 08, 2012',
    		ingestion1 : 'xxx',
    		ingestion2 : 'yyy',
    		ingestion3 : '',
    		ingestion4 : 'xxx',
    		ingestion5 : 'yyy',
    		ingestion6 : 'zzz'
    	}
    ];
}]);