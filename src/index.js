import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FriendsContextProvider from "./context/FriendsContext";
import UserContextProvider from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FriendsContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </FriendsContextProvider>
  </BrowserRouter>
);
