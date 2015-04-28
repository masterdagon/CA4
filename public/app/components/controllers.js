angular.module('myAppRename.controllers', []).
  controller('AppCtrl', function ($scope) {
    $scope.title = "CA4 Gruppe 7";
  })
  .controller('MyCtrl2', function ($scope) {
    // write MyCtrl2 here
  }).controller('viewallCTRL',function($scope,InfoFactory){
        $scope.getwikiFromTitle = InfoFactory.getwikiFromTitle()
            .succes(function(data){
            $scope.wikiFromTitle = data;
        })
            .error(function(data){
                $scope.wikiFromTitle = data;
            })
    });



