angular.module('petroji')
.factory('villageService', ['$firebase', function($firebase) {
	var ref = new Firebase("https://petroji.firebaseio.com/");
	// var sync = $firebase(ref);

	var villageDefault = $firebase(ref.child('village-default')).$asObject();

	var villagesSync = $firebase(ref.child('active-villages'));
	var village = null;

	var villageService = {};

	villageService.VALID_PROPERTIES = ['culture','health','food','morale','population'];

	villageService.getVillage = function(id) {
		if(!id) { return null; }
		if(village !== null && village.$id == id) { return village; }
		village = $firebase(villagesSync.$ref().child(id)).$asObject();
		return village;
	};

	villageService.newVillage = function() {
		var v = {};
		var props = villageService.VALID_PROPERTIES;
		for(var i=0; i< props.length; i++) {
			v[props[i]] = villageDefault[props[i]];
		}

		return villagesSync.$push(v).then(function(newRef) {
			village = $firebase(newRef).$asObject();
		});
	};

	villageService.addUsertoVillage = function(userId) {
		console.log('addUserToVillage called: '+userId);
	};

	return villageService;

}])
;