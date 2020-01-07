import { sortMainList, requiredParameter } from "../common/util";

export default function Teams({ idGerator } = requiredParameter("teams dependencies")) {
  return {
    convertEmailsToListOfNames: (
      emailsStr = requiredParameter("emailsStr")
    ) => {
      const getFullName = nameEmail =>
        nameEmail.slice(0, nameEmail.indexOf("<")).trim();
      return emailsStr.trim().split(";")
      .filter(line => line !== "" )
      .map(getFullName);
    },
    convertListToObject: (listNames = requiredParameter("listNames")) => {
      const makeTableLike = (prev, name) => {
        const id = idGerator(10);
        const obj = {
          name,
          type: "",
          id
        };
        prev.byId[id] = obj;
        prev.list.push(obj);
        return prev;
      };
      const result = listNames.reduce(makeTableLike, { byId: {}, list: [] });

      return result;
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
