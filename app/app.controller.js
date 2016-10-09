'use strict';


(function(){
    angular
        .module('myApp')
        .controller('myController',function($scope,myService,ngProgressFactory){
            var that = this;
            that.order = 'rating';
            that.tags = [];
            $scope.progressbar = ngProgressFactory.createInstance();
            if(sessionStorage.getItem('api_count'))
                that.api_count=sessionStorage.getItem('api_count');
            else{
                that.api_count=0;
            }
            that.likes = {};
            
            myService.fetchData(that,$scope.progressbar);
           
        });
})();