'use strict';

projectsApp.factory('cartData', function ($resource, $q, $log) {
    var userId = 1;
    var resource = $resource('/data/cart/users/1/' + ':id', {id: '@id'}),
        randomString = function(length, chars) {
            var result = '';
            for (var i = length; i > 0; --i)
                result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        };

    var getCartItem = function (cartId) {
        var deferred = $q.defer();
        resource.get({id: cartId},
            function(response){
                $log.info(response);
                deferred.resolve(response);
            },
            function(response){
                $log.error(response);
                deferred.reject(response);
            });
        return deferred.promise;
    };
    var addItem = function (item) {
        var deferred = $q.defer();
        item.id = randomString(5,"abcdefghijklmnopqrstuvwxyz0123456789");
        resource.save(item,
            function(response){
                $log.info(response);
                deferred.resolve(response);
            },
            function(response){
                $log.error(response);
                deferred.reject(response);
            });
        return deferred.promise;
    };
    var removeItem = function(itemId) {
        var deferred = $q.defer();
        resource.remove({id: itemId},
            function(response){
                $log.info(response);
                deferred.resolve(response);
            },
            function(response){
                $log.error(response);
                deferred.reject(response);
            });
        return deferred.promise;
    };
    var getAllCartItems = function(){
        return resource.query();
    };


    return {
        getCartItem: getCartItem,
        addItem: addItem,
        removeItem: removeItem,
        getAllCartItems: getAllCartItems
    };


});