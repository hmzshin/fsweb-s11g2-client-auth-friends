import { createContext, useReducer } from "react";

export const UserContextObject = createContext();
const initialData = {
  username: "",
  password: "",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "login":
      const object = {
        username: action.payload.username,
        password: action.payload.password,
      };
      return object;
      break;

    case "logout":
      return state.filter((s) => s.id !== action.payload);
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
