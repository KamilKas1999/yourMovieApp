import React from 'react';
import { Route } from 'react-router';
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
import Top250 from '../../components/top250/Top250';
const series = (props) => {
    const links = [
        { link: "/series/top250", text: "Top 250" },
        { link: "/series/mostPopular", text: 'Most popular' },

        
      ];
      return (
        <div>
          <SecondNavBar links={links} />
          <Route path="/series/top250" component = {Top250}/>
        </div>
      );
}
export default series;