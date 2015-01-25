angular.module('petroji')
  .factory('loginService', ['$firebase', function ($firebase) {
    var loginService = {};

    loginService.createUser = function(userData, callback) {
      console.log("createUser");
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.createUser(userData, callback);
      ref.child("users").child(userData.uid).set(userData);
    };

    loginService.authUser = function(authData, callback) {
      console.log("authUser:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.authWithPassword(authData, callback, {
        remember: "sessionOnly"
      });
    };

    loginService.resetUser = function(authData, callback) {
      console.log("resetUser:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.resetPassword(authData,callback);
    };

    return loginService;
  }]);
