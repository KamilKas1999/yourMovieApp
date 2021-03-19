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

  const navigate = () => {
    props.history.push(props.link);
  };

  return (
    <div className={classes.InTheatersElement}>
      <div className={classes.Vote}>
        <p>{vote_average}</p>
      </div>
      <img src={poster} alt="poster" onClick={navigate}></img>
      <div>
        <div>
          <h3 onClick={navigate}>{title}</h3>
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
