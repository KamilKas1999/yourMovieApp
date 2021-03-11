import React, { useEffect, useState } from "react";
import axios from "axios";
import Top250element from "./top250element/Top250elements";
import classes from "./Top250.module.scss";
import Loading from '../../UI/LoadingSpinner/LoadingSpinner'
const Top250 = (props) => {
  const language = "fr";
  const [topArray, setTopArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const key = "k_srh4bhof";
  const isMovie = props.match.path.includes("movies");
  let mode = "Top250TVs";
  if (isMovie) {
    mode = "Top250Movies";
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://imdb-api.com/${language}/API/${mode}/${key}`)
      .then((data) => {
        console.log(data.data.items);
        setLoading(false);
        setTopArray(data.data.items);
      });
  }, []);

  const top250Array = topArray.map((element, id) => {
    return <Top250element key={id} element={element} />;
  });

  let content = top250Array;
  if(loading){
    content = <Loading/>
  }


  return <div className={classes.Top250}>{content}</div>;
};
export default Top250;
