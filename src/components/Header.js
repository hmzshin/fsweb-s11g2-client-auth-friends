import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { UserContextObject } from "../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContextObject);
  return (
    <>
      <header id="page-header">
        <h1>FRIENDS DATABASE</h1>
        <nav>
          <ul>
            <li>
              {user.username ? (
                <Link to="/">{user.username}</Link>
              ) : (
                <Link to="/">LOGIN.</Link>
              )}
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
