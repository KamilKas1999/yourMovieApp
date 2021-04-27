import React from "react";
import NavLinkItem from "../navbar/NavLinks/NavLinkItem/NavLinkItem";
import classes from './SecondNavBar.module.scss'
const secondNavBar = (props) => {
  return (
    <ul className = {classes.SecondNavBar}>
      {props.links.map((link,id) => {
        return <NavLinkItem key = {id} link={link.link}>{link.text}</NavLinkItem>;
      })}
    </ul>
  );
};
export default secondNavBar;
