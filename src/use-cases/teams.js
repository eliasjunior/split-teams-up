import { sortMainList, requiredParameter } from "../common/util";

export default function Teams({ getPlayerList, idGerator }) {
  return {
    convertEmailsToListOfNames: (
      emailsStr = requiredParameter("emailsStr")
    ) => {
      const getFullName = nameEmail =>
        nameEmail.slice(0, nameEmail.indexOf("<")).trim();
      return emailsStr.split(";").map(getFullName);
      //  .map(fullName => fullName.slice(fullName.indexOf(",") + 1).trim());
    },
    convertListToObject: (listNames = requiredParameter("listNames")) => {
      const result = listNames.reduce(
        (prev, name) => {
          const id = idGerator(10);
          const obj = {
            name,
            type: "",
            id
          };
          prev.byId[id] = obj;
          prev.list.push(obj);
          return prev;
        },
        { byId: {}, list: [] }
      );

      return result;
    },
    updatePlayerList: function(weighs) {
      const playerList = getPlayerList();
      weighs.forEach(({ value, id = requiredParameter("id") }) => {
        playerList.byId[id].type = parseInt(value, 10);
      });
    },
    shuffle: (theList = requiredParameter("player list")) => {
      let orange = [];
      let red = [];

      const ascList = sortMainList(theList);
      // as the list is sorted , player same type are next each other
      while (ascList.length > 0) {
        orange.push(ascList.pop());

        // odd numbers
        if (ascList.length > 0) {
          red.push(ascList.pop());
        }
      }

      return {
        orange: orange.map(p => p.name),
        red: red.map(p => p.name)
      };
    }
  };
}
