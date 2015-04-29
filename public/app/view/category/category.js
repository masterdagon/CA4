'use strict';

angular.module('myAppRename.category', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/category', {
            templateUrl: 'app/view/category/category.html',
            controller: 'categoryCTRL'
        });
    }])

