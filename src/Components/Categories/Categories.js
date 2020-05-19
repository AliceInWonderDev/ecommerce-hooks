import React from "react";
import "./Categories.scss";
import ItemInformation from "../ItemInformation/ItemInformation";

function Categories() {
  return (
    <div className="categories__container">
      <ItemInformation />
      <ItemInformation />
    </div>
  );
}

export default Categories;
