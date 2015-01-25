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
			console.log('new turn data');
			console.log(data);
			currentTurn = turnService.newTurn(data);
		}
	};

	turnService.currentTurn = function() {
		return currentTurn;
	};

	turnService.newTurn = function() {
		var sync = $firebase(baseTurnRef);

		return sync.$push(turnTemplate).then(function(newRef) {
			currentTurn = $firebase(newRef).$asObject();
			return currentTurn;
		});

	};

	return turnService;

}])
;