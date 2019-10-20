import { requiredParameter } from "util";

export default function persistenceAPI() {
  let playerList = [];
  return {
    getPlayerList: function() {
      return playerList;
    },
    addAll: function(playerListParm = requiredParameter("playerList")) {
      playerList = playerListParm;
    }
  };
}
