var myModule=angular.module("MyModule",[]);
myModule.controller('LoadDataCtrl', ['$scope','$http', function($scope,$http){
	$http({
        method: 'GET',
        url: 'data.json'
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log(data);
        $scope.users=data;
    }).error(function(data, status, headers, config) {
        console.log("error...");
    });
    $scope.change=function(user){
        console.log('change!')
        console.log( $scope.users);
        user.name="3333";
    }

}]);