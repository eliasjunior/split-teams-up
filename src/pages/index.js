import React, { useState } from "react"
import "../styles.css"
import presenter from "../presenter"
import DisplayPlayers from "./displayPlayers";

const {
  updatePlayerList,
  getPlayerListFromBox,
  addAllToDisplayBox,
  getStringEmailConvertListNames,
  convertListToObject,
  shuffle,
  get,
  getAll,
} = presenter

function Main() {
  const [emailsStr, setEmailsStr] = useState("")
  const [pList, setPlist] = useState([]);

  const splitTeamUp = () => {
    console.log("split up")
  }

  const addEmailToState = ({ target }) => {
    setEmailsStr(target.value)
    const listNames = getStringEmailConvertListNames(emailsStr)
    const players = convertListToObject(listNames)

    addAllToDisplayBox(players)

    const playerList = getPlayerListFromBox()
    setPlist(playerList.list)

    console.log("pList", pList)
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
            onChange={addEmailToState}
            name="insert_players"
            rows="10"
          ></textarea>
        </div>
      </div>
      <DisplayPlayers playerList={pList}></DisplayPlayers>
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
