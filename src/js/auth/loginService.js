angular.module('petroji')
  .factory('loginService', ['$firebase', function loginService($firebase) {
    var loginService = {};

    loginService.createUser = function(userData,callback) {
      console.log("==loginService==");
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.createUser(userData, callback);    
    };

    loginService.authUser = function(authData, callback) {
      console.log("authUser:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.authWithPassword(authData,callback,
       {
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
