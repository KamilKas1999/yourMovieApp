import React from "react";
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
const movies = (props) => {
  const links = [
    { link: "/movies/top250", text: "Top 250" },
    { link: "/movies/mostPopular", text: 'Most popular' },
    {link : '/movies/inTheaters', text : 'In theaters'},
    {link : '/movies/commingSoon', text : 'Comming soon'}
    
  ];
  return (
    <div>
      <SecondNavBar links={links} />
      movies
    </div>
  );
};
export default movies;
