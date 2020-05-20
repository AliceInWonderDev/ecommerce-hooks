import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faHouseUser,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import CapricornImg from "../../Utils/capricorn.jpg";

function Header() {
  return (
    <div className="header__main-container">
      <div className="header__container">
        <div className="header__brand-logo">
          <img src={CapricornImg} alt="logo" className="header__logo" />
        </div>

        <ul className="header__container-ul">
          <li>
            <a href="/home" className="header__option-text">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="header__icon"
                size="lg"
              />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/Search" className="header__option-text">
              <FontAwesomeIcon
                icon={faSearch}
                className="header__icon"
                size="lg"
              />
              <p>Search</p>
            </a>
          </li>
          <li>
            <a href="/Favorites" className="header__option-text">
              <FontAwesomeIcon
                icon={faHeart}
                className="header__icon"
                size="lg"
              />
              <p>Favorites</p>
            </a>
          </li>
        </ul>
        <div>
          <div>
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="header__icon"
              size="lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
