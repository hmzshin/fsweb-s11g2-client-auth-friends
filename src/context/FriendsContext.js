import { createContext, useReducer } from "react";

export const FriendsContextObject = createContext();

const friendReducer = (state = [], action) => {
  switch (action.type) {
    case "set_friend":
      return [...action.payload];
      break;
    case "add_friend":
      return [...state, ...action.payload];
      break;

    case "delete_friend":
      return state.filter((s) => s.id !== action.payload);
      break;

    case "edit_friend":
      return state.map((s) => {
        if (s.id === action.payload.id) {
          return action.payload;
        }
        return s;
      });
      break;

    default:
      return state;
      break;
  }
};

const FriendsContextProvider = ({ children }) => {
  const [friends, dispatchFriends] = useReducer(friendReducer);

  return (
    <FriendsContextObject.Provider value={{ friends, dispatchFriends }}>
      {children}
    </FriendsContextObject.Provider>
  );
};

export default FriendsContextProvider;
