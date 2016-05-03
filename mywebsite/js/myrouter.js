var myrouter=angular.module('myrouter', ['ui.router','mycontroller']);
myrouter.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/bootstrap/progressBar/activeProgress");
	$stateProvider
	.state('first',{
		url:"/",
		views:{
			"":{
				templateUrl:"html/home.html"
			},
			"firstMenu@first":{
				templateUrl:"html/firstMenu.html",
				controller:"firstController"
			},
			"firstMain@first":{
				templateUrl:"html/firstMain.html"
			}
		}
	})
	.state('first.second',{
		url:":second",
		views:{
			"firstMain@first":{
				// template:"hello<div ui-view></div>"
				// templateProvider:function($stateParams){
				// 	return "<h1>"+$stateParams.second+"</h1><div ui-view></div>";
				// },

				templateUrl:"html/secondMain.html",
				controller: "secondController"
			},
			"secondMenu@first.second":{
				templateUrl:function($stateParams){
					return "html/secondMenu.html"
				},
			}
		}
	})
	.state('first.second.third',{
		url:"/:third",
		views:{
			"secondMain@first.second":{
				templateUrl:"html/thirdMain.html",
				controller:"thirdController"
			},
			"thirdMenu@first.second.third":{
				templateUrl:function($stateParams){
					return "html/thirdMenu.html"
				},
			},
		},

	})
	.state('first.second.third.fourth',{
		url:"/:fourth",
		views:{
			"thirdMain@first.second.third":{
				templateUrl:function($stateParams){
					// var path="html/"+$scope.first+"/"+$scope.second+"/"+$scope.third+"/"+$stateParams.fourth+".html";
					var regexp=/\w+\/\w+/g;
					var path="data/"+window.location.hash.match(regexp)[0]+"/"+$stateParams.fourth +".html";
					console.log(path);
					return path;
				},
				controller:"fourthController"
			}
		}
	})
}])