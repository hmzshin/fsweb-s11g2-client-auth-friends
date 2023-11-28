import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header id="page-header">
        <h1>FRIENDS DATABASE</h1>
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
            <li>
              <p>LOGOUT</p>
            </li>
          </ul>
        </nav>
      </header>
      <div className="horizontal-line"></div>
    </>
  );
};

export default Header;
