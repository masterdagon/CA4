'use strict';

angular.module('myAppRename.category', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/category', {
            templateUrl: 'app/view/category/category.html',
            controller: 'categoryCTRL'
        });
    }]).controller('categoryCTRL', function ($scope, InfoFactory) {
        $scope.getCategories = function () {
            InfoFactory.getCategories()
                .success(function (data) {
                    $scope.categories = data;
                }).error(function(data){
                    $scope.categories = data;
                })
        };
        $scope.getWikisWithCategory = function(category){
            InfoFactory.getWikisWithCategory(category)
                .success(function(data){
                    $scope.wikis = data;
                }).error(function(data){
                    $scope.wikis = data;
                })
        }
    })

