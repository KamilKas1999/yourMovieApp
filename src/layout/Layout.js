import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Route } from "react-router-dom";
import Movies from "../containers/Movies/Movies";
import Series from "../containers/Series/Series";
//import MostPopularShort from "../components/mostPopularShort/MostPopularShort";
import SearchResult from "../components/SearchResult/SearchResult";
import Details from "../containers/Details/Details";
const layout = (props) => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {/* <Route path="/" exact component={MostPopularShort} /> */}
      <Route path="/" component={Navbar} />
      <Route path="/search" component={SearchResult} />
      <Route path="/movies" component={Movies} />
      <Route path="/series" component={Series} />
      <Route path = "/details" component={Details}/>
    </React.Fragment>
  );
};
export default layout;
