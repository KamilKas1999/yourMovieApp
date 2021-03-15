import React from 'react';
import classes from './Top250element.module.scss'
const top250element = (props) => {
    const {title,image, rank,year, imDbRating, imDbRatingCount} = props.element;
    return (<div className={classes.Top250element}>
        <div><img src={image} alt = 'poster'/></div>
        <div className = {classes.Info}>
            <h2>{rank}. {title}</h2>
            <h3>{year}</h3>
            <p>ImDb Rating: {imDbRating}/10</p>
            <p>Rating Counts: {imDbRatingCount}</p>
            </div>

        </div>)
}
export default top250element;