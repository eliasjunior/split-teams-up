import React, { useState, useEffect } from "react";
import PlayerInput from "./player-input";
import PlayerList from "./player-list";
import TeamsView from "./TeamsView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

function Teams() {
  const [teams, setTeams] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      // console.log("scrollEvent begin", arguments);
    });
    Events.scrollEvent.register("end", function () {
      // console.log("scrollEvent end", arguments);
    });
    scrollSpy.update();
    // Specify how to clean up after this effect:
    return function cleanup() {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, [players.length]);

  const splitTeamsUp = (list) => {
    setTeams(list);
    scroll.scrollToBottom();
  };

  const updateInput = (_players) => {
    setPlayers(_players);
  };

  const updateViewPort = () => {
    scroll.scrollToBottom();
  };
  const getTotalLabel = () => {
    if (!players || !players.list) {
      return "";
    }
    return players.list === 0
      ? ""
      : "Total players " + players.list.length;
  };
  return (
    <div className="content">
      <PlayerInput
        onChangeInput={updateInput}
        onRearangeView={updateViewPort}
      ></PlayerInput>
      <div className="total-label">{getTotalLabel()}</div>
      <PlayerList onClickButton={splitTeamsUp}></PlayerList>
      <TeamsView {...teams}></TeamsView>
    </div>
  );
}

export default Teams;
