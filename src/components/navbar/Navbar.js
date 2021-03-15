import React from "react";
import classes from "./Navbar.module.scss";
import NavLinks from "./NavLinks/Navlinks";
import Peak from "./Peak/Peak";

const navbar = (props) => {


  return (
    <div className={classes.Navbar}>
      <Peak {...props} />
      <NavLinks />
    </div>
  );
};
export default navbar;
