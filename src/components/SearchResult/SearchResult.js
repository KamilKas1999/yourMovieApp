import React from "react";
const SearchResult = (props) => {
  const query = new URLSearchParams(props.location.search);
  const params = {};
  for (let param of query.entries()) {
    params[param[0]] = param[1];
  }
  return <div>Search</div>;
};
export default SearchResult;
