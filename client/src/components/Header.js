// import dependencies
import React from "react";
import { Link } from "react-router-dom";

// import files
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Cardio-Tracker
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Cardio Logs
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
