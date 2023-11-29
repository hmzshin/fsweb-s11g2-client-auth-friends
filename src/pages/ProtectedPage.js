import React from "react";
import { useContext } from "react";
import { UserContextObject } from "../context/UserContext";
import { Redirect } from "react-router-dom";

const ProtectedPage = ({ children, from }) => {
  const { user } = useContext(UserContextObject);

  return user.username ? (
    children
  ) : (
    <Redirect to={{ pathname: "/", state: { referrer: from } }} />
  );
};

export default ProtectedPage;
