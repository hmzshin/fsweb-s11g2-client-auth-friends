import { createContext, useReducer } from "react";

export const UserContextObject = createContext();
const initialData = {
  username: "",
  password: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const login = {
        username: action.payload.username,
        password: action.payload.password,
      };
      return login;
      break;

    case "logout":
      const logout = {
        username: action.payload.username,
        password: action.payload.password,
      };
      return logout;
      break;

    default:
      return state;
      break;
  }
};

const UserContextProvider = ({ children }) => {
  const [user, dispatchUser] = useReducer(userReducer, initialData);

  return (
    <UserContextObject.Provider value={{ user, dispatchUser }}>
      {children}
    </UserContextObject.Provider>
  );
};

export default UserContextProvider;
