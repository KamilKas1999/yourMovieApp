import { Context } from "../../Context/context";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import classes from "./SeasonDetails.module.scss";
import Episodes from "./Episodes/Episodes"
const SeasonDetails = (props) => {
  const seriesId = props.match.params.seriesId;
  const seasonNumber = props.match.params.seasonNumber;
  const context = useContext(Context);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${seriesId}/season/${seasonNumber}?api_key=${context.appKey}`
      )
      .then((data) => {

        setData(data.data);
      });
  }, []);

  console.log(data);
  return (
    <div className = {classes.SeasonDetails}>
      {data ? <Episodes episodes = {data.episodes}/> : null}
    </div>
  );
};
export default SeasonDetails;
