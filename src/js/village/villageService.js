angular.module('petroji')
.factory('villageService', ['$firebase', 'Village', function($firebase,Village) {
	var villageSync = null;
	var village = null;

	var villageService = {};

	villageService.getVillage = function(id) {
		if(!id) { return null; }
		if(village !== null && village.$id == id) { return village; }
		village = Village(id);
		return village;
	};

	villageService.newVillage = function() {
		village = Village();
		return village;
	};

	villageService.addPlayerToVillage = function(userId) {
		console.log('addUserToVillage called: '+userId);
		if(village === null || !userId) { return false; }
		if(!village.players) { village.players = {}; }
		village.players.userId = true;
		village.$save();
	};

	// TODO: This should eventually be in a service somewhere
	function getUserData(userId) {
		if(!userId) { return null; }
		var userRef = new Firebase("https://petroji.firebaseio.com/users/");
		var userOb = $firebase(userRef.child(userId)).$asObject();
		return userOb;
	}

	villageService.getVillageForUser = function(userId) {
		console.log('villageService.getVillageForUser called');
		var user = getUserData(userId);
		if(user === null) { return null; }
		var villageId = user.village;

		// return villageId;
		// TODO: remove temporarily hardcoded value
		return "-JgU60-ulT6nwSIldCwE";
	};

	return villageService;

}])
;