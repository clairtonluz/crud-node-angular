/**
 * Created by clairton on 31/03/16.
 */

(function () {
    'use strict';

    angular.module('myApp')
        .config(['$routeProvider', function ($routeProvider) {
            'use strict';

            $routeProvider
                .when('/users', {
                    templateUrl: 'views/user/user.list.html',
                    controller: 'UserListCtrl'
                })
                .when('/user', {
                    templateUrl: 'views/user/user.html',
                    controller: 'UserCtrl'
                })
                .when('/user/:id', {
                    templateUrl: 'views/user/user.html',
                    controller: 'UserCtrl'
                });
        }]);

}());