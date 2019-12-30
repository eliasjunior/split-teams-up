import React, { useState } from "react"
import presenter from "../presenter"
import PlayerList from "./PlayerList";

const {
  updatePlayerList,
  getPlayers,
  savePlayers,
  getStringEmailConvertListNames,
  convertListToObject,
  shuffle,
  get,
  getAll,
} = presenter

function Main() {
  const [pList, setPlist] = useState([]);

  const splitTeamUp = () => {
    console.log("split up")
  }

  const convertEmailsStrToPlayers = ({ target }) => {
    const tempEmails = target.value;
    const listNames = getStringEmailConvertListNames(tempEmails)
    savePlayers(convertListToObject(listNames));
    setPlist(getPlayers().list)
  }

  return (
    <div>
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
      <PlayerList playerList={pList}></PlayerList>
      <button
        type="button"
        className="split-up btn btn-primary"
        onClick={splitTeamUp}>
        Split up
      </button>
      <div className="result"></div>
    </div>
  )
}

export default Main
