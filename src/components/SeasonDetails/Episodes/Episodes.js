
import React, { useContext, useEffect, useState } from "react";
import EpisodeDetails from './EpisodeDetails/EpisodeDetails'
import classes from './Episodes.module.scss'

const Episodes = (props) => {
console.log(props.episodes)
console.log("episode")


  return (
    <div className={classes.Episodes}>
      { props.episodes ? props.episodes.map((episode,id) => {
          return <EpisodeDetails episode = {episode} key = {id}/>
      }) : null}
    </div>
  );
};
export default Episodes;