import React from 'react';
import { Route } from 'react-router';
import DetailsMovie from '../../components/Details/DetailsMovie/DetailsMovie';
import DetailsTv from '../../components/Details/DetailsTv/DetailsTv';
const Details = (props) => {
    return <div>
        <Route path = "/details/movie" component={DetailsMovie}/>
        <Route path = "/details/tv" component={DetailsTv}/>
    </div>
}
export default Details;