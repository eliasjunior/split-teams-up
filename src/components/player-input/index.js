import React, { useState } from "react";
import Presenter from "./Presenter";
import "./playerInput.css";
const { savePlayers, userTypedInput, convertListToPlayers } = Presenter;
function PlayerInput({ onChangeInput, onRearangeView }) {
  const [inputVal, setInputVal] = useState("");
  const [defaultRadio, setDefaultRadio] = useState(true);
  const handleUserInput = ({ keyCode, key }) => {
    if (defaultRadio) {
      return;
    }
    const ENTER_KEY = 13;
    if (keyCode === ENTER_KEY) {
      onRearangeView();

      const listNames = userTypedInput(inputVal);
      onChangeInput(convertListToPlayers(listNames));
      savePlayers(convertListToPlayers(listNames));
      setInputVal(inputVal + "\n");
    } else if (keyCode >= 48 && keyCode <= 90) {
      setInputVal(inputVal + key);
    }
  };

  const handleOnInputPasted = ({ target }) => {
    if (!defaultRadio) {
      return;
    }
    const listNames = userTypedInput(target.value);
    onChangeInput(convertListToPlayers(listNames));
    savePlayers(convertListToPlayers(listNames));
    setInputVal(target.value);
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
        <div className="radio-btn_areaInput">
          <input
            type="radio"
            name="typingPaste"
            onChange={() => setDefaultRadio(true)}
            value={defaultRadio}
            defaultChecked={defaultRadio}
          />
          <label>Paste</label>
          <input
            type="radio"
            name="typingPaste"
            onChange={() => {
              setInputVal("");
              setDefaultRadio(false);
            }}
            value={!defaultRadio}
          />
          <label>Type</label>
        </div>
        <textarea
          onKeyDown={handleUserInput}
          onChange={handleOnInputPasted}
          name="insert_players"
          rows="10"
        />
      </div>
    </div>
  );
}

export default PlayerInput;
