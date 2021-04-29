import teams from "../../domain";

const { convertEmailsToListOfNames, convertListToObject, addAll } = teams;

export default {
  convertListToObject,
  savePlayers(players) {
    addAll(players);
  },
  getStringEmailConvertListNames(names) {
      return convertEmailsToListOfNames(names);
  },
};
