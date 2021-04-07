import teams from "../../domain";

const { convertEmailsToListOfNames, convertListToObject, addAll } = teams;

export default {
  convertListToObject,
  savePlayers(players) {
    addAll(players);
  },
  getStringEmailConvertListNames(names) {
    //TODO move to helper
    return convertEmailsToListOfNames(names);
  },
};
