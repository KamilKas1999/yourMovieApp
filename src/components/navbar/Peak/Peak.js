import React, { useRef } from "react";
import classes from "./Peak.module.scss";
const Peak = (props) => {
  const input = useRef();
  const select = useRef();

  const onClick = () => {
    props.history.push(
      `/search?search=${input.current.value}&type=${select.current.value}`
    );
  };

  const navigate = () => {
    props.history.push("/");
  };

  return (
    <div className={classes.Peak}>
      <div onClick = {navigate}>YourMovieApp</div>

      <input ref={input} type="text" />
      <select ref={select}>
        <option>Movie</option>
        <option>Tv</option>
      </select>
      <button onClick={onClick}>Search</button>
    </div>
  );
};
export default Peak;
