(function(angular){
  'use strict';
  angular
  .module('moviecat.search',[])
  .controller('SearchController',['$scope','$location',function($scope,$location){
    $scope.searchText="";
    $scope.search=function(){
      if($scope.searchText.trim()===''){
        return;
      }
      $location.url('/search?q='+$scope.searchText);
    };
  }]);
})(angular)