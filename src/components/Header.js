import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">LOGIN.</Link>
          </li>
          <li>
            <Link to="/friends">FRIENDLIST.</Link>
          </li>
          <li>
            <Link to="/friends/add">ADDFRIEND.</Link>
          </li>
          <li>LOGOUT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
