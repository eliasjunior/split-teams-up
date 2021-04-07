import React from "react";
import Presenter from "./Presenter";
import "./playerInput.css";
const {
  savePlayers,
  getStringEmailConvertListNames,
  convertListToObject,
} = Presenter;

function PlayerInput({ onChangeInput }) {
  const convertEmailsStrToPlayers = ({ target }) => {
    const tempEmails = target.value;
    const listNames = getStringEmailConvertListNames(tempEmails);
    savePlayers(convertListToObject(listNames));
    onChangeInput(listNames);
  };

  return (
    <div className="areaInput">
      <div className="main-title_areaInput">Let's Split up!</div>
      <div className="title-input__areaInput">
        Copy and paste the emails/name from the email list:{" "}
        {'e.g: "Jon snow<snow@mastercard.com>;'} or just type the names
        separated by {";"}
      </div>
      <div className="insert-players__areaInput">
        <textarea
          onChange={convertEmailsStrToPlayers}
          name="insert_players"
          rows="10"
        />
      </div>
    </div>
  );
}

export default PlayerInput;
