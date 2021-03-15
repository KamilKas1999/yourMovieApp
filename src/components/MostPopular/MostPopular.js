import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MostPopularElement from "./MostPopularElement/MostPopularElement";
import classes from "./MostPopular.module.scss";
import Loading from "../../UI/LoadingSpinner/LoadingSpinner";
import { Context } from "../../Context/context";
const MostPopular = (props) => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const key = context.appKey;
  const path = props.match.path;

  let mode = "tv";
  if (path === "/movies/mostPopular") {
    mode = "movie";
  }

  useEffect(() => {
    const sendRequest = (mode) => {
      setLoading(true);
      axios
        .get(`https://api.themoviedb.org/3/${mode}/popular?api_key=${key}`)
        .then((data) => {
          setData(data.data.results);
          setLoading(false);
        })
        .catch((err) => {
          alert(err.Message);
          setLoading(false);
        });
    };
    sendRequest(mode);
  }, [mode, key]);

  let elementArray = null;
  if (data) {
    elementArray = data.map((el, id) => {
      return <MostPopularElement key={id} info={el} />;
    });
  }

  return (
    <div className={classes.MostPopular}>
      {loading ? <Loading /> : elementArray}
    </div>
  );
};
export default MostPopular;
