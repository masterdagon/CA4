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
            httpBackend.whenGET("/api/getWiki/test").respond("getWiki");
            httpBackend.whenGET("/api/findWiki/test").respond("findWiki");
            httpBackend.whenGET("/api/getCategories").respond("getCategories");
            httpBackend.whenGET("/api/getWikisWithCategory/test").respond("getWikisWithCategory");
        }));
        afterEach(function(){
            httpBackend.flush()
        })

        it("InfoFactory: all methods should be defined",function(){
            expect(factory.getwiki).toBeDefined();
            expect(factory.findWiki).toBeDefined();
            expect(factory.getCategories).toBeDefined();
            expect(factory.getWikisWithCategory).toBeDefined();

        })
        it("getwiki",function(){

            factory.getwiki("test")
                .success(function(wiki){
                    console.log("123");
                    expect(wiki).toBe("getWiki123");

                });

        })
        it("findWiki",function(){

            factory.findWiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("findWiki");

                });

        })
        it("getCategories",function(){

            factory.getCategories("test")
                .success(function(wiki){
                    expect(wiki).toBe("getCategories");

                });

        })
        it("getWikisWithCategory",function(){

            factory.getWikisWithCategory("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWikisWithCategory");

                });


        })


    })
})