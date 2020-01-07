import React from "react";

function PlayerView(props) {
  const { name, id, onChangePlayerOption } = props;
  const updateLevel = ({ target }) => {
    const { value } = target;
    onChangePlayerOption({ value, id });
  };
  return (
    <div className="skills-group" key={id}>
      <div className="skills-group__name">{name}</div>
      <div className="skills">
        <label>
          <input name={id} type="radio" value="3" onChange={updateLevel} /> Easy
        </label>
      </div>
      <div className="skills">
        <label>
          <input name={id} type="radio" value="2" onChange={updateLevel} />{" "}
          Medium
        </label>
      </div>
      <div className="skills">
        <label>
          <input name={id} type="radio" value="1" onChange={updateLevel} /> Hard
        </label>
      </div>
    </div>
  );
}
export default PlayerView;
