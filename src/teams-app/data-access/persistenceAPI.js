import { requiredParameter } from "util";

export default function persistenceAPI() {
  let playerList = { byId: null, list: [] };
  return {
    getPlayerList: function () {
      return playerList;
    },
    updatePlayerList: function (weighs = requiredParameter("weighs")) {
      weighs.forEach(({ value, id = requiredParameter("id") }) => {
        if (!playerList.byId[id]) {
          throw new Error("persistence error, please fix this");
        }
        playerList.byId[id].type = parseInt(value, 10);
      });
      //console.log("updatePlayerList", playerList);
    },
    addAll: function (playerListParm = requiredParameter("playerList")) {
      playerList = playerListParm;
      //console.log("addAll", playerList);
    },
  };
}
