import React from "react";
import Seasons from "./Seasons/Seasons";
import classes from "./TvElement.module.scss";
const TvElement = (props) => {
  const {
    backdrop_path,
    name,
    first_air_date,
    vote_average,
    tagline,
    poster_path,
    overview,
    homepage,
    next_episode_to_air,
    number_of_episodes,
    number_of_seasons,
    status,
    type,
    genres,
    networks,
    original_language,
    episode_run_time, seasons, id
  } = props.info;
  const imgSrc = "https://image.tmdb.org/t/p/w500" + backdrop_path;
  const posterSrc = "https://image.tmdb.org/t/p/w200" + poster_path;
  return (
    <div className={classes.TvElement}>
      <div className={classes.Header}>
        <h1>{name}</h1>
        <h3>{first_air_date}</h3>
        <h2>{tagline}</h2>
        <img src={imgSrc} alt="image" />
        <div className={classes.Vote}>
          <p>{vote_average}</p>
        </div>
      </div>
      <div className={classes.Main}>
        <img src={posterSrc} alt="image" />
        {overview ? (
          <div>
            <p>{overview}</p>
          </div>
        ) : null}
      </div>
      {next_episode_to_air ? (
        <div className={classes.Next}>
          <p>Next episode:</p>
          <p>{next_episode_to_air.overview}</p>
          <p>{next_episode_to_air.air_date}</p>
        </div>
      ) : null}
      <Seasons seasons = {seasons} id= {id}/>
      <div className={classes.Details}>
        <p>Seasons : {number_of_seasons}</p>
        <p>Episodes : {number_of_episodes}</p>
        <p>Status : {status}</p>
        <p>Type : {type}</p>
        <p>Original laguage: {original_language}</p>
        <p>Genres: {genres.map(genre => genre.name).join(", ")}</p>
        <p>Where to watch: {networks.map(network => network.name).join(", ")}</p>
        <p>Runtime: {episode_run_time.join(", ")}</p>
      </div>
      {homepage ? <a href={homepage}>Homepage</a> : null}
    </div>
  );
};
export default TvElement;
