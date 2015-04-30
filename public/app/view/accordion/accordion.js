'use strict';

angular.module('myAppRename.accordion', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accordion', {
    templateUrl: 'app/view/accordion/accordion.html',
    controller: 'accordionCTRL'
  });
}]).directive('wikisite', function() {
        return {
            template: '<p>Dette er en test</p>'
        };
    })
.controller('accordionCTRL',function($scope,InfoFactory){
        $scope.wikiTitleAbstract=[];
        $scope.filteredLinks = [];
        $scope.totalItems=0;
        $scope.currentPage=1;
        $scope.numPerPage=10;


        $scope.$watch("currentPage + numPerPage + totalItems", function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredLinks = $scope.wikiTitleAbstract.slice(begin, end);
        });

        //$scope.getwikiFromTitle = function(title){
        //    InfoFactory.getwikiFromTitle(title)
        //        .success(function(data){
        //            $scope.wikiFromTitle = data;
        //        })
        //        .error(function(data){
        //            $scope.wikiFromTitle = data;
        //        })
        //}
        $scope.findwiki = function(title){
            $scope.wikiTitleAbstract = 'wait'
            InfoFactory.findWiki(title)
                .success(function(data){
                    $scope.wikiTitleAbstract = data;
                    $scope.totalItems=data.length;

                })
                .error(function(data){
                    $scope.wikiTitleAbstract = data;
                })
        }

        $scope.getCategories = function(){
            InfoFactory.getCategories()
                .success(function(data){
                    $scope.categories = data;
                })
                .error(function(data){
                    $scope.categories = data;
                })
        }
        $scope.getWikisWithCategory = function(category){
            InfoFactory.getWikisWithCategory(category)
                .success(function(data){
                    $scope.wikisWithCategories = data;
                })
                .error(function(data){
                    $scope.wikisWithCategories = data;
                })
        }
    });





