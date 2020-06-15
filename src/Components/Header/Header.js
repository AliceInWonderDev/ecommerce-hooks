import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faHouseUser,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Header.scss";
import CapricornImg from "../../Utils/capricorn.jpg";

function Header() {
  return (
    <div className="header__main-container">
      <div className="header__container">
        <Link to="/">
          <div className="header__brand-logo">
            <img src={CapricornImg} alt="logo" className="header__logo" />
          </div>
        </Link>

        <ul className="header__container-ul">
          <li>
            <Link to="/" className="header__option-text">
              <FontAwesomeIcon
                icon={faHouseUser}
                className="header__icon"
                size="lg"
              />
              Home
            </Link>
          </li>
          <li>
            <Link to="/search" className="header__option-text">
              <FontAwesomeIcon
                icon={faSearch}
                className="header__icon"
                size="lg"
              />
              Search
            </Link>
          </li>
          <li>
            <Link to="/account" className="header__option-text">
              <FontAwesomeIcon
                icon={faHeart}
                className="header__icon"
                size="lg"
              />
              Account
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/pay" className="header__option-text">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="header__icon"
              size="lg"
            />
            Bag
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
