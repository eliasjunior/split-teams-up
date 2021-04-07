import { sortMainList, requiredParameter } from "../common/util";

export default function ConvertEmailNamePlayerUseCase(
  { idGenerator } = requiredParameter("teams dependencies")
) {
  return {
    convertEmailsToListOfNames: (
      emailsStr = requiredParameter("emailsStr")
    ) => {
      const getFullName = (nameEmail) => {
        const index = nameEmail.indexOf("<");
        return index !== -1
          ? nameEmail.slice(0, index).trim()
          : nameEmail.trim();
      };
      const result = emailsStr
        .trim()
        .split(";")
        .filter((value) => value !== "")
        .map(getFullName);
      return result;
    },
    convertListToObject: (listNames = requiredParameter("listNames")) => {
      const makeTableLike = (prev, name) => {
        const id = idGenerator(10);
        const obj = {
          name,
          type: "",
          id,
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
        orange: orange.map((p) => p.name),
        red: red.map((p) => p.name),
      };
    },
  };
}
