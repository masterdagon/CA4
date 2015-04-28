'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
    'ngRoute',
    'myAppRename.controllers',
    'myAppRename.directives',
    'myAppRename.services',
    'myAppRename.factories',
    'myAppRename.filters',
    'myAppRename.home',
    'myAppRename.view2',
    'myAppRename.view3',
    'myAppRename.wiki'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
