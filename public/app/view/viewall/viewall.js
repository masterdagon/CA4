'use strict';

angular.module('myAppRename.viewall', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewall', {
    templateUrl: 'app/view/viewall/viewall.html',
    controller: 'viewallCTRL'
  });
}])

