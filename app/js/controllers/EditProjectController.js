'use strict';

projectsApp.controller('EditProjectController',
    function EditProjectController($scope, projectData, $location, $routeParams, $log) {

        $scope.project = {};
        $scope.editingProject = true;

        projectData.getProject($routeParams.projectId).
            then(function(result){
                $scope.project = result;
                $log.info(' success| project = ' + project);
            }, function(status){
                $log.error('error status = ' + status);
            });

        $scope.saveProject = function (project, form) {
            if(form.$valid) {
                projectData.updateProject(project).
                    then(function(result){
                        $log.info(' success| project = ' + result);
                    }, function(status){
                        $log.error('error status = ' + status);
                    });
                $location.url('/projects');
            }
        };
        $scope.cancelEdit = function () {
            $location.url('/projects');
        };
    }
);