import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default function Menu() {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <Link to="splitup">Split teams up</Link>
      </li>
      <li className="list-group-item">
        <Link to="">Confirm game[In construction]</Link>
      </li>
    </ul>
  );
}
