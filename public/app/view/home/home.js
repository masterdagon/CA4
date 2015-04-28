'use strict';

angular.module('myAppRename.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/view/home/home.html',
  });
}])
