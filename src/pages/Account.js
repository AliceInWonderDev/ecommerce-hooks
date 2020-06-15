import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "../Components/Account/Profile";
import "../Components/Account/Account.scss";

function Account() {
  const [emailValue, setEmailValue] = useState("");

  const updateUserValue = (e) => {
    console.log("emailValue", emailValue);
    setEmailValue(e.target.value);
  };

  return (
    <Router>
      <Switch>
        <Route path="/account">
          <span className="account__variable-texts">
            Go to your account or create one
          </span>
          <hr />
          <div className="account__container">
            <div className="account__profile">
              Log in to your profile
              <div className="account__input-container">
                <input
                  value={emailValue}
                  onChange={updateUserValue}
                  className="account__input"
                  placeholder="email"
                />
              </div>
              <div className="account__input-container">
                <input
                  className="account__input"
                  placeholder="password"
                  type="password"
                />
              </div>
              <button className="default-btn">
                <Link to="/profile">log in profile</Link>
              </button>
            </div>
            <div className="account__login">
              <span className="account__variable-texts">Sing up</span>
              <div className="account__input-container">
                <input
                  className="account__input"
                  placeholder="Name and Lastname"
                />
              </div>
              <div className="account__input-container">
                <input className="account__input" placeholder="Email" />
              </div>
              <div className="account__input-container">
                <input
                  className="account__input"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="account__input-container">
                <input
                  className="account__input"
                  placeholder="Confirm password"
                  type="password"
                />
              </div>
              <button className="default-btn">
                <Link to="/profile">create profile</Link>
              </button>
            </div>
          </div>
        </Route>
        <Route path="/profile">
          <Profile emailValue={emailValue} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Account;
