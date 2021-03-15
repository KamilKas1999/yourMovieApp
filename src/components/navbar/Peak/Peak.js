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

  return (
    <div className={classes.Peak}>
      <div>YourMovieApp</div>

      <input ref={input} type="text" />
      <select ref={select}>
        <option>Movie</option>
        <option>Series</option>
      </select>
      <button onClick={onClick}>Search</button>
    </div>
  );
};
export default Peak;
