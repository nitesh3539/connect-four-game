import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import GameFormDetail from "./container/form/GameFormDetail";
import ConnectFourGame from "./container/connect-four-game/ConnectFourGame";
import ConnectFourMainScreen from "./container/main-application/ConnectFourMainScreen";

const App = () => {
  const history = useHistory();

  useEffect(() => {
    let routeTo = localStorage.getItem("route");
    if (!routeTo) {
      routeTo = "/";
    }
    history?.push(routeTo);
  }, [history]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ConnectFourMainScreen} />
        <Route exact path="/form" component={GameFormDetail} />
        <Route exact path="/connectfour" component={ConnectFourGame} />
      </Switch>
    </Router>
  );
};

export default App;
