'use strict';

angular.module('mean.system').directive('groupTable', function() {
  return { 
    restrict:'E',
    //transclude:true,              // It transcludes the contents of the directive into the template
    //replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'views/group-table.client.view.html',
    controller: function($scope) {
    }
  };
});

angular.module('mean.system').directive('sideBar', function() {
  return { 
    restrict:'E',
    //transclude:true,              // It transcludes the contents of the directive into the template
    //replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'views/sidebar.client.view.html',
    controller: function($scope) {
    }
  };
});
