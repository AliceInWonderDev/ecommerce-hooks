import React from "react";
import "./Categories.scss";
import ItemInformation from "../ItemInformation/ItemInformation";
import WoodImg from "../../Utils/wood.jpg";
import PlasticImg from "../../Utils/plastic.jpg";
import MetalImg from "../../Utils/metal.jpg";
import MimbreImg from "../../Utils/mimbre.jpg";

function Categories() {
  return (
    <div className="categories__container">
      <ItemInformation image={WoodImg} text={"Wood"} />
      <ItemInformation image={PlasticImg} text={"Plastic"} />
      <ItemInformation image={MetalImg} text={"Metal"} />
      <ItemInformation image={MimbreImg} text={"Mimbre"} />
    </div>
  );
}

export default Categories;
