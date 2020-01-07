import React, { useState, useEffect } from "react";
import PlayerView from "./playerView";
import Presenter from "../presenter";

const { updatePlayerList, getPlayers, shuffle } = Presenter;

function PlayerList({onClickButton}) {
  const [levelList, setLevelList] = useState([]);
  useEffect(() => {
    updatePlayerList(levelList);
  });

  const splitTeamUp = () => {
    const playerList = getPlayers();
    onClickButton(shuffle(playerList.list));
  };

  const updatePlayerOption = ({ value, id }) => {
    const foundIndex = levelList.findIndex(p => p.id === id);
    if (foundIndex === -1) {
      setLevelList(oldArray => [...oldArray, { value, id }]);
    } else {
      setLevelList(oldArray => {
        oldArray[foundIndex] = { value, id };
        return oldArray;
      });
    }
  };
  const display = () => {
    const buildPlayerFromTable = obj => (
      <PlayerView
        key={obj.id}
        {...obj}
        onChangePlayerOption={updatePlayerOption}
      ></PlayerView>
    );

    console.log("display...", getPlayers().list);

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
