import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Top250element from "./top250element/Top250elements";
import classes from "./Top250.module.scss";
import Loading from "../../UI/LoadingSpinner/LoadingSpinner";
import { Context } from "../../Context/context";
const Top250 = (props) => {
  const context = useContext(Context);
  const key = context.appKey;
  const language = "fr";
  const [topArray, setTopArray] = useState([]);
  const [loading, setLoading] = useState(false);

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
        setLoading(false);
        setTopArray(data.data.items);
        if (data.data.errorMessage) {
          alert(data.data.errorMessage);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err.message);
      });
  }, [mode,key]);

  const top250Array = topArray.map((element, id) => {
    return <Top250element key={id} element={element} />;
  });

  let content = top250Array;
  if (loading) {
    content = <Loading />;
  } else {
  }

  return <div className={classes.Top250}>{content}</div>;
};
export default Top250;
