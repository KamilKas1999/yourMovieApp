import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../../Context/context";
import axios from "axios";
import MovieElement from "./MovieElement/MovieElement";
const DetailsMovie = (props) => {
  const context = useContext(Context);
  const query = new URLSearchParams(props.location.search);
  const [data, setData] = useState(null);
  const params = {};
  for (let param of query.entries()) {
    params[param[0]] = param[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${context.appKey}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);


  return <React.Fragment>{data ? <MovieElement info={data} /> : null}</React.Fragment>
};
export default DetailsMovie;
