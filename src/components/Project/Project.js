import React from 'react';
import './Project.scss';

const Project = () => {
    return (
        <div id="services" className="container">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-6 pl-5">
                    <h1 className="heading pb-3">Stay Running & Project</h1>
                    <p className="description pb-3">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <button id="main-btn">Contact Us</button>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img className="img-fluid" src="https://i.imgur.com/pkv615c.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Project;