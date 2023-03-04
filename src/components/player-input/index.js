import React from "react";
import Presenter from "./Presenter";
import "./playerInput.css";
const { savePlayers, userTypedInput, convertListToPlayers } = Presenter;
function PlayerInput({ onChangeInput }) {
  const handleOnInputPasted = ({ target }) => {
    const listNames = userTypedInput(target.value);
    onChangeInput(convertListToPlayers(listNames));
    savePlayers(convertListToPlayers(listNames));
  };

  return (
    <div className="areaInput">
      <div className="main-title_areaInput">Let&#39;s Split up!</div>
      <div className="title-input__areaInput">
        Copy and paste the names separate by line break[enter], example:
        <br />
        {"Jon snow"}
        <br />
        {"Darth Vader"}
        <br />
        {"Messi"}
        <br />
        {"Johan Cruijff"}
        <br />
      </div>
      <div className="insert-players__areaInput">
        <textarea
          onChange={handleOnInputPasted}
          name="insert_players"
          rows="10"
        />
      </div>
    </div>
  );
}

export default PlayerInput;
