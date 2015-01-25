angular.module('petroji')
.config(['$stateProvider', function($stateProvider) {
  "use strict";
  $stateProvider
  .state('lobby', {
      url: '/lobby',
      templateUrl: '/partials/lobby-main.tpl.html'
    })
    .state('/lobby.joingame', {
      url: '/joingame',
      templateUrl: '/partials/lobby-joingame.tpl.html'
    })
    .state('/lobby.conclusion', {
      url: '/conclusion',
      templateUrl: '/partials/lobby-conclusion.tpl.html'
    })
  }]);
