import axios from "axios";
import React, { useContext, useEffect } from "react";
import { FriendsContextObject } from "../context/FriendsContext";
import Friend from "./Friend";
import "./FriendList.css";
const FriendList = () => {
  const token = localStorage.getItem("token");
  const { friends, dispatchFriends } = useContext(FriendsContextObject);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        dispatchFriends({ type: "set_friend", payload: response.data });
        console.log("logedin oldu ******", response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("friends context ", friends);
  }, [friends]);

  return (
    <div id="context-container">
      <h2>FRIEND LIST</h2>
      {friends &&
        friends.map((friend, index) => <Friend key={index} friend={friend} />)}
    </div>
  );
};

export default FriendList;
