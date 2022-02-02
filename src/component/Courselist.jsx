import React from 'react';
import './Course.css';

function Courselist(props) {
    return (
            <div className='course'>
            <h1>{props.name}</h1>
            <p>Trainer : {props.trainer}</p>
            <p>Start Date: {props.startDate}</p>
            <p>Description: {props.desc}</p>
            <button>Enroll now</button>
            </div>
        
    );
}

export default Courselist;