import React from "react";
import BestSeller from "../Components/BestSeller";
import Categories from "../Components/Categories";

function Home() {
  return (
    <React.Fragment>
      <BestSeller />
      <Categories />
    </React.Fragment>
  );
}

export default Home;
