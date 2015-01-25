angular.module('petroji.auth',[
  "firebase"
])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
  "use strict";
  $stateProvider.state('auth', {
    url: '/auth',
    templateUrl: '/partials/login.tpl.html',
    controller: 'authController as auth'
  });

}])
.controller("authController", [ "loginService"   ,function(loginService) {
  this.loginUser = function () {
    console.log("loginUser");
  }
  this.createUser = function () {
    console.log("createUser");
    //loginService.createUser(userData);
  }
  console.log("END: authController");

  //this.user={"name": "foo"};
  /*
  {
  email    : "rick.rickanderson@gmail.com",
  password : "PASSWORD",
  firstname : "FIRSTNAME",
  lastname : "LASTNAME",
  username : "USERNAME"
}

  */
}]);
