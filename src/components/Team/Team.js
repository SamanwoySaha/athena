import React from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './Team.scss';

const Team = () => {
    const pricingList = [
        {
            id: 1,
            price: '199',
            name: 'Basic',
            page: 0,
            freeSupport: 10,
        },
        {
            id: 2,
            price: '399',
            name: 'Preferred',
            page: 4,
            freeSupport: 20,
        },
        {
            id: 3,
            price: '599',
            name: 'Elite',
            page: 8,
            freeSupport: 30,
        },
    ];

    return (
        <div id="team">
            <div className="container">

                <h1 className="heading mb-5">Choose your dedicated team</h1>
                <div className="row">
                    {
                        pricingList.map(item => <TeamCard key={item.id} plan={item}></TeamCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Team;