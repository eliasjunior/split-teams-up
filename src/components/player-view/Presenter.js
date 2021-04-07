import teams from "../../domain";

const { getPlayerList } = teams;

export default {
  getPlayers() {
    return getPlayerList();
  },
};
