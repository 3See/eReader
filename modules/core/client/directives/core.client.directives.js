'use strict';

angular.module('core').directive('groupTable', function() {
  return { 
    restrict:'E',
    //transclude:true,              // It transcludes the contents of the directive into the template
    //replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'modules/core/views/group-table.client.view.html',
    controller: function($scope) {
    }
  };
});


