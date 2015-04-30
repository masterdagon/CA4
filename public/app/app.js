'use strict';

// Declare app level module which depends on views, and components
angular.module('myAppRename', [
    'ngRoute',
    'ui.bootstrap',
    'myAppRename.controllers',
    'myAppRename.directives',
    'myAppRename.services',
    'myAppRename.factories',
    'myAppRename.filters',
    'myAppRename.home',
    'myAppRename.viewall',
    'myAppRename.accordion',
    'myAppRename.category',
    'myAppRename.category2',
    'myAppRename.wiki'

]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
