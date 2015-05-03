describe("Testing Routes", function () {

    describe("Perform Search", function () {

        var scope, location, route;

        beforeEach(module('myAppRename'));

        beforeEach(inject(function($route, $location, $rootScope, $httpBackend) {
                $httpBackend.expectGET("app/view/viewall/viewall.html").respond("");
                $httpBackend.expectGET("app/view/home/home.html").respond("");
                scope = $rootScope;
                location = $location;
                route = $route;
            })
        );


        it('should give the given controller and html, from the path url', function () {

            expect(route.current).toBeUndefined();
            location.path('/viewall');
            scope.$digest();

            expect(route.current.templateUrl).toBe('app/view/viewall/viewall.html');
            expect(route.current.controller).toBe("viewallCTRL");


        });

    });

    describe("Perform Search", function () {

        var scope, location, route;

        beforeEach(module('myAppRename'));

        beforeEach(inject(function($route, $location, $rootScope, $httpBackend) {
                $httpBackend.expectGET("app/view/home/home.html").respond("");
                scope = $rootScope;
                location = $location;
                route = $route;
            })
        );

        it("should redirect to /task1 if an unknown path is given", function () {
            expect(route.current).toBeUndefined();
            location.path('/UnknownPATH');
            scope.$digest();
            console.log('location is ' +location.path())
            expect(location.path()).toBe('/home');
            expect(route.current.templateUrl).toEqual('app/view/home/home.html');

        });

    });

});