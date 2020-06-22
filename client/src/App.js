import React, { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import UserContext from "./context/userContext";

import Login from "./components/UserForm/Login";
import { Switch, Route } from "react-router-dom";
import AppContainer from "./components/independent/AppContainer";

const App = () => {
  const [user, setUser] = useState({
    isUser: false,
  });

  return (
    <UserContext.Provider value={{ user }}>
      <Switch>
        <Route path="/" exact component={AppContainer} />
        <Route path="/login" component={Login} />
      </Switch>
    </UserContext.Provider>
  );
};

export default App;
