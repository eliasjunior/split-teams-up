import { sortMainList, requiredParameter } from "../common/util";

export default function UserInputPlayerUseCase(
  { idGenerator } = requiredParameter("teams dependencies")
) {
  return {
    shapeStringToList: (
      inputEntered = requiredParameter("inputEntered")
    ) => {
      const listOfNames = buildNameList(inputEntered)
        .filter((value) => value !== "")
        .map(getFullName)
        .filter((name) => name.length > 0);
      return listOfNames;
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
        orange,
        red,
      };
    },
  };
}

function buildNameList(emailsStr) {
  return emailsStr.includes(";") ? emailsStr.split(";") : emailsStr.split("\n");
}
function getFullName(nameEmail) {
  const emailStartIndx = nameEmail.indexOf("<");
  return emailStartIndx !== -1
    ? nameEmail.slice(0, emailStartIndx).trim()
    : nameEmail.trim();
}
