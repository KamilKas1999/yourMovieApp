import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Route } from "react-router-dom";
import Movies from "../containers/Movies/Movies";
import Series from "../containers/Series/Series";
const layout = (props) => (
  <React.Fragment>
    <Navbar />
    <Route path="/movies" component={Movies} />
    <Route path="/series" component={Series} />
  </React.Fragment>
);
export default layout;
