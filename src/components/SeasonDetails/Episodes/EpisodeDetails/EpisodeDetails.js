import React, { useContext, useEffect, useState } from "react";
import classes from "./EpisodeDetails.module.scss"
const EpisodeDetails = (props) => {
  const{still_path, name , overview, air_date}=(props.episode);
  const posterSrc = "https://image.tmdb.org/t/p/w200" + still_path;

  return (
    <div className = {classes.Episode}>
      <div className = {classes.Image}>
      <img src = {posterSrc}></img>
      </div>
  
      <div className = {classes.Detail}>
        <h3>{name}</h3>
        <p>{overview}</p>
        <p>{air_date}</p> 
      </div>
    </div>
  );
};
export default EpisodeDetails;
