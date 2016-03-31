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
                });
        }]);

}());