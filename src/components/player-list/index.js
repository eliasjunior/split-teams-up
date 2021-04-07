import React, { useState } from "react";
import PlayerView from "../player-view";
import Presenter from "./Presenter";
import "./playerList.css";

const { getPlayers, shuffle } = Presenter;

function PlayerList({ onClickButton }) {
  const [validForm, setValidForm] = useState(false);
  const splitTeamUp = () => {
    const playerList = getPlayers();
    const foundInvalid = playerList.list.find((p) => p.type === "");
    setValidForm(foundInvalid);
    if (!foundInvalid) {
      onClickButton(shuffle(playerList.list));
    }
  };

  const formMessage = () => {
    if (validForm) {
      return <span className="form-error">Choose players level</span>;
    }
    return "";
  };

  const display = () => {
    const buildPlayerFromTable = (obj) => <PlayerView key={obj.id} {...obj} />;

    if (getPlayers().list.length === 0) {
      return "";
    }
    return (
      <React.Fragment>
        {getPlayers().list.map(buildPlayerFromTable)}
        <button
          type="button"
          className="split-up btn btn-primary"
          onClick={splitTeamUp}
        >
          Split up
        </button>
        {formMessage()}
      </React.Fragment>
    );
  };
  return (
    <div id="player-list" className="list-players">
      {display()}
    </div>
  );
}

export default PlayerList;
