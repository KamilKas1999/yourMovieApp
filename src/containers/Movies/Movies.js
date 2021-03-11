import React from "react";
import { Route } from "react-router";
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
import Top250 from "../../components/top250/Top250";
const movies = (props) => {
  const links = [
    { link: "/movies/top250", text: "Top 250" },
    { link: "/movies/mostPopular", text: "Most popular" },
    { link: "/movies/inTheaters", text: "In theaters" },
    { link: "/movies/commingSoon", text: "Comming soon" },
  ];
  return (
    <div>
      <SecondNavBar links={links} />
      <Route path="/movies/top250" component={Top250} />
    </div>
  );
};
export default movies;
