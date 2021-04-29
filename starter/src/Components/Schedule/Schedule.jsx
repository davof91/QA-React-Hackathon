import React from 'react';
import PropTypes from 'prop-types';
import Locations from '.../../../public/images/Locations.jpg';
import CinemaTimes from './CinemaTimes'
import Movies from './Movies';
import { map } from 'jquery';
import generateTodoId from '../utils/generateId'

const Schedule = (props) => {
    let error = props.openingTimes.error? [props.openingTimes.error] : [];
    error = error.concat(props.openingTimes.error? [props.movies.error] : error.length>0 ? error: [] )

    return (
        <>
            <div className="container">
                <a>
                     <img 
                     src={Locations}
                     width="100%"/>
                </a>
            </div>

            {error.length>0 ? (
                    <>
                        <h2>Oops, something went wrong!</h2>
                        {error.map((e) => {let id = generateTodoId(); return <p key={id}>{e}</p>})}
                        
                    </>
                ) : (
                    <>
                        <div className="container">
                            <CinemaTimes openingTimes={props.openingTimes.times? props.openingTimes.times: []}/>
                        </div>
                        
                        <div className="container">
                            <Movies movies={props.movies.movies ? props.movies.movies : []}/>
                        </div>
                    </>
                )
            }   
        </>
    );
}

Schedule.propsType = {
    "movies": PropTypes.array.isRequired,
    "openingTimes": PropTypes.array.isRequired
}

export default Schedule;