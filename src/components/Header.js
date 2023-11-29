import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { UserContextObject } from "../context/UserContext";
import axios from "axios";

const Header = () => {
  const { user, dispatchUser } = useContext(UserContextObject);
  function logout() {
    const token = localStorage.getItem("token");
    axios
      .post(
        "http://localhost:9000/api/logout",
        {
          username: "workintech",
          password: "wecandoit",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(function (response) {
        console.log("logout", response);
        localStorage.clear("token");
        dispatchUser({
          type: "logout",
          payload: {
            username: "",
            password: "",
          },
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
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
            <li onClick={logout}>
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
