'use strict';

angular.module('myAppRename.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewall', {
    templateUrl: 'app/view/viewall/viewall.html',
    controller: 'viewallController'
  });
}])

