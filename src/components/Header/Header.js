import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#banner">
                    <img className="logo" src="https://i.imgur.com/889jCtq.png" alt=""/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link active" href="#banner">Home</a>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#services">Services</a>
                        <a className="nav-link" href="#team">Pricing</a>
                        <a className="nav-link" href="#team">Our Team</a>
                        <a id="main-btn" className="nav-link" href="#contact">Contact Us</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;