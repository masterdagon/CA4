'use strict';

/* Factories */

angular.module('myAppRename.factories', []).
  factory('InfoFactory', function ($http) {
        var urlBase = '/api/';
        var dataFactory = {};

        dataFactory.getwiki = function (title) {
            return $http.get(urlBase+'/getWiki/'+title);
        };

        dataFactory.findWiki = function (title) {
            return $http.get(urlBase + '/findWiki/' + title);
        };

        dataFactory.getCategories = function () {
            return $http.get(urlBase+'/getCategories');
        };

        dataFactory.getCategories = function () {
            return $http.get(urlBase+'/getCategories');
        };

        dataFactory.getWikisWithCategory = function (category) {
            return $http.get(urlBase + '/getWikisWithCategory/' + category)
        };

        return dataFactory;
  });