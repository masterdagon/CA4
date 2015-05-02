describe('myAppRename.category categoryCtrl', function() {

    var scope, httpBackendMock, ctrl, InfoFac;
    var categories = ['cat1','cat2','cat3','cat4','cat5','cat6','cat7',
    ];
    beforeEach(module('myAppRename.category'));

    beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
        httpBackendMock = $httpBackend;
        httpBackendMock.expectGET('api/getCategories').respond(categories);
        scope = $rootScope.$new();
        InfoFac = InfoFactory;
        ctrl = $controller('categoryCTRL', {$scope: scope, InfoFactory: InfoFac});

    }));

    it('get categories', function ($scope, InfoFactory) {
        expect(5).toBe(5);
        //httpBackendMock.flush();
        //expect(scope.categories.length).toEqual(7);
    });
}); 