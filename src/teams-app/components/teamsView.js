import React from "react";

function TeamsView({ orange, red }) {
  if(!orange || !red) {
    return ""
  }
  const buildOrange = () => {
    return orange.map(name => {
      return <li key={name} className="list-group-item">{name}</li>;
    });
  };

  const buildRed = () => {
    return red.map(name => {
      return <li key={name} className="list-group-item">{name}</li>;
    });
  };

  return (
    <div>
      <ul className="list-group row">
        <li className="list-group-item list-group-item-warning">Orange</li>
        {buildOrange()}
      </ul>
      <ul className="list-group row">
        <li className="list-group-item list-group-item-danger">Red</li>
        {buildRed()}
      </ul>
    </div>
  );
}

export default TeamsView;
