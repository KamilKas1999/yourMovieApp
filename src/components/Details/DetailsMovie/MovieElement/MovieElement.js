import React from "react";
import classes from "./MovieElement.module.scss";
const MovieElement = (props) => {
  const {
    backdrop_path,
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    original_language,
    genres,
    runtime,
    tagline, homepage,
    budget
  } = props.info;
  const imgSrc = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  const posterSrc = "https://image.tmdb.org/t/p/w200" + poster_path;
  return (
    <div className={classes.MovieElement}>
      <div className={classes.Header}>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
        <h2>{tagline}</h2>
        <img src={imgSrc} alt="image" />
        <div className={classes.Vote}>
          <p>{vote_average}</p>
        </div>
      </div>
      <div className={classes.Main}>
        <img src={posterSrc} alt="image" />
        <div>
          <p>{overview}</p>
        </div>
      </div>
      <div className={classes.Details}>
        <p>Original laguage: {original_language}</p>
        <p>Genres: {genres.map(genre => genre.name).join(", ")}</p>
        <p>Runtime: {runtime}m</p>
        <p>Budget: {budget}$</p>
      </div>
      {
        homepage ?  <a href = {homepage}>Homepage</a> : null
      }
     
    </div>
  );
};
export default MovieElement;
