import React from "react";
import classes from "./Seasons.module.scss";
const seasons = (props) => {
  return (
    <div className={classes.Seasons}>
      <h1>Seasons: </h1>
      {props.seasons.map((season, id) => {
        const posterSrc =
          "https://image.tmdb.org/t/p/w200" + season.poster_path;
        return (
          <div className={classes.Season} key={id}>
            <img src={posterSrc} />
            <div>
              <p>Air date: {season.airdate}</p>
              <p> Episodes: {season.episode_count}</p>
              <p>{season.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default seasons;
