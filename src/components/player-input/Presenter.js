import teams from "../../domain";

const { shapePlayerInfo, convertListToPlayers, addAll } = teams;

const delegator = {
  convertListToPlayers,
  savePlayers(players) {
    addAll(players);
  },
  userTypedInput(names) {
    //TODO this has to be in the main, 
    // then main pass via props the input down
      return shapePlayerInfo(names);
  },
};
export default delegator;
