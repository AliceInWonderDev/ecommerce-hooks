import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.scss";
import Layout from "../Components/Layout";
import Account from "../Components/Account";
import Home from "../Components/Home";
// var firebase = require("firebase");
// var firebaseui = require("firebaseui");

function App() {

  
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
