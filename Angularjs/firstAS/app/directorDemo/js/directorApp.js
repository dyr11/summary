/**
 * Created by dyr on 2016/3/20.
 */
var directorApp=angular.module("directorApp",[]);
directorApp.directive('outer',function () {
   return {
       restrict:"E",
       replace:true,
       transclude:true,
       template:'<div ng-transclude> </div>',
       controller:function () {
           var inners=[];
           this.addInner=function (inner){
               inners.push(inner);
           };
           this.getOpened=function (inner){
               angular.forEach(inners, function (inn) {
                   if (inn!=inner){
                       inn.showme=false;
                   }
               })
           }
       },
   }
});

directorApp.directive('inner',function () {
    return {
        restrict:"E",
        replace:true,
        require:"^outer",
        transclude:true,
        scope:{
            title:"=title"
        },
        template:'<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showme" ng-transclude></div>'
        + '</div>',
        link:function (scope,element,attr,control) {
            control.addInner(scope);
            scope.showme=false;
            scope.toggle=function () {
                scope.showme = !scope.showme;
                control.getOpened(scope);
            }
        }
    }
});
directorApp.controller('controller',['$scope',function ($scope) {
    $scope.books = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'test'
    }];
}])