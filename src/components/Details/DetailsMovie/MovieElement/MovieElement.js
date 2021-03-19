import React from "react";
import classes from "./MovieElement.module.scss";
const MovieElement = (props) => {
  const { backdrop_path, title } = props.info;
  const imgSrc = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  return (
    <div className={classes.MovieElement}>
      <h1>{title}</h1>
      {<img src={imgSrc} alt="image" />}
    </div>
  );
};
export default MovieElement;
