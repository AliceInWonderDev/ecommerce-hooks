import React from "react";
import "./ItemInformation.scss";

function ItemInformation(props) {
  return (
    <React.Fragment>
      <div className="item-information__container">
        <div className="item-information__img">
          <img
            src={props.img}
            alt="categories"
            className="item-information__size"
          />
        </div>
        <div className="item-information__inner-box">{props.category}</div>
      </div>
    </React.Fragment>
  );
}

export default ItemInformation;
