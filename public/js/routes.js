'use strict';

// Setting up route
angular.module('mean').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Redirect to 404 when route not found
        $urlRouterProvider.otherwise('not-found');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/index.html'
            })
            .state('not-found', {
                url: '/not-found',
                templateUrl: 'views/404.html'
            })
            .state('sign-in', {
                url: '/signin',
                templateUrl: 'views/index.html'
            })
            .state('subject-register', {
                url: '/subject-register',
                templateUrl: 'views/subject-register.html'
            })
            .state('subject-info', {
                url: '/subject-info',
                templateUrl: 'views/subject-info.html'
            })
            .state('subject-select', {
                url: '/subject-select',
                templateUrl: 'views/subject-select.html'
            })
            .state('group-info', {
                url: '/study-group',
                templateUrl: 'views/group-info.html'
            })
            .state('study-info', {
                url: '/study-info',
                templateUrl: 'views/study-info.html'
            })
            .state('subject-status', {
                url: '/subject-status',
                templateUrl: 'views/subject-status.html'
            })
            .state('subject-setup', {
                url: '/subject-setup',
                templateUrl: 'views/subject-setup.html'
            })
            .state('reports', {
                url: '/reports',
                templateUrl: 'views/reports.html'
            }).state('search', {
                url: '/search',
                templateUrl: 'views/subject-search.html'
            });
    }
]);
