import React from "react";
import classes from "./MostPopularShortElement.module.scss";
const MostPopularShortElement = (props) => {
  const { title, image } = props.data;
  return (
    <div className={classes.MostPopularShortElement}>
      <img src={image} alt = 'poster'/>
      <p>{title}</p>
    </div>
  );
};
export default MostPopularShortElement;
