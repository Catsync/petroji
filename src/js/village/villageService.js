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

	return villageService;

}])
;