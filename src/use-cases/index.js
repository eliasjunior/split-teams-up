import persistenceAPI from "../use-cases/persistenceAPI";
import nanoid from "nanoid";
import teams from "./teams";
const { getPlayerList, updatePlayerList, addAll } = persistenceAPI();

const { convertEmailsToListOfNames, convertListToObject, shuffle } = teams({
  idGerator: nanoid
});

export default {
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle,
  addAll,
  getPlayerList,
  updatePlayerList
};
