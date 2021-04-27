import React from 'react';
import { Route } from 'react-router';
import DetailsMovie from '../../components/Details/DetailsMovie/DetailsMovie';
import DetailsTv from '../../components/Details/DetailsTv/DetailsTv';
import SeasonDetails from '../../components/SeasonDetails/SeasonDetails';
const Details = (props) => {
    return <div>
        <Route path = "/details/movie/:movieId" component={DetailsMovie}/>
        <Route path = "/details/tv/:seriesId" exact component={DetailsTv}/>
        <Route path = "/details/tv/seasons/:seriesId/:seasonNumber" exact component={SeasonDetails}/>
    </div>
}
export default Details;