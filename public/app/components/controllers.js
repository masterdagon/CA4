angular.module('myAppRename.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "CA4 Gruppe 7";
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  }).controller('viewallCTRL',function($scope,InfoFactory){
        $scope.dynamicTooltip ="dette er en test"
        $scope.getwikiFromTitle = function(title){
            InfoFactory.getwikiFromTitle(title)
                .success(function(data){
                    $scope.wikiFromTitle = data;
                })
                .error(function(data){
                    $scope.wikiFromTitle = data;
                })
        }
        $scope.findwiki = function(title){
            $scope.wikiTitleAbstract = 'wait'
            InfoFactory.findWiki(title)
                .success(function(data){
                    $scope.wikiTitleAbstract = data;
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



