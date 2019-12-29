import React from "react"

function DisplayPlayers({playerList}) {
  const display = () => {
    console.log(playerList)
    if (!playerList || playerList.length === 0) {
      return ""
    }
    return playerList
        .map((obj, id) => <AddLine key={id} {...obj}></AddLine>)
  }

  return <div className="list-players">{display()}</div>
}

const AddLine = ({name, id}) => {
  return (
    <ul className="list-group row">
      <li className="list-group-item">
        <div className="skills-group">
          <div className="skills-group__name">{name}</div>
          <div className="skills">
            <label>
              {name}
              <input type="radio" value="3" /> Easy
            </label>
          </div>
          <div className="skills">
            <label>
            {name}
              <input  type="radio" value="2" /> Medium
            </label>
          </div>
          <div className="skills">
            <label>
            {name}
              <input type="radio" value="1" /> Hard
            </label>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default DisplayPlayers
