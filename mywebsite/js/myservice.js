var myservice=angular.module('myservice', []);
myservice.factory('getRemoteData',['$http',function($http){
	return function (url,callback){
		return $http({
			method:"GET",
			url:"data/"+url
			
		}).success(function (data,state,header,config) {
			console.log(data);
			console.log("success!");
			callback(data);
		}).error(function(data,state,header,config){
			console.log("error!");

		})
	}

}]);
