angular.module('petroji')
.factory('Village', ['$firebase', function($firebase) {

	var url = "https://petroji.firebaseio.com/active-villages/";
	var baseRef = new Firebase("https://petroji.firebaseio.com/");

	var VALID_PROPERTIES = ['culture','health','food','morale','population'];
	var villageDefault = $firebase(baseRef.child('village-default')).$asObject();

	var Village = function(id) {
		if(id) {
			var ref = new Firebase(url).child(id);
			return $firebase(ref).$asObject();
		} else {
			console.log('new Village');
			var v = Village.newVillage().then(function(data) {
				return data.$asObject();
			});
			return v;
		}
	};

	Village.exists = function(id, callback) {
		console.log('Village.exists called: '+id);
		var ref = new Firebase(url).child(id).once('value', function(snapshot) {
			var exists = (snapshot.val() !== null);
			callback(id,exists);
		});
	};

	Village.newVillage = function() {
		var v = {};
		var props = VALID_PROPERTIES;
		for(var i=0; i< props.length; i++) {
			v[props[i]] = villageDefault[props[i]];
		}

		var activeRef = new Firebase("https://petroji.firebaseio.com/active-villages");
		var sync = $firebase(activeRef);
		return sync.$push(v).then(function(newRef) {
			return $firebase(newRef);
		});

	};

	return Village;
}])
;