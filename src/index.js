import "./styles.css";
import teams from "./teams";
import persistenceAPI from "./persistenceAPI";

const { getPlayerList, addAll } = persistenceAPI();

const {
  getStringEmailConvertListNames,
  convertListToObject,
  shuffle
} = teams();

function Main() {
  eventListeners();
}

function eventListeners() {
  get("button").addEventListener("click", readWeigthFromInputs);

  get("textarea[name='insert_players']").addEventListener(
    "input",
    readEmailFromTextBox
  );
}

function readEmailFromTextBox(e) {
  const emailStr = e.target.value;
  // HTML PART
  const listNames = getStringEmailConvertListNames(emailStr);

  addAll(convertListToObject(listNames));
  const playerList = getPlayerList();

  const element = get(".list-players");

  const result = playerList
    .map(player => {
      return addLine(player.name);
    })
    .join("");

  element.innerHTML = result;
}

function readWeigthFromInputs() {
  const playerList = getPlayerList();
  Array.from(getAll("input")).forEach((field, index) => {
    playerList[index].type = parseInt(field.value, 10);
  });

  const { orange, red } = shuffle(playerList);

  const orangeTeam = orange.map(player => {
    return `<div ="row">${player}</div>`;
  });

  const redTeam = red.map(player => {
    return `<div ="row">${player}</div>`;
  });

  get(
    ".result"
  ).innerHTML = `<div class="orange">${orangeTeam}</div> <div class="red">${redTeam}</div>`;
}

function getAll(target) {
  return document.querySelectorAll(target);
}
function get(target) {
  return document.querySelector(target);
}

function addLine(name) {
  return `
    <ul class="list-group">
      <li class="list-group-item">
        <label>${name}</label>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">Padawan</button>
          <button type="button" class="btn btn-secondary">Jedi</button>
          <button type="button" class="btn btn-secondary">Jedi Master</button>
        </div>
      </li>  
    </ul>
  `;
}

Main();
