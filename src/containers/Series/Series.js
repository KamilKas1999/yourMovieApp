import React from 'react';
import SecondNavBar from "../../components/secondNavbar/SecondNavBar";
const series = (props) => {
    const links = [
        { link: "/series/top250", text: "Top 250" },
        { link: "/series/mostPopular", text: 'Most popular' },

        
      ];
      return (
        <div>
          <SecondNavBar links={links} />
          series
        </div>
      );
}
export default series;