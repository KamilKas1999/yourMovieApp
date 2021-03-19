import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "../../Context/context";
import classes from "./SearchResult.module.scss";
import SearchElement from "./SearchElement/SearchElement";
import Loading from "../../UI/LoadingSpinner/LoadingSpinner";
const SearchResult = (props) => {
  const query = new URLSearchParams(props.location.search);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const context = useContext(Context);
  const params = {};
  for (let param of query.entries()) {
    params[param[0]] = param[1];
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/${params.type.toLowerCase()}?api_key=${
          context.appKey
        }&query=${params.search}`
      )
      .then((data) => {
        console.log(data.data);
        setData(data.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.search, params.type]);
  let elementArray = null;
  if (data) {
    elementArray = data.map((el, id) => {
      const link = `/details/${params.type.toLowerCase()}/?id=${el.id}`;
      return <SearchElement key={id} info={el} {...props} link={link} />;
    });
  }

  return (
    <div className={classes.SearchResult}>
      {loading ? <Loading /> : null}
      {elementArray}
    </div>
  );
};
export default SearchResult;
