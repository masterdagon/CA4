//'use strict';
//
//
//describe("Testing Controllers", function () {
//
//
//    describe("viewallCTRL", function () {
//        var scope, controller;
//
//        beforeEach(module("myAppRename.controllers"));
//
//        beforeEach(module({
//            Task1Factory: {
//                getCategories: function () {
//                    return "Got Categories!";
//                },
//                loadAcordion: function () {
//                    return "loadedAcordion";
//                }
//            }
//        }));
//
//        beforeEach(inject(function ($rootScope, $controller, InfoFactory) {
//            scope = $rootScope.$new();
//            controller = $controller("viewallCTRL", {$scope: scope, InfoFactory:null})
//        }));
//
//        it("should return a list of wikis, when given a searchString : fuction performSerch", function () {
//            //The fuck do i fake .success ?.
//            console.log(scope.getCategories())
//            //console.log(scope.result);
//            //console.log(scope.title);
//        });
//
//    });
//
//
//});