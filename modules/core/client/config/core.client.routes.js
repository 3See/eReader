'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Redirect to 404 when route not found
        $urlRouterProvider.otherwise('not-found');

        // Home state routing
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/core/views/home.client.view.html'
            })
            .state('not-found', {
                url: '/not-found',
                templateUrl: 'modules/core/views/404.client.view.html'
            })
            .state('sign-in', {
                url: '/authentication-signin',
                templateUrl: 'modules/users/views/authentication/signin.client.view.html'
            })
            .state('enrollment', {
                url: '/study-enrollment',
                templateUrl: 'modules/core/views/enroll.client.view.html'
            })
            .state('subject-info', {
                url: '/subject-info',
                templateUrl: 'modules/core/views/subjectinfo.client.view.html'
            })
            .state('subject-select', {
                url: '/subject-select',
                templateUrl: 'modules/core/views/subjectselect.client.view.html'
            })
            .state('group-info', {
                url: '/study-group',
                templateUrl: 'modules/core/views/groupinfo.client.view.html'
            })
            .state('study-info', {
                url: '/study-info',
                templateUrl: 'modules/core/views/studyinfo.client.view.html'
            })
            .state('subject-status', {
                url: '/subject-status',
                templateUrl: 'modules/core/views/subject.status.client.view.html'
            })
            .state('subject-setup', {
                url: '/subject-setup',
                templateUrl: 'modules/core/views/subject_setup.client.view.html'
            })
            .state('reports', {
                url: '/reports',
                templateUrl: 'modules/core/views/reports.client.view.html'
            });
    }
]);
