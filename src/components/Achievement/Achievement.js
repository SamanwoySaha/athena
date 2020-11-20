import React from 'react';
import AchievementCard from '../AchievementCard/AchievementCard';
import smily from '../../images/happy@2x.png'
import trophy from '../../images/marketing@2x.png'
import star from '../../images/surface1@2x.png'
import rocket from '../../images/transportation@2x.png'
import './Achievement.scss';

const Achievement = () => {
    return (
        <div className="achievements">
            <div className="container d-flex align-items-center inside_achievments">
                <div className="col-lg-5 col-md-5 col-sm-12 achievements-left">
                    <h2>Our Achievements</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter</p>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 d-flex flex-wrap achievements-right">
                    <div className="achievement ach-1 achievement-active">
                        <div className="achievement-left">
                            <img src={smily} alt="" />
                        </div>
                        <div className="achievement-right">
                            <h3>700+</h3>
                            <h5>Happy Clients</h5>
                        </div>
                    </div>
                    <div className="achievement ach-2">
                        <div className="achievement-left">
                            <img src={trophy} alt="" />
                        </div>
                        <div className="achievement-right">
                            <h3>140+</h3>
                            <h5>Projects Completed</h5>
                        </div>
                    </div>
                    <div className="achievement ach-2">
                        <div className="achievement-left">
                            <img src={star} alt="" />
                        </div>
                        <div className="achievement-right">
                            <h3>25+</h3>
                            <h5>Crazy Minds</h5>
                        </div>
                    </div>
                    <div className="achievement ach-1">
                        <div className="achievement-left">
                            <img src={rocket} alt="" />
                        </div>
                        <div className="achievement-right">
                            <h3>75+</h3>
                            <h5>Running Projects</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;