(function(angular){
  'use strict';
  angular
  .module('moviecat.movieList',[])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/:movieType/:currentPage?',{
      templateUrl:'./movieList/view.html',
      controller:'MovieListController'
    });
  }])
  .controller('MovieListController',['$scope','$route','$routeParams','jsonpService',function($scope,$route,$routeParams,jsonpService){
     $scope.isLoading=true;
     var PAGESIAE=5,
         page=0;
     page=$routeParams.currentPage||1;
     $scope.page=page;
     //翻页功能
     $scope.goPage=function(page){
       if(page<1||page>$scope.totalPage){
         return;
       }
      $route.updateParams({currentPage:page});
     }
      //函数调用
      var url='https://api.douban.com/v2/movie/'+$routeParams.movieType;
      var paramsObj={
        city:'108288',
        start:PAGESIAE*(page-1),
        count:PAGESIAE
      };
      // 搜索功能
      if($routeParams.movieType==='search'){
        paramsObj.q=$routeParams.q;
      };
      jsonpService.jsonp(url,paramsObj,function(response){
        $scope.totalPage=Math.ceil(response.total/PAGESIAE);
        $scope.data=response;
        $scope.isLoading=false;
        $scope.$apply();
      })
  }])
})(angular)