import React from 'react';
import './TeamCard.scss';

const TeamCard = ({ plan }) => {
    const { price, name, page, freeSupport } = plan;

    return (
        <div className="col-sm-12 col-md-4">
            <ul className="team-card description">
                <li className="price">${price}</li>
                <li>For {name}</li>
                <li className="line"></li>
                <li>Homepage</li>
                <li>{page !== 0 ? page : 'No'} Inner Page</li>
                <li>Asset File</li>
                <li>Source File</li>
                <li>Free Stock Photos</li>
                <li>{freeSupport} Days Free Support</li>
                <li>24/7 Support</li>
                <button id="main-btn">Order Now</button>
            </ul>
        </div>
    );
};

export default TeamCard;