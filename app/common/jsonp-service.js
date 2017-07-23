
(function(angular){
  'use strict';
  angular
  .module('moviecat.jsonp',[])
  .service('jsonpService',['$window',function($window){
    var window=$window,
        document=window.document;
    this.jsonp=jsonp;
    function jsonp(url,params,callback){
    url+='?';
    for(var k in params){
      url+=k+'='+params[k]+'&';
    };
    var callbackName='callback'+(new Date()-0);
    url+='callback='+callbackName;
    window[callbackName]=function(data){
      callback(data);
      //删除标签
      document.head.removeChild(script);
      
      delete window[callbackName];
    }
    // 创建script标签
    var script=document.createElement('script');
    script.src=url;
    document.head.appendChild(script);
    }
  }])
})(angular)
