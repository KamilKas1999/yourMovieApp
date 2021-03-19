import React from "react";
import classes from "./MostPopularElement.module.scss";
const MostPopularElement = (props) => {
  const { title, name, poster_path, release_date, vote_average } = props.info;
  const poster = "https://image.tmdb.org/t/p/w200" + poster_path;

  const navigate = () => {
    props.history.push(props.link);
  };

  console.log(props);
  return (
    <div className={classes.MostPopularElement} onClick={navigate}>
      <img src={poster} alt="poster"></img>
      <h4>
        {title}
        {name}
      </h4>
      <p>{release_date}</p>
      <div>
        <p>{vote_average}</p>
      </div>
    </div>
  );
};
export default MostPopularElement;
