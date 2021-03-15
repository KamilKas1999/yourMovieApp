import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MostPopularShortElement from "./MostPopularShortElement/MostPopularShortElement";
import classes from "./MostPopularShort.module.scss";
import {Context} from '../../Context/context'
const MostPopularShort = (props) => {
  const context = useContext(Context);
  const key = context.appKey;
  const { path } = props.match;
  const [moviesData, setMoviesData] = useState(null);
  const [seriesData, setSeriesData] = useState(null);
  let mode = "all";

  if (path === "/movies") {
    mode = "Movies";
  } else if (path === "/series") {
    mode = "TVs";
  }
  const sendRequest = (mode) => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopular${mode}/${key}`)
      .then((data) => {
        const shortData = data.data.items.splice(0, 10);
        if (mode === "Movies") {
         setMoviesData(shortData)
        } else if (mode === "TVs") {
          setSeriesData(shortData);
         
        if (data.data.errorMessage) {
          alert(data.data.errorMessage);
          return;
        }
      })

      .catch((err) => {
        alert(err.Message);
        console.log('error')
      });
  };

  // useEffect(() => {
  //   if (mode === "Movies") {
  //     sendRequest(mode);
  //   } else if (mode === "TVs") {
  //     sendRequest(mode);
  //   } else if (mode === "all") {
  //     sendRequest("Movies");
  //     sendRequest("TVs");
  //   }
  // }, [mode,sendRequest]);

  let movies = null;
  let series = null;

  if (moviesData) {
    movies = moviesData.map((movie, id) => {
      return <MostPopularShortElement key={id} data={movie} />;
    });
  }
  if (seriesData) {
    series = seriesData.map((serie, id) => {
      return <MostPopularShortElement key={id} data={serie} />;
    });
  }

  console.log(moviesData);
  //console.log(series);
  return (
    <React.Fragment>
      {movies ? (
        <div className={classes.MostPopularShort}>
          <h1>Most popular movies now</h1>
          <div className={classes.Array}>{movies}</div>
        </div>
      ) : null}
      {series ? (
        <div className={classes.MostPopularShort}>
          <h1>Most popular series now</h1>
          <div className={classes.Array}>{series}</div>
        </div>
      ) : null}
    </React.Fragment>
  );
};
export default MostPopularShort;
