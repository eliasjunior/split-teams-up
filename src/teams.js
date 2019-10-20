import { sortMainList, requiredParameter } from "./util";

export default function Teams() {
  return {
    getStringEmailConvertListNames: (
      emailsStr = requiredParameter("emailsStr")
    ) => {
      return emailsStr
        .split(";")
        .map(nameEmail => nameEmail.slice(0, nameEmail.indexOf("<")))
        .map(fullName => fullName.slice(fullName.indexOf(",") + 1).trim());
    },
    convertListToObject: (listNames = requiredParameter("listNames")) => {
      const result = listNames.reduce((list, item) => {
        list.push({
          name: item,
          type: ""
        });
        return list;
      }, []);

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
