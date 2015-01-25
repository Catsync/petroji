angular.module('petroji')
.factory('userService', ['$firebase', function($firebase) {

  var userRef = new Firebase("https://petroji.firebaseio.com/user-data/");

  var currentUser = null;

  var userTemplate = {
    uid: 0,
    username: "",
    village: ""
  };

  var userService = {};


  userService.getUser = function(id) {
    if(!id) { return null; }
    var userData = $firebase(userRef.child(id));
    currentUser = userData.$asObject();
    return currentUser;
  };


  userService.newUser = function(id, userData) {
    console.log("newUser");
    var data = userData;
    data.uid = id;
    data = angular.extend(userTemplate, userData);
    $firebase(userRef.child(id)).$set(data);
    };

  return userService;

}]);
