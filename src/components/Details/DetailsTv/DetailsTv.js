import axios from "axios";
import { Context } from "../../../Context/context";
import React, { useContext, useEffect, useState } from "react";
import TvElement from "./TvElement/TvElement";
const DetailsTv = (props) => {
  const context = useContext(Context);
  const [data, setData] = useState(null);
console.log(props.match.params.seriesId)
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${props.match.params.seriesId}?api_key=${context.appKey}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);


  return (
    <React.Fragment>
      {data ? <TvElement info={data} /> : null}
    </React.Fragment>
  );
};
export default DetailsTv;
