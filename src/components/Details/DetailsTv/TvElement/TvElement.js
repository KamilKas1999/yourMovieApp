import React from "react";
import classes from "./TvElement.module.scss";
const TvElement = (props) => {
  const { backdrop_path, name } = props.info;
  const imgSrc = "https://image.tmdb.org/t/p/w500" + backdrop_path;



  return (
    <div className={classes.TvElement}>
      <h1 >{name}</h1>
      <img src={imgSrc} alt="image"  />
    </div>
  );
};
export default TvElement;
