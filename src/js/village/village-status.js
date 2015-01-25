angular.module('petroji')
.controller('villageStatusCtrl', ['villageService', 'village', function villageStatusCtrl(villageService,village) {
	"use strict";
	console.log("villageStatusCtrl called");
	// var villageId = "-JgU60-ulT6nwSIldCwE";

	this.vdata = village;

	this.newVillage = function() {
		this.vdata = villageService.newVillage();
	};

}])
;