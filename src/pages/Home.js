import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BestSeller from "../Components/BestSeller";
import Categories from "../Components/Categories";
import CategoriesChildren from "../Components/Categories/CategoriesChildren";

function Home() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <BestSeller />
          <Categories />
        </Route>
        <Route exact path="/products/:id">
          <CategoriesChildren />
        </Route>
      </Switch>
    </Router>
  );
}

export default Home;
