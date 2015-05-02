'use strict';

describe('unit testing navListModule', function () {



    /***** Controllers *****/

    describe('test NavListCtrl', function () {

        var ctrl, scope, $httpBackend, $location, $route, $routeParams;
        beforeEach(module('myAppRename.category'));

        // add $routeProvider mock
        beforeEach(module(function ($routeProvider) {
            $routeProvider.when('/category', {
                templateUrl : 'views/category/category.html',
                controller : 'categoryCtrl'
            });
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }));

        beforeEach(inject(function ($rootScope,  _$location_, _$route_, _$routeParams_) {
            scope = $rootScope.$new();
            $location = _$location_;
            $route = _$route_;
            $routeParams = _$routeParams_;
        }));

        it('should expect stationId and menuOptions to be undefined if stationId not defined in route parameters', function () {
            $location.path('/');
            scope.$digest();
            console.log($route)
            expect($route.templateUrl).toBe("<h2> {{homeText}}</h2>");
        });

        //it('should not parse $routeParameters before $routeChangeSuccess', function () {
        //    $location.path('/category');
        //    scope.$apply();
        //    expect(scope.stationId).toBeUndefined();
        //});

        //it('should expect scope values to be set after $routeChangeSuccess is fired for location /stationId/path', function () {
        //    $location.path('/category/');
        //    scope.$apply();
        //    $httpBackend.flush();
        //    expect(scope.stationId).toEqual('Admin');
        //    expect(scope.menuOptions).not.toBeUndefined();
        //});

    });
});