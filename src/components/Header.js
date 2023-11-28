import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link path="/login">LOGIN.</Link>
          </li>
          <li>
            <Link path="/friends">FRIENDLIST.</Link>
          </li>
          <li>
            <Link path="/friends/add">ADDFRIEND.</Link>
          </li>
          <li>LOGOUT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
