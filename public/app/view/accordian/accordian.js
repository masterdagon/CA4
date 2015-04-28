'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accordian', {
    templateUrl: 'app/view/accordian/accordian.html',
    controller: 'aaccordianCTRL'
  });
}])




