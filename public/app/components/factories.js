'use strict';

/* Factories */

angular.module('myAppRename.factories', []).
  factory('InfoFactory', function () {
        var urlBase = '/api/';
        var dataFactory = {};

        dataFactory.getwikiFromTitle = function (title) {
            return $http.get(urlBase+'/getWiki/'+title);
        };

        dataFactory.getCustomer = function (id) {
            return $http.get(urlBase + '/' + id);
        };

        dataFactory.getCategories = function () {
            return $http.get(urlBase+'/getCategories');
        };

        dataFactory.updateCustomer = function (cust) {
            return $http.put(urlBase + '/' + cust.ID, cust)
        };

        return dataFactory;
  });