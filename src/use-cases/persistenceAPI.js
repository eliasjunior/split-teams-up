import { requiredParameter } from "util";

export default function persistenceAPI() {
  let playerList = [{}];
  return {
    getPlayerList: function() {
      return playerList;
    },
    addAll: function(playerListParm = requiredParameter("playerList")) {
      playerListParm.reduce((prev, item) => {
        prev[item.name] = item;
        return prev;
      }, []);
      playerList = playerListParm;
    }
  };
}
