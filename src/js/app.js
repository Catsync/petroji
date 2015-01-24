angular.module('petroji',[
	'ui.router',
  'petroji.auth'
])
.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	"use strict";
	$urlRouterProvider.otherwise('/auth');
}]);
