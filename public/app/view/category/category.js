'use strict';

angular.module('myAppRename.category', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/category', {
            templateUrl: 'app/view/category/category.html',
            controller: 'categoryCTRL'
        }).when('/category/:category',{
            templateUrl : 'app/view/category/titles.html',
            controller: 'titleCTRL'
        });
    }]).controller('categoryCTRL', function ($scope, InfoFactory) {
        $scope.categories=[];
        $scope.getCategories = function () {
            InfoFactory.getCategories()
                .success(function (data) {
                    $scope.categories = data.sort(function (a, b) {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    });
                    $scope.totalItems=data.length;
                }).error(function(data){
                    $scope.categories = data;
                })
        };

        $scope.filteredLinks = [];
        //$scope.totalItems = 0;
        $scope.currentPage = 1;
        $scope.numPerPage = 30;
        $scope.$watch("totalItems + currentPage + numberPerPage",function(){
            var begin = (($scope.currentPage-1)*$scope.numPerPage),end = begin+$scope.numPerPage;
            $scope.filteredLinks = $scope.categories.slice(begin,end);
        })

    }).controller('titleCTRL',function($scope,InfoFactory,$routeParams){
        $scope.category = $routeParams.category;
        $scope.getWikisWithCategory = function(){
            InfoFactory.getWikisWithCategory($scope.category)
                .success(function(data){
                    $scope.titles = data;
                }).error(function(data){
                    $scope.titles = data;
                })
        }
    })

