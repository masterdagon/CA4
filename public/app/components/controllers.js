angular.module('myAppRename.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "CA4 Gruppe 7";
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  }).controller('viewallCTRL',function($scope,InfoFactory){
        $scope.getwikiFromTitle = InfoFactory.getwikiFromTitle
            .succes(function(data){
            $scope.wikiFromTitle = data;
        })
            .error(function(data){
                $scope.wikiFromTitle = data;
            })
        $scope.findwiki = InfoFactory.findWiki
            .succes(function(data){
                $scope.wikiTitleAbstract = data;
            })
            .error(function(data){
                $scope.wikiTitleAbstract = data;
            })
        $scope.getCategories = InfoFactory.getCategories
            .succes(function(data){
                $scope.categories = data;
            })
            .error(function(data){
                $scope.categories = data;
            })
        $scope.getWikisWithCategory = InfoFactory.getWikisWithCategory
            .succes(function(data){
                $scope.wikisWithCategories = data;
            })
            .error(function(data){
                $scope.wikisWithCategories = data;
            })
    });



