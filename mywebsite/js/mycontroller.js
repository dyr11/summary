var mycontroller=angular.module('mycontroller', ['myservice']);
mycontroller.controller('firstController', ['$scope','getRemoteData', function($scope,getRemoteData){
	// $scope.topmenu=[
	// 	{"key":"CSS","value":"CSS"},
	// 	{"key":"Angular","value":"Angular"},
	// 	{"key":"html","value":"HTML"},
	// 	{"key":"javascript","value":"JAVASCRIPT"},
	// 	{"key":"CDN","value":"CDN"},
	// 	{"key":"tool","value":"工具"}
	// ]
	//$scope.topmenu=["a",'b','c'];
	getRemoteData("firstMenu.json",function(data){
		$scope.firstMenuData= data;
	});


}]);

mycontroller.controller('secondController', ['$scope','$stateParams','getRemoteData', function($scope,$stateParams,getRemoteData){
	$scope.second=$stateParams.second;
	// $scope.secondMenuData=[1,2,3,4,5,6,7,8,9,11,23,45];
	getRemoteData($stateParams.second+".json",function(data){
		$scope.secondMenuData=data;
		$scope.secondMenuData.forEach( function(element, index) {
			element.active="btn-default";
		});
	})
	console.log($scope.second);
	$scope.active=function(menu){
		$scope.secondMenuData.forEach( function(element, index) {
			element.active="btn-default";
		});
		menu.active="btn-success";
		console.log("click!");
	}
}]);

mycontroller.controller('thirdController', ['$scope','$stateParams','getRemoteData', function($scope,$stateParams,getRemoteData){
	$scope.third=$stateParams.third;
	getRemoteData($scope.second+"/"+$scope.third+".json",function(data){
		$scope.thirdMenuData=data;
	})
	console.log($scope.second+" "+$scope.third);
}]);

mycontroller.controller('fourthController', ['$scope','$stateParams','getRemoteData', function($scope,$stateParams,getRemoteData){
	$scope.fourth=$stateParams.fourth;
	console.log($scope.second+"/"+$scope.third+"/"+$scope.fourth);
}])