angular.module('petroji.auth', [
    "firebase"
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    "use strict";
    $stateProvider.state('auth', {
      url: '/auth',
      templateUrl: '/partials/login.tpl.html',
      controller: 'authController as auth'
    }).state('signup', {
      url: '/signup',
      templateUrl: '/partials/login-signup.tpl.html',
      controller: 'authController as auth'
    }).state('reset', {
      url: '/reset',
      templateUrl: '/partials/login-reset.tpl.html',
      controller: 'authController as auth'
    });
  }])
  .controller("authController", ["loginService", "$state", function(loginService, $state) {
      console.log("START: authController");
      this.newUserData = {};
      this.authData = {};

      this.loginUser = function() {
        console.log("loginUser");
        var authData = {
          "email": this.email,
          "password": this.password
        };
        console.log("authData:", authData);
        var cb = function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $state.go('lobby');
          }
        };
        loginService.authUser(authData, cb);
        console.log("END: loginUser ");
      };

      this.createUser = function() {
        console.log("createUser");
        var userData = {
          "email": this.newUserData.email,
          "password": this.newUserData.password,
          "firstname": this.newUserData.firstname,
          "lastname": this.newUserData.lastname,
          "username": this.newUserData.username
        };

        //console.log(userData);
        var cb = function(error) {
          if (error === null) {
            console.log("User created successfully");
            $state.go('auth');
          } else {
            console.log("Error creating user:", error);
          }
        };
      loginService.createUser(userData, cb);
    };

    this.resetUser = function() {
      console.log("resetUser");
      var authData = {
        "email": this.email
      };
      var cb = function(error) {
        if (error === null) {
          console.log("Password reset email sent successfully");
          $state.go('auth');
        } else {
          console.log("Error sending password reset email:", error);
        }
      };
      loginService.resetUser(authData, cb);
    };

    console.log("END: authController");

    //this.user={"name": "foo"};

  }]);
