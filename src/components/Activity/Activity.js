import React from 'react';
import './Activity.scss';

const Activity = ({activity}) => {
    const {name, pic} = activity;
    return (
        <div className="col-sm-12 col-md-3">
            <div className="activity text-center">
                <img className="img-fluid mb-4" src= {pic} alt=""/>
                 <h2 className = "sub-heading mb-4">{name}</h2>
                 <p className="description">
                     Lorem ipsum dolor sit amet, consectetur adipisicing
                 </p>
            </div>
           
        </div>
    );
};

export default Activity;