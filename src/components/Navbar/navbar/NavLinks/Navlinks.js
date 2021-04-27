import React from "react";
import classes from "./NavLinks.module.scss";
import NavLinkItem from "./NavLinkItem/NavLinkItem";
const navLinks = (props) => (
  <ul className={classes.NavLinks}>
    <NavLinkItem link="/movies">Movies</NavLinkItem>
    <NavLinkItem link="/series">Series</NavLinkItem>
  </ul>
);
export default navLinks;
