'use strict';

projectsApp.controller('ProjectListController',
    function ProjectListController($scope, $location, projectData, cartData, $log) {
        $scope.sorttype = 'Project Name';
        $scope.sortorder = "ASC";
        $scope.performsort = "name";
        $scope.reversesorting = false;
        $scope.searchtype = 'Any';


        // booleans for controlling search input
        $scope.searchAny = true;
        $scope.searchName = false;
        $scope.searchDesc = false;
        $scope.searchAuthor = false;
        $scope.searchCreationDate = false;
        $scope.searchSize = false;
        $scope.searchSite = false;

        $scope.setSortType = function(sortType){
            if(sortType === 'Project Name'){
                $scope.performsort = 'name';
            } else if(sortType === 'Description') {
                $scope.performsort = 'description';
            } else if(sortType === 'Author') {
                $scope.performsort = 'author';
            } else if(sortType === 'Creation Date') {
                $scope.performsort = 'creationDate';
            } else if(sortType === 'File Size') {
                $scope.performsort = 'size';
            } else if(sortType === 'Website') {
                $scope.performsort = 'site';
            }
            $scope.sorttype = sortType;
        }
        $scope.setSortOrder = function(sortOrder){
            if(sortOrder === 'ASC') {
                $scope.reversesorting = false;
            } else if(sortOrder === 'DESC') {
                $scope.reversesorting = true;
            } else if(sortOrder === 'NO') {
                $scope.reversesorting = false;
            }
            $scope.sortorder = sortOrder;
        }


        $scope.setSearchType = function(searchBy) {
            if(searchBy === 'Any'){
                $scope.searchAny = true;
                $scope.searchName = false;
                $scope.searchDesc = false;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = false;
                $scope.searchSize = false;
                $scope.searchSite = false;
            } else if(searchBy === 'Project Name'){
                $scope.searchAny = false;
                $scope.searchName = true;
                $scope.searchDesc = false;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = false;
                $scope.searchSize = false;
                $scope.searchSite = false;
            } else if(searchBy === 'Description') {
                $scope.searchAny = false;
                $scope.searchName = false;
                $scope.searchDesc = true;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = false;
                $scope.searchSize = false;
                $scope.searchSite = false;
            } else if(searchBy === 'Author') {
                $scope.searchAny = false;
                $scope.searchName = false;
                $scope.searchDesc = false;
                $scope.searchAuthor = true;
                $scope.searchCreationDate = false;
                $scope.searchSize = false;
                $scope.searchSite = false;
            } else if(searchBy === 'Creation Date') {
                $scope.searchAny = false;
                $scope.searchName = false;
                $scope.searchDesc = false;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = true;
                $scope.searchSize = false;
                $scope.searchSite = false;
            } else if(searchBy === 'File Size') {
                $scope.searchAny = false;
                $scope.searchName = false;
                $scope.searchDesc = false;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = false;
                $scope.searchSize = true;
                $scope.searchSite = false;
            } else if(searchBy === 'Website') {
                $scope.searchAny = false;
                $scope.searchName = false;
                $scope.searchDesc = false;
                $scope.searchAuthor = false;
                $scope.searchCreationDate = false;
                $scope.searchSize = false;
                $scope.searchSite = true;
            }
            $scope.searchtype = searchBy;
        };

        $scope.projects = projectData.getAllProjects();
        $scope.getAllProjects = function(){
            $scope.projects = projectData.getAllProjects();
        }

        $scope.deleteProject = function(projectId) {
            projectData.remove(projectId).
                then(function (result) {
                    console.log('SUCCESS', result);
                }, function (reason) {
                    console.log('ERROR', reason);
                }
            );
            $location.url('/projects');
        };

        $scope.items = cartData.getAllCartItems();

        $scope.getAllCartItems = function(){
            $scope.items = cartData.getAllCartItems();
        }

        $scope.addToCart = function(item){
            console.log('item ='+item);
            cartData.addItem(item, cartData.getAllCartItems()).
                then(function(result){
                    $scope.getAllCartItems();
                    $log.info('SUCCESS', result);
                },function(reason){
                    console.log('ERROR', reason);
                    $log.error('ERROR', reason);
                });
            $location.url('/projects1');
        };
        $scope.totalSize = function(){
            var total = 0;
            angular.forEach($scope.items, function(item) {
                total += parseInt(item.size);
            })

            return total;
        };
    }
);

