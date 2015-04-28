'use strict';

/* Factories */

angular.module('myAppRename.factories', []).
  factory('InfoFactory', function () {
        var urlBase = '/api/';
        var dataFactory = {};

        dataFactory.getwikiFromTitle = function () {
            return $http.get(urlBase);
        };

        dataFactory.findWiki = function (title) {
            return $http.get(urlBase + '/findWiki/' + title);
        };

        dataFactory.insertCustomer = function (cust) {
            return $http.post(urlBase, cust);
        };

        dataFactory.getWikisWithCategory = function (category) {
            return $http.get(urlBase + '/getWikisWithCategory/' + category)
        };

        return dataFactory;
  });