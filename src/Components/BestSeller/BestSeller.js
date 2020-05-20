import React from "react";
import Slider from "@farbenmeer/react-spring-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./BestSeller.scss";
import SofaImg from "../../Utils/sofa.jpg";
import SofaImg2 from "../../Utils/sofa2.jpg";
import SofaImg3 from "../../Utils/sofa3.jpg";
import SofaImg4 from "../../Utils/sofa4.jpg";

function BestSeller() {
  const onSlideChange = (index) => console.log(`changed to slide ${index}`);
  return (
    <div className="best-seller__container">
      <div className="best-seller__main-container">
        <Slider onSlideChange={onSlideChange} hasBullets>
          <img src={SofaImg} alt="sofa" className="best-seller__size" />
          <img src={SofaImg3} alt="sofa" className="best-seller__size" />
          <img src={SofaImg4} alt="sofa" className="best-seller__size" />
          <img src={SofaImg2} alt="sofa" className="best-seller__size" />
        </Slider>
      </div>

      <div className="best-seller__text-container">
        <p className="best-seller__title">Best Sellers</p>
        <span className="best-seller__text-decoration">
          <a href="/bestSeller" className="header__option-text">
            Click to proceed to our best sellers{" "}
            <FontAwesomeIcon icon={faStar} className="header__icon" size="lg" />
          </a>
        </span>
        <div className="header__option-input">
          <p>
            We love to make you happy, register your email to have the best
            products
          </p>
          <input placeholder="enter your email" />
        </div>
      </div>
    </div>
  );
}

export default BestSeller;
