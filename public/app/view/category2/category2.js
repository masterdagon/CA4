'use strict';

angular.module('myAppRename.category2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/category2', {
            templateUrl: 'Search/view/category2/category2.html',
            controller: 'category2CTRL'
        })
    }]).controller('category2CTRL', function ($scope, InfoFactory) {
        $scope.categoriesDB=[];
        $scope.categories=[];

        $scope.getCategories = function () {
            InfoFactory.getCategories()
                .success(function (data) {
                    $scope.categoriesDB = data.sort(function (a, b) {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    });
                    $scope.categories =  $scope.categoriesDB
                    $scope.totalItems = $scope.categoriesDB.length
                }).error(function(data){
                    $scope.categoriesDB = data;
                })
        };

        $scope.resetCategories = function(){
            $scope.categories =  $scope.categoriesDB
            $scope.totalItems = $scope.categories.length;
            $scope.currentPage = 1;
        }

        $scope.getCategoriesWithLetter = function (letter) {
                    var data = $scope.categoriesDB
                    $scope.categories = data.filter(function (cat) {
                        if(cat.charAt(0)==letter){
                            return cat;
                        }
                    });
                    $scope.totalItems = $scope.categories.length;
                    $scope.currentPage = 1;

        };

        $scope.getWikisWithCategory = function(category){
            InfoFactory.getWikisWithCategory(category)
                .success(function(data){
                    $scope.titles = data;
                }).error(function(data){
                    $scope.titles = data;
                })
        }

        $scope.filteredLinks = [];
        $scope.maxSize= 10;
        $scope.totalItems = 0;
        $scope.currentPage = 1;
        $scope.numPerPage = 30;
        $scope.$watch("totalItems + currentPage + numberPerPage",function(){
            var begin = (($scope.currentPage-1)*$scope.numPerPage),end = begin+$scope.numPerPage;
            $scope.filteredLinks = $scope.categories.slice(begin,end);
        })

    })