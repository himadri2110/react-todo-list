import React from "react";
import reactFavIcon from "../favicon.ico";

function Header() {
  return (
    <header>
      <h1>
        <img src={reactFavIcon} alt="react-icon" />
        &nbsp;To Do List
      </h1>
    </header>
  );
}

export default Header;
