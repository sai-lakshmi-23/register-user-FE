import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ path, label, linkText }) => {
  return (
    <div>
      <div>{label}</div>
      <nav>
        <Link to={path}>{linkText}</Link>
      </nav>
    </div>
  );
};

export default Nav;
