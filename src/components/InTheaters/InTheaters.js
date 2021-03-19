import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../Context/context";
import InTheatersElement from "./InTheatersElement/InTheaterElement";
import classes from "./InTheaters.module.scss";

const InTheater = (props) => {
  const context = useContext(Context);
  const [data, setData] = useState(null);
  const key = context.appKey;
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`)
      .then((data) => {
        setData(data.data.results);
      });
  }, [key]);

  let array = null;
  if (data) {
    array = data.map((el, id) => {
      const link = "/details/movie/" + "?id=" + el.id;
      return <InTheatersElement key={id} info={el} {...props} link = {link} />;
    });
  }

  return <div className={classes.InTheaters}>{array}</div>;
};
export default InTheater;
