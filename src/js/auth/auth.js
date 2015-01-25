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
.controller("authController", [function() {
  console.log("authController");
  //this.user={"name": "foo"};
}]);
/*

var ref = new Firebase("https://<your-firebase>.firebaseio.com");
ref.createUser({
email    : "bobtony@firebase.com",
password : "correcthorsebatterystaple"
}, function(error) {
if (error === null) {
console.log("User created successfully");
} else {
console.log("Error creating user:", error);
}
});
*/
