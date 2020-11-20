import React from 'react';
import './Activities.scss';
import Activity from '../Activity/Activity';

const Activities = () => {
    const activities = [
        {
            name: 'Experiance Design',
            pic: "https://i.imgur.com/TVxC8Ul.png"
        },
        {
            name: 'Experiance Design',
            pic: "https://i.imgur.com/hFSyezc.png"
        },
        {
            name: 'Experiance Design',
            pic: "https://i.imgur.com/TetmjnS.png"
        },
        {
            name: 'Experiance Design',
            pic: "https://i.imgur.com/OO92eih.png"
        }
    ];
    return (
        <div className="container">
            <h1 className= "heading">What we do</h1>
            <p className= "description">Our main procuss is to make the user Experiance very <br/> simple and easy .simplicity is our strength</p>
                <div className="row">
                    {activities.map (activity =><Activity key={activity} activity={activity}></Activity>)}
                </div>
                    
        </div>
    );
};

export default Activities;