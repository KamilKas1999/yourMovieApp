import axios from "axios";
import { Context } from "../../../Context/context";
import React, { useContext, useEffect, useState } from "react";
import TvElement from "./TvElement/TvElement";
const DetailsTv = (props) => {
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
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=${context.appKey}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data);
      });
  }, []);

  let link = null;



  return (
    <React.Fragment>
      {data ? <TvElement info={data} /> : null}
    </React.Fragment>
  );
};
export default DetailsTv;
