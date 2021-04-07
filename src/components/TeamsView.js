import React from "react";
import "./teamsView.css";

function TeamsView({ orange, red }) {
  if (!orange || !red) {
    return "";
  }
  const buildOrange = () => {
    return orange.map((name, i) => {
      return (
        <li key={i} className="list-group-item">
          {name}
        </li>
      );
    });
  };

  const buildRed = () => {
    return red.map((name, i) => {
      return (
        <li key={i} className="list-group-item">
          {name}
        </li>
      );
    });
  };

  return (
    <div className="teamView">
      <ul className="list-group row__teamView">
        <li className="list-group-item list-group-item-warning">Orange</li>
        {buildOrange()}
      </ul>
      <ul className="list-group row__teamView">
        <li className="list-group-item list-group-item-danger">Red</li>
        {buildRed()}
      </ul>
    </div>
  );
}

export default TeamsView;
