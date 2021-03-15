import React from "react";
import classes from "./InTheatersElement.module.scss";
const inTheatersElement = (props) => {
  const {
    title,
    poster_path,
    release_date,
    vote_average,
    overview,
  } = props.info;
  const poster = "https://image.tmdb.org/t/p/w200" + poster_path;
  return (
    <div className={classes.InTheatersElement}>
      <div className={classes.Vote}>
        <p>{vote_average}</p>
      </div>
      <img src={poster} alt="poster"></img>
      <div>
        <div>
          <h3>{title}</h3>
          <p>{release_date}</p>
        </div>

        <div className={classes.Overview}>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
export default inTheatersElement;
