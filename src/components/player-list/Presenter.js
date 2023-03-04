import teams from "../../domain";

const { shufflePlayersPerTeam, getPlayerList } = teams;

const presenter =  {
  shuffleAction: shufflePlayersPerTeam,
  getPlayers() {
    return getPlayerList();
  },
}
export default presenter;
