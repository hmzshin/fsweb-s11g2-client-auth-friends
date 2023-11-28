import LoginPage from "./LoginPage";
import FriendsPage from "./FriendsPage";
import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Switch>
        <Route path="/friends/add" exact></Route>

        <Route path="/friends" exact>
          <FriendsPage />
        </Route>

        <Route path="/" exact>
          <LoginPage />
        </Route>

        <Route path="*">
          <h1>404 - Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
