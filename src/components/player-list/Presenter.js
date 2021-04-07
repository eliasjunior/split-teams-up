import teams from "../../domain";

const { shuffle, getPlayerList } = teams;

export default {
  shuffle,
  getPlayers() {
    return getPlayerList();
  },
};
