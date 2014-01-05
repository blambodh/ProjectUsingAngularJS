'use strict';

projectsApp.controller('NewProjectController',
    function NewProjectController($scope, projectData, $location) {

        $scope.project = {};
        $scope.editingProject = false;

        $scope.saveProject = function (project, form) {
            if(form.$valid) {
                projectData.createProject(project);
                $location.url('/projects');
            }
        };

        $scope.cancelEdit = function () {
            $location.url('/projects');
        };


    }

);