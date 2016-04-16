/**
 * Created by clairton on 31/03/16.
 */
(function () {
    'use strict';

    angular.module('myApp').controller('UserCtrl', ['$scope', '$routeParams', 'User', function ($scope, $routeParams, User) {

        $scope.save = _save;
        $scope.remove = _remove;

        _init();

        function _init() {
            if ($routeParams.id) {
                User.get({id: id});
            }
        }

        function _save(user) {
            User.save(user);
        }

        function _remove(user) {
            User.delete({id: user.id});
        }

    }]);


}());