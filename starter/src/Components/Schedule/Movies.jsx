import React from 'react';
import PropTypes from 'prop-types';
import image1 from '.../../../public/images/TheHouse.jpg';
import image2 from '.../../../public/images/ThePredator.jpg';
import image3 from '.../../../public/images/KingOfThieves.jpg';

const Movies = (props) => {
    const images = {
        'film1Image.jpg':image1,
        'film2Image.jpg':image2,
        'film3Image.jpg':image3
    }

    const times = props.movies.map((movie)=>{
        
        return (
            <tr key={movie._id}>
                <td > 
                    {movie.title}
                </td>
                <td> 
                    {movie.showingTimes}
                </td> 
                <td> 
                <img 
                     src={images[movie.img]}
                     />
                </td> 
            </tr>
        )
    });
    return (
        <>
            <div className="row">
                <h3>What's on</h3>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Hours</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {times}
                </tbody>
                </table>
            </div>
        </>
    );
}

Movies.propsType = {
    "movies": PropTypes.array.isRequired
}

export default Movies;