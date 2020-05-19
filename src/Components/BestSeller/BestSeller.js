import React from "react";
import "./BestSeller.scss";
import SofaImg from "../../Utils/sofa.jpg";

function BestSeller() {
  return (
    <React.Fragment>
      <div className="best-seller__container">
        <img src={SofaImg} alt="sofa" className="best-seller__size" />
      </div>
    </React.Fragment>
  );
}

export default BestSeller;
