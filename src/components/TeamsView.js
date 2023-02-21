import React from "react";
import "./teamsView.css";

function TeamsView({ orange, red }) {
  if (!orange || !red) {
    return "";
  }

  return (
    <div className="teamView">
      <ul className="list-group row__teamView">
        <li className="list-group-item list-group-item-warning">Team A</li>
        <DisplayPlayer players={orange}></DisplayPlayer>
      </ul>
      <ul className="list-group row__teamView">
        <li className="list-group-item list-group-item-danger">Team B</li>
        <DisplayPlayer players={red}></DisplayPlayer>
      </ul>
    </div>
  );
}

export default TeamsView;

function DisplayPlayer({ players }) {
  return players.map((player) => {
    const { name, level, id } = player;
    return (
      <li key={id} className="list-group-item">
        {name} [{level}]
      </li>
    );
  });
}
