import React from "react";
import classes from "./SearchElement.module.scss";
const SearchElement = (props) => {
  const {
    name,
    title,
    poster_path,
    release_date,
    first_air_date,
    overview,
  } = props.info;
  const imgSrc = "https://image.tmdb.org/t/p/w200" + poster_path;

  const navigate = () => {
    props.history.push(props.link);
  };

  return (
    <div className={classes.SearchElement} onClick = {navigate}>
      <img src={imgSrc} alt="poster" />
      <div>
        <h3>
          {name}
          {title}
        </h3>
        <p>
          {release_date}
          {first_air_date}
        </p>
        <div className={classes.Scrol}>
          <p>{overview}</p>
        </div>
      </div>
    </div>
  );
};
export default SearchElement;
