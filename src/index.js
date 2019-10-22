import "./styles.css";
import presenter from "./presenter";

const {
  updatePlayerList,
  getPlayerList,
  addAll,
  getStringEmailConvertListNames,
  convertListToObject,
  shuffle,
  get,
  getAll
} = presenter;

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
  const players = convertListToObject(listNames);
  addAll(players);
  const playerList = getPlayerList();
  console.log(playerList);
  const element = get(".list-players");

  const result = playerList
    .map(({ name, id }) => {
      return addLine(name, id);
    })
    .join("");

  element.innerHTML = result;

  // get("input[name='padawan']").addEventListener("click", updateTypeState);
  // get("input[name='jedi']").addEventListener("click", updateTypeState);
  // get("input[name='yoda']").addEventListener("click", updateTypeState);
}

function readWeigthFromInputs() {
  const playerList = getPlayerList();
  // Array.from(getAll("input[type='radio']:checked")).forEach((field, index) => {
  //   console.log(field.name);
  //   playerList[index].type = parseInt(field.value, 10);
  // });

  const inputValues = Array.from(getAll("input[type='radio']:checked")).map(
    ({ name, value }) => {
      console.log(name, value);
      return {
        value: parseInt(value, 10),
        id: name.slice(0, name.indexOf("-"))
      };
    }
  );

  updatePlayerList(inputValues);

  const { orange, red } = shuffle(playerList);

  const contentOrange = orange
    .map(name => {
      return ` <li class="list-group-item">${name}</li>`;
    })
    .join("");

  const contentRed = red
    .map(name => {
      return ` <li class="list-group-item">${name}</li>`;
    })
    .join("");

  const boxOrange = `<ul class="list-group row">
    <li class="list-group-item list-group-item-warning">Orange</li>
    ${contentOrange}
  </ul>`;

  const boxRed = `<ul class="list-group row">
  <li class="list-group-item list-group-item-danger">Red</li>
  ${contentRed}
</ul>`;

  get(".result").innerHTML = `${boxOrange}${boxRed}`;
}

function addLine(name, id) {
  return `
    <ul class="list-group row">
      <li class="list-group-item">
        <div class="skills-group">
          <div class="skills-group__name">${name}</div>
          <div class="skills">
            <label for="padawan"> 
              <input name="${id}" type="radio" value="3" checked /> Easy</label>
          </div>
          <div class="skills">
            <label for="jedi"> 
              <input name="${id}" type="radio" value="2" /> Medium</label>
          </div>
          <div class="skills">
            <label for="yoda"> 
              <input name="${id}" type="radio" value="1" /> Hard</label>
          </div>
        </div>
      </li>  
    </ul>
  `;
}
Main();
