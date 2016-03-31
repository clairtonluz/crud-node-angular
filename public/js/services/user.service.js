/**
 * Created by clairton on 31/03/16.
 */
(function () {
    'use strict';

    angular.module('myApp').factory('User', ['$resource', function ($resource) {

        return $resource('api/users/:id', {id: '@id'}, {});
    }]);

}());