import React from "react";
import { Route } from "react-router";
import MostPopular from "../../components/MostPopular/MostPopular";
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
//import MostPopularShort from '../../components/mostPopularShort/MostPopularShort'
//import Top250 from "../../components/top250/Top250";
import InTheater from "../../components/InTheaters/InTheaters";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
const movies = (props) => {
  const links = [
    // { link: "/movies/top250", text: "Top 250" },
    { link: "/movies/mostPopular", text: "Most popular" },
    { link: "/movies/inTheaters", text: "In theaters" },
    // { link: "/movies/comingSoon", text: "Coming soon" },
  ];
  return (
    <div>
      <SecondNavBar links={links} />
      {/* <Route path="/movies" exact component = {MostPopularShort}/> */}
      {/* <Route path="/movies/top250" exact component={Top250} /> */}
      <Route path="/movies/mostPopular" exact component={MostPopular} />
      <Route path="/movies/inTheaters" exact component={InTheater} />
      {/* <Route path="/movies/comingSoon" exact component={ComingSoon} /> */}
    </div>
  );
};
export default movies;
