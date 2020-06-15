import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Profile(emailValue) {
  console.log("emailValue", emailValue);

  return (
    <div className="profile__container">
      <Link to="account">
        <FontAwesomeIcon icon={faHeart} className="header__icon" size="lg" />
        back to account
      </Link>
      <div>Profile</div>
      <h1>Hello {emailValue.emailValue}</h1>
    </div>
  );
}

export default Profile;
