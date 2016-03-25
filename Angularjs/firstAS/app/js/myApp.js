/**
 * Created by dyr on 2016/3/19.
 */
var myapp=angular.module("myApp",['ngRoute','myController']);
myapp.config(function ($routeProvider) {
    $routeProvider.when('/hello',
        {templateUrl:'tpls/hello.html',controller:'helloController'})
        .when('/list',{templateUrl:'tpls/list.html',controller:'listController'})
        .otherwise({redirectTo:'/hello'});
})
