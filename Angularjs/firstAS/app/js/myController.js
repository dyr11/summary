/**
 * Created by dyr on 2016/3/19.
 */
var myController=angular.module('myController',[]);
myController.controller('helloController',['$scope',function ($scope) {
    $scope.greeting={
        text:"hello"
    };
}]);

myController.controller('listController',['$scope',function ($scope) {
    $scope.books=[
        {title:"《Ext江湖》",author:"大漠穷秋"},
        {title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
        {title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
    ];
}]);