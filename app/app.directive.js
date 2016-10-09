'use strict';

(function(){
    angular.module('myApp')
        .directive('dashboard',function(){
            return {
                restrict:'E',
                templateUrl:'dashboard.template.html',
                controller:'myController',
                controllerAs:'ctrl'
            };
        });
})();