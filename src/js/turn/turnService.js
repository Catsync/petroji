angular.module('petroji')
.factory('turnService', ['$firebase', function($firebase) {

	var baseTurnRef = new Firebase("https://petroji.firebaseio.com/turn-log/");

	var currentTurn = null;

	var turnTemplate = {
		turn_number: 0,
		chats: { count: 0 },
		actions: {},
		results: {}
	};

	var turnService = {};


	turnService.getTurn = function(id) {
		if(!id) { return null; }
		var turnSync = $firebase(baseTurnRef.child(id));
		currentTurn = turnSync.$asObject();
		return currentTurn;
	};

	turnService.getTurnForVillage = function(village) {
		if(!village) { return null; }
		if(village.currentTurn) {
			return turnService.getTurn(village.currentTurn);
		} else {
			console.log('new turn');
			var data = angular.copy(turnTemplate);

			angular.forEach(village.players, function(val, key) {

				data.chats[key] = "";
				data.actions[key] = { 0: "", 1: "" };
				data.results[key] = {};
			});
			currentTurn = turnService.newTurn(data).then(function(ref) {
				console.log('new turn loaded');
				console.log(ref);
				village.currentTurn = ref.$id;
				village.$save();
			});
			return currentTurn;
		}
	};

	turnService.currentTurn = function() {
		return currentTurn;
	};

	turnService.newTurn = function(data) {
		var sync = $firebase(baseTurnRef);

		data = data || turnTemplate;
		console.log('new turn data');
		console.log(data);

		return sync.$push(data).then(function(newRef) {
			currentTurn = $firebase(newRef).$asObject();
			return currentTurn;
		});

	};

	return turnService;

}])
;