/**
 * Created by clairton on 31/03/16.
 */
(function () {
    'use strict';

    angular.module('myApp').controller('UserListCtrl', ['$scope', 'User', function ($scope, User) {

        $scope.delete = _delete;

        _init();

        function _init() {
            _findAll();
        }

        function _findAll() {
            $scope.users = User.query();
        }

        function _delete(id) {
            User.delete({id: id});
        }

    }]);


}());