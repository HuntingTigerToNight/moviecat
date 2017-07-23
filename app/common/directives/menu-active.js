(function (angular){
  'use strict';
  angular
  .module('moviecat.directives',[])
  .directive('menuActive',['$location',function($location){
    return{
      templateUrl:'./common/directives/view.html',
      link:function(scope,element,attribute){
        scope.location=$location;
        scope.$watch('location.url()',function(newValue,oldValue){
          var lis=element.find('li');
          for(var i=0;i<lis.length;i++){
            var curLi=lis.eq(i);
            var href=curLi.children('a').attr('href').slice(1);
            if(newValue.indexOf(href)>-1){
              curLi.parent().children().removeClass('active');
              curLi.addClass('active');
              break;
            }
          }
        });
      }
    };
  }])
})(angular)