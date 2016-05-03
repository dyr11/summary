/**
 * Created by dyr on 2016/3/19.
 */
var demoNgClass=angular.module("demoNgClass",[]);
demoNgClass.controller("CTRL",function ($scope) {
    $scope.isError=false;
    $scope.isWarning=false;
    $scope.error=function () {
        $scope.isError=true;
        $scope.isWarning=false;
        $scope.message="---------error-----";
        console.log($scope);
    };
    $scope.warning=function () {
        $scope.isError=false;
        $scope.isWarning=true;
        $scope.message="---------ewranging-----";
        console.log($scope);
    };
})
demoNgClass.controller("ngShow",function ($scope) {
    $scope.show=false;
    $scope.ng_show=function () {
        $scope.show=!$scope.show;
    }
})