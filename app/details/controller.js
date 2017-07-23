(function(angular){
  'use strict';
  angular
  .module('moviecat.details',[])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/details/:id',{
      templateUrl:'./details/view.html',
      controller:'DetailsController'
    })
  }])
  .controller('DetailsController',['$scope','$routeParams','jsonpService',function($scope,$routeParams,jsonpService){
    var id=$routeParams.id;
    var url='https://api.douban.com/v2/movie/subject/' + id;
    jsonpService.jsonp(url,{},function(response){
      console.log(response);
      $scope.data=response;
      $scope.$apply();
    })
  }])
})(angular)