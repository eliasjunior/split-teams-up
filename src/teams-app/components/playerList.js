import React from "react";
import PlayerView from "./playerView";
import Presenter from "../presenter";

const { getPlayers, shuffle } = Presenter;

function PlayerList({onClickButton}) {
  const splitTeamUp = () => {
    const playerList = getPlayers();
    const foundInvalid = playerList.list.find(p => p.type === "");
    if(!foundInvalid) {
      onClickButton(shuffle(playerList.list));
    } 
  };

  const display = () => {
    const buildPlayerFromTable = obj => (
      <PlayerView
        key={obj.id}
        {...obj}
      ></PlayerView>
    );

    if (getPlayers().list.length === 0) {
      return "";
    }
    return <React.Fragment>
      {getPlayers().list.map(buildPlayerFromTable)}
      <button
        type="button"
        className="split-up btn btn-primary"
        onClick={splitTeamUp}
      >
        Split up
      </button>
    </React.Fragment>;
  };
  return (
    <div id="player-list" className="list-players">
      {display()}
    </div>
  );
}

export default PlayerList;
