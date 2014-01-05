'use strict';

var projectsApp = angular.module('projectsApp', ['ngResource','ui.bootstrap', 'dx'])
    .config(function ($routeProvider) {
        $routeProvider.when('/newProject',
            {
                templateUrl:'templates/NewProject.html',
                controller: 'NewProjectController'
            });
        $routeProvider.when('/editProject/:projectId',
            {
                templateUrl:'templates/NewProject.html',
                controller: 'EditProjectController'
            });
        $routeProvider.when('/deleteProject/:projectId',
            {
                templateUrl:'templates/ProjectList.html',
                controller: 'ProjectListController'
            });
        $routeProvider.when('/projects',
            {
                templateUrl: 'templates/ProjectList.html',
                controller: 'ProjectListController'
            });
        $routeProvider.when('/cart',
            {
                templateUrl:'templates/ProjectsCart.html',
                controller: 'ProjectsCartController'
            });
        $routeProvider.when('/chart',
            {
                templateUrl:'templates/ProjectChart.html',
                controller: 'ProjectChartController'
            });
        $routeProvider.otherwise({redirectTo: '/projects'});
    });

