angular.module('petroji')
  .factory('lobbyService', ['$firebase', function($firebase) {
    var lobbyService = {};

    /*
     * See list of people waiting for village. When enough players available fill it with people.
     */
    lobbyService.lobby = function(authData) {
      console.log("lobby:Start:", authData);
      var ref = new Firebase("https://petroji.firebaseio.com");
      ref.lobby(authData,
        function(error) {
          if (error === null) {
            console.log("Success getting in waiting for users.");
          } else {
            console.log("Error waiting for others:", error);
          }
        });

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
