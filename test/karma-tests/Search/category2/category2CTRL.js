describe('myAppRename.category2 category2CTRL', function() {

    describe('myController', function() {
        var $scope;

        beforeEach(module('myAppRename.category2'));

        //Mocks for the test
        beforeEach(module({
            InfoFactory: {
                getInfo: function() {return  "Factory"; }
            },
            InfoService: {
                getInfo: function() {return  "Service"; }
            }
        }));

        beforeEach(inject(function($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('category2CTRL', {$scope: $scope});
        }));

        it('Should have the value Factory', function () {
            expect($controller).toBe('category2CTRL');
        });

        it('Should have the value Service', function () {
            expect($scope.infoService).toBe('Service');
        });
    });
});