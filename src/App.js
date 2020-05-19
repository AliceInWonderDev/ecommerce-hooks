import React from "react";
import "./App.scss";
import Layout from "./Components/Layout";
import Categories from "./Components/Categories";
import BestSeller from "./Components/BestSeller";

function App() {
  return (
    <Layout>
      <BestSeller />
      <h1 className="app-name">Market</h1>
      <Categories />
    </Layout>
  );
}

export default App;
