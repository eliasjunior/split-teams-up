import React from "react";
import presenter from "../presenter";
const {
    savePlayers,
    getStringEmailConvertListNames,
    convertListToObject,
 } = presenter;

function PlayerInput({onChangeInput}) {
  const convertEmailsStrToPlayers = ({ target }) => {
    const tempEmails = target.value;
    const listNames = getStringEmailConvertListNames(tempEmails);
    savePlayers(convertListToObject(listNames));
    //workaround trigger parent
    onChangeInput();
  };

  return (
    <div className="areaInput">
      <div className="alert alert-secondary" role="alert">
        Add the players here, copy and paste the emails/name from outlook
        <br></br>
        {'Format: "Jon snow<snow@mastercard.com>;Aria<aria@mastercard.com>;"'}
      </div>
      <div className="insert-players__areaInput">
        <textarea
          onChange={convertEmailsStrToPlayers}
          name="insert_players"
          rows="10"
        ></textarea>
      </div>
    </div>
  );
}

export default PlayerInput;
