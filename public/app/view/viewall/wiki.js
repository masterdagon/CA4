'use strict';

angular.module('myAppRename.wiki', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/wiki/:title', {
            templateUrl: 'app/view/viewall/wiki.html',
            controller: 'wikiCTRL'
        });
    }]).controller('wikiCTRL',function($scope,InfoFactory,$routeParams){
        $scope.title = $routeParams.title;
        $scope.getwiki = function(){
            InfoFactory.getwiki($scope.title)
                .success(function(data){
                $scope.wiki = data;
            }).error(function(data){
                    $scope.wiki = data;
                })
        }
    });

