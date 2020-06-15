import React from "react";
// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

function Auth() {
  return (
    <React.Fragment>
      <span>Email</span>
      <input placeholder="email" />
      <span>Password</span>
      <inpu placeholder="password" />
    </React.Fragment>
  );
}

export default Auth;
