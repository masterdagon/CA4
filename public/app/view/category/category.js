'use strict';

angular.module('myAppRename.category', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/category', {
            templateUrl: 'app/view/category2/category2.html',
            controller: 'categoryCTRL'
        }).when('/category/:category',{
            templateUrl : 'app/view/category/titles.html',
            controller: 'titleCTRL'
        });
    }]).controller('categoryCTRL', function ($scope, InfoFactory) {
        $scope.categoriesdb=[];
        $scope.getCategories = function () {
            InfoFactory.getCategories()
                .success(function (data) {
                    $scope.categoriesdb = data.sort(function (a, b) {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    });
                    $scope.totalItems=data.length;
                }).error(function(data){
                    $scope.categoriesdb = data;
                })
        };

        $scope.resetCategories = function(){
            $scope.categories =  $scope.categoriesdb;
        };

        $scope.getCategoriesWithLetter = function (letter) {
            //InfoFactory.getCategories()
            //    .success(function (data) {
                    $scope.categories = $scope.categoriesdb.filter(function (cat) {
                        if(cat.charAt(0)==letter){
                            return cat;
                        }
                    });
                    $scope.totalItems=$scope.categories.length
        //        }).error(function(data){
        //            $scope.categories = data;
        //        })
        };

        $scope.filteredLinks = [];
        $scope.maxSize= 10;
        $scope.totalItems = 0;
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

