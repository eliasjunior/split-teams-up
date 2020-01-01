import React, { useState } from "react";
import PlayerList from "./playerList";
import TeamsView from "./teamsView";
import PlayerInput from "./playerInput";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  const [teams, setTeams] = useState({});
  //workaround for now, when playerInput changes need to trigger the parent render, now the data its only in memory
  const [update, setUpdate] = useState({});

  const splitTeamsUp = (list) => {
    setTeams(list);
  }

  return (
    <React.Fragment>
      <PlayerInput onChangeInput={() => setUpdate(!update)}></PlayerInput>
      <PlayerList onClickButton={splitTeamsUp} update={update}></PlayerList>
      <TeamsView {...teams}></TeamsView>
    </React.Fragment>
  );
}
export default Main;
