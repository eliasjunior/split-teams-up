import teams from "../use-cases/teams";
import persistenceAPI from "../use-cases/persistenceAPI";
import nanoid from "nanoid";
import 'bootstrap/dist/css/bootstrap.min.css';

const { getPlayerList, addAll } = persistenceAPI();

const {
  updatePlayerList,
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle
} = teams({ getPlayerList, idGerator: nanoid });

export default {
  convertListToObject,
  shuffle,
  savePlayers(players) {
    addAll(players)
  },
  updatePlayerList,
  getStringEmailConvertListNames(names) {
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
  }
};
