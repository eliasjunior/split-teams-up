import teams from "../../domain";

const { convertEmailsToListOfNames, convertListToObject, addAll } = teams;

const delegator = {
  convertListToObject,
  savePlayers(players) {
    addAll(players);
  },
  getStringEmailConvertListNames(names) {
      return convertEmailsToListOfNames(names);
  },
};
export default delegator;
