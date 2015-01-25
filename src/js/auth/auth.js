angular.module('petroji.auth',[
])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  "use strict";
  $stateProvider.state('auth', {
    url: '/auth',
    templateUrl: '/partials/login.tpl.html',
    controller: 'authController as auth'
  });

}])
.controller("authController", [function() {
  console.log("authController");
  this.user={"name": "foo"};
}]);
