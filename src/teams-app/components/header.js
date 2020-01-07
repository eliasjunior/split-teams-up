import React from "react";
import logo from '../../img/icons8-soccer-player-80.png';

export default function Header() {
  const headerContent = "MC Football";
  return (
    <div className="main-header">
      <h4 className="title__main-header">
        {headerContent}
      </h4> 
      <img className="img__main-header" src={logo} alt="Logo" />
  </div>
  );
}
