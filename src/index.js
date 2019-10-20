import "./styles.css";
import teams from "./teams";

const {
  getStringEmailConvertListNames,
  convertListToObject,
  shuffle
} = teams();
let theList = [];
function Main() {
  const readInputAndAddWeigth = () => {
    Array.from(document.querySelectorAll("input")).forEach((field, index) => {
      theList[index].type = parseInt(field.value, 10);
    });

    console.log("888888", theList[0]);
    const { orange, red } = shuffle(theList);
    console.log("Orange = ", orange);
    console.log("Red = ", red);

    const orangeTeam = orange.map(player => {
      return `<div ="row">${player}</div>`;
    });

    const redTeam = red.map(player => {
      return `<div ="row">${player}</div>`;
    });

    document.querySelector(
      ".result"
    ).innerHTML = `<div class="orange">${orangeTeam}</div> <div class="red">${redTeam}</div>`;
  };
  document
    .querySelector("button")
    .addEventListener("click", readInputAndAddWeigth);

  // HTML PART
  const listNames = getStringEmailConvertListNames();
  theList = convertListToObject(listNames);

  const element = document.querySelector(".table-body");

  const result = theList.map((playerTd, index) => {
    return (
      "<tr>" +
      "<td> " +
      (index + 1) +
      " " +
      playerTd.name +
      "</td>" +
      '<td><input type="number" max="3" min="1" value="1"></input></td>' +
      "</tr>"
    );
  });

  element.innerHTML = result;
}

Main();
