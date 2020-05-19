import React from "react";
import "./Layout.scss";
import Header from "../Header";
import Footer from "../Footer";
import PropTypes from "prop-types";

function Layout(props) {
  return (
    <div className="wrapper__container">
      <Header />
      <div className="wrapper__inner-container">{props.children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
