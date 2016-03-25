/**
 * Created by dyr on 2016/3/20.
 */
var uiRouteApp=angular.module('uiRouteApp',['ui.router']);
uiRouteApp.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise("/view1");
    $stateProvider
        .state('view1',{
            url:"/view1",
            templateUrl:"../ui-router-tpls/view1.html",
        })
        .state('view1.view1sub1',{
            url:"/view1",
            templateUrl:"../ui-router-tpls/view1sub1.html",
            controller:function ($scope) {
                $scope.name1=['A','AA','AAA','AAAA'];
            }
        })
        .state('view2',{
            url:"/view2",
            templateUrl:'../ui-router-tpls/view2.html',
        })
        .state('view2.view2sub2',{
            url:'/view2',
            views:{
                'view2-ui1':{
                   templateUrl:'../ui-router-tpls/view2sub2.html',
                  controller:function ($scope) {
                      $scope.name2=['B','BB','BBB','BBBB'];
                   }
               },
              'view2-ui2':{
                   template:"template2"
              }
        }
    });
})