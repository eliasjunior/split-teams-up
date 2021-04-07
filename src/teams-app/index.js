import React, { useState, useEffect } from "react";
import PlayerInput from "./components/playerInput";
import PlayerList from "./components/playerList";
import TeamsView from "./components/teamsView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll, scrollSpy } from "react-scroll";

function Teams() {
  const [teams, setTeams] = useState({});
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("scrollEvent begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("scrollEvent end", arguments);
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
    scroll.scrollToBottom();
  };

  return (
    <div className="content">
      <PlayerInput onChangeInput={updateInput}></PlayerInput>
      <div className="total-label">
        {players.length === 0 ? "" : `Total players ${players.length}`}
      </div>
      <PlayerList onClickButton={splitTeamsUp}></PlayerList>
      <TeamsView {...teams}></TeamsView>
    </div>
  );
}

export default Teams;
