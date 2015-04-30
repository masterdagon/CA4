'use strict';

angular.module('myAppRename.viewall', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewall', {
    templateUrl: 'Search/view/viewall/viewall.html',
    controller: 'viewallCTRL'
  });
}])

