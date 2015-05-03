//describe('myAppRename.factories', function () {
//
//  beforeEach(module('myAppRename.factories'));
//
//  describe('InfoFactory', function () {
//    var infoFactory;
//    beforeEach(inject(function (_InfoFactory_) {
//      infoFactory = _InfoFactory_;
//    }));
//
//    it('Should be Hello World from a Factory', function () {
//      expect(infoFactory.getInfo()).toBe("Hello World from a Factory");
//    });
//  });
//
//
//  describe('XXXFactory', function () {
//
//  });
//});

describe('infoFactory',function(){
    beforeEach(module('myAppRename.factories'));
    describe('InfoFactory',function(){
        var scope,factory,httpBackend;
        beforeEach(inject(function($httpBackend,$rootScope,InfoFactory){
            httpBackend = $httpBackend;
            scope = $rootScope;
            factory = InfoFactory;

            httpBackend.whenGET("/api/getWiki/test").respond("getWiki");
            httpBackend.whenGET("/api/findWiki/test").respond("findWiki");
            httpBackend.whenGET("/api/getCategories").respond("getCategories");
            httpBackend.whenGET("/api/getWikisWithCategory/test").respond("getWikisWithCategory");
        }));

        it("getWiki: should return correct value from http request to the rest api through method",function(){
            factory.getwiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWiki");
                });
            factory.findwiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("findWiki");
                });
            factory.getCategories("test")
                .success(function(wiki){
                    expect(wiki).toBe("getCategories");
                });
            factory.getWikisWithCategory("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWikisWithCategory");
                });

        })
    })
})