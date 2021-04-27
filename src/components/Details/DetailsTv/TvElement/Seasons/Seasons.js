import React from "react";
import { Link } from "react-router-dom";
import classes from "./Seasons.module.scss";
const seasons = (props) => {

  return (
    <div className={classes.Seasons}>
      <h1>Seasons: </h1>
      {props.seasons.map((season, id) => {
        let link = `/details/tv/seasons/${props.id}/${season.season_number}`;
        const posterSrc =
          "https://image.tmdb.org/t/p/w200" + season.poster_path;
        return (
          <div className={classes.Season} key={id}>
            <img src={posterSrc} />
            <div>
              <p>Air date: {season.air_date}</p>
              <p> Episodes: {season.episode_count}</p>
              <p>{season.overview}</p>
              <Link to={link}>See season details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default seasons;
