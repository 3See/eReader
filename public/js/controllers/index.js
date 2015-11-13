angular.module('mean.system').controller('IndexController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.global = Authentication;
}]);
