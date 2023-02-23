import React from "react";
import Presenter from "./Presenter";
import "./playerInput.css";
const { savePlayers, getStringEmailConvertListNames, convertListToObject } =
  Presenter;

function PlayerInput({ onChangeInput }) {
  const convertEmailsStrToPlayers = ({ target, keyCode }) => {
    const BACK_SPACE = 8;
    if (keyCode !== BACK_SPACE) {
      const tempEmails = target.value;
      const listNames = getStringEmailConvertListNames(tempEmails);
      savePlayers(convertListToObject(listNames));
      onChangeInput(listNames);
    }
  };

  return (
    <div className="areaInput">
      <div className="main-title_areaInput">Let&#39;s Split up!</div>
      <div className="title-input__areaInput">
        Copy and paste the names separate by break line, example:<br/>
        {'Jon snow'}<br/>
        {'Darth Vader'}<br/>
        {'Messi'}<br/>
        {'Johan Cruijff'}<br/>
        <br/>
      </div>
      <div className="insert-players__areaInput">
        <textarea
          onKeyDown={convertEmailsStrToPlayers}
          name="insert_players"
          rows="10"
        />
      </div>
    </div>
  );
}

export default PlayerInput;
