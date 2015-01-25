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
  console.log("START: authController");
  this.newUserData = {};
  this.authData = {};

  this.loginUser = function () {
    console.log("loginUser");
    var authData = {
      "email" : this.email,
      "password" : this.password
    };
    console.log("authData:", authData)
    loginService.authUser(authData);
    console.log("END: loginUser ");

  };

  this.createUser = function () {
    console.log("createUser");
    var userData = {
      "email"    : this.newUserData.email,
      "password" : this.newUserData.password,
      "firstname" : this.newUserData.firstname,
      "lastname" :  this.newUserData.lastname,
      "username" : this.newUserData.username
    };
    //console.log(userData);
    loginService.createUser(userData);
  };
  console.log("END: authController");

  //this.user={"name": "foo"};
  
}]);
