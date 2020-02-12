import React, { useState } from "react";
import Presenter from "../presenter";
import "./playerView.css";
const { getPlayers } = Presenter;

function PlayerView(props) {
  const [checkVal, setCheckVal] = useState("");
  const { name, id } = props;

  const updateLevel = ({ target }) => {
    const { value, name } = target;
    const playerList = getPlayers();
    //workaround for now
    playerList.list.forEach(p => {
      if (p.id === name) {
        p.type = value;
      }
    });
    setCheckVal(value);
  };
  const getMainClass = () => {
    if (checkVal !== "") {
      return "skills-group valid__skills-group";
    }
    return "skills-group invalid";
  };
  return (
    <div className={getMainClass()} key={id}>
      <div className="name__skills-group">{name}</div>
      <div className="check__skills-group ">
        <label>
          <input name={id} type="radio" value="3" onChange={updateLevel} /> Easy
        </label>
      </div>
      <div className="check__skills-group ">
        <label>
          <input name={id} type="radio" value="2" onChange={updateLevel} />{" "}
          Medium
        </label>
      </div>
      <div className="check__skills-group ">
        <label>
          <input name={id} type="radio" value="1" onChange={updateLevel} /> Hard
        </label>
      </div>
    </div>
  );
}
export default PlayerView;
