import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default () => {
  return (
    <div className="container shadow-sm p-3 mb-5 bg-white rounded">
      <div className="menu-item">
        <Link to="splitup">Split teams up</Link>
      </div>
      <div className="menu-item">
        <Link to="example">Confirm game</Link>
      </div>
      <div className="menu-item">
        <Link to="example">List emails example</Link>
      </div>
    </div>
  );
};
