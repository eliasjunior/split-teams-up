import { sortMainList } from "./util";

export default function Teams() {
  return {
    getStringEmailConvertListNames: () => {
      const emailsStr =
        "Elias Junior <emcjunior@gmail.com>; Rahman, Tarik <Tarik.Rahman@mastercard.com>; Tar, Attila <Attila.Tar@mastercard.com>; Lennon, John <John.Lennon@mastercard.com>; Grimberg, Gabriel <Gabriel.Grimberg@mastercard.com>; Dias, Thiago <Thiago.Dias2@mastercard.com>; Ruane, Eoghan <Eoghan.Ruane@mastercard.com>; Mac Mathuna, Daire <Daire.MacMathuna@mastercard.com>; Barry, Mamadou <Mamadou.Barry2@mastercard.com>; McQuillan, Conor <Conor.McQuillan@mastercard.com>; Quinn, Simon <Simon.Quinn@mastercard.com>";
      return emailsStr
        .split(";")
        .map(nameEmail => nameEmail.slice(0, nameEmail.indexOf("<")))
        .map(fullName => fullName.slice(fullName.indexOf(",") + 1).trim());
    },
    convertListToObject: listNames => {
      const result = listNames.reduce((list, item) => {
        list.push({
          name: item,
          type: ""
        });
        return list;
      }, []);

      return result;
    },
    shuffle: theList => {
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
