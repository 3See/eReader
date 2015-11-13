'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', '$state', 'Authentication', function ($scope, Authentication, $state, Menus) {
    $scope.global = Authentication;

    $scope.$state = $state;

    // get menu
    $scope.menu = Menus.getMenu('topbar');
    
    // toggle menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
 

}]);
