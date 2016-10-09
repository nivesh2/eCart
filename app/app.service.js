'use strict';

(function(){
    angular
        .module('myApp')
        .service('myService',function($http){
            
            this.fetchData = function(input,progress){
                progress.start();
                $http.get('https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals').then(function(res){ 
                    input.api_count++; 
                    sessionStorage.setItem('api_count',input.api_count);                                         
                    input.data = res.data;
                    input.total_products = input.data.deals.length;
                    input.data.deals.forEach(function(v,i){            
                        input.likes[v.name] = 0;
                    input.tags=input.tags.concat(v.tags);
                    progress.complete();
            });
            
                },function(err){
                    console.log('Erro fetching data',err);
                    progress.complete();
                });
            };    

        });
})();