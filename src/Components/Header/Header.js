import React from "react";
import "./Header.scss";
import CapricornImg from "../../Utils/capricorn.jpg";

function Header() {
  return (
    <div className="header__container">
      {/* <div className="header__main-container"> */}
      <div className="header__brand-logo">
        <img src={CapricornImg} alt="logo" width="100px" />
      </div>

      <ul className="header__container-ul">
        <li>
          <a href="/home" className="header__option-text">
            Home
          </a>
        </li>
        <li>
          <a href="/Categories" className="header__option-text">
            Categories
          </a>
        </li>
        <li>
          <a href="/Orders" className="header__option-text">
            Orders
          </a>
        </li>
      </ul>
      <div>
        <a href="/Cart" className="header__option-text">
          <img src="" alt="cart logo"></img>
        </a>
      </div>
    </div>
    // </div>
  );
}

export default Header;
