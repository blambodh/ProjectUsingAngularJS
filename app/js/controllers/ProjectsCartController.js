
'use strict';

projectsApp.controller('ProjectsCartController',
    function ProjectsCartController($scope, cartData, $location, $routeParams, $log) {

       $scope.items = cartData.getAllCartItems();

        $scope.removeItem = function(itemId) {
            cartData.removeItem(itemId).
                then(function (result) {
                    console.log('SUCCESS', result);
                    alert('SUCCESS');
                }, function (reason) {
                    console.log('ERROR', reason);
                    alert('ERROR');
                }
            );
            $location.url('/cart');
        };

        $scope.addItem = function (item){

            cartData.addItem(item).
                then(function (result) {
                    console.log('SUCCESS', result);
                    $log.info('SUCCESS', result);
                }, function (reason) {
                    console.log('ERROR', reason);
                    $log.info('SUCCESS', reason);
                });

        };

        $scope.totalSize = function(items) {
            var total = 0;
            angular.forEach(items, function(item) {
                total += parseInt(item.size);
            })
            return total;
        };

        $scope.backToProjects = function(){
            $location.url('/projects');
        };
    }

);

