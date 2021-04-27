import React from "react";
import { Route } from "react-router";
import SecondNavBar from "../../components/Navbar/secondNavbar/SecondNavBar";
import MostPopular from "../../components/MostPopular/MostPopular";
const series = (props) => {
  const links = [
    { link: "/series/mostPopular", text: "Most popular" },
  ];
  return (
    <div>
      <SecondNavBar links={links} />
      <Route path="/series/mostPopular" exact component={MostPopular} />
    </div>
  );
};
export default series;
