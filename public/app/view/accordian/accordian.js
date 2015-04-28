'use strict';

angular.module('myAppRename.accordian', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accordian', {
    templateUrl: 'app/view/accordian/accordian.html',
    controller: 'aaccordianCTRL'
  });
}])




