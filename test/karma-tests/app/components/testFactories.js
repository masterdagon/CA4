describe('Factory Tests',function(){
    beforeEach(module('myAppRename.factories'));
    describe('InfoFactory',function(){
        var scope,factory,httpBackend;
        var http = null;
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
            if(http == true){
                httpBackend.flush()
            }
        });

        it("InfoFactory: all methods should be defined",function(){
            expect(factory.getwiki).toBeDefined();
            expect(factory.findWiki).toBeDefined();
            expect(factory.getCategories).toBeDefined();
            expect(factory.getWikisWithCategory).toBeDefined();
            http = false;
        });

        it("getwiki",function(){
            factory.getwiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWiki");
                });
            http = true;
        });

        it("findWiki",function(){
            factory.findWiki("test")
                .success(function(wiki){
                    expect(wiki).toBe("findWiki");
                });
            http = true;
        });

        it("getCategories",function(){
            factory.getCategories("test")
                .success(function(wiki){
                    expect(wiki).toBe("getCategories");
                });
            http = true;
        });

        it("getWikisWithCategory",function(){
            factory.getWikisWithCategory("test")
                .success(function(wiki){
                    expect(wiki).toBe("getWikisWithCategory");
                });
            http = true;
        })
    })
});