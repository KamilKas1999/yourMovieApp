import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinkItem.module.scss";
const navLinkItem = (props) => (
  <li className={classes.NavLinkItem}>
    <NavLink activeClassName={classes.active} to={props.link}>
      {props.children}
    </NavLink>
  </li>
);
export default navLinkItem;
