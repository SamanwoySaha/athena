import React from 'react';
import './Banner.scss';

const Banner = () => {
    return (
        <div id="banner">
            <img className="img-fluid top-left d-sm-none d-md-block" src="https://i.imgur.com/7eV3zlp.png" alt="" />
            <img className="img-fluid top-right d-sm-none d-md-block" src="https://i.imgur.com/gRZy8kO.png" alt="" />
            <div className="container">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-sm-12 col-md-6 mb-5 pb-5">
                        <h1 className="main-heading pb-4">Florence agency</h1>
                        <p className="description pb-4 pr-5 mr-3">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button id="main-btn">See Pricing</button>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid" src="https://i.imgur.com/XFXZ46j.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;