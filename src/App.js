import React from "react";
import "./styles.css";
import Header from "./components/common/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import Login from "./view/Login";
import Manage from "./view/Manage";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/manage">
            <Manage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
