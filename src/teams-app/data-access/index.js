import persistenceAPI from "../data-access/persistenceAPI";
import nanoid from "nanoid";
import teams from "./teams";
const { getPlayerList, updatePlayerList, addAll } = persistenceAPI();

const { convertEmailsToListOfNames, convertListToObject, shuffle } = teams({
  idGenerator: nanoid,
});

export default {
  convertEmailsToListOfNames,
  convertListToObject,
  shuffle,
  addAll,
  getPlayerList,
  updatePlayerList,
};
