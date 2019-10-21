import "./styles.css";
import teams from "./teams";
import persistenceAPI from "./persistenceAPI";
import { file } from "@babel/types";

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
  try {
    get("button").addEventListener("click", readWeigthFromInputs);

    get("textarea[name='insert_players']").addEventListener(
      "input",
      readEmailFromTextBox
    );
  } catch (error) {
    console.error(
      "It could not attatch the event. maybe did not find the element",
      error
    );
  }
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

  get("input[name='padawan']").addEventListener("click", updateTypeState);
  get("input[name='jedi']").addEventListener("click", updateTypeState);
  get("input[name='yoda']").addEventListener("click", updateTypeState);
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

  console.log(orangeTeam, redTeam);

  get(
    ".result"
  ).innerHTML = `<div class="orange">${orangeTeam}</div> <div class="red">${redTeam}</div>`;
}

function updateTypeState(e) {
  console.log("some thing here", e.target.name);
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
        <div class="skills-group">
          <div class="skills-group__name">${name}</div>
          <div class="skills">
            <label for="padawan"> 
              <input name="${name}-padawan" type="radio" value="3" />Easy</label>
          </div>
          <div class="skills">
            <label for="jedi"> 
              <input name="${name}-jedi" type="radio" value="2" />Medium</label>
          </div>
          <div class="skills">
            <label for="yoda"> 
              <input name="${name}-yoda" type="radio" value="1" />Hard</label>
          </div>
        </div>
      </li>  
    </ul>
  `;
}

Main();
