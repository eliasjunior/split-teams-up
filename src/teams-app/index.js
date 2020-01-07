import React, { useState, useEffect } from "react";
import PlayerInput from "./components/playerInput";
import PlayerList from "./components/playerList";
import TeamsView from "./components/teamsView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Events, animateScroll as scroll, scrollSpy } from 'react-scroll'

function Teams() {
  const [teams, setTeams] = useState({});
  //workaround for now, when playerInput changes need to trigger the parent render, now the data its only in memory
  const [update, setUpdate] = useState({});

  useEffect( () => {
    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

     // Specify how to clean up after this effect:
     return function cleanup() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  })

  const splitTeamsUp = list => {
    setTeams(list);
    scroll.scrollToBottom()
  };

  const updateInput = () => {
    setUpdate(!update)
    scroll.scrollToBottom()
  }

  return (
    <div className="content">
      <PlayerInput onChangeInput={updateInput}></PlayerInput>
      <PlayerList onClickButton={splitTeamsUp} update={update}></PlayerList>
      <TeamsView {...teams}></TeamsView>
    </div>
  );
}

export default Teams;
