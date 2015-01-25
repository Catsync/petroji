angular.module('petroji')
.factory('lobbyService', ['$firebase', function lobbyService($firebase) {
  var lobbyService = {};

  /*
  * See list of people waiting for village. When enough players available fill it with people.
  */
  lobbyService.lobby = function(authData) {
    console.log("resetUser:Start:", authData);
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
      ref.joinGame(authData,
        function(error) {
          if (error === null) {
            console.log("Joining Village");
          } else {
            console.log("Error joining village:", error);
          }
        });

      };

      /*
      * The game is over. How did it go? Get ready to start again.
      */
      lobbyService.conclusion = function(authData) {
        console.log("conclusion:Start:", authData);
        var ref = new Firebase("https://petroji.firebaseio.com");
        ref.conclusion(authData,
          function(error) {
            if (error === null) {
              console.log("Concluded Successfully");
            } else {
              console.log("Error ending game:", error);
            }
          });

        };

  return lobbyService;
}]);