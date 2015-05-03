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

describe('Factory Tests',function(){
    beforeEach(module('myAppRename.factories'));
    describe('InfoFactory',function(){
        var scope,factory,httpBackend;
        beforeEach(inject(function($httpBackend,$rootScope,InfoFactory){
            httpBackend = $httpBackend;
            scope = $rootScope.$new();
            factory = InfoFactory;
        }));

        it("InfoFactory: all methods should be defined",function(){
            expect(factory.getwiki).toBeDefined();
            expect(factory.findWiki).toBeDefined();
            expect(factory.getCategories).toBeDefined();
            expect(factory.getWikisWithCategory).toBeDefined();

        })
        it("getwiki",function(){
            httpBackend.whenGET("/api/getWiki/test/").respond("getWiki");
            factory.getwiki("test")
                .success(function(wiki){
                    console.log("123");
                    expect(wiki).toBe("getWiki123");
                    httpBackend.flush()
                });
        })
        it("findWiki",function(){
            httpBackend.whenGET("/api/findWiki/test/").respond("findWiki");
            factory.findWiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("findWiki");
                    httpBackend.flush()
                });
        })
        it("getCategories",function(){
            httpBackend.whenGET("/api/getCategories/").respond("getCategories");
            factory.getCategories("test")
                .success(function(wiki){
                    expect(wiki).toBe("getCategories");
                    httpBackend.flush()
                });
        })
        it("getWikisWithCategory",function(){
            httpBackend.whenGET("/api/getWikisWithCategory/test/").respond("getWikisWithCategory");
            factory.getWikisWithCategory("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWikisWithCategory");
                    httpBackend.flush()
                });

        })

    })
})