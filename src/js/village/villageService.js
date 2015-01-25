angular.module('petroji')
.factory('villageService', ['$firebase', 'Village', function($firebase,Village) {
	var ref = new Firebase("https://petroji.firebaseio.com/");
	// var sync = $firebase(ref);

	// var villageDefault = $firebase(ref.child('village-default')).$asObject();
	var activeVillagesSync = $firebase(ref.child('active-villages'));
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

	villageService.addUsertoVillage = function(userId) {
		console.log('addUserToVillage called: '+userId);
		if(village === null) { return false; }

	};

	return villageService;

}])
;