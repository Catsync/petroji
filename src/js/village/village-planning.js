angular.module('petroji')
.controller('villagePlanningCtrl', ['village','turnService', function villagePlanningCtrl(village,turnService) {
	"use strict";
	console.log("villagePlanningCtrl called");
	console.log(village);
	this.turn = turnService.getTurnForVillage(village);
}])
;