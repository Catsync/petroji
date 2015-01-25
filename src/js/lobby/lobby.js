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
      });
  }])
  .controller("lobbyController", ["loginService", "$state", function(lobbyService, $state) {
    console.log("START: lobbyController");
    this.lobbyData = {};

    this.joinGame = function() {
      console.log("joinGame");
      var gameData = {
        "village": this.village,
        "players": this.players
      };
      console.log("gameData:", gameData);
      var cb = function(error, gameData) {
        if (error) {
          console.log("Join Game Failed!", error);
        } else {
          console.log("Joined successfully with payload:", villageData);
          $state.go('village');
        }
      };
      loginService.joinGame(villageData, cb);
      console.log("END: joinGame ");
    };
  }]);
