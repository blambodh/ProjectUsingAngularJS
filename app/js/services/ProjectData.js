'use strict';

projectsApp.factory('projectData', function ($resource, $q, $log) {
    var resource = $resource('/data/project/:id', {id: '@id'}),
        randomString = function(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        };


    return {
        getProject: function(projectId) {
            var deferred = $q.defer();
            resource.get({id: projectId},
                function(project){
                    $log.info(project);
                    deferred.resolve(project);
                },
                function(response){
                    $log.error(response);
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        createProject: function(project) {
            var deferred = $q.defer();
            project.id = randomString(5,"abcdefghijklmnopqrstuvwxyz0123456789");
            resource.save(project,
                function(response){
                    $log.info(project);
                    deferred.resolve(response);
                },
                function(response){
                    $log.error(response);
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        updateProject: function(project) {
            var deferred = $q.defer();
            resource.save(project,
                function(response){
                    $log.info(project);
                    deferred.resolve(response);
                },
                function(response){
                    $log.error(response);
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        remove: function(projectId) {
            var deferred = $q.defer();
            resource.remove({id: projectId},
                function(project){
                    $log.info(project);
                    deferred.resolve(project);
                },
                function(response){
                    $log.error(response);
                    deferred.reject(response);
                });
            return deferred.promise;
        },
        getAllProjects: function(){
            return resource.query();
        }
    };
});




