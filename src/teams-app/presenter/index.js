import teams from "../data-access";

const {
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle,
  addAll,
  getPlayerList,
  updatePlayerList,
} = teams;

export default {
  convertListToObject,
  shuffle,
  savePlayers(players) {
    addAll(players);
  },
  updatePlayerList,
  getStringEmailConvertListNames(names) {
    //TODO move to helper 
    return convertEmailsToListOfNames(names);
  },
  getPlayers() {
    return getPlayerList();
  },
  getAll(target) {
    return document.querySelectorAll(target);
  },
  get(target) {
    return document.querySelector(target);
  },
};
