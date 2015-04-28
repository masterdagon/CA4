angular.module('myAppRename.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "CA4 Gruppe 7";
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  }).controller('viewallCTRL',function($scope,InfoFactory){
        $scope.getwikiFromTitle = function(){
            InfoFactory.getwikiFromTitle()
                .succes(function(data){
                    $scope.wikiFromTitle = data;
                })
                .error(function(data){
                    $scope.wikiFromTitle = data;
                })
        }
        $scope.findwiki = function(){
            InfoFactory.findWiki()
                .succes(function(data){
                    $scope.wikiTitleAbstract = data;
                })
                .error(function(data){
                    $scope.wikiTitleAbstract = data;
                })
        }

        $scope.getCategories = function(){
            InfoFactory.getCategories
                .succes(function(data){
                    $scope.categories = data;
                })
                .error(function(data){
                    $scope.categories = data;
                })
        }
        $scope.getWikisWithCategory = function(){
            InfoFactory.getWikisWithCategory
                .succes(function(data){
                    $scope.wikisWithCategories = data;
                })
                .error(function(data){
                    $scope.wikisWithCategories = data;
                })
        }
    });



