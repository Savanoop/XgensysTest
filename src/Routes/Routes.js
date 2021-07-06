/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/login/LoginPage";
import Home from "../pages/home/Home";
import PrivateRoute from "../pages/privateAuth/privateAuth";

export default () => {
  return (
    <Router>
      <App>
        <Switch>
        <PrivateRoute  path="/home" >
          <Home/>
          </PrivateRoute>
        <Route path="/" component={LoginPage} />
        </Switch>
      </App>
    </Router>
  );
};
