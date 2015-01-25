angular.module('petroji')
.config(['$stateProvider', function($stateProvider) {
	"use strict";
	$stateProvider
		.state('village', {
			url: '/village/:id',
			abstract: true,
			templateUrl: '/partials/village-main.tpl.html',
			resolve: {
				village: ['$stateParams','villageService', function($stateParams,villageService) {
					return villageService.getVillage($stateParams.id);
				}]
			}
		})
		.state('village.plan', {
			url: '/plan',
			views: {
				'status': {
					templateUrl: '/partials/village-status.tpl.html',
					controller: 'villageStatusCtrl as village'
				},
				'planning': { 
					templateUrl: '/partials/village-planning.tpl.html',
					controller: 'villagePlanningCtrl as plan'
				}
			}
		});
}])
;