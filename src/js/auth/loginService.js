angular.module('petroji')
  .factory('loginService', ['$firebase', function loginService($firebase) {
    var loginService = {};

    loginService.createUser = function(userData) {
      console.log("==loginService==");
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.createUser(userData,
        function(error) {
          if (error === null) {
            console.log("User created successfully");
          } else {
            console.log("Error creating user:", error);
          }
        });
    };

    loginService.authUser = function(authData) {
      console.log("authUser:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.authWithPassword(authData,
        function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);

          }
        }, {
          remember: "sessionOnly"
        });
    };

    loginService.resetUser = function(authData) {
      console.log("resetUser:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.resetPassword(authData,
        function(error) {
        if (error === null) {
          console.log("Password reset email sent successfully");
        } else {
          console.log("Error sending password reset email:", error);
        }
      });

    };

    return loginService;
  }]);
