import React from 'react';
import PropTypes from 'prop-types';
import Locations from '.../../../public/images/Locations.jpg';
import CinemaTimes from './CinemaTimes'
import Movies from './Movies';

const Schedule = (props) => {
    
    return (
        <>
            <div className="container">
                <a>
                     <img 
                     src={Locations}
                     width="100%"/>
                </a>
            </div>

            <div className="container">
                <CinemaTimes openingTimes={props.openingTimes}/>
            </div>
            
            <div className="container">
                <Movies movies={props.movies}/>
            </div>
        </>
    );
}

Schedule.propsType = {
    "movies": PropTypes.array.isRequired,
    "openingTimes": PropTypes.array.isRequired
}

export default Schedule;