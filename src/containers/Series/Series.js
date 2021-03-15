import React from "react";
import { Route } from "react-router";
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
import Top250 from "../../components/top250/Top250";
//import MostPopularShort from "../../components/mostPopularShort/MostPopularShort";
import MostPopular from "../../components/MostPopular/MostPopular";
const series = (props) => {
  const links = [
    //{ link: "/series/top250", text: "Top 250" },
    { link: "/series/mostPopular", text: "Most popular" },
  ];
  return (
    <div>
      <SecondNavBar links={links} />
      {/* <Route path="/series" exact component={MostPopularShort} /> */}
      <Route path="/series/top250" exact component={Top250} />
      <Route path="/series/mostPopular" exact component={MostPopular} />
    </div>
  );
};
export default series;
