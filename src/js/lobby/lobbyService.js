angular.module('petroji')
  .factory('lobbyService', ['$firebase', function($firebase) {
    var lobbyService = {};
    var baseLobbyRef = new Firebase("https://petroji.firebaseio.com/lobby/");
    //people who are logged are in the lobby

    //lobbyService == isWaiting, hasJoined, availableVillage, hasLoggedOut

    /*
     * See list of people waiting for village. When enough players available fill it with people.
     */
    lobbyService.lobby = function(authData) {
      console.log("lobby:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com/lobby");
      return $firebase(ref).$asObject();
    };

    lobbyService.joinLobby = function(uid) {
      console.log("joinLobby:Start:", uid);
      var ref = new Firebase("https://petroji.firebaseio.com/lobby");
      $firebase(ref.child(uid)).$set(true);
    };

    /*
     * Join a village with your friends and play the game.
     */
    lobbyService.joinGame = function(authData) {
      console.log("joinGame:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.joinGame(authData, callback);
    };

    /*
     * The game is over. How did it go? Get ready to start again.
     */
    lobbyService.conclusion = function(authData) {
      console.log("conclusion:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.conclusion(authData, callback);

    };
    return lobbyService;
  }]);
