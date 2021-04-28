import React from 'react';
import PropTypes from 'prop-types';

const days = ['Monday','Tuesday','Wednesday','Thursday', 'Friday','Saturday', 'Sunday']

const CinemaTimes = (props) => {
    console.log(props.openingTimes)

    const times = props.openingTimes.map((day)=>{
        
        return (
            <tr key={day._id}>
                <td > 
                    {day.day == "Monday"? day.day+" - Thursday" : day.day == "Friday" ? day.day+" - Saturday" : day.day}
                </td>
                <td> 
                    {day.opening} - {day.close} 
                </td> 
            </tr>
        )
    });
    return (
        <>
            <div className="row">
                <h3>Opening Hours</h3>
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Hours</th>
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

CinemaTimes.propsType = {
    "openingTimes": PropTypes.array.isRequired
}

export default CinemaTimes;