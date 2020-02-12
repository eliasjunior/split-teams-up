import React from "react";
import logo from "../../img/icons8-soccer-player-80.png";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();

  const headerContent = "MC Football";
  const displayBack = () => {
    const SLASH_BAR = 2;
    const isHome = location.pathname.length < SLASH_BAR;
    if (isHome) {
      return "";
    } else {
      return (
        <Link className="menu__main-header" to="/">
          BACK
        </Link>
      );
    }
  };
  return (
    <div className="main-header">
      {displayBack()}
      <h4 className="title__main-header">{headerContent}</h4>
      <img className="img__main-header" src={logo} alt="Logo" />
    </div>
  );
}
