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
      lobbyService.joinGame(villageData, cb);
      console.log("END: joinGame ");
    };
    this.conclusion = function() {
      console.log("conclusion");
      var gameData = {};
      console.log("gameData: " , gameData);
      var cb = function(error) {
        if (error === null) {
          console.log("Concluded Successfully");
          //When finished reviewing game go to lobby
          $state.go('lobby');
        } else {
          console.log("Error ending game:", error);
        }
      };
      lobbyService.conclusion(gameData, cb);
      console.log("END: conclusion.");
    };
    this.lobby = function() {
      console.log("Start: lobby");
      var gameData = {};
      console.log("gameData: " , gameData);
      var cb = function(error) {
        if (error === null) {
          console.log("In Lobby Successfully");
          //When finished reviewing game go to lobby
          $state.go('joingame');
        } else {
          console.log("Error joingame game:", error);
        }
      };
      lobbyService.lobby(gameData, cb);
      console.log("END: lobby.");
    };

  }]);
